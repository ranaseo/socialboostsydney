import type { Metadata } from "next";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Marketing Services Sydney | Social Boost Sydney",
  description:
    "Social media management, Facebook & Instagram ads, TikTok marketing, content creation, local SEO and ecommerce SEO for Sydney businesses.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our services"
        crumbs={[{ name: "Services", path: "/services/" }]}
        lead="Social Boost Sydney offers six services: social media management, Facebook and Instagram ads, TikTok marketing, content creation, local SEO with Google Business Profile, and ecommerce SEO."
      />
      <section className="sec">
        <div className="wrap svc-grid">
          {services.map((s) => <ServiceCard key={s.slug} s={s} as="h2" />)}
        </div>
      </section>
      <Cta />
    </>
  );
}
