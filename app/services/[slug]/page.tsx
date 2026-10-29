import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}/` },
    openGraph: { title: s.title, description: s.metaDescription, url: `/services/${s.slug}/` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);
  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />
      <section className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Services", path: "/services/" }, { name: s.name, path: `/services/${s.slug}/` }]} />
          <h1>{s.name} in Sydney</h1>
          <p className="lead">{s.answer}</p>
          <p className="price">{s.priceFrom}</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap two">
          <div>
            <h2>What’s included</h2>
            <ul className="ticks">{s.includes.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div>
            <h2>Who it’s for</h2>
            <ul className="ticks">{s.forWho.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="sec sec-soft">
        <div className="wrap narrow">
          <h2>{s.name}: common questions</h2>
          <FaqList faqs={s.faqs} />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2>Related services</h2>
          <div className="grid">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}/`} className="card">
                <h3>{o.name}</h3>
                <p>{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
