import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Social Boost Sydney | Sydney Social Media Agency",
  description:
    "Meet Social Boost Sydney, a Sydney social media marketing agency founded by digital marketer Al Rubel Rana. Social, ads, content and local SEO under one roof.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "About", path: "/about/" }]} />
          <h1>About Social Boost Sydney</h1>
          <p className="lead">
            Social Boost Sydney is a social media marketing agency based in Sydney, NSW, founded by digital marketer{" "}
            {site.founder}. We help local businesses turn social media and search into a steady flow of enquiries.
          </p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap two">
          <div>
            <h2>Our founder</h2>
            {/* E-E-A-T: a real, named expert with verifiable experience */}
            <p>
              {site.founder} is an SEO specialist and social media manager with experience in paid ads, branding and
              digital growth. He has ranked over 5,000 keywords and generated more than 20,000 leads for clients, and
              trains businesses and marketers in digital marketing.
            </p>
          </div>
          <div>
            <h2>What we believe</h2>
            <ul className="ticks">
              <li>Every post should have a business goal.</li>
              <li>Report on enquiries and sales, not vanity metrics.</li>
              <li>Social and search work best together.</li>
              <li>Clear pricing and no long lock-in contracts.</li>
            </ul>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
