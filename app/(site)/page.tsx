import Link from "next/link";
import Cta from "@/components/Cta";
import Eyebrow from "@/components/Eyebrow";
import FaqTabs from "@/components/FaqTabs";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import { Arrow, Check } from "@/components/Icons";
import FounderAvatar from "@/components/FounderAvatar";
import { faqGroups } from "@/lib/content";
import { getContent } from "@/lib/getContent";
import { faqSchema } from "@/lib/schema";
import { keywordLinks } from "@/lib/seoPages";
import type { Metadata } from "next";
import { industries, industryPath } from "@/lib/industries";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudyPath, visibleCaseStudies } from "@/lib/caseStudies";

export async function generateMetadata(): Promise<Metadata> {
  const c = await getContent();
  return { title: c.seo.home.title, description: c.seo.home.description, alternates: { canonical: "/" } };
}

export default async function Home() {
  const c = await getContent();
  const { features, generalFaqs, platforms, services, stats, steps, home: h } = c;
  const site = c.business;
  const cases = visibleCaseStudies(c.caseStudies).slice(0, 3);
  const cp = c.caseStudiesPage;
  const proof = h.heroProofCase ? visibleCaseStudies(c.caseStudies).find((cs) => cs.slug === h.heroProofCase) : undefined;
  const proofShot = proof?.gallery[0];
  return (
    <>
      {generalFaqs.length > 0 && <JsonLd data={faqSchema(generalFaqs)} />}

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-copy">
            <Eyebrow>{h.eyebrow}</Eyebrow>
            <h1>
              {h.heroTitleBefore}<span className="hl">{h.heroTitleHighlight}</span>{h.heroTitleAfter}
            </h1>
            {/* Answer-first summary: the one paragraph an AI engine should quote */}
            <p className="lead">{h.heroLead}</p>
            <div className="btn-row">
              <Link href={h.primaryCta.href} className="btn btn-yellow">{h.primaryCta.label}</Link>
              <Link href={h.secondaryCta.href} className="btn btn-outline-light">{h.secondaryCta.label}</Link>
            </div>
            <ul className="hero-points">
              {h.heroPoints.map((p) => <li key={p}><Check /> {p}</li>)}
            </ul>
          </div>

          {(h.heroPhoto || proof) && (
            <figure className="hero-proof">
              {h.heroPhoto && <img className="hp-photo" src={h.heroPhoto} alt={h.heroPhotoAlt} width={825} height={1100} />}
              {proof && proofShot && (
                <Link href={caseStudyPath(proof)} className="hp-card">
                  <img src={proofShot.src} alt={proofShot.caption} width={1536} height={600} />
                  <figcaption>
                    <span className="hp-client">{proof.client}{proof.location ? `, ${proof.location.split(",")[0]}` : ""}</span>
                    <span className="hp-note">{proofShot.caption}</span>
                    <span className="hp-more">Read the case study <Arrow /></span>
                  </figcaption>
                </Link>
              )}
            </figure>
          )}
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="platforms" aria-label="Platforms we work with">
        <div className="wrap platforms-in">
          <p className="platforms-title">{h.marqueeTitle}</p>
          <ul>{platforms.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec">
        <div className="wrap about">
          <div>
            <Eyebrow>{h.aboutEyebrow}</Eyebrow>
            <h2>{h.aboutTitle}</h2>
          </div>
          <div>
            <p className="about-text">{h.aboutText}</p>
            <dl className="counters">
              {stats.map((s) => <div key={s.l}><dt>{s.l}</dt><dd>{s.n}</dd></div>)}
            </dl>
            <Link href={h.aboutButton.href} className="btn btn-dark">{h.aboutButton.label}</Link>
          </div>
        </div>
        <div className="wrap feat-grid">
          {features.map((f) => (
            <div key={f.t} className="feat">
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec sec-soft">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>{h.servicesEyebrow}</Eyebrow>
              <h2>{h.servicesTitle}</h2>
            </div>
            <p className="muted">{h.servicesText}</p>
          </div>
          <div className="svc-grid">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
          <h3 className="kw-h">Popular SEO and ads services in Sydney</h3>
          <ul className="kw-links">
            {keywordLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>Businesses we help</Eyebrow>
              <h2>Find your industry</h2>
            </div>
            <p className="muted">A plumber, a dentist and an online store win customers in different ways. Pick yours to see the plan we would run for you in Sydney.</p>
          </div>
          <ul className="areas ind-chips">
            {industries.map((i) => <li key={i.slug}><Link href={industryPath(i)}>{i.name}</Link></li>)}
            <li><Link href="/industries/">All industries</Link></li>
          </ul>
        </div>
      </section>

      {/* CASE STUDIES */}
      {cases.length > 0 && (
        <section className="sec sec-soft">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <Eyebrow>{cp.homeEyebrow}</Eyebrow>
                <h2>{cp.homeTitle}</h2>
              </div>
              <p className="muted">{cp.homeText}</p>
            </div>
            <div className="cs-grid">
              {cases.map((cs) => <CaseStudyCard key={cs.slug} cs={cs} cta={cp.cardCta} exampleLabel={cp.exampleLabel} />)}
            </div>
            <p className="cs-home-foot"><Link href="/case-studies/" className="btn btn-dark">All case studies</Link></p>
          </div>
        </section>
      )}

      {/* PROCESS */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>{h.processEyebrow}</Eyebrow>
              <h2>{h.processTitle}</h2>
            </div>
          </div>
          <ol className="process">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="p-num">Step {i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY + AREAS */}
      <section className="sec why">
        <div className="wrap why-in">
          <div>
            <Eyebrow>{h.whyEyebrow}</Eyebrow>
            <h2>{h.whyTitle}</h2>
            <ul className="ticks">
              {h.whyPoints.map((p) => <li key={p}><Check /> {p}</li>)}
            </ul>
          </div>
          <div className="areas-card">
            <h3>{h.areasTitle}</h3>
            <ul className="areas">{site.areas.map((a) => <li key={a}>{a}</li>)}</ul>
            <p className="small">{h.areasNote}</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="sec">
        <div className="wrap founder">
          <FounderAvatar b={site} />
          <div>
            <Eyebrow>{h.founderEyebrow}</Eyebrow>
            <h2>{site.founder}</h2>
            <p className="role">{site.founderRole}</p>
            <p className="muted">{site.founderBio}</p>
            <ul className="chips-dark">
              {site.founderSkills.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-soft">
        <div className="wrap faq-wrap">
          <div>
            <Eyebrow>{h.faqEyebrow}</Eyebrow>
            <h2>{h.faqTitle}</h2>
            <p className="muted">{h.faqText}</p>
            <Link href="/faq/" className="btn btn-dark">All FAQs</Link>
          </div>
          <FaqTabs groups={faqGroups(c).groups} />
        </div>
      </section>

      <Cta c={c} />
    </>
  );
}
