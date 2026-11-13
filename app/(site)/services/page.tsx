import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/ServiceCard";
import { getContent } from "@/lib/getContent";
import { keywordLinks } from "@/lib/seoPages";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return { title: seo.services.title, description: seo.services.description, alternates: { canonical: "/services/" } };
}

export default async function ServicesPage() {
  const c = await getContent();
  return (
    <>
      <PageBanner title={c.servicesPage.bannerTitle} crumbs={[{ name: "Services", path: "/services/" }]} lead={c.servicesPage.bannerLead} />
      <section className="sec">
        <div className="wrap svc-grid">
          {c.services.map((s) => <ServiceCard key={s.slug} s={s} as="h2" />)}
        </div>
        <div className="wrap">
          <h2 className="kw-h">Specialist and local pages</h2>
          <ul className="kw-links">
            {keywordLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
        </div>
      </section>
      <Cta c={c} />
    </>
  );
}
