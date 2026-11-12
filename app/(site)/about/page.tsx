import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Eyebrow from "@/components/Eyebrow";
import FounderAvatar from "@/components/FounderAvatar";
import { Check } from "@/components/Icons";
import PageBanner from "@/components/PageBanner";
import { getContent } from "@/lib/getContent";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return { title: seo.about.title, description: seo.about.description, alternates: { canonical: "/about/" } };
}

export default async function About() {
  const c = await getContent();
  const { about: a, business: site, stats, features } = c;
  return (
    <>
      <PageBanner title={a.bannerTitle} crumbs={[{ name: "About", path: "/about/" }]} lead={a.bannerLead} />
      <section className="sec">
        <div className="wrap founder">
          <FounderAvatar b={site} />
          <div>
            <Eyebrow>{a.founderEyebrow}</Eyebrow>
            <h2>{site.founder}</h2>
            <p className="role">{site.founderRole}</p>
            {/* E-E-A-T: a real, named expert with verifiable experience */}
            <p className="muted">{site.founderBio}</p>
            <dl className="counters">
              {stats.map((s) => <div key={s.l}><dt>{s.l}</dt><dd>{s.n}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>
      <section className="sec sec-soft">
        <div className="wrap">
          <Eyebrow>{a.beliefsEyebrow}</Eyebrow>
          <h2>{a.beliefsTitle}</h2>
          <div className="feat-grid flush">
            {features.map((f, i) => (
              <div key={f.t} className="feat">
                <span className="feat-n">{String(i + 1).padStart(2, "0")}</span>
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
