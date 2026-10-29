import Link from "next/link";
import type { Service } from "@/lib/site";
import { Arrow, icons } from "./Icons";

export default function ServiceCard({ s, as: H = "h3" }: { s: Service; as?: "h2" | "h3" }) {
  return (
    <Link href={`/services/${s.slug}/`} className="svc">
      <span className="svc-ico">{icons[s.slug]}</span>
      <H className="svc-t">{s.name}</H>
      <p>{s.short}</p>
      <span className="svc-more">
        <span>{s.priceFrom}</span>
        <span className="svc-arrow"><Arrow /></span>
      </span>
    </Link>
  );
}
