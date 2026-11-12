import type { Metadata } from "next";
import Cta from "@/components/Cta";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { faqGroups } from "@/lib/content";
import { getContent } from "@/lib/getContent";
import { faqSchema } from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return { title: seo.faq.title, description: seo.faq.description, alternates: { canonical: "/faq/" } };
}

export default async function FaqPage() {
  const c = await getContent();
  const { all, groups } = faqGroups(c);
  return (
    <>
      {all.length > 0 && <JsonLd data={faqSchema(all)} />}
      <PageBanner title={c.faqPage.bannerTitle} crumbs={[{ name: "FAQ", path: "/faq/" }]} lead={c.faqPage.bannerLead} />
      <section className="sec">
        <div className="wrap narrow">
          {groups.map((g) => (
            <div key={g.name} className="faq-group">
              <h2>{g.name}</h2>
              <FaqList faqs={g.faqs} />
            </div>
          ))}
        </div>
      </section>
      <Cta c={c} />
    </>
  );
}
