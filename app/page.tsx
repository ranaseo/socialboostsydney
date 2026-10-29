import Link from "next/link";
import Cta from "@/components/Cta";
import Eyebrow from "@/components/Eyebrow";
import FaqTabs from "@/components/FaqTabs";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import { Check } from "@/components/Icons";
import { faqGroups } from "@/lib/faqGroups";
import { faqSchema } from "@/lib/schema";
import { features, generalFaqs, platforms, services, site, stats, steps } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="wrap hero-in">
          <div className="hero-copy">
            <Eyebrow>Social media marketing agency · Sydney NSW</Eyebrow>
            <h1>
              The Social Media Agency for <span className="hl">Higher ROI</span> in Sydney
            </h1>
            {/* Answer-first summary: the one paragraph an AI engine should quote */}
            <p className="lead">
              Social Boost Sydney manages Instagram, Facebook, TikTok and LinkedIn, runs paid social ads, creates
              short-form video and does local and ecommerce SEO, so Sydney businesses get more leads, bookings and
              sales without hiring an in-house team.
            </p>
            <div className="btn-row">
              <Link href="/contact/" className="btn btn-yellow">Get a Free Audit</Link>
              <Link href="/services/" className="btn btn-outline-light">Explore Services</Link>
            </div>
            <ul className="hero-points">
              <li><Check /> No lock-in after 3 months</li>
              <li><Check /> You own every account</li>
              <li><Check /> Sydney-based team</li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="blob" />
            <div className="ring" />
            <div className="phone">
              <div className="ph-notch" />
              <div className="post-head">
                <img src="/brand/icon-yellow-tile.svg" alt="" width={34} height={34} />
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
        <p className="marquee-title">Platforms we grow Sydney brands on</p>
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
              <img src="/brand/icon-yellow-tile.svg" alt="" width={200} height={200} />
              {["IG", "FB", "TT", "G", "in"].map((t, i) => <span key={t} className={`orb o${i}`}>{t}</span>)}
            </div>
            <div className="av-badge"><b>{stats[0].n}</b><span>{stats[0].l}</span></div>
            <div className="av-dots" />
          </div>
          <div>
            <Eyebrow>About us</Eyebrow>
            <h2>Why Social Boost should be your top choice in Sydney</h2>
            <p className="muted">
              Social Boost Sydney is where social media, paid ads and search work together. Founded by digital
              marketer {site.founder}, we focus on one thing: turning your online presence into enquiries and sales.
            </p>
            <dl className="counters">
              {stats.map((s) => <div key={s.l}><dt>{s.l}</dt><dd>{s.n}</dd></div>)}
            </dl>
            <Link href="/about/" className="btn btn-dark">More About Us</Link>
          </div>
        </div>
        <div className="wrap feat-grid">
          {features.map((f, i) => (
            <div key={f.t} className="feat">
              <span className="feat-n">0{i + 1}</span>
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
              <Eyebrow>Our services</Eyebrow>
              <h2>Services we’re offering in Sydney</h2>
            </div>
            <p className="muted">Pick one service or combine them into a full growth plan for social media and search.</p>
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
              <Eyebrow>Work process</Eyebrow>
              <h2>Our 4-step work process</h2>
            </div>
          </div>
          <ol className="process">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="p-num">0{i + 1}</span>
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
            <Eyebrow>Why choose us</Eyebrow>
            <h2>Leads, not likes</h2>
            <ul className="ticks">
              <li><Check /> Clear monthly reporting on calls, forms, bookings and sales</li>
              <li><Check /> Meta Pixel, Conversions API, TikTok Pixel and GA4 set up properly</li>
              <li><Check /> Content shot on location across Greater Sydney</li>
              <li><Check /> SEO, schema and FAQ content ready for Google AI Overviews and ChatGPT</li>
            </ul>
          </div>
          <div className="areas-card">
            <h3>Areas we serve</h3>
            <ul className="areas">{site.areas.map((a) => <li key={a}>{a}</li>)}</ul>
            <p className="small">Plus remote clients Australia-wide.</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="sec">
        <div className="wrap founder">
          <div className="f-avatar" aria-hidden="true">AR</div>
          <div>
            <Eyebrow>Meet the founder</Eyebrow>
            <h2>{site.founder}</h2>
            <p className="role">Founder · SEO Specialist & Social Media Manager</p>
            <p className="muted">
              {site.founder} is a results-driven SEO specialist and social media manager with expertise in ads,
              branding and digital growth. He has ranked over 5,000 keywords, generated 20,000+ leads through
              strategic campaigns, and trains businesses and marketers in digital marketing.
            </p>
            <ul className="chips-dark">
              <li>SEO</li><li>Meta Ads</li><li>Branding</li><li>Canva & design</li><li>Training</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-soft">
        <div className="wrap faq-wrap">
          <div>
            <Eyebrow>Frequently asked</Eyebrow>
            <h2>Find the answers you need</h2>
            <p className="muted">Short, direct answers to what Sydney business owners ask us most.</p>
            <Link href="/faq/" className="btn btn-dark">All FAQs</Link>
          </div>
          <FaqTabs groups={faqGroups} />
        </div>
      </section>

      <Cta />
    </>
  );
}
