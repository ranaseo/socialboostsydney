import type { Metadata } from "next";
import Cta from "@/components/Cta";
import CaseStudyCard from "@/components/CaseStudyCard";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { caseStudiesHubSchema, visibleCaseStudies } from "@/lib/caseStudies";
import { getContent } from "@/lib/getContent";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return {
    title: { absolute: seo.caseStudies.title },
    description: seo.caseStudies.description,
    alternates: { canonical: "/case-studies/" },
    openGraph: { title: seo.caseStudies.title, description: seo.caseStudies.description, url: "/case-studies/" },
  };
}

export default async function CaseStudiesPage() {
  const c = await getContent();
  const p = c.caseStudiesPage;
  const list = visibleCaseStudies(c.caseStudies);
  return (
    <>
      <JsonLd data={caseStudiesHubSchema(c, list.filter((cs) => !cs.isExample), p.bannerTitle, c.seo.caseStudies.description)} />
      <PageBanner title={p.bannerTitle} crumbs={[{ name: "Case Studies", path: "/case-studies/" }]} lead={p.bannerLead}>
        <dl className="cs-banner-stats">
          {c.stats.slice(0, 3).map((s) => <div key={s.l}><dd>{s.n}</dd><dt>{s.l}</dt></div>)}
        </dl>
      </PageBanner>
      <section className="sec">
        <div className="wrap">
          {list.length > 0 ? (
            <div className="cs-grid two">
              {list.map((cs) => <CaseStudyCard key={cs.slug} cs={cs} cta={p.cardCta} exampleLabel={p.exampleLabel} headingLevel={2} />)}
            </div>
          ) : (
            <p className="muted">New case studies are on the way. In the meantime, book a free audit and we will show you what we would do for your business.</p>
          )}
        </div>
      </section>
      <Cta c={c} />
    </>
  );
}
