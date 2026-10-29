import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import FaqList from "@/components/FaqList";
import { Arrow, Check, Phone, icons } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { services, site, steps } from "@/lib/site";

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
  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />
      <PageBanner
        title={`${s.name} in Sydney`}
        crumbs={[{ name: "Services", path: "/services/" }, { name: s.name, path: `/services/${s.slug}/` }]}
        lead={s.answer}
      >
        <p className="price">{s.priceFrom}</p>
      </PageBanner>
      <section className="sec">
        <div className="wrap detail">
          <article className="detail-main">
            <div className="detail-hero" aria-hidden="true">
              <span className="dh-ico">{icons[s.slug]}</span>
              <img src="/brand/icon-yellow-tile.svg" alt="" width={140} height={140} />
            </div>
            <h2>What’s included</h2>
            <ul className="ticks">{s.includes.map((i) => <li key={i}><Check /> {i}</li>)}</ul>
            <h2>Who it’s for</h2>
            <ul className="areas">{s.forWho.map((i) => <li key={i}>{i}</li>)}</ul>
            <h2>How it works</h2>
            <ol className="mini-steps">
              {steps.map((st, i) => <li key={st.t}><b>0{i + 1}. {st.t}</b> {st.d}</li>)}
            </ol>
            <h2>{s.name}: common questions</h2>
            <FaqList faqs={s.faqs} />
          </article>
          <aside className="detail-side">
            <div className="side-box">
              <h2 className="side-h">All services</h2>
              <ul className="side-list">
                {services.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/services/${o.slug}/`} aria-current={o.slug === s.slug ? "page" : undefined} className={o.slug === s.slug ? "on" : undefined}>
                      {o.name} <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="side-cta">
              <img src="/brand/icon-plain.svg" alt="" width={64} height={64} />
              <h2 className="side-h">Need help with {s.name}?</h2>
              <p>Get a free audit and a clear plan for your business.</p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="side-phone"><Phone /> {site.phoneDisplay}</a>
              <Link href="/contact/" className="btn btn-dark">Book Free Audit</Link>
            </div>
          </aside>
        </div>
      </section>
      <Cta />
    </>
  );
}
