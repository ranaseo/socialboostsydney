import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import { caseStudyPath } from "@/lib/caseStudies";
import { Arrow } from "./Icons";

export default function CaseStudyCard({ cs, cta, exampleLabel, headingLevel = 3 }: { cs: CaseStudy; cta: string; exampleLabel: string; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const top = cs.results.slice(0, 2);
  return (
    <Link href={caseStudyPath(cs)} className="cs-card">
      {cs.image ? (
        <img src={cs.image} alt="" className="cs-card-img" width={600} height={315} loading="lazy" />
      ) : (
        <div className="cs-card-hero" aria-hidden="true">
          <span className="cs-card-big">{cs.results[0]?.n}</span>
          <span className="cs-card-big-l">{cs.results[0]?.l}</span>
        </div>
      )}
      <div className="cs-card-body">
        <p className="cs-tags">
          {cs.industry && <span>{cs.industry}</span>}
          {cs.location && <span>{cs.location}</span>}
          {cs.isExample && <span className="cs-example">{exampleLabel}</span>}
        </p>
        <H className="cs-card-h">{cs.title}</H>
        {top.length > 0 && (
          <dl className="cs-mini">
            {top.map((r) => <div key={r.l}><dt>{r.l}</dt><dd>{r.n}</dd></div>)}
          </dl>
        )}
        <span className="cs-more">{cta} <Arrow /></span>
      </div>
    </Link>
  );
}
