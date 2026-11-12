import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import FaqList from "@/components/FaqList";
import { Arrow, Check, WhatsApp, serviceIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { waLink } from "@/lib/content";
import { getContent } from "@/lib/getContent";

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
  return (
    <>
      <JsonLd data={serviceSchema(c, s)} />
      {s.faqs.length > 0 && <JsonLd data={faqSchema(s.faqs)} />}
      <PageBanner
        title={`${s.name} in ${site.address.addressLocality}`}
        crumbs={[{ name: "Services", path: "/services/" }, { name: s.name, path: `/services/${s.slug}/` }]}
        lead={s.answer}
      >
        <p className="price">{s.priceFrom}</p>
      </PageBanner>
      <section className="sec">
        <div className="wrap detail">
          <article className="detail-main">
            {s.image ? (
              <img src={s.image} alt={s.name} className="detail-img" width={1200} height={630} />
            ) : (
              <div className="detail-hero" aria-hidden="true">
                <span className="dh-ico">{serviceIcon(s)}</span>
                <img src={c.brand.icon} alt="" width={140} height={140} />
              </div>
            )}
            <h2>What’s included</h2>
            <ul className="ticks">{s.includes.map((i) => <li key={i}><Check /> {i}</li>)}</ul>
            <h2>Who it’s for</h2>
            <ul className="areas">{s.forWho.map((i) => <li key={i}>{i}</li>)}</ul>
            <h2>How it works</h2>
            <ol className="mini-steps">
              {steps.map((st, i) => <li key={st.t}><b>{String(i + 1).padStart(2, "0")}. {st.t}</b> {st.d}</li>)}
            </ol>
            {s.faqs.length > 0 && (
              <>
                <h2>{s.name}: common questions</h2>
                <FaqList faqs={s.faqs} />
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
            <div className="side-cta">
              <img src={c.brand.iconPlain} alt="" width={64} height={64} />
              <h2 className="side-h">Need help with {s.name}?</h2>
              <p>{c.servicesPage.sidebarTitle}</p>
              <a href={waLink(site.whatsapp, `Hi, I need help with ${s.name}.`)} target="_blank" rel="noopener" className="side-phone"><WhatsApp size={22} /> {site.phoneDisplay}</a>
              <Link href={c.header.ctaHref} className="btn btn-dark">{c.header.ctaLabel}</Link>
            </div>
          </aside>
        </div>
      </section>
      <Cta c={c} />
    </>
  );
}
