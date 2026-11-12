import Link from "next/link";
import { waLink, type SiteContent } from "@/lib/content";
import { hostLabel } from "./Header";

export default function Footer({ c }: { c: SiteContent }) {
  const site = c.business;
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <img src={c.brand.logoWhite} alt={site.name} width={190} height={67} />
          <p className="f-muted">{c.footer.blurb}</p>
          <div className="f-social">
            {site.sameAs.map((u) => {
              const n = hostLabel(u);
              return <a key={u} href={u} rel="noopener" aria-label={n}>{n.slice(0, 2).toUpperCase()}</a>;
            })}
          </div>
        </div>
        <div>
          <h2 className="fh">Company</h2>
          <ul>
            <li><Link href="/about/">About Us</Link></li>
            <li><Link href="/services/">Services</Link></li>
            <li><Link href="/faq/">FAQ</Link></li>
            <li><Link href="/contact/">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="fh">Services</h2>
          <ul>
            {c.services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="fh">Contact</h2>
          {/* NAP block: keep identical to Google Business Profile */}
          <address>
            <strong>{site.name}</strong><br />
            {site.address.streetAddress}<br />
            {site.address.addressLocality} {site.address.addressRegion} {site.address.postalCode}<br />
            WhatsApp: <a href={waLink(site.whatsapp)} target="_blank" rel="noopener">{site.phoneDisplay}</a><br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span><Link href="/llms.txt">llms.txt</Link> · <Link href="/sitemap.xml">Sitemap</Link></span>
      </div>
    </footer>
  );
}
