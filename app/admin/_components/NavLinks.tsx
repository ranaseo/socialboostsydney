"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ items }: { items: { href: string; label: string; icon: string }[] }) {
  const path = usePathname().replace(/\/?$/, "/");
  return (
    <nav className="a-nav">
      {items.map((i) => {
        const on = i.href === "/admin/" ? path === "/admin/" : path.startsWith(i.href);
        return (
          <Link key={i.href} href={i.href} className={on ? "on" : undefined} aria-current={on ? "page" : undefined}>
            <span aria-hidden="true">{i.icon}</span> {i.label}
          </Link>
        );
      })}
    </nav>
  );
}
