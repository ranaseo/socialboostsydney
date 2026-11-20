import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import FaqList from "@/components/FaqList";
import { WhatsApp } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { LongForm, RelatedLinks } from "@/components/LongForm";
import PageBanner from "@/components/PageBanner";
import { waLink } from "@/lib/content";
import { getContent } from "@/lib/getContent";
import { faqSchema, landingServiceSchema } from "@/lib/schema";
import { seoPages } from "@/lib/seoPages";

// Keyword landing pages, e.g. /wordpress-seo-sydney/ and /facebook-ads-chatswood/.
// Only the slugs listed in lib/seoPages.ts exist; anything else is a 404.
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return seoPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = seoPages.find((x) => x.slug === slug);
  if (!p) return {};
  const path = `/${p.slug}/`;
  return {
    title: { absolute: p.title },
    description: p.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: p.title, description: p.metaDescription, url: path },
  };
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const p = seoPages.find((x) => x.slug === slug);
  if (!p) notFound();
  const c = await getContent();
  const site = c.business;
  const parent = c.services.find((s) => s.slug === p.serviceSlug);
  const path = `/${p.slug}/`;
  const names: Record<string, string> = Object.fromEntries(c.services.map((s) => [`/services/${s.slug}/`, s.name]));
  return (
    <>
      <JsonLd data={landingServiceSchema(c, { path, name: p.keyword, serviceType: p.serviceType, description: p.intro, area: p.area })} />
      <JsonLd data={faqSchema(p.faqs)} />
      <PageBanner
        title={p.h1}
        crumbs={[
          ...(parent ? [{ name: parent.name, path: `/services/${parent.slug}/` }] : [{ name: "Services", path: "/services/" }]),
          { name: p.name, path },
        ]}
        lead={p.intro}
      >
        {parent && <p className="price">{parent.priceFrom}</p>}
        {p.area && (
          <ul className="area-facts" aria-label={`About ${p.area.name}`}>
            <li>{p.area.name} NSW {p.area.postcode}</li>
            <li>{p.area.region}</li>
            <li>{p.area.council}</li>
          </ul>
        )}
      </PageBanner>
      <section className="sec">
        <div className="wrap detail">
          <article className="detail-main">
            <LongForm sections={p.sections} />
            {p.area && (
              <section className="lf">
                <h2>Suburbs near {p.area.name} we also cover</h2>
                <ul className="areas">{p.area.nearby.map((n) => <li key={n}>{n}</li>)}</ul>
              </section>
            )}
            {parent && (
              <section className="lf">
                <h2>Part of our {parent.name} service</h2>
                <p>
                  For the full list of what is included, pricing and how we work across Sydney, see our{" "}
                  <Link href={`/services/${parent.slug}/`}>{parent.name} service page</Link>, or{" "}
                  <Link href="/contact/">book a free audit</Link> and we will look at your business first.
                </p>
              </section>
            )}
            <h2>{p.keyword}: common questions</h2>
            <FaqList faqs={p.faqs} />
          </article>
          <aside className="detail-side">
            <RelatedLinks paths={p.related} names={names} />
            <div className="side-cta">
              <img src={c.brand.iconPlain} alt="" width={64} height={64} />
              <h2 className="side-h">Ask about {p.keyword}</h2>
              <p>{c.servicesPage.sidebarTitle}</p>
              <a href={waLink(site.whatsapp, `Hi, I'm interested in ${p.keyword}.`)} target="_blank" rel="noopener" className="side-phone"><WhatsApp size={22} /> {site.phoneDisplay}</a>
              <Link href={c.header.ctaHref} className="btn btn-dark">{c.header.ctaLabel}</Link>
            </div>
          </aside>
        </div>
      </section>
      <Cta c={c} />
    </>
  );
}
