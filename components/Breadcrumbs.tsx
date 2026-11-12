import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getContent } from "@/lib/getContent";

export default async function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const c = await getContent();
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <JsonLd data={breadcrumbSchema(c.business.url, all)} />
      {all.map((it, i) => (
        <span key={it.path}>
          {i < all.length - 1 ? <Link href={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
          {i < all.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
