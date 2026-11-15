import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyCard from "@/components/CaseStudyCard";
import Cta from "@/components/Cta";
import { Arrow, Check, WhatsApp } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { caseStudyPath, caseStudySchema, visibleCaseStudies } from "@/lib/caseStudies";
import { waLink } from "@/lib/content";
import { getContent } from "@/lib/getContent";
import { industries, industryPath } from "@/lib/industries";

type Props = { params: Promise<{ slug: string }> };

// Case studies added in the admin panel are rendered on first visit, then cached.
export const dynamicParams = true;

export async function generateStaticParams() {
  const { caseStudies } = await getContent();
  return visibleCaseStudies(caseStudies).map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = await getContent();
  const cs = visibleCaseStudies(c.caseStudies).find((x) => x.slug === slug);
  if (!cs) return {};
  const title = cs.metaTitle || `${cs.title} | Case Study`;
  const description = cs.metaDescription || cs.summary.slice(0, 158);
  const image = cs.image || cs.gallery[0]?.src;
  return {
    title: { absolute: title.includes(c.business.name) || title.length > 45 ? title : `${title} | ${c.business.name}` },
    description,
    alternates: { canonical: caseStudyPath(cs) },
    openGraph: { title, description, url: caseStudyPath(cs), type: "article", publishedTime: cs.date, ...(image ? { images: [image] } : {}) },
    // Example case studies are placeholders: keep them out of search results until real.
    ...(cs.isExample ? { robots: { index: false, follow: true } } : {}),
  };
}

const dateLabel = (d: string) => {
  const t = new Date(`${d}T00:00:00Z`);
  return isNaN(t.getTime()) ? d : t.toLocaleDateString("en-AU", { month: "long", year: "numeric", timeZone: "UTC" });
};

const findService = (list: { slug: string; name: string; short: string }[], key: string) => {
  const k = key.trim().toLowerCase();
  return list.find((s) => s.slug === k || s.name.toLowerCase() === k);
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = await getContent();
  const all = visibleCaseStudies(c.caseStudies);
  const cs = all.find((x) => x.slug === slug);
  if (!cs) notFound();
  const site = c.business;
  const p = c.caseStudiesPage;
  const used = cs.services.map((s) => findService(c.services, s)).filter((s) => !!s);
  const industry = industries.find((i) => i.slug === cs.industrySlug);
  const more = all.filter((x) => x.slug !== cs.slug).slice(0, 3);
  return (
    <>
      {!cs.isExample && <JsonLd data={caseStudySchema(c, cs, used)} />}
      <PageBanner
        title={cs.title}
        crumbs={[{ name: "Case Studies", path: "/case-studies/" }, { name: cs.client || cs.title, path: caseStudyPath(cs) }]}
        lead={cs.summary}
      >
        <p className="cs-tags cs-tags-dark">
          {cs.isExample && <span className="cs-example">{p.exampleLabel}</span>}
          {cs.industry && <span>{cs.industry}</span>}
          {cs.location && <span>{cs.location}</span>}
          {cs.duration && <span>{cs.duration}</span>}
        </p>
      </PageBanner>

      {cs.results.length > 0 && (
        <section className="cs-results-sec" aria-label="Key results">
          <dl className="wrap cs-results">
            {cs.results.map((r) => <div key={r.l}><dd>{r.n}</dd><dt>{r.l}</dt></div>)}
          </dl>
        </section>
      )}

      <section className="sec">
        <div className="wrap detail">
          <article className="detail-main">
            <p className="ind-meta">
              By <Link href="/about/">{site.founder}</Link>, {site.name}
              {cs.date && <> · <time dateTime={cs.date}>{dateLabel(cs.date)}</time></>}
            </p>
            {cs.image && <img src={cs.image} alt={`${cs.client} results`} className="detail-img" width={1200} height={630} />}

            <h2>The client</h2>
            <p>
              {cs.website ? <a href={cs.website} target="_blank" rel="noopener">{cs.client}</a> : cs.client}{cs.location ? ` in ${cs.location}` : ""}
              {used.length > 0 && <>, working with us on {used.map((s, i) => (
                <span key={s.slug}>{i > 0 && (i === used.length - 1 ? " and " : ", ")}<Link href={`/services/${s.slug}/`}>{s.name}</Link></span>
              ))}</>}
              {cs.duration ? ` for ${cs.duration}` : ""}.
            </p>
            {cs.website && (
              <p className="cs-site">
                Website: <a href={cs.website} target="_blank" rel="noopener">{cs.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</a>
              </p>
            )}

            {cs.challenge && (
              <>
                <h2>The challenge</h2>
                <p>{cs.challenge}</p>
              </>
            )}

            {cs.approach.length > 0 && (
              <>
                <h2>What we did</h2>
                <ul className="ticks">{cs.approach.map((a) => <li key={a}><Check /> {a}</li>)}</ul>
              </>
            )}

            {cs.outcome && (
              <>
                <h2>The results</h2>
                <p>{cs.outcome}</p>
              </>
            )}

            {cs.gallery.length > 0 && (
              <div className="cs-gallery">
                {cs.gallery.map((g) => (
                  <figure key={g.src}>
                    <img src={g.src} alt={g.caption || cs.title} loading="lazy" width={800} height={500} />
                    {g.caption && <figcaption>{g.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}

            {cs.testimonial.quote && (
              <blockquote className="cs-quote">
                <p>“{cs.testimonial.quote.replace(/^[“"]|[”"]$/g, "")}”</p>
                {(cs.testimonial.name || cs.testimonial.role) && (
                  <footer><b>{cs.testimonial.name}</b>{cs.testimonial.role && <span>{cs.testimonial.role}</span>}</footer>
                )}
              </blockquote>
            )}

            {used.length > 0 && (
              <>
                <h2>Services used in this campaign</h2>
                <ul className="ind-svc">
                  {used.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/`}>{s.name}</Link>: {s.short}</li>)}
                </ul>
              </>
            )}
            {industry && (
              <p className="cs-ind-link">
                Run a similar business? See <Link href={industryPath(industry)}>how we market {industry.name.toLowerCase()} in {site.address.addressLocality}</Link>.
              </p>
            )}
          </article>

          <aside className="detail-side">
            <div className="side-cta">
              <img src={c.brand.iconPlain} alt="" width={64} height={64} />
              <h2 className="side-h">Want results like these?</h2>
              <p>{c.servicesPage.sidebarTitle}</p>
              <a href={waLink(site.whatsapp, `Hi, I read your case study "${cs.title}" and want similar results.`)} target="_blank" rel="noopener" className="side-phone"><WhatsApp size={22} /> {site.phoneDisplay}</a>
              <Link href={c.header.ctaHref} className="btn btn-dark">{c.header.ctaLabel}</Link>
            </div>
            <div className="side-box">
              <h2 className="side-h">More case studies</h2>
              <ul className="side-list">
                {more.map((o) => <li key={o.slug}><Link href={caseStudyPath(o)}>{o.industry || o.client} <Arrow /></Link></li>)}
                <li><Link href="/case-studies/">All case studies <Arrow /></Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {more.length > 0 && (
        <section className="sec sec-soft">
          <div className="wrap">
            <h2 className="cs-more-h">More results from Sydney businesses</h2>
            <div className="cs-grid">
              {more.map((o) => <CaseStudyCard key={o.slug} cs={o} cta={p.cardCta} exampleLabel={p.exampleLabel} />)}
            </div>
          </div>
        </section>
      )}
      <Cta c={c} />
    </>
  );
}
