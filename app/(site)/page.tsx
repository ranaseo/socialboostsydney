import Link from "next/link";
import Cta from "@/components/Cta";
import Eyebrow from "@/components/Eyebrow";
import FaqTabs from "@/components/FaqTabs";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import { Check } from "@/components/Icons";
import FounderAvatar from "@/components/FounderAvatar";
import { faqGroups } from "@/lib/content";
import { getContent } from "@/lib/getContent";
import { faqSchema } from "@/lib/schema";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const c = await getContent();
  return { title: c.seo.home.title, description: c.seo.home.description, alternates: { canonical: "/" } };
}

export default async function Home() {
  const c = await getContent();
  const { features, generalFaqs, platforms, services, stats, steps, home: h } = c;
  const site = c.business;
  return (
    <>
      {generalFaqs.length > 0 && <JsonLd data={faqSchema(generalFaqs)} />}

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="wrap hero-in">
          <div className="hero-copy">
            <Eyebrow>{h.eyebrow}</Eyebrow>
            <h1>
              {h.heroTitleBefore}<span className="hl">{h.heroTitleHighlight}</span>{h.heroTitleAfter}
            </h1>
            {/* Answer-first summary: the one paragraph an AI engine should quote */}
            <p className="lead">{h.heroLead}</p>
            <div className="btn-row">
              <Link href={h.primaryCta.href} className="btn btn-yellow">{h.primaryCta.label}</Link>
              <Link href={h.secondaryCta.href} className="btn btn-outline-light">{h.secondaryCta.label}</Link>
            </div>
            <ul className="hero-points">
              {h.heroPoints.map((p) => <li key={p}><Check /> {p}</li>)}
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="blob" />
            <div className="ring" />
            <div className="phone">
              <div className="ph-notch" />
              <div className="post-head">
                <img src={c.brand.icon} alt="" width={34} height={34} />
                <div><b>socialboostsydney</b><small>Sponsored · Sydney</small></div>
              </div>
              <div className="post-img">
                <svg viewBox="0 0 200 140" width="100%" height="100%">
                  <rect width="200" height="140" fill="#16171D" />
                  {[22, 38, 30, 56, 48, 74, 92].map((h, i) => (
                    <rect key={i} x={18 + i * 25} y={120 - h} width="14" height={h} rx="3" fill={i === 6 ? "#FFE500" : "#3a3b44"} />
                  ))}
                  <path d="M20 96 L60 80 L100 86 L140 52 L180 24" stroke="#FFE500" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <path d="M168 20 L184 22 L180 38" stroke="#FFE500" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="post-actions"><span>♥</span><span>💬</span><span>↗</span><span className="save">🔖</span></div>
              <div className="post-lines"><i /><i /><i className="short" /></div>
              <div className="post-btn">Book now</div>
            </div>
            <div className="float f1"><span className="fi">🔔</span><div><b>New enquiry</b><small>from Meta lead ad</small></div></div>
            <div className="float f2"><span className="fi y">▶</span><div><b>Reel published</b><small>Instagram + TikTok</small></div></div>
            <div className="float f3"><span className="fi">📍</span><div><b>Google Maps</b><small>Profile optimised</small></div></div>
          </div>
        </div>
      </section>

      {/* PLATFORM MARQUEE */}
      <section className="marquee" aria-label="Platforms we work with">
        <p className="marquee-title">{h.marqueeTitle}</p>
        <div className="marquee-track">
          {[...platforms, ...platforms].map((p, i) => (
            <span key={i} aria-hidden={i >= platforms.length}>{p}<em>✦</em></span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec">
        <div className="wrap about">
          <div className="about-visual" aria-hidden="true">
            <div className="av-card">
              <img src={c.brand.icon} alt="" width={200} height={200} />
              {["IG", "FB", "TT", "G", "in"].map((t, i) => <span key={t} className={`orb o${i}`}>{t}</span>)}
            </div>
            {stats[0] && <div className="av-badge"><b>{stats[0].n}</b><span>{stats[0].l}</span></div>}
            <div className="av-dots" />
          </div>
          <div>
            <Eyebrow>{h.aboutEyebrow}</Eyebrow>
            <h2>{h.aboutTitle}</h2>
            <p className="muted">{h.aboutText}</p>
            <dl className="counters">
              {stats.map((s) => <div key={s.l}><dt>{s.l}</dt><dd>{s.n}</dd></div>)}
            </dl>
            <Link href={h.aboutButton.href} className="btn btn-dark">{h.aboutButton.label}</Link>
          </div>
        </div>
        <div className="wrap feat-grid">
          {features.map((f, i) => (
            <div key={f.t} className="feat">
              <span className="feat-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec sec-soft">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow>{h.servicesEyebrow}</Eyebrow>
              <h2>{h.servicesTitle}</h2>
            </div>
            <p className="muted">{h.servicesText}</p>
          </div>
          <div className="svc-grid">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="sec-head center">
            <div>
              <Eyebrow>{h.processEyebrow}</Eyebrow>
              <h2>{h.processTitle}</h2>
            </div>
          </div>
          <ol className="process">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="p-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY + AREAS */}
      <section className="sec why">
        <div className="wrap why-in">
          <div>
            <Eyebrow>{h.whyEyebrow}</Eyebrow>
            <h2>{h.whyTitle}</h2>
            <ul className="ticks">
              {h.whyPoints.map((p) => <li key={p}><Check /> {p}</li>)}
            </ul>
          </div>
          <div className="areas-card">
            <h3>{h.areasTitle}</h3>
            <ul className="areas">{site.areas.map((a) => <li key={a}>{a}</li>)}</ul>
            <p className="small">{h.areasNote}</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="sec">
        <div className="wrap founder">
          <FounderAvatar b={site} />
          <div>
            <Eyebrow>{h.founderEyebrow}</Eyebrow>
            <h2>{site.founder}</h2>
            <p className="role">{site.founderRole}</p>
            <p className="muted">{site.founderBio}</p>
            <ul className="chips-dark">
              {site.founderSkills.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-soft">
        <div className="wrap faq-wrap">
          <div>
            <Eyebrow>{h.faqEyebrow}</Eyebrow>
            <h2>{h.faqTitle}</h2>
            <p className="muted">{h.faqText}</p>
            <Link href="/faq/" className="btn btn-dark">All FAQs</Link>
          </div>
          <FaqTabs groups={faqGroups(c).groups} />
        </div>
      </section>

      <Cta c={c} />
    </>
  );
}
