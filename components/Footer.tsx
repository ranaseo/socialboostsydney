import Link from "next/link";
import { services, site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <img src="/brand/logo-horizontal-white.svg" alt={site.name} width={190} height={67} />
          <p className="f-muted">Grow your Sydney business with social media, paid ads and SEO that bring real enquiries.</p>
          <div className="f-social">
            {site.sameAs.map((u) => {
              const n = new URL(u).hostname.replace("www.", "").split(".")[0];
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
            {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="fh">Contact</h2>
          {/* NAP block: keep identical to Google Business Profile */}
          <address>
            <strong>{site.name}</strong><br />
            {site.address.streetAddress}<br />
            {site.address.addressLocality} {site.address.addressRegion} {site.address.postalCode}<br />
            WhatsApp: <a href={waLink()} target="_blank" rel="noopener">{site.phoneDisplay}</a><br />
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
