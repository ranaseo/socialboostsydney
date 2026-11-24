import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import Eyebrow from "@/components/Eyebrow";
import { Check } from "@/components/Icons";
import PageBanner from "@/components/PageBanner";
import { getContent } from "@/lib/getContent";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return { title: seo.about.title, description: seo.about.description, alternates: { canonical: "/about/" } };
}

export default async function About() {
  const c = await getContent();
  const { about: a, business: site, stats, features, services } = c;
  const counters = [
    ...stats,
    { n: String(services.length), l: "Services in-house" },
    { n: `${site.areas.length}+`, l: "Sydney areas served" },
  ];
  return (
    <>
      <PageBanner title={a.bannerTitle} crumbs={[{ name: "About", path: "/about/" }]} lead={a.bannerLead} />
      <section className="sec">
        <div className="wrap about">
          <div>
            <Eyebrow>{a.storyEyebrow}</Eyebrow>
            <h2>{a.storyTitle}</h2>
          </div>
          <div>
            <p className="about-text">{a.storyText}</p>
            <dl className="counters counters-2">
              {counters.map((s) => <div key={s.l}><dt>{s.l}</dt><dd>{s.n}</dd></div>)}
            </dl>
            <Link href={a.storyButton.href} className="btn btn-dark">{a.storyButton.label}</Link>
          </div>
        </div>
        <div className="wrap story-svc">
          <h3>{a.servicesLabel}</h3>
          <ul className="kw-links on-white">
            {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.name}</Link></li>)}
          </ul>
        </div>
      </section>
      <section className="sec sec-soft">
        <div className="wrap">
          <Eyebrow>{a.beliefsEyebrow}</Eyebrow>
          <h2>{a.beliefsTitle}</h2>
          <div className="feat-grid flush">
            {features.map((f) => (
              <div key={f.t} className="feat">
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
          <ul className="ticks cols">
            {a.beliefsPoints.map((p) => <li key={p}><Check /> {p}</li>)}
          </ul>
        </div>
      </section>
      <Cta c={c} />
    </>
  );
}
