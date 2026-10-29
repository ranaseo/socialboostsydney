import Link from "next/link";
import { services, site } from "@/lib/site";
import { Phone } from "./Icons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services", children: services.map((s) => ({ href: `/services/${s.slug}/`, label: s.name })) },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

const tel = `tel:${site.phone.replace(/\s/g, "")}`;

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>✉ <a href={`mailto:${site.email}`}>{site.email}</a></span>
          <span className="hide-sm">Mon – Fri 9:00 AM – 5:30 PM</span>
          <span className="hide-sm">📍 Sydney NSW, Australia</span>
          <span className="top-social">
            {site.sameAs.map((u) => {
              const n = new URL(u).hostname.replace("www.", "").split(".")[0];
              return <a key={u} href={u} rel="noopener" aria-label={n}>{n.slice(0, 2).toUpperCase()}</a>;
            })}
          </span>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-in">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <img src="/brand/logo-horizontal-primary.svg" alt={site.name} width={170} height={60} />
          </Link>
          <nav aria-label="Main" className="nav-wrap">
            <ul className="nav">
              {nav.map((n) => (
                <li key={n.href} className={n.children ? "has-sub" : undefined}>
                  <Link href={n.href}>{n.label}{n.children && <span className="caret">▾</span>}</Link>
                  {n.children && (
                    <ul className="sub-menu">
                      {n.children.map((c) => <li key={c.href}><Link href={c.href}>{c.label}</Link></li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <a href={tel} className="head-phone hide-md">
            <span className="ph-ico"><Phone /></span>
            <span><small>Call us</small>{site.phoneDisplay}</span>
          </a>
          <Link href="/contact/" className="btn btn-yellow header-cta">Free Audit</Link>
          <details className="mnav">
            <summary aria-label="Menu">☰</summary>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                  {n.children && (
                    <ul>{n.children.map((c) => <li key={c.href}><Link href={c.href}>{c.label}</Link></li>)}</ul>
                  )}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </header>
    </>
  );
}
