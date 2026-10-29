import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { generalFaqs, services } from "@/lib/site";

const all = [...generalFaqs, ...services.flatMap((s) => s.faqs)];

export const metadata: Metadata = {
  title: "Social Media Marketing FAQ Sydney | Costs, Results & Contracts",
  description:
    "Straight answers about social media marketing in Sydney: agency costs, ad budgets, how long results take, TikTok, local SEO, AEO and GEO.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(all)} />
      <section className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "FAQ", path: "/faq/" }]} />
          <h1>Social media marketing FAQ</h1>
          <p className="lead">Short, direct answers to the questions Sydney business owners ask us most.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow">
          <FaqList faqs={all} />
        </div>
      </section>
      <Cta />
    </>
  );
}
