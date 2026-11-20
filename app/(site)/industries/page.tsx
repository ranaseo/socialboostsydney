import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import { Arrow } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { getContent } from "@/lib/getContent";
import { industries, industriesHub, industryGroups, industryPath } from "@/lib/industries";
import { itemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: industriesHub.title },
  description: industriesHub.metaDescription,
  alternates: { canonical: "/industries/" },
  openGraph: { title: industriesHub.title, description: industriesHub.metaDescription, url: "/industries/" },
};

export default async function IndustriesPage() {
  const c = await getContent();
  return (
    <>
      <JsonLd data={itemListSchema(c.business.url, industriesHub.h1, industries.map((i) => ({ name: i.h1, path: industryPath(i) })))} />
      <PageBanner title={industriesHub.h1} crumbs={[{ name: "Industries", path: "/industries/" }]} lead={industriesHub.lead} />
      <section className="sec">
        <div className="wrap">
          {industryGroups.map((g) => (
            <div key={g.group} className="ind-group">
              <h2>{g.group}</h2>
              <div className="ind-grid">
                {g.items.map((i) => (
                  <Link key={i.slug} href={industryPath(i)} className="ind-card">
                    <h3>{i.name}</h3>
                    <p>{i.card}</p>
                    <span className="ind-more">Marketing for {i.name.toLowerCase()} <Arrow /></span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Cta c={c} />
    </>
  );
}
