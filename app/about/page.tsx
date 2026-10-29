import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Eyebrow from "@/components/Eyebrow";
import { Check } from "@/components/Icons";
import PageBanner from "@/components/PageBanner";
import { features, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Social Boost Sydney | Sydney Social Media Agency",
  description:
    "Meet Social Boost Sydney, a Sydney social media marketing agency founded by digital marketer Al Rubel Rana. Social, ads, content, local SEO and ecommerce SEO under one roof.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <PageBanner
        title="About Social Boost Sydney"
        crumbs={[{ name: "About", path: "/about/" }]}
        lead={`Social Boost Sydney is a social media marketing agency based in Sydney, NSW, founded by digital marketer ${site.founder}. We help local and online businesses turn social media and search into a steady flow of enquiries.`}
      />
      <section className="sec">
        <div className="wrap founder">
          <div className="f-avatar" aria-hidden="true">AR</div>
          <div>
            <Eyebrow>Our founder</Eyebrow>
            <h2>{site.founder}</h2>
            <p className="role">Founder · SEO Specialist & Social Media Manager</p>
            {/* E-E-A-T: a real, named expert with verifiable experience */}
            <p className="muted">
              {site.founder} is an SEO specialist and social media manager with experience in paid ads, branding and
              digital growth. He has ranked over 5,000 keywords and generated more than 20,000 leads for clients, and
              trains businesses and marketers in digital marketing.
            </p>
            <dl className="counters">
              {stats.map((s) => <div key={s.l}><dt>{s.l}</dt><dd>{s.n}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>
      <section className="sec sec-soft">
        <div className="wrap">
          <Eyebrow>What we believe</Eyebrow>
          <h2>How we work with Sydney businesses</h2>
          <div className="feat-grid flush">
            {features.map((f, i) => (
              <div key={f.t} className="feat">
                <span className="feat-n">0{i + 1}</span>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
          <ul className="ticks cols">
            <li><Check /> Every post has a business goal</li>
            <li><Check /> Report on enquiries and sales, not vanity metrics</li>
            <li><Check /> Clear pricing and no long lock-in contracts</li>
            <li><Check /> Your accounts and content stay in your name</li>
          </ul>
        </div>
      </section>
      <Cta />
    </>
  );
}
