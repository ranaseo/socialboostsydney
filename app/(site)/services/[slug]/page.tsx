import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import FaqList from "@/components/FaqList";
import { Arrow, Check, WhatsApp } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { LongForm, RelatedLinks } from "@/components/LongForm";
import PageBanner from "@/components/PageBanner";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { waLink } from "@/lib/content";
import { getContent } from "@/lib/getContent";
import { seoPages, serviceGuides } from "@/lib/seoPages";
import { caseStudyPath, visibleCaseStudies } from "@/lib/caseStudies";

type Props = { params: Promise<{ slug: string }> };

// New services added in the admin panel are rendered on first visit, then cached.
export const dynamicParams = true;

export async function generateStaticParams() {
  const { services } = await getContent();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { services } = await getContent();
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
  const c = await getContent();
  const { services, business: site, steps } = c;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  // Long-form guide for services that target a specific search phrase (lib/seoPages.ts).
  const g = serviceGuides[s.slug];
  const related = [...new Set([...(g?.related ?? []), ...seoPages.filter((p) => p.serviceSlug === s.slug).map((p) => `/${p.slug}/`)])];
  const faqs = g ? [...s.faqs, ...g.faqs.filter((f) => !s.faqs.some((x) => x.q === f.q))] : s.faqs;
  return (
    <>
      <JsonLd data={serviceSchema(c, s)} />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      <PageBanner
        title={g?.h1 ?? `${s.name} in ${site.address.addressLocality}`}
        crumbs={[{ name: "Services", path: "/services/" }, { name: s.name, path: `/services/${s.slug}/` }]}
        lead={g?.intro ?? s.answer}
      >
        <p className="price">{s.priceFrom}</p>
      </PageBanner>
      <section className="sec">
        <div className="wrap detail">
          <article className="detail-main">
            {s.image && <img src={s.image} alt={s.name} className="detail-img" width={1200} height={630} />}
            {g && <LongForm sections={g.sections} />}
            <h2>What’s included</h2>
            <ul className="ticks">{s.includes.map((i) => <li key={i}><Check /> {i}</li>)}</ul>
            <h2>Who it’s for</h2>
            <ul className="areas">{s.forWho.map((i) => <li key={i}>{i}</li>)}</ul>
            <h2>How it works</h2>
            <ol className="mini-steps">
              {steps.map((st, i) => <li key={st.t}><b>{i + 1}. {st.t}.</b> {st.d}</li>)}
            </ol>
            {faqs.length > 0 && (
              <>
                <h2>{g?.h1 ?? s.name}: common questions</h2>
                <FaqList faqs={faqs} />
              </>
            )}
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
            {related.length > 0 && <RelatedLinks paths={related} names={Object.fromEntries(services.map((o) => [`/services/${o.slug}/`, o.name]))} />}
            <div className="side-cta">
              <h2 className="side-h">Need help with {s.name}?</h2>
              <p>{c.servicesPage.sidebarTitle}</p>
              <a href={waLink(site.whatsapp, `Hi, I need help with ${s.name}.`)} target="_blank" rel="noopener" className="side-phone"><WhatsApp size={22} /> {site.phoneDisplay}</a>
              <Link href={c.header.ctaHref} className="btn btn-dark">{c.header.ctaLabel}</Link>
            </div>
            <CaseStudyLinks list={visibleCaseStudies(c.caseStudies).filter((cs) => cs.services.includes(s.slug))} />
          </aside>
        </div>
      </section>
      <Cta c={c} />
    </>
  );
}

// Case studies that used this service (internal links for users and crawlers).
function CaseStudyLinks({ list }: { list: { slug: string; title: string; results: { n: string; l: string }[] }[] }) {
  if (!list.length) return null;
  return (
    <div className="side-box">
      <h2 className="side-h">Case studies</h2>
      <ul className="side-list">
        {list.slice(0, 3).map((cs) => (
          <li key={cs.slug}><Link href={caseStudyPath(cs)}>{cs.results[0] ? `${cs.results[0].n} ${cs.results[0].l}` : cs.title} <Arrow /></Link></li>
        ))}
        <li><Link href="/case-studies/">All case studies <Arrow /></Link></li>
      </ul>
    </div>
  );
}
