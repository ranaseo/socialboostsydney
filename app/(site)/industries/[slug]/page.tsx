import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import FaqList from "@/components/FaqList";
import { Arrow, Check, WhatsApp } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { waLink } from "@/lib/content";
import { getContent } from "@/lib/getContent";
import { INDUSTRIES_UPDATED, industries, industryPath } from "@/lib/industries";
import { faqSchema, industrySchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) return {};
  return {
    title: { absolute: i.title },
    description: i.metaDescription,
    alternates: { canonical: industryPath(i) },
    openGraph: { title: i.title, description: i.metaDescription, url: industryPath(i), type: "article" },
  };
}

const updatedLabel = new Date(`${INDUSTRIES_UPDATED}T00:00:00Z`).toLocaleDateString("en-AU", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) notFound();
  const c = await getContent();
  const site = c.business;
  const lower = i.name.toLowerCase();
  const used = i.services.map((s) => c.services.find((x) => x.slug === s)).filter((s) => !!s);
  const related = industries.filter((x) => x.group === i.group && x.slug !== i.slug);
  return (
    <>
      <JsonLd data={industrySchema(c, i, INDUSTRIES_UPDATED)} />
      <JsonLd data={faqSchema(i.faqs)} />
      <PageBanner
        title={i.h1}
        crumbs={[{ name: "Industries", path: "/industries/" }, { name: i.name, path: industryPath(i) }]}
        lead={i.answer}
      />
      <section className="sec">
        <div className="wrap detail">
          <article className="detail-main">
            <p className="ind-meta">
              By <Link href="/about/">{site.founder}</Link>, {site.name} · Updated <time dateTime={INDUSTRIES_UPDATED}>{updatedLabel}</time>
            </p>
            <h2>Why marketing is hard for {lower} in {site.address.addressLocality}</h2>
            <ul className="ticks">{i.problems.map((p) => <li key={p}><Check /> {p}</li>)}</ul>

            <h2>How we market {lower} in {site.address.addressLocality}</h2>
            {i.plan.map((s) => (
              <div key={s.h} className="ind-step">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}

            <h2>Searches your customers make</h2>
            <p>These are examples of the searches we build pages, profiles and campaigns around for {lower}:</p>
            <ul className="areas">{i.searches.map((s) => <li key={s}>{s}</li>)}</ul>

            {i.note && (
              <>
                <h2>{i.note.h}</h2>
                <p>{i.note.p}</p>
              </>
            )}

            <h2>Services we use for {lower}</h2>
            <ul className="ind-svc">
              {used.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`}>{s.name}</Link>: {s.short} <span className="ind-price">{s.priceFrom}</span>
                </li>
              ))}
            </ul>

            <h2>How it works</h2>
            <ol className="mini-steps">
              {c.steps.map((st, n) => <li key={st.t}><b>{String(n + 1).padStart(2, "0")}. {st.t}</b> {st.d}</li>)}
            </ol>

            <h2>Areas we serve</h2>
            <p>
              We work with {lower} across Greater Sydney, including {site.areas.join(", ")}, and remotely with businesses across Australia.
            </p>

            <h2>Marketing for {lower}: common questions</h2>
            <FaqList faqs={i.faqs} />
          </article>
          <aside className="detail-side">
            {related.length > 0 && (
              <div className="side-box">
                <h2 className="side-h">{i.group}</h2>
                <ul className="side-list">
                  {related.map((o) => (
                    <li key={o.slug}><Link href={industryPath(o)}>{o.name} <Arrow /></Link></li>
                  ))}
                  <li><Link href="/industries/">All industries <Arrow /></Link></li>
                </ul>
              </div>
            )}
            <div className="side-cta">
              <img src={c.brand.iconPlain} alt="" width={64} height={64} />
              <h2 className="side-h">Free audit for {lower}</h2>
              <p>{c.servicesPage.sidebarTitle}</p>
              <a href={waLink(site.whatsapp, `Hi, I run a business in this industry: ${i.name}. I'd like a free audit.`)} target="_blank" rel="noopener" className="side-phone"><WhatsApp size={22} /> {site.phoneDisplay}</a>
              <Link href={c.header.ctaHref} className="btn btn-dark">{c.header.ctaLabel}</Link>
            </div>
          </aside>
        </div>
      </section>
      <Cta c={c} />
    </>
  );
}
