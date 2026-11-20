import Link from "next/link";
import { waLink, type SiteContent } from "@/lib/content";
import { industryGroups, industryPath } from "@/lib/industries";
import { WhatsApp } from "./Icons";

export default function Header({ c }: { c: SiteContent }) {
  const site = c.business;
  const wa = waLink(site.whatsapp);
  type Item = { href: string; label: string };
  const nav: (Item & { children?: Item[]; groups?: { title: string; items: Item[] }[] })[] = [
    { href: "/", label: "Home" },
    { href: "/about/", label: "About Us" },
    { href: "/services/", label: "Services", children: c.services.map((s) => ({ href: `/services/${s.slug}/`, label: s.name })) },
    {
      href: "/industries/",
      label: "Industries",
      groups: industryGroups.map((g) => ({ title: g.group, items: g.items.map((i) => ({ href: industryPath(i), label: i.name })) })),
    },
    { href: "/case-studies/", label: "Case Studies" },
    { href: "/faq/", label: "FAQ" },
    { href: "/contact/", label: "Contact" },
  ];
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span className="hide-sm">✉ <a href={`mailto:${site.email}`}>{site.email}</a></span>
          <span><a href={wa} target="_blank" rel="noopener" className="top-wa"><WhatsApp size={14} /> {site.phoneDisplay}</a></span>
          <span className="hide-md">{site.hoursShort}</span>
          <span className="hide-sm">📍 {site.locationShort}</span>
          <span className="top-social">
            {site.sameAs.map((u) => {
              const n = hostLabel(u).replace("www.", "").split(".")[0];
              return <a key={u} href={u} rel="noopener" aria-label={n}>{n.slice(0, 2).toUpperCase()}</a>;
            })}
          </span>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-in">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <img src={c.brand.logo} alt={site.name} width={170} height={60} />
          </Link>
          <nav aria-label="Main" className="nav-wrap">
            <ul className="nav">
              {nav.map((n) => (
                <li key={n.href} className={n.groups ? "has-sub has-mega" : n.children ? "has-sub" : undefined}>
                  <Link href={n.href}>{n.label}{(n.children || n.groups) && <span className="caret">▾</span>}</Link>
                  {n.groups && (
                    <div className="sub-menu mega">
                      <div className="mega-cols">
                        {n.groups.map((g) => (
                          <div key={g.title}>
                            <p className="mega-h">{g.title}</p>
                            <ul>{g.items.map((it) => <li key={it.href}><Link href={it.href}>{it.label}</Link></li>)}</ul>
                          </div>
                        ))}
                      </div>
                      <Link href={n.href} className="mega-all">View all businesses we help →</Link>
                    </div>
                  )}
                  {n.children && (
                    <ul className="sub-menu">
                      {n.children.map((c) => <li key={c.href}><Link href={c.href}>{c.label}</Link></li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <a href={wa} target="_blank" rel="noopener" className="head-phone hide-md">
            <span className="ph-ico"><WhatsApp size={22} /></span>
            <span><small>{c.header.phoneLabel}</small>{site.phoneDisplay}</span>
          </a>
          <Link href={c.header.ctaHref} className="btn btn-yellow header-cta">{c.header.ctaLabel}</Link>
          <details className="mnav">
            <summary aria-label="Menu">☰</summary>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                  {n.children && (
                    <ul>{n.children.map((c) => <li key={c.href}><Link href={c.href}>{c.label}</Link></li>)}</ul>
                  )}
                  {n.groups && n.groups.map((g) => (
                    <details key={g.title} className="mnav-group">
                      <summary>{g.title}</summary>
                      <ul>{g.items.map((it) => <li key={it.href}><Link href={it.href}>{it.label}</Link></li>)}</ul>
                    </details>
                  ))}
                </li>
              ))}
              <li className="mnav-cta">
                <Link href={c.header.ctaHref} className="btn btn-yellow">{c.header.ctaLabel}</Link>
                <a href={wa} target="_blank" rel="noopener" className="btn btn-wa"><WhatsApp size={18} /> WhatsApp</a>
              </li>
            </ul>
          </details>
        </div>
      </header>
    </>
  );
}

export function hostLabel(u: string) {
  try {
    return new URL(u).hostname.replace("www.", "").split(".")[0];
  } catch {
    return "link";
  }
}
