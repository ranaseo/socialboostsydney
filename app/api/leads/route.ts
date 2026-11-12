import { NextResponse } from "next/server";
import { addLead } from "@/lib/db";
import { readStoredContent } from "@/lib/getContent";

export const dynamic = "force-dynamic";

// Simple per-instance rate limit: 5 submissions per IP per 10 minutes.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > 5;
}

const str = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  // Honeypot filled in: pretend success, store nothing.
  if (str(body.company, 200)) return NextResponse.json({ ok: true });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "local";
  if (limited(ip)) return NextResponse.json({ error: "Too many messages. Please try again later or message us on WhatsApp." }, { status: 429 });

  const lead = {
    name: str(body.name, 120),
    email: str(body.email, 200),
    phone: str(body.phone, 40),
    service: str(body.service, 120),
    website: str(body.website, 300),
    message: str(body.message, 4000),
    source: str(body.source, 200),
  };
  if (!lead.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "Please enter your name and a valid email." }, { status: 400 });
  }

  try {
    await addLead(lead);
  } catch (e) {
    console.error("[leads] could not save", e);
    return NextResponse.json({ error: "Sorry, we could not send your message. Please message us on WhatsApp." }, { status: 500 });
  }

  await notify(lead).catch((e) => console.error("[leads] email alert failed", e));
  return NextResponse.json({ ok: true });
}

// Optional email alert through Resend (https://resend.com). Needs RESEND_API_KEY
// and a lead email set in Admin → SEO & tracking → Lead alerts.
async function notify(lead: Record<string, string>) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  const c = await readStoredContent();
  const to = c.notifications.leadEmail;
  if (!to) return;
  const esc = (s: string) => s.replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch]!);
  const rows = Object.entries(lead)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0">${esc(v)}</td></tr>`)
    .join("");
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || "Website <onboarding@resend.dev>",
      to: [to],
      reply_to: lead.email,
      subject: `New lead: ${lead.name}${lead.service ? ` (${lead.service})` : ""}`,
      html: `<h2>New website lead</h2><table>${rows}</table><p><a href="${c.business.url}/admin/leads/">Open in admin</a></p>`,
    }),
  });
}
