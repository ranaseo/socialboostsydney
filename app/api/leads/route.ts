import { NextResponse } from "next/server";
import { addLead } from "@/lib/db";
import { readStoredContent } from "@/lib/getContent";
import { sendLeadAlert } from "@/lib/notify";

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

  // Email alert. A failed email never fails the submission: the lead is already saved.
  const alert = await sendLeadAlert(lead, await readStoredContent());
  if (alert.error) console.error("[leads] email alert failed:", alert.error);
  else if (alert.skipped) console.warn("[leads] email alert skipped:", alert.skipped);
  return NextResponse.json({ ok: true });
}
