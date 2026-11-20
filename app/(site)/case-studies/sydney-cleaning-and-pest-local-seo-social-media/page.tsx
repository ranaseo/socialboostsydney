// Premium, hand-built case study page for Sydney Cleaning & Pest Control.
// This static route takes priority over /case-studies/[slug]/ for this slug;
// the hub card, sitemap and llms.txt still come from the admin-editable entry.
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Award, BadgeCheck, BarChart3, Bug, Building2, CalendarDays, Camera, CheckCircle2, ClipboardList,
  Code2, Eye, FileText, Film, Gauge, Globe, Heart, Layers, Lightbulb, LineChart, Link2, MapPin, Megaphone, MessageCircle,
  MousePointerClick, PenTool, Phone, PlayCircle, Repeat, Search, ShieldCheck, Smartphone, Sparkles, Star, Target, TrendingUp, Users, Video,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyCard from "@/components/CaseStudyCard";
import JsonLd from "@/components/JsonLd";
import { Funnel, Gallery, Reveal, SectionNav, type GalleryItem } from "@/components/scp/Interactive";
import { caseStudySchema, visibleCaseStudies } from "@/lib/caseStudies";
import { getContent } from "@/lib/getContent";
import "./scp.css";

const SLUG = "sydney-cleaning-and-pest-local-seo-social-media";
const PATH = `/case-studies/${SLUG}/`;
const IMG = "/case-studies/scp";
const CLIENT = {
  name: "Sydney Cleaning & Pest Control",
  website: "https://sydneycleaningandpest.com/",
  facebook: "https://www.facebook.com/sydneycleaningandpest",
  tiktok: "https://www.tiktok.com/@sydneycleaningandpest",
};
const TITLE = "Sydney Cleaning & Pest Control Case Study: Local SEO, Social Media & Content";
const DESCRIPTION =
  "How Social Boost Sydney grows a local cleaning and pest control brand with local SEO, Facebook and TikTok marketing and 95+ branded social post designs. Strategy, deliverables and verified Search Console data.";

export const metadata: Metadata = {
  title: { absolute: "Sydney Cleaning & Pest Control Case Study | Local SEO & Social Media" },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: "2026-11-16",
    images: [{ url: `${IMG}/lounge-carpet-steam-clean.jpg`, width: 1600, height: 1066, alt: "Carpet steam cleaning in a Sydney lounge room" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${IMG}/lounge-carpet-steam-clean.jpg`] },
};

const nav = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "local-seo", label: "Local SEO" },
  { id: "social", label: "Social Media" },
  { id: "content", label: "Content" },
  { id: "strategy", label: "Strategy" },
  { id: "kpis", label: "KPIs" },
];

const clientServices = [
  "Carpet Steam Cleaning", "Commercial Carpet Cleaning", "Sofa & Upholstery Cleaning", "Rug Cleaning",
  "Mattress Cleaning", "Tile & Grout Cleaning", "End-of-Lease Cleaning", "Pest Control",
];

const challenges = [
  { icon: Building2, t: "A crowded local market", d: "Franchises, directories and hundreds of operators compete for the same Sydney cleaning searches." },
  { icon: Search, t: "Local keyword visibility", d: "Service and suburb searches like “carpet cleaning Blacktown” needed dedicated, relevant pages." },
  { icon: MapPin, t: "Google Maps presence", d: "Most local cleaning jobs start in the Map Pack, so the Business Profile had to be complete and active." },
  { icon: Megaphone, t: "Brand awareness", d: "A family-run business with 30+ years of experience needed to be recognised beyond word of mouth." },
  { icon: ShieldCheck, t: "Trust through content", d: "People let cleaners into their homes. Real photos, reviews and before-and-after proof build that trust." },
  { icon: MousePointerClick, t: "Social to enquiry", d: "Followers and video views only matter when they turn into calls, WhatsApp chats and quote requests." },
];

const seoSteps = [
  { icon: MapPin, k: "A", t: "Google Business Profile Optimisation", d: "Categories, services, service areas, hours, real job photos and regular posts." },
  { icon: Search, k: "B", t: "Local Keyword Research", d: "Service and suburb keywords grouped by intent: carpet, upholstery, end of lease, pest control." },
  { icon: FileText, k: "C", t: "On-Page SEO", d: "Answer-first titles, headings, copy, FAQs and internal links on every service page." },
  { icon: Code2, k: "D", t: "Technical SEO", d: "Speed, mobile layout, indexing, sitemaps and LocalBusiness schema." },
  { icon: Layers, k: "E", t: "Local Landing Pages", d: "Dedicated pages for each service and priority suburb, starting with Blacktown." },
  { icon: Link2, k: "F", t: "Citations & Backlinks", d: "Consistent name, address and phone across Australian directories and local sites." },
  { icon: Star, k: "G", t: "Google Review Management", d: "A simple review request after every job, and a reply to every review." },
  { icon: LineChart, k: "H", t: "Performance Tracking", d: "Search Console, Business Profile insights and call tracking reviewed monthly." },
];

const keywords = [
  "Carpet Cleaning Sydney", "Sofa Cleaning Sydney", "Commercial Carpet Cleaning Sydney", "End of Lease Cleaning Sydney",
  "Pest Control Sydney", "Carpet Cleaning Blacktown", "Upholstery Cleaning Parramatta",
];

const facebook = ["Business Page Optimisation", "Brand Awareness", "Local Audience Targeting", "Lead Generation Campaigns", "Facebook Reels", "Customer Testimonials", "Service Promotion"];
const tiktok = ["Short-form Video Strategy", "Cleaning Transformation Videos", "Before & After Videos", "Educational Content", "Trending Video Concepts", "Brand Awareness", "Video Engagement"];

const gallery: GalleryItem[] = [
  { src: "/case-studies/sydney-cleaning-and-pest-social-posts-1.jpg", alt: "Grid of branded carpet, sofa and mattress cleaning posts with before-and-after photos", caption: "Carpet, sofa and mattress promos with before-and-after job photos", tag: "Post designs", w: 899, h: 868, wide: true, tall: true },
  { src: `${IMG}/lounge-carpet-steam-clean.jpg`, alt: "Technician steam cleaning a lounge room carpet", caption: "Carpet steam cleaning, lounge room", tag: "Job photography", w: 1600, h: 1066, wide: true },
  { src: `${IMG}/technician-steam-cleaning-carpet.jpg`, alt: "Technician steam cleaning office carpet with hoses", caption: "Commercial carpet steam clean", tag: "Job photography", w: 825, h: 1100, tall: true },
  { src: "/case-studies/sydney-cleaning-and-pest-social-posts-2.jpg", alt: "Grid of sofa, lounge, chair, rug and office carpet cleaning posts", caption: "Sofa, lounge, chair, rug and office carpet creatives", tag: "Post designs", w: 903, h: 731, wide: true },
  { src: `${IMG}/carpet-extraction-machine.jpg`, alt: "Hot water extraction machine on site", caption: "Hot water extraction equipment", tag: "Job photography", w: 675, h: 900, tall: true },
  { src: `${IMG}/pest-control-treatment.jpg`, alt: "Technician in protective suit applying pest treatment", caption: "Pest control treatment", tag: "Job photography", w: 415, h: 900, tall: true },
  { src: "/case-studies/sydney-cleaning-and-pest-social-posts-3.jpg", alt: "Grid of pest control, window cleaning and home cleaning posts", caption: "Pest control, window and home cleaning posts", tag: "Post designs", w: 918, h: 728, wide: true },
  { src: `${IMG}/office-carpet-cleaning.jpg`, alt: "Technician cleaning office carpet near a window", caption: "Office carpet cleaning", tag: "Job photography", w: 675, h: 900 },
  { src: `${IMG}/clean-office-carpet.jpg`, alt: "Freshly cleaned office carpet", caption: "The finished result", tag: "Job photography", w: 675, h: 900 },
  { src: `${IMG}/window-cleaning-office.jpg`, alt: "Technician cleaning office windows", caption: "Commercial window cleaning", tag: "Job photography", w: 675, h: 900 },
];

const formats = [
  { icon: Sparkles, t: "Carpet cleaning promos" },
  { icon: Heart, t: "Sofa & upholstery creatives" },
  { icon: Building2, t: "Commercial office designs" },
  { icon: Bug, t: "Pest control posts" },
  { icon: Repeat, t: "Before & after graphics" },
  { icon: Lightbulb, t: "Educational tips" },
  { icon: Smartphone, t: "Story designs" },
  { icon: PlayCircle, t: "Reels thumbnails" },
];

const mix = [
  { l: "Educational & cleaning tips", v: 30, c: "var(--scp-blue)" },
  { l: "Service showcase", v: 25, c: "var(--scp-sky)" },
  { l: "Before & after", v: 20, c: "var(--scp-green)" },
  { l: "Customer testimonials", v: 15, c: "var(--scp-navy-2)" },
  { l: "Promotional content", v: 10, c: "var(--scp-amber)" },
];
// 30-day sample calendar: index into `mix` for each day (keeps the 30/25/20/15/10 split).
const calendar = [0, 1, 2, 0, 3, 1, 4, 0, 2, 1, 0, 3, 2, 1, 0, 4, 1, 2, 0, 3, 1, 0, 2, 4, 1, 0, 3, 2, 0, 1];

const funnel = [
  { key: "discovery", title: "Discovery", text: "People find the business when they search or scroll: in Google results, on Google Maps and in Facebook and TikTok feeds.", points: ["Google Search", "Google Maps", "Facebook", "TikTok"] },
  { key: "engagement", title: "Engagement", text: "They check the work before they call: service pages, Reels, reviews and helpful cleaning tips.", points: ["Website visits", "Reels", "Reviews", "Educational content"] },
  { key: "conversion", title: "Conversion", text: "Every page and post has one clear next step, with a quote reply promised within 2 hours.", points: ["Call", "WhatsApp", "Quote form", "Service enquiries"] },
  { key: "retention", title: "Retention", text: "Happy customers leave reviews, book again and refer friends, which feeds discovery again.", points: ["Customer reviews", "Repeat bookings", "Referrals"] },
];

const kpis = [
  { group: "Local SEO", icon: Search, items: [
    { t: "Organic search visibility", s: "Search Console impressions" },
    { t: "Keyword rankings", s: "Service + suburb keywords" },
    { t: "Google Maps performance", s: "Business Profile views & actions" },
    { t: "Organic website traffic", s: "GA4 organic sessions" },
  ] },
  { group: "Social Media", icon: Users, items: [
    { t: "Reach", s: "Facebook + TikTok" },
    { t: "Engagement", s: "Likes, comments, shares, saves" },
    { t: "Video views", s: "Reels + TikTok" },
    { t: "Profile visits", s: "Page and profile taps" },
  ] },
  { group: "Lead Generation", icon: Target, items: [
    { t: "Calls", s: "Click-to-call + GBP calls" },
    { t: "WhatsApp enquiries", s: "Book Now button chats" },
    { t: "Form submissions", s: "Quote requests" },
    { t: "Qualified leads", s: "Booked or quoted jobs" },
  ] },
];

const services = [
  { icon: Search, t: "Local SEO Management", href: "/services/local-seo/" },
  { icon: MapPin, t: "Google Business Profile Optimisation", href: "/services/local-seo/" },
  { icon: Megaphone, t: "Social Media Marketing", href: "/services/social-media-management/" },
  { icon: Users, t: "Facebook Marketing", href: "/services/facebook-instagram-ads/" },
  { icon: Video, t: "TikTok Marketing", href: "/services/tiktok-marketing/" },
  { icon: Camera, t: "Social Media Content Creation", href: "/services/content-creation/" },
  { icon: PenTool, t: "Graphic Design", href: "/services/content-creation/" },
  { icon: Film, t: "Reels & Video Editing", href: "/services/content-creation/" },
  { icon: CalendarDays, t: "Content Calendar Planning", href: "/services/social-media-management/" },
  { icon: BarChart3, t: "Marketing Performance Reporting", href: "/services/" },
];

function Donut() {
  const r = 70;
  const C = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg viewBox="0 0 200 200" className="scp-donut" role="img" aria-label="Content mix: educational 30%, service showcase 25%, before and after 20%, testimonials 15%, promotional 10%">
      <circle cx="100" cy="100" r={r} fill="none" stroke="var(--scp-line)" strokeWidth="26" />
      {mix.map((m) => {
        const len = (m.v / 100) * C;
        const el = (
          <circle key={m.l} cx="100" cy="100" r={r} fill="none" stroke={m.c} strokeWidth="26" strokeDasharray={`${len - 2} ${C - len + 2}`} strokeDashoffset={-acc} transform="rotate(-90 100 100)" />
        );
        acc += len;
        return el;
      })}
      <text x="100" y="96" textAnchor="middle" className="scp-donut-n">30</text>
      <text x="100" y="118" textAnchor="middle" className="scp-donut-l">posts / month</text>
    </svg>
  );
}

export default async function SydneyCleaningCaseStudy() {
  const c = await getContent();
  const entry = c.caseStudies.find((x) => x.slug === SLUG);
  const related = visibleCaseStudies(c.caseStudies).filter((x) => x.slug !== SLUG).slice(0, 3);
  const schemaEntry = entry ?? null;
  const used = ["local-seo", "social-media-management", "content-creation"].map((s) => c.services.find((x) => x.slug === s)).filter((s) => !!s);
  const u = c.business.url;

  return (
    <div className="scp">
      {schemaEntry && (
        <JsonLd
          data={{
            ...caseStudySchema(c, { ...schemaEntry, title: TITLE, summary: DESCRIPTION, image: `${IMG}/lounge-carpet-steam-clean.jpg` }, used),
            about: {
              "@type": "LocalBusiness",
              name: CLIENT.name,
              url: CLIENT.website,
              sameAs: [CLIENT.facebook, CLIENT.tiktok],
              address: { "@type": "PostalAddress", addressLocality: "Blacktown", addressRegion: "NSW", addressCountry: "AU" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: 5, reviewCount: 52 },
            },
            url: `${u}${PATH}`,
          }}
        />
      )}

      {/* 1. HERO */}
      <section className="scp-hero">
        <div className="scp-bg" aria-hidden="true"><i /><i /><i /></div>
        <div className="scp-wrap scp-hero-in">
          <div className="scp-hero-copy">
            <Breadcrumbs items={[{ name: "Case Studies", path: "/case-studies/" }, { name: "Sydney Cleaning & Pest Control", path: PATH }]} />
            <p className="scp-kicker">Digital marketing case study</p>
            <h1>Growing a Local Cleaning Brand Through <span>Strategic Digital Marketing</span></h1>
            <p className="scp-lead">
              A comprehensive approach to Local SEO, Social Media Marketing and Creative Content Development for{" "}
              <a href={CLIENT.website} target="_blank" rel="noopener">Sydney Cleaning &amp; Pest Control</a>, a family-run cleaning and pest control company in Blacktown, Sydney.
            </p>
            <ul className="scp-tags" aria-label="Services">
              <li><Search size={15} /> Local SEO</li>
              <li><Megaphone size={15} /> Social Media Marketing</li>
              <li><Camera size={15} /> Content Creation</li>
            </ul>
            <div className="scp-btns">
              <a href="#overview" className="scp-btn primary">Explore Case Study <ArrowRight size={18} /></a>
              <a href={CLIENT.website} target="_blank" rel="noopener" className="scp-btn ghost">Visit Client Website <ArrowUpRight size={18} /></a>
            </div>
          </div>
          <div className="scp-hero-visual">
            <div className="scp-hero-img">
              <img src={`${IMG}/technician-steam-cleaning-carpet.jpg`} alt="Sydney Cleaning & Pest technician steam cleaning a commercial carpet" width={825} height={1100} fetchPriority="high" />
            </div>
            <div className="scp-float f1"><span><MapPin size={18} /></span><div><b>Local SEO Strategy</b><small>Search + Google Maps</small></div></div>
            <div className="scp-float f2"><span><TrendingUp size={18} /></span><div><b>Social Media Growth Strategy</b><small>Facebook + TikTok</small></div></div>
            <div className="scp-float f3"><span><Sparkles size={18} /></span><div><b>Creative Content Production</b><small>95+ branded designs</small></div></div>
          </div>
        </div>
      </section>

      <SectionNav items={nav} />

      {/* 2. PROJECT OVERVIEW */}
      <section id="overview" className="scp-sec">
        <div className="scp-wrap scp-overview">
          <Reveal className="scp-overview-copy">
            <p className="scp-kicker">Project overview</p>
            <h2>One partner for search, social and content</h2>
            <p>
              Social Boost Sydney looks after three connected parts of Sydney Cleaning &amp; Pest Control’s marketing: being found on Google, staying
              visible on Facebook and TikTok, and producing the content that makes people trust the team before they call.
            </p>
            <div className="scp-verified">
              <p className="scp-verified-h"><BadgeCheck size={18} /> Verified data</p>
              <dl>
                <div><dd>5,260</dd><dt>Google search impressions</dt></div>
                <div><dd>71</dd><dt>organic clicks</dt></div>
                <div><dd>8.8</dd><dt>average position</dt></div>
                <div><dd>1.4%</dd><dt>click-through rate</dt></div>
              </dl>
              <p className="scp-source">Source: Google Search Console, last 3 months (Aug to Nov 2026).</p>
            </div>
          </Reveal>
          <Reveal className="scp-card scp-info" delay={120}>
            <div className="scp-info-head">
              <img src={`${IMG}/logo.png`} alt="Sydney Cleaning and Pest logo" width={72} height={72} />
              <div><b>{CLIENT.name}</b><small>Client</small></div>
            </div>
            <dl className="scp-info-list">
              <div><dt>Industry</dt><dd>Cleaning &amp; Pest Control</dd></div>
              <div><dt>Location</dt><dd>Sydney, Australia</dd></div>
              <div><dt>Website</dt><dd><a href={CLIENT.website} target="_blank" rel="noopener">sydneycleaningandpest.com</a></dd></div>
              <div><dt>Facebook</dt><dd><a href={CLIENT.facebook} target="_blank" rel="noopener">/sydneycleaningandpest</a></dd></div>
              <div><dt>TikTok</dt><dd><a href={CLIENT.tiktok} target="_blank" rel="noopener">@sydneycleaningandpest</a></dd></div>
              <div><dt>Services</dt><dd className="scp-chips">
                {used.map((s) => <Link key={s.slug} href={`/services/${s.slug}/`}>{s.name}</Link>)}
              </dd></div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 3. ABOUT THE CLIENT */}
      <section id="client" className="scp-sec scp-soft">
        <div className="scp-wrap scp-about">
          <Reveal className="scp-about-img">
            <img src={`${IMG}/lounge-carpet-steam-clean.jpg`} alt="Carpet steam cleaning in a Sydney home" width={1600} height={1066} loading="lazy" />
            <div className="scp-rating"><Star size={18} fill="currentColor" /><b>5.0</b><span>from 52 Google reviews</span></div>
          </Reveal>
          <Reveal delay={100}>
            <p className="scp-kicker">About the client</p>
            <h2>A Trusted Cleaning &amp; Pest Control Service Provider in Sydney</h2>
            <p>
              Sydney Cleaning &amp; Pest Control provides professional cleaning and pest management for residential and commercial customers across
              Greater Sydney, from its base in Blacktown. One licensed, insured crew handles both cleaning and pest work.
            </p>
            <ul className="scp-svc-list">{clientServices.map((s) => <li key={s}><CheckCircle2 size={17} /> {s}</li>)}</ul>
            <dl className="scp-creds">
              <div><Award size={20} /><dd>30+</dd><dt>years of experience</dt></div>
              <div><Star size={20} /><dd>5.0</dd><dt>Google rating</dt></div>
              <div><MessageCircle size={20} /><dd>52</dd><dt>Google reviews</dt></div>
              <div><ShieldCheck size={20} /><dd>Licensed</dd><dt>&amp; insured</dt></div>
            </dl>
            <p className="scp-source">Credentials as stated publicly on <a href={CLIENT.website} target="_blank" rel="noopener">sydneycleaningandpest.com</a>.</p>
          </Reveal>
        </div>
      </section>

      {/* 4. CHALLENGES */}
      <section id="challenges" className="scp-sec">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Marketing challenges</p>
            <h2>Six opportunities we set out to solve</h2>
            <p>Great work and happy customers were already there. The job was to make that visible to the right people at the right moment.</p>
          </Reveal>
          <div className="scp-grid3">
            {challenges.map((ch, i) => (
              <Reveal key={ch.t} className="scp-card scp-challenge" delay={i * 60}>
                <span className="scp-ico"><ch.icon size={22} /></span>
                <h3>{ch.t}</h3>
                <p>{ch.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCAL SEO */}
      <section id="local-seo" className="scp-sec scp-navy">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">01 · Local SEO strategy</p>
            <h2>Building Local Search Visibility Across Sydney</h2>
            <p>An eight-part workflow that connects the Google Business Profile, the website and reviews into one local search system.</p>
          </Reveal>
          <ol className="scp-seo-grid">
            {seoSteps.map((s, i) => (
              <Reveal as="li" key={s.k} className="scp-seo-step" delay={i * 50}>
                <span className="scp-seo-k">{s.k}</span>
                <s.icon size={22} className="scp-seo-i" />
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </ol>

          <div className="scp-seo-bottom">
            <Reveal className="scp-kw">
              <h3>Example keyword clusters</h3>
              <p>Service and suburb searches the pages and profile are built around.</p>
              <ul>{keywords.map((k) => <li key={k}><Search size={14} /> {k}</li>)}</ul>
            </Reveal>
            <Reveal className="scp-map" delay={120}>
              <span className="scp-mock-label">Illustrative mockup, not an actual ranking screenshot</span>
              <div className="scp-map-canvas" aria-hidden="true">
                <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
                  <rect width="400" height="180" fill="#e8eef6" />
                  <path d="M0 120 C80 100 120 140 200 110 S330 70 400 90" stroke="#fff" strokeWidth="14" fill="none" />
                  <path d="M120 0 L160 180 M280 0 L250 180 M0 50 L400 40" stroke="#fff" strokeWidth="8" fill="none" />
                  <path d="M40 150 C120 160 180 30 360 20" stroke="#cfe0f3" strokeWidth="5" fill="none" />
                  <g transform="translate(196 58)"><path d="M0 -26 C-14 -26 -22 -16 -22 -6 C-22 10 0 26 0 26 C0 26 22 10 22 -6 C22 -16 14 -26 0 -26Z" fill="#1d6ff2" /><circle r="8" fill="#fff" /></g>
                  <g transform="translate(90 110)" opacity=".55"><path d="M0 -16 C-9 -16 -14 -10 -14 -4 C-14 6 0 16 0 16 C0 16 14 6 14 -4 C14 -10 9 -16 0 -16Z" fill="#7a8aa3" /></g>
                  <g transform="translate(320 120)" opacity=".55"><path d="M0 -16 C-9 -16 -14 -10 -14 -4 C-14 6 0 16 0 16 C0 16 14 6 14 -4 C14 -10 9 -16 0 -16Z" fill="#7a8aa3" /></g>
                </svg>
              </div>
              <div className="scp-map-search"><Search size={15} /> carpet cleaning near me</div>
              <div className="scp-map-card">
                <img src={`${IMG}/logo.png`} alt="" width={44} height={44} />
                <div>
                  <b>Sydney Cleaning &amp; Pest Control</b>
                  <span className="scp-stars">5.0 <Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /> (52)</span>
                  <small>Carpet cleaning service · Blacktown NSW · Open</small>
                </div>
                <span className="scp-map-actions"><Phone size={15} /><Globe size={15} /></span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL MEDIA MARKETING */}
      <section id="social" className="scp-sec">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">02 · Social media marketing</p>
            <h2>Staying Visible Where Sydney Locals Scroll</h2>
            <p>Two platforms, two jobs: Facebook builds local trust and drives enquiries, TikTok shows the work in action and grows awareness.</p>
          </Reveal>
          <div className="scp-platforms">
            <Reveal className="scp-platform fb">
              <div className="scp-pl-head">
                <span className="scp-pl-logo">f</span>
                <div><h3>Facebook Marketing</h3><a href={CLIENT.facebook} target="_blank" rel="noopener">facebook.com/sydneycleaningandpest <ArrowUpRight size={14} /></a></div>
              </div>
              <div className="scp-pl-mock" aria-hidden="true">
                <div className="scp-pl-post">
                  <div className="scp-pl-row"><img src={`${IMG}/logo.png`} alt="" width={34} height={34} /><div><b>Sydney Cleaning and Pest</b><small>Sponsored · Sydney</small></div></div>
                  <img src={`${IMG}/sofa-upholstery-cleaning.jpg`} alt="" width={1200} height={670} loading="lazy" />
                  <div className="scp-pl-cta"><span>Sofa cleaning across Sydney</span><b>Book now</b></div>
                </div>
              </div>
              <ul>{facebook.map((f) => <li key={f}><CheckCircle2 size={17} /> {f}</li>)}</ul>
            </Reveal>
            <Reveal className="scp-platform tt" delay={120}>
              <div className="scp-pl-head">
                <span className="scp-pl-logo"><PlayCircle size={22} /></span>
                <div><h3>TikTok Marketing</h3><a href={CLIENT.tiktok} target="_blank" rel="noopener">tiktok.com/@sydneycleaningandpest <ArrowUpRight size={14} /></a></div>
              </div>
              <div className="scp-pl-mock" aria-hidden="true">
                <div className="scp-pl-phone">
                  <img src={`${IMG}/office-carpet-hose.jpg`} alt="" width={675} height={900} loading="lazy" />
                  <span className="scp-pl-ba">Before → After</span>
                  <span className="scp-pl-side"><Heart size={18} /><MessageCircle size={18} /><Repeat size={18} /></span>
                  <span className="scp-pl-cap">@sydneycleaningandpest<br /><small>Office carpet, deep steam clean ✨</small></span>
                </div>
              </div>
              <ul>{tiktok.map((f) => <li key={f}><CheckCircle2 size={17} /> {f}</li>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. CONTENT CREATION */}
      <section id="content" className="scp-sec scp-soft">
        <div className="scp-wrap">
          <Reveal className="scp-head scp-head-split">
            <div>
              <p className="scp-kicker">03 · Social media content creation</p>
              <h2>95+ Branded Designs and Real Job Photography</h2>
            </div>
            <p>
              Every design uses the client’s blue and green brand, the phone number, the website and a clear “Book Now”. Real job photos become
              before-and-after proof, the content that wins cleaning jobs.
            </p>
          </Reveal>
          <ul className="scp-formats">
            {formats.map((f) => <li key={f.t}><f.icon size={18} /> {f.t}</li>)}
          </ul>
          <Reveal>
            <Gallery items={gallery} tabs={["Post designs", "Job photography"]} />
          </Reveal>
        </div>
      </section>

      {/* 8. CONTENT STRATEGY */}
      <section id="strategy" className="scp-sec">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Content marketing strategy</p>
            <h2>A 30-Day Content Plan With a Purpose for Every Post</h2>
            <p>A balanced monthly mix keeps the feed helpful, shows the work, proves results and still sells.</p>
          </Reveal>
          <div className="scp-strategy">
            <Reveal className="scp-card scp-mix">
              <Donut />
              <ul>
                {mix.map((m) => (
                  <li key={m.l}><i style={{ background: m.c }} /> <span>{m.l}</span> <b>{m.v}%</b></li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="scp-card scp-cal" delay={120}>
              <div className="scp-cal-head"><CalendarDays size={18} /> <b>Sample content calendar</b> <small>30 days</small></div>
              <ol className="scp-cal-grid">
                {calendar.map((m, d) => (
                  <li key={d} style={{ ["--c" as string]: mix[m].c } as React.CSSProperties} title={`Day ${d + 1}: ${mix[m].l}`}>
                    <span>{d + 1}</span>
                    <small>{mix[m].l.split(" ")[0].replace("&", "")}</small>
                  </li>
                ))}
              </ol>
              <p className="scp-source">Sample plan for illustration. The live calendar is planned monthly with the client.</p>
            </Reveal>
          </div>

          {/* 9. FUNNEL */}
          <Reveal className="scp-head scp-funnel-head" as="div">
            <p className="scp-kicker">Marketing funnel</p>
            <h2>From First Search to Repeat Booking</h2>
          </Reveal>
          <Reveal>
            <Funnel stages={funnel} />
          </Reveal>
        </div>
      </section>

      {/* 10. KPIs */}
      <section id="kpis" className="scp-sec scp-navy">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">KPI &amp; performance tracking</p>
            <h2>What We Measure Every Month</h2>
            <p>The dashboard below shows the tracking framework. Only verified numbers are published, the rest is reported privately to the client.</p>
          </Reveal>
          <div className="scp-dash">
            <div className="scp-dash-bar" aria-hidden="true"><i /><i /><i /><span>Monthly performance report</span></div>
            <div className="scp-dash-grid">
              {kpis.map((g, gi) => (
                <Reveal key={g.group} className="scp-dash-col" delay={gi * 100}>
                  <h3><g.icon size={18} /> {g.group}</h3>
                  {g.items.map((k) => (
                    <div key={k.t} className="scp-kpi">
                      <div><b>{k.t}</b><small>{k.s}</small></div>
                      <span className="scp-kpi-ph" aria-label="Tracked, reported to client"><Gauge size={14} /> Tracked</span>
                      <svg viewBox="0 0 100 24" className="scp-spark" aria-hidden="true"><path d="M0 18 C15 16 25 20 40 14 S65 10 75 12 S92 6 100 8" /></svg>
                    </div>
                  ))}
                </Reveal>
              ))}
            </div>
            <p className="scp-dash-note"><Eye size={15} /> Sample dashboard layout. Lines are placeholders, not performance data.</p>
          </div>
        </div>
      </section>

      {/* 11. SERVICES PROVIDED */}
      <section className="scp-sec">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Services provided</p>
            <h2>Everything Delivered in This Project</h2>
          </Reveal>
          <div className="scp-services">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 40}>
                <Link href={s.href} className="scp-service">
                  <span className="scp-ico"><s.icon size={20} /></span>
                  <b>{s.t}</b>
                  <ArrowUpRight size={18} className="scp-service-go" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="scp-sec scp-cta-sec">
        <div className="scp-wrap">
          <Reveal className="scp-cta">
            <div className="scp-bg" aria-hidden="true"><i /><i /></div>
            <ClipboardList size={34} className="scp-cta-i" />
            <h2>Ready to Grow Your Local Business Online?</h2>
            <p>Let’s build a stronger digital presence for your business through strategic SEO, social media marketing and professional content creation.</p>
            <div className="scp-btns center">
              <Link href={c.header.ctaHref} className="scp-btn light">Start Your Project <ArrowRight size={18} /></Link>
              <Link href="/services/" className="scp-btn outline">View Our Services</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      {related.length > 0 && (
        <section className="scp-sec scp-soft scp-related">
          <div className="scp-wrap">
            <div className="scp-head scp-head-split">
              <div>
                <p className="scp-kicker">More work</p>
                <h2>Related Case Studies</h2>
              </div>
              <Link href="/case-studies/" className="scp-link">All case studies <ArrowRight size={16} /></Link>
            </div>
            <div className="cs-grid">
              {related.map((r) => <CaseStudyCard key={r.slug} cs={r} cta={c.caseStudiesPage.cardCta} exampleLabel={c.caseStudiesPage.exampleLabel} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
