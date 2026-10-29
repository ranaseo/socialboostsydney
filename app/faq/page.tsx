import type { Metadata } from "next";
import Cta from "@/components/Cta";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { allFaqs, faqGroups } from "@/lib/faqGroups";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Social Media Marketing FAQ Sydney | Costs, Results & Contracts",
  description:
    "Straight answers about social media marketing in Sydney: agency costs, ad budgets, how long results take, TikTok, local SEO, ecommerce SEO, AEO and GEO.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <PageBanner
        title="Social media marketing FAQ"
        crumbs={[{ name: "FAQ", path: "/faq/" }]}
        lead="Short, direct answers to the questions Sydney business owners ask us most."
      />
      <section className="sec">
        <div className="wrap narrow">
          {faqGroups.map((g) => (
            <div key={g.name} className="faq-group">
              <h2>{g.name}</h2>
              <FaqList faqs={g.faqs} />
            </div>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
