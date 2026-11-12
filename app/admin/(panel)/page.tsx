import Link from "next/link";
import { adminPages } from "@/lib/admin/schema";
import { hasDatabase, listLeads } from "@/lib/db";
import { readStoredContent } from "@/lib/getContent";
import { hasBlob } from "@/lib/media";
import { requireAdmin } from "@/lib/session";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await requireAdmin();
  const [c, leads] = await Promise.all([readStoredContent(), listLeads().catch(() => [])]);
  const newLeads = leads.filter((l) => l.status === "new").length;
  const week = leads.filter((l) => Date.now() - new Date(l.created_at).getTime() < 7 * 864e5).length;
  const serviceFaqs = c.services.reduce((n, s) => n + s.faqs.length, 0);
  const checks = [
    { ok: hasDatabase(), t: "Database connected (content and leads are saved)" },
    { ok: hasBlob(), t: "Image storage connected (uploads)" },
    { ok: !/000 George Street/.test(c.business.address.streetAddress), t: "Real street address added (Business info)" },
    { ok: !!c.tracking.ga4Id || !!c.tracking.gtmId, t: "Google Analytics / Tag Manager added (SEO & tracking)" },
    { ok: !!c.seo.googleVerification, t: "Google Search Console verified (SEO & tracking)" },
    { ok: !!c.notifications.leadEmail && !!process.env.RESEND_API_KEY, t: "Email alerts for new leads" },
  ];
  return (
    <>
      <header className="a-head">
        <h1>Dashboard</h1>
        <p>Edit any text, service, FAQ, image or SEO setting. Changes go live on the website as soon as you save.</p>
      </header>
      <div className="a-stats">
        <Link href="/admin/leads/" className="a-stat hl"><b>{newLeads}</b><span>New leads</span></Link>
        <Link href="/admin/leads/" className="a-stat"><b>{week}</b><span>Leads this week</span></Link>
        <Link href="/admin/leads/" className="a-stat"><b>{leads.length}</b><span>Total leads</span></Link>
        <Link href="/admin/services/" className="a-stat"><b>{c.services.length}</b><span>Services</span></Link>
        <Link href="/admin/faqs/" className="a-stat"><b>{c.generalFaqs.length + serviceFaqs}</b><span>FAQs</span></Link>
      </div>

      <div className="a-grid2">
        <section className="a-card">
          <h2>Latest leads</h2>
          {leads.length === 0 ? (
            <p className="a-muted">No leads yet. Form submissions from the website appear here.</p>
          ) : (
            <ul className="a-mini-leads">
              {leads.slice(0, 6).map((l) => (
                <li key={l.id}>
                  <span className={`a-pill s-${l.status}`}>{l.status}</span>
                  <b>{l.name}</b> <span className="a-muted">{l.service || l.email}</span>
                  <time className="a-muted">{new Date(l.created_at).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}</time>
                </li>
              ))}
            </ul>
          )}
          <Link href="/admin/leads/" className="a-btn a-btn-small">All leads →</Link>
        </section>
        <section className="a-card">
          <h2>Launch checklist</h2>
          <ul className="a-checklist">
            {checks.map((x) => <li key={x.t} className={x.ok ? "ok" : ""}><span>{x.ok ? "✓" : "○"}</span>{x.t}</li>)}
          </ul>
        </section>
      </div>

      <section className="a-card">
        <h2>Edit the website</h2>
        <div className="a-tiles">
          {adminPages.map((p) => (
            <Link key={p.slug} href={`/admin/${p.slug}/`} className="a-tile">
              <span className="a-tile-ico" aria-hidden="true">{p.icon}</span>
              <b>{p.title}</b>
              <small>{p.desc}</small>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
