import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header-in">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <img src="/brand/logo-horizontal-primary.svg" alt={site.name} width={170} height={60} />
        </Link>
        <nav aria-label="Main">
          <ul className="nav">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact/" className="btn btn-dark header-cta">
          Free audit
        </Link>
        <details className="mnav">
          <summary aria-label="Menu">☰</summary>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </header>
  );
}
