import Link from "next/link";
import { services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <img src="/brand/logo-horizontal-white.svg" alt={site.name} width={180} height={64} />
          <p className="muted">{site.tagline}. Helping Sydney businesses grow on Instagram, Facebook, TikTok and Google.</p>
        </div>
        <div>
          <h2 className="fh">Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="fh">Contact</h2>
          {/* NAP block: keep identical to Google Business Profile */}
          <address>
            <strong>{site.name}</strong>
            <br />
            {site.address.streetAddress}
            <br />
            {site.address.addressLocality} {site.address.addressRegion} {site.address.postalCode}
            <br />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phoneDisplay}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>
          <Link href="/llms.txt">llms.txt</Link> · <Link href="/sitemap.xml">Sitemap</Link>
        </span>
      </div>
    </footer>
  );
}
