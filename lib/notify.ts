// Email alert for every new lead, sent through Resend (https://resend.com).
// Setup (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY  required, from resend.com → API Keys
//   NOTIFY_EMAIL    where alerts go (can be overridden in Admin → SEO & tracking → Lead alerts)
//   LEAD_FROM_EMAIL optional sender, e.g. "Social Boost Sydney <leads@socialboostsydney.com.au>"
//                   (needs a verified domain in Resend). Without it Resend's test sender is used,
//                   which can only deliver to the email address the Resend account was created with.
import "server-only";
import type { NewLead } from "./db";
import type { SiteContent } from "./content";

export type NotifyResult = { ok: boolean; skipped?: string; error?: string };

/** Admin setting wins, then the NOTIFY_EMAIL env var. */
export function leadAlertRecipient(c: SiteContent): string {
  return (c.notifications.leadEmail || process.env.NOTIFY_EMAIL || "").trim();
}

export function leadAlertsReady(c: SiteContent) {
  return !!process.env.RESEND_API_KEY && !!leadAlertRecipient(c);
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);

const labels: [keyof NewLead, string][] = [
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["service", "Service"],
  ["website", "Website / Instagram"],
  ["message", "Message"],
  ["source", "Form"],
];

function digits(phone: string) {
  let d = phone.replace(/[^\d+]/g, "");
  if (d.startsWith("+")) return d.slice(1);
  if (d.startsWith("0")) d = "61" + d.slice(1); // Australian local number
  return d;
}

function buildEmail(lead: NewLead, c: SiteContent, test: boolean) {
  const when = new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney", dateStyle: "medium", timeStyle: "short" });
  const site = c.business.url.replace(/\/$/, "");
  const rows = labels
    .filter(([k]) => lead[k])
    .map(([k, label]) => {
      const v = esc(lead[k]);
      const shown = k === "message" ? v.replace(/\n/g, "<br>") : k === "email" ? `<a href="mailto:${v}">${v}</a>` : k === "phone" ? `<a href="tel:${esc(lead.phone.replace(/\s/g, ""))}">${v}</a>` : v;
      return `<tr><td style="padding:8px 16px 8px 0;color:#666;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:8px 0;color:#111">${shown}</td></tr>`;
    })
    .join("");
  const btn = (href: string, text: string, bg: string, fg = "#111") =>
    `<a href="${esc(href)}" style="display:inline-block;margin:0 8px 8px 0;padding:10px 16px;background:${bg};color:${fg};border-radius:6px;text-decoration:none;font-weight:600">${text}</a>`;
  const buttons = [
    btn(`mailto:${lead.email}?subject=${encodeURIComponent(`Re: your enquiry with ${c.business.name}`)}`, "Reply by email", "#FFD200"),
    lead.phone ? btn(`https://wa.me/${digits(lead.phone)}`, "WhatsApp", "#25D366", "#fff") : "",
    lead.phone ? btn(`tel:${lead.phone.replace(/\s/g, "")}`, "Call", "#eee") : "",
    btn(`${site}/admin/leads/`, "Open in admin", "#111", "#fff"),
  ].join("");
  const title = test ? "Test lead alert" : "New website lead";
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#111">
<h2 style="margin:0 0 4px">${title}</h2>
<p style="margin:0 0 16px;color:#666">${esc(when)} (Sydney time)</p>
${test ? `<p style="padding:12px;background:#FFF8D6;border-radius:6px">This is a test from your admin panel. Email alerts are working.</p>` : ""}
<table style="border-collapse:collapse;width:100%;margin-bottom:16px">${rows}</table>
<div>${buttons}</div>
<p style="margin-top:24px;color:#999;font-size:12px">Sent by ${esc(site)}. Reply to this email to answer ${esc(lead.name)} directly.</p>
</div>`;
  const text = `${title}\n${when} (Sydney time)\n\n${labels
    .filter(([k]) => lead[k])
    .map(([k, label]) => `${label}: ${lead[k]}`)
    .join("\n")}\n\nOpen in admin: ${site}/admin/leads/`;
  const subject = `${test ? "[Test] " : ""}New lead: ${lead.name}${lead.service ? ` (${lead.service})` : ""}`;
  return { html, text, subject };
}

/** Sends the alert. Never throws; returns what happened so callers can log or show it. */
export async function sendLeadAlert(lead: NewLead, c: SiteContent, opts: { test?: boolean } = {}): Promise<NotifyResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, skipped: "RESEND_API_KEY is not set in Vercel." };
  const to = leadAlertRecipient(c);
  if (!to) return { ok: false, skipped: "No email address to send to. Add one in Lead alerts or set NOTIFY_EMAIL in Vercel." };
  const { html, text, subject } = buildEmail(lead, c, !!opts.test);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_FROM_EMAIL || `${c.business.name} Website <onboarding@resend.dev>`,
        to: to.split(/[,;\s]+/).filter(Boolean),
        reply_to: lead.email,
        subject,
        html,
        text,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => ({}))) as { message?: string };
      return { ok: false, error: `Resend said: ${body.message || res.statusText} (${res.status})` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}
