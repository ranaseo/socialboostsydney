import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Marketing Services Sydney | Social Boost Sydney",
  description:
    "Social media management, Facebook & Instagram ads, TikTok marketing, content creation and local SEO for Sydney businesses.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Services", path: "/services/" }]} />
          <h1>Social media marketing services in Sydney</h1>
          <p className="lead">
            Social Boost Sydney offers five services: social media management, Facebook and Instagram ads, TikTok
            marketing, content creation, and local SEO with AI search optimisation.
          </p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap grid">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="card">
              <h2 className="h3">{s.name}</h2>
              <p>{s.short}</p>
              <span className="more">{s.priceFrom} →</span>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
