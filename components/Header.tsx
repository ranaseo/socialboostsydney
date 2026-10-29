import Link from "next/link";
import { services, site, waLink } from "@/lib/site";
import { WhatsApp } from "./Icons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services", children: services.map((s) => ({ href: `/services/${s.slug}/`, label: s.name })) },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];


export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span className="hide-sm">✉ <a href={`mailto:${site.email}`}>{site.email}</a></span>
          <span><a href={waLink()} target="_blank" rel="noopener" className="top-wa"><WhatsApp size={14} /> {site.phoneDisplay}</a></span>
          <span className="hide-md">Mon – Fri 9:00 AM – 5:30 PM</span>
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
          <a href={waLink()} target="_blank" rel="noopener" className="head-phone hide-md">
            <span className="ph-ico"><WhatsApp size={22} /></span>
            <span><small>Call / WhatsApp</small>{site.phoneDisplay}</span>
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
              <li className="mnav-cta">
                <Link href="/contact/" className="btn btn-yellow">Free Audit</Link>
                <a href={waLink()} target="_blank" rel="noopener" className="btn btn-wa"><WhatsApp size={18} /> WhatsApp</a>
              </li>
            </ul>
          </details>
        </div>
      </header>
    </>
  );
}
