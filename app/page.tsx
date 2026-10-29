import Link from "next/link";
import FaqList from "@/components/FaqList";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { generalFaqs, services, site, steps } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <p className="eyebrow">Social media marketing agency · Sydney NSW</p>
            <h1>
              More enquiries from <span className="hl">social media</span> for Sydney businesses
            </h1>
            {/* Answer-first summary: the one paragraph an AI engine should quote */}
            <p className="lead">
              Social Boost Sydney is a Sydney social media marketing agency that manages Instagram, Facebook, TikTok
              and LinkedIn, runs paid social ads and creates short-form video, so local businesses get more leads,
              bookings and sales without hiring an in-house team.
            </p>
            <div className="hero-cta">
              <Link href="/contact/" className="btn btn-yellow">Get a free audit</Link>
              <Link href="/services/" className="btn btn-ghost">See services</Link>
            </div>
            <ul className="chips" aria-label="Platforms">
              <li>Instagram</li><li>Facebook</li><li>TikTok</li><li>LinkedIn</li><li>Google</li>
            </ul>
          </div>
          <div className="hero-art" aria-hidden="true">
            <img src="/brand/icon-yellow-tile.svg" alt="" width={360} height={360} />
          </div>
        </div>
      </section>

      <section className="quick">
        <div className="wrap">
          <h2 className="sr">Quick facts</h2>
          <dl className="facts">
            <div><dt>Location</dt><dd>Sydney, NSW 2000</dd></div>
            <div><dt>Service area</dt><dd>Greater Sydney and Australia-wide</dd></div>
            <div><dt>Plans from</dt><dd>$790 + GST / month</dd></div>
            <div><dt>Contract</dt><dd>3 months, then month to month</dd></div>
          </dl>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2>Social media marketing services in Sydney</h2>
          <p className="sub">Pick one service or combine them into a full growth plan.</p>
          <div className="grid">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="card">
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="more">{s.priceFrom} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="wrap">
          <h2>How we work</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="num">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap two">
          <div>
            <h2>Why Sydney businesses choose Social Boost</h2>
            <ul className="ticks">
              <li><strong>Local team.</strong> We shoot content on location across Sydney and know the suburbs your customers live in.</li>
              <li><strong>Leads, not likes.</strong> Every campaign is tracked to calls, forms and bookings with Meta Pixel, Conversions API and GA4.</li>
              <li><strong>Search + social.</strong> Your social content, Google Business Profile and website FAQs work together for Google and AI search.</li>
              <li><strong>You own everything.</strong> Accounts, ad accounts and content stay in your name.</li>
            </ul>
          </div>
          <div>
            <h2>Areas we serve</h2>
            <ul className="areas">
              {site.areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="wrap narrow">
          <h2>Frequently asked questions</h2>
          <FaqList faqs={generalFaqs} />
          <p><Link href="/faq/">See all FAQs →</Link></p>
        </div>
      </section>
      <Cta />
    </>
  );
}
