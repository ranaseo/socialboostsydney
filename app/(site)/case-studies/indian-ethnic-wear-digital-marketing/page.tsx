// Premium, hand-built case study page for Indian Ethnic Wear (Sydney).
// This static route takes priority over /case-studies/[slug]/ for this slug;
// the hub card, sitemap and llms.txt still come from the admin-editable entry.
// Only the four Google Search Console figures from the supplied screenshot are
// published as performance data. Everything else is strategy and deliverables.
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Camera, CheckCircle2, Code2, Eye, Facebook, FileText, Gem, Globe, Heart,
  Image as ImageIcon, Info, Instagram, Layers, LineChart, Link2, MapPin, Megaphone, MousePointerClick, PenTool, Percent, Repeat,
  Search, Share2, ShoppingBag, ShoppingCart, Sparkles, Store, Tag, Target, TrendingUp, Users, Youtube, Zap,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyCard from "@/components/CaseStudyCard";
import JsonLd from "@/components/JsonLd";
import CountUp from "@/components/scp/CountUp";
import { Funnel, Gallery, Reveal, SectionNav, type GalleryItem } from "@/components/scp/Interactive";
import { caseStudySchema, visibleCaseStudies } from "@/lib/caseStudies";
import { getContent } from "@/lib/getContent";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "../sydney-cleaning-and-pest-local-seo-social-media/scp.css";
import "./iew.css";

const SLUG = "indian-ethnic-wear-digital-marketing";
const PATH = `/case-studies/${SLUG}/`;
const IMG = "/case-studies/iew";
const CLIENT = {
  name: "Indian Ethnic Wear",
  website: "https://ethnicwear.com.au/",
  facebook: "https://www.facebook.com/indianethnicwear961/",
  instagram: "https://www.instagram.com/indianethnicwear961",
  tiktok: "https://www.tiktok.com/@ethnicwearsydney",
  youtube: "https://www.youtube.com/@IndianEthnicWearSydney/",
  address: "6 Redwood Street, Blacktown, NSW 2148, Australia",
};
const TITLE = "Indian Ethnic Wear Case Study: E-commerce SEO, Social Media & Paid Ads in Sydney";
const DESCRIPTION =
  "How Social Boost Sydney grows Indian Ethnic Wear, an ethnic fashion e-commerce store in Blacktown, with e-commerce SEO, social media content, Facebook and Instagram marketing and paid advertising. Verified Search Console data only.";

// The four reported Google Search Console figures (16-month view in the supplied screenshot).
const GSC = { clicks: 335, impressions: "10.7K", ctr: 3.1, position: 14.1, period: "16 months", range: "12 Aug to 14 Nov 2026 shown on the graph" };

export const metadata: Metadata = {
  title: { absolute: "Indian Ethnic Wear Case Study | E-commerce SEO & Social Media Sydney" },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: "2026-11-16",
    images: [{ url: `${IMG}/web-cover.jpg`, width: 1200, height: 630, alt: "Indian Ethnic Wear social media creatives and Search Console results" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${IMG}/web-cover.jpg`] },
};

const nav = [
  { id: "overview", label: "Overview" },
  { id: "search-console", label: "SEO Dashboard" },
  { id: "seo-strategy", label: "SEO Strategy" },
  { id: "content", label: "Content" },
  { id: "platforms", label: "Platforms" },
  { id: "paid-ads", label: "Paid Ads" },
  { id: "growth", label: "Growth" },
  { id: "results", label: "Results" },
];

const categories = ["Women’s Salwar Kameez", "Premium Silk Suits", "Readymade Kurti Sets", "Sharara & Palazzo Suits", "Sarees & Lehengas", "Men’s Kurta", "Nehru Jackets", "Kids Ethnic Wear"];

const seoPillars = [
  { icon: Search, t: "Keyword Research", kw: true, items: ["Indian Ethnic Wear Sydney", "Salwar Kameez Australia", "Kurti Online Sydney"] },
  { icon: FileText, t: "On-Page SEO", items: ["Product title optimisation", "Meta descriptions", "Heading structure", "Internal linking", "Product descriptions"] },
  { icon: Code2, t: "Technical SEO", items: ["Mobile optimisation", "Website indexing", "Page performance", "Crawlability", "Structured data opportunities"] },
  { icon: MapPin, t: "Local SEO", items: ["Blacktown", "Sydney", "Western Sydney", "Google Business Profile optimisation", "Local keyword targeting"] },
  { icon: ImageIcon, t: "Image SEO", items: ["Product image optimisation", "Alt text", "Descriptive image filenames"] },
];

const seoFlow = [
  { icon: Search, t: "Research", s: "Buyer keywords" },
  { icon: Layers, t: "Structure", s: "Categories & products" },
  { icon: FileText, t: "Optimise", s: "On-page content" },
  { icon: Code2, t: "Fix", s: "Technical health" },
  { icon: Link2, t: "Connect", s: "Internal links & local" },
  { icon: LineChart, t: "Measure", s: "Search Console" },
];

const gallery: GalleryItem[] = [
  { src: `${IMG}/social-creatives-1.jpg`, alt: "Grid of Facebook post designs for readymade kurti sets, sharara suits and new arrivals", caption: "Facebook post designs: kurti sets, sharara suits, new arrivals and price offers", tag: "Post designs", w: 806, h: 776, wide: true, tall: true },
  { src: `${IMG}/hero-sharara.jpg`, alt: "Embroidered chinon sharara suits in four colours, product creative", caption: "Product showcase: embroidered chinon sharara suits", tag: "Product showcase", w: 1000, h: 1000 },
  { src: `${IMG}/diwali-sale.jpg`, alt: "Diwali sale promotional graphic for Ethnic Wear", caption: "Diwali promotional graphic", tag: "Festive campaigns", w: 1000, h: 627, wide: true },
  { src: `${IMG}/mens-kurta.jpg`, alt: "Men’s chikankari kurta collection creative", caption: "Men’s kurta collection creative", tag: "Product showcase", w: 1000, h: 1000 },
  { src: `${IMG}/social-creatives-2.jpg`, alt: "Grid of Instagram fashion creatives for women’s suits, men’s kurtas and lehengas", caption: "Instagram fashion creatives and reels covers", tag: "Post designs", w: 768, h: 807, wide: true, tall: true },
  { src: `${IMG}/navy-anarkali.jpg`, alt: "Navy blue anarkali suit product creative", caption: "New collection: navy anarkali", tag: "Product showcase", w: 1000, h: 1000 },
  { src: `${IMG}/diwali-banner.jpg`, alt: "Diwali promotional banner featuring a family in ethnic wear", caption: "Diwali family campaign banner", tag: "Festive campaigns", w: 1000, h: 381, wide: true },
  { src: `${IMG}/social-creatives-3.jpg`, alt: "Grid of Diwali promotional graphics, new collection announcements and product posts", caption: "Diwali campaigns, new collection announcements and product promos", tag: "Post designs", w: 761, h: 811, wide: true, tall: true },
  { src: `${IMG}/kids-lookbook.jpg`, alt: "Kids’ ethnic wear lookbook creative", caption: "Kids’ ethnic wear lookbook", tag: "Product showcase", w: 1000, h: 1000 },
  { src: `${IMG}/maroon-lehenga.jpg`, alt: "Maroon embroidered lehenga choli editorial creative", caption: "Lehenga editorial creative", tag: "Product showcase", w: 1000, h: 1000 },
  { src: `${IMG}/teal-magenta.jpg`, alt: "Teal and magenta palazzo suits product creative", caption: "Palazzo suits, new collection announcement", tag: "Product showcase", w: 1000, h: 1000 },
  { src: `${IMG}/shop-banner.jpg`, alt: "Ethnic fashion shop Sydney banner with the Blacktown store address", caption: "Store banner: 6 Redwood Street, Blacktown", tag: "Festive campaigns", w: 1000, h: 381, wide: true },
];

const formats = [
  { icon: PenTool, t: "Facebook post designs" },
  { icon: Instagram, t: "Instagram fashion creatives" },
  { icon: Sparkles, t: "New collection announcements" },
  { icon: Tag, t: "Product promotional designs" },
  { icon: Gem, t: "Festive campaigns" },
  { icon: Zap, t: "Diwali promotional graphics" },
  { icon: ShoppingBag, t: "Product showcase content" },
  { icon: Camera, t: "Fashion reels concepts" },
];

const platforms = [
  { cls: "fb", icon: Facebook, name: "Facebook", handle: "facebook.com/indianethnicwear961", href: CLIENT.facebook, strategy: "Community building, new collection drops, festive offers and Shop-linked product posts for Sydney’s Indian community.", format: "Designed product posts, carousels, offer graphics and reels." },
  { cls: "ig", icon: Instagram, name: "Instagram", handle: "@indianethnicwear961", href: CLIENT.instagram, strategy: "A visual lookbook: editorial product creatives, stories for new arrivals and reels that show fabric, embroidery and fit.", format: "Feed creatives, reels, stories and highlights by category." },
  { cls: "tt", icon: null, name: "TikTok", handle: "@ethnicwearsydney", href: CLIENT.tiktok, strategy: "Short-form discovery for festive and wedding shoppers: outfit reveals, styling ideas and collection walkthroughs.", format: "Vertical video, trending audio, outfit transitions." },
  { cls: "yt", icon: Youtube, name: "YouTube", handle: "@IndianEthnicWearSydney", href: CLIENT.youtube, strategy: "Longer product and collection videos that support search and give shoppers a closer look before they buy.", format: "Collection videos, Shorts and product close-ups." },
];

const campaigns = [
  { icon: Megaphone, t: "Brand Awareness" },
  { icon: MousePointerClick, t: "Website Traffic" },
  { icon: ShoppingCart, t: "Sales & Conversion" },
  { icon: Repeat, t: "Remarketing" },
  { icon: Gem, t: "Seasonal Promotions" },
  { icon: Sparkles, t: "New Collection Launch" },
];
const audiences = ["Indian fashion enthusiasts in Australia", "Ethnic fashion shoppers in Sydney", "Wedding and festive shoppers", "Women’s and men’s traditional fashion buyers"];
const adFlow = [
  { icon: Eye, t: "Awareness", s: "Reach new shoppers" },
  { icon: MousePointerClick, t: "Traffic", s: "Visit collections" },
  { icon: ShoppingCart, t: "Conversion", s: "Add to cart & buy" },
  { icon: Repeat, t: "Remarketing", s: "Bring them back" },
];

const pillars = [
  { cls: "p1", icon: Search, t: "Organic Search Growth", s: "E-commerce & local SEO" },
  { cls: "p2", icon: Users, t: "Social Media Growth", s: "Content & community" },
  { cls: "p3", icon: Target, t: "Paid Advertising Growth", s: "Meta campaigns" },
  { cls: "p4", icon: ShoppingCart, t: "E-commerce Conversion Growth", s: "Product pages & checkout" },
];
const kpiList = [
  { icon: TrendingUp, t: "Organic traffic" },
  { icon: Eye, t: "Search impressions" },
  { icon: BarChart3, t: "Keyword positions" },
  { icon: Share2, t: "Social media reach" },
  { icon: Heart, t: "Engagement" },
  { icon: Percent, t: "Website conversion rate" },
  { icon: ShoppingCart, t: "Add-to-cart" },
  { icon: Target, t: "Advertising ROAS" },
];

const funnel = [
  { key: "discover", title: "Discover", text: "Shoppers find the store on Google for product and category searches, and see new collections in their Facebook, Instagram and TikTok feeds.", points: ["Google Search", "Instagram", "Facebook", "TikTok", "Paid reach"] },
  { key: "browse", title: "Browse", text: "Category and product pages, lookbook creatives and reels show fabric, embroidery and fit before anyone visits the Blacktown store or buys online.", points: ["Category pages", "Product pages", "Reels", "Lookbooks"] },
  { key: "buy", title: "Buy", text: "Clear product information, pricing and a simple checkout turn interest into orders, with remarketing for shoppers who left items in the cart.", points: ["Add to cart", "Checkout", "Remarketing", "Store visit"] },
  { key: "return", title: "Return", text: "Festive and seasonal campaigns bring customers back for Diwali, weddings and new arrivals, and happy customers share and recommend.", points: ["Festive campaigns", "New collections", "Repeat orders"] },
];

const services = [
  { icon: ShoppingBag, t: "E-commerce SEO", href: "/services/ecommerce-seo/" },
  { icon: Code2, t: "Technical SEO", href: "/services/ecommerce-seo/" },
  { icon: MapPin, t: "Local SEO: Sydney & Blacktown", href: "/services/local-seo/" },
  { icon: Search, t: "Keyword Research", href: "/services/ecommerce-seo/" },
  { icon: FileText, t: "On-Page SEO", href: "/services/ecommerce-seo/" },
  { icon: Tag, t: "Product & Category SEO", href: "/services/ecommerce-seo/" },
  { icon: Megaphone, t: "Social Media Marketing", href: "/services/social-media-management/" },
  { icon: PenTool, t: "Social Media Content Creation", href: "/services/content-creation/" },
  { icon: Facebook, t: "Facebook & Instagram Marketing", href: "/services/facebook-instagram-ads/" },
  { icon: Target, t: "Paid Advertising & Performance Marketing", href: "/services/facebook-instagram-ads/" },
  { icon: Sparkles, t: "Brand Awareness", href: "/services/social-media-management/" },
  { icon: TrendingUp, t: "E-commerce Growth Strategy", href: "/services/" },
];

// Recreated shape of the Search Console graph in the supplied screenshot (approximate, for illustration).
const CHART = {
  imp: "M0 95 L1.7 95.5 L3.4 94 L5.1 95.8 L6.8 94.4 L8.5 94.9 L10.2 95.8 L11.9 94.5 L13.6 95.9 L15.3 94.7 L16.9 95.8 L18.6 95.7 L20.3 94.7 L22 93.5 L23.7 95.6 L25.4 95.3 L27.1 94.1 L28.8 93.2 L30.5 94.3 L32.2 94.8 L33.9 93.1 L35.6 95.9 L37.3 93.4 L39 95.1 L40.7 95.6 L42.4 95.6 L44.1 95.1 L45.8 93.6 L47.5 95.5 L49.2 94.3 L50.8 94.1 L52.5 94.9 L54.2 94.4 L55.9 95.8 L57.6 95.8 L59.3 95.4 L61 94 L62.7 94.7 L64.4 95.1 L66.1 94.2 L67.8 94.6 L69.5 95.1 L71.2 90.7 L72.9 86.4 L74.6 77.2 L76.3 70.7 L78 62.7 L79.7 50.3 L81.4 43.5 L83.1 31.2 L84.7 19.3 L86.4 12.1 L88.1 4 L89.8 6 L91.5 3 L93.2 15.9 L94.9 26.8 L96.6 32.1 L98.3 49 L100 56.9",
  clk: "M0 85.9 L1.7 96.6 L3.4 97.5 L5.1 97.6 L6.8 97.8 L8.5 95.7 L10.2 97.6 L11.9 97.3 L13.6 96.8 L15.3 95.4 L16.9 97.8 L18.6 96.7 L20.3 96.4 L22 95.3 L23.7 95.5 L25.4 95.4 L27.1 97.2 L28.8 96.8 L30.5 96.9 L32.2 95.3 L33.9 95.1 L35.6 97.5 L37.3 97.5 L39 97.3 L40.7 97.3 L42.4 96.5 L44.1 96.2 L45.8 97.2 L47.5 98 L49.2 96.7 L50.8 96.9 L52.5 96.3 L54.2 95.1 L55.9 95.9 L57.6 96.5 L59.3 96.1 L61 96 L62.7 97.8 L64.4 95.3 L66.1 95.7 L67.8 95.4 L69.5 95.6 L71.2 96.8 L72.9 94.3 L74.6 87 L76.3 80.2 L78 70.1 L79.7 64.9 L81.4 54.1 L83.1 45.3 L84.7 21.5 L86.4 23.5 L88.1 20.9 L89.8 19.4 L91.5 33.3 L93.2 49.3 L94.9 54.4 L96.6 56.6 L98.3 73.1 L100 75",
  ctr: "M0 94.8 L1.7 91.7 L3.4 33.9 L5.1 20.5 L6.8 90.4 L8.5 93.9 L10.2 93.1 L11.9 94.7 L13.6 89.8 L15.3 91.7 L16.9 41.8 L18.6 22.5 L20.3 88.1 L22 89.2 L23.7 89.6 L25.4 89.5 L27.1 90.1 L28.8 94.2 L30.5 91.9 L32.2 93.2 L33.9 53.9 L35.6 44.6 L37.3 90.5 L39 88.3 L40.7 92.4 L42.4 88.5 L44.1 88.1 L45.8 88.4 L47.5 93.1 L49.2 94.2 L50.8 47.1 L52.5 30 L54.2 88.8 L55.9 89.3 L57.6 92.2 L59.3 90.8 L61 51.6 L62.7 18.6 L64.4 89.7 L66.1 35.9 L67.8 94.6 L69.5 89.7 L71.2 93.3 L72.9 60.3 L74.6 67.2 L76.3 63.3 L78 70.5 L79.7 61.1 L81.4 70.2 L83.1 60.2 L84.7 67.8 L86.4 70.4 L88.1 60.3 L89.8 65.7 L91.5 66.8 L93.2 79.9 L94.9 79.6 L96.6 77.8 L98.3 78.5 L100 73",
  pos: "M0 30.7 L1.7 29.7 L3.4 30 L5.1 27.8 L6.8 31.5 L8.5 30.6 L10.2 21.2 L11.9 30.4 L13.6 30.2 L15.3 34.1 L16.9 39 L18.6 48.2 L20.3 44 L22 54.2 L23.7 45.4 L25.4 39.1 L27.1 36.3 L28.8 29.2 L30.5 23.7 L32.2 20 L33.9 18.8 L35.6 18.5 L37.3 32 L39 35 L40.7 32 L42.4 30.7 L44.1 33.5 L45.8 46.7 L47.5 47.8 L49.2 35.2 L50.8 42.5 L52.5 48.3 L54.2 36.3 L55.9 36.8 L57.6 34.4 L59.3 28.7 L61 24.3 L62.7 35 L64.4 20.4 L66.1 28.9 L67.8 19.8 L69.5 35.3 L71.2 31.9 L72.9 39.8 L74.6 37.8 L76.3 53 L78 33.9 L79.7 43.8 L81.4 38.9 L83.1 40.4 L84.7 30.5 L86.4 26.7 L88.1 29.9 L89.8 29.8 L91.5 25.3 L93.2 18.9 L94.9 32.4 L96.6 30.3 L98.3 36.4 L100 36.6",
};
const chartDates = ["12 Aug", "2 Sep", "23 Sep", "14 Oct", "4 Nov", "14 Nov"];

function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.4 2.3 1.9 3.9 4.2 4.1v3.1c-1.5 0-2.9-.5-4.1-1.3v6.3c0 3.4-2.8 6-6.1 6S4.4 18.6 4.4 15.2s2.8-6 6.1-6c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V3h3.1z" />
    </svg>
  );
}

function Chart() {
  return (
    <div className="iew-chart">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Recreated Search Console graph: impressions and clicks rise sharply from late October 2026, CTR spikes earlier, average position fluctuates">
        <defs>
          <linearGradient id="iew-imp-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7c3aed" stopOpacity=".22" />
            <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="grid">{[20, 40, 60, 80].map((y) => <line key={y} x1="0" x2="100" y1={y} y2={y} />)}</g>
        <path className="area" d={`${CHART.imp} L100 100 L0 100 Z`} />
        <path d={CHART.pos} stroke="#ea580c" strokeOpacity=".9" />
        <path d={CHART.ctr} stroke="#0f766e" strokeOpacity=".9" />
        <path d={CHART.imp} stroke="#7c3aed" />
        <path d={CHART.clk} stroke="#2563eb" />
      </svg>
    </div>
  );
}

export default async function IndianEthnicWearCaseStudy() {
  const c = await getContent();
  const entry = c.caseStudies.find((x) => x.slug === SLUG);
  const related = visibleCaseStudies(c.caseStudies).filter((x) => x.slug !== SLUG).slice(0, 3);
  const used = ["ecommerce-seo", "social-media-management", "content-creation", "facebook-instagram-ads"].map((s) => c.services.find((x) => x.slug === s)).filter((s) => !!s);
  const u = c.business.url;

  return (
    <div className="scp iew">
      {entry && (
        <JsonLd
          data={{
            ...caseStudySchema(c, { ...entry, title: TITLE, summary: DESCRIPTION, image: `${IMG}/web-cover.jpg` }, used),
            about: {
              "@type": "OnlineStore",
              name: CLIENT.name,
              url: CLIENT.website,
              sameAs: [CLIENT.facebook, CLIENT.instagram, CLIENT.tiktok, CLIENT.youtube],
              address: { "@type": "PostalAddress", streetAddress: "6 Redwood Street", addressLocality: "Blacktown", addressRegion: "NSW", postalCode: "2148", addressCountry: "AU" },
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
            <Breadcrumbs items={[{ name: "Case Studies", path: "/case-studies/" }, { name: "Indian Ethnic Wear", path: PATH }]} />
            <p className="scp-kicker">Digital marketing case study</p>
            <h1>Growing an Indian Ethnic Fashion Brand Through <span>Digital Marketing</span></h1>
            <p className="scp-lead">
              A strategic combination of E-commerce SEO, Social Media Marketing, Creative Content Production and Paid Advertising to strengthen
              online visibility and drive sustainable growth for{" "}
              <a href={CLIENT.website} target="_blank" rel="noopener">Indian Ethnic Wear</a> in Sydney, Australia.
            </p>
            <ul className="iew-meta">
              <li><small>Industry</small><b>Fashion &amp; E-commerce</b></li>
              <li><small>Location</small><b>Sydney, Australia</b></li>
              <li><small>Project</small><b>Indian Ethnic Wear</b></li>
              <li><small>Services</small><b>SEO, SMM, Content &amp; Paid Ads</b></li>
            </ul>
            <div className="scp-btns">
              <a href="#overview" className="scp-btn primary">Explore Case Study <ArrowRight size={18} /></a>
              <a href={CLIENT.website} target="_blank" rel="noopener" className="scp-btn ghost">Visit Live Website <ArrowUpRight size={18} /></a>
            </div>
          </div>
          <div className="scp-hero-visual">
            <div className="iew-hero-art">
              <img className="a1" src={`${IMG}/hero-sharara.jpg`} alt="Embroidered chinon sharara suit product creative" width={1000} height={1000} fetchPriority="high" />
              <img className="a2" src={`${IMG}/social-creatives-1.jpg`} alt="Grid of Facebook post designs for Indian Ethnic Wear" width={806} height={776} />
              <img className="a3" src={`${IMG}/social-creatives-3.jpg`} alt="Grid of Diwali and new collection social creatives" width={761} height={811} />
              <img className="a4" src={`${IMG}/mens-kurta.jpg`} alt="Men’s kurta collection creative" width={1000} height={1000} loading="lazy" />
              <div className="iew-badge"><span><Sparkles size={18} /></span><div><b>Creative content production</b><small>Facebook, Instagram, TikTok, YouTube</small></div></div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav items={nav} />

      {/* 2. OVERVIEW */}
      <section id="overview" className="scp-sec">
        <div className="scp-wrap scp-overview">
          <Reveal className="scp-overview-copy">
            <p className="scp-kicker">Project overview</p>
            <h2>Search, social, content and ads working as one system</h2>
            <p>
              Indian Ethnic Wear is an ethnic fashion e-commerce business based in Blacktown, Sydney. It sells women’s salwar kameez, premium silk
              suits, readymade kurti sets, sharara and palazzo suits, sarees and lehengas, men’s kurtas, Nehru jackets and kids’ ethnic wear, online
              and from its Redwood Street store.
            </p>
            <p>
              Social Boost Sydney looks after the whole digital side: getting product and category pages found on Google, producing the creatives
              that fill the brand’s social channels, and running paid campaigns that bring festive, wedding and everyday shoppers to the store.
            </p>
            <div className="scp-verified">
              <p className="scp-verified-h"><BadgeCheck size={18} /> Reported Search Console figures</p>
              <dl>
                <div><dd>{GSC.clicks}</dd><dt>total clicks</dt></div>
                <div><dd>{GSC.impressions}</dd><dt>total impressions</dt></div>
                <div><dd>{GSC.ctr}%</dd><dt>average CTR</dt></div>
                <div><dd>{GSC.position}</dd><dt>average position</dt></div>
              </dl>
              <p className="scp-source">Source: Google Search Console, {GSC.period} selected. No other traffic, ranking or sales figures are published on this page.</p>
            </div>
          </Reveal>
          <Reveal className="scp-card scp-info" delay={120}>
            <div className="scp-info-head">
              <img src={`${IMG}/logo.png`} alt="Ethnic Wear logo" width={168} height={56} />
              <div><b>{CLIENT.name}</b><small>Client</small></div>
            </div>
            <dl className="scp-info-list">
              <div><dt>Industry</dt><dd>Fashion &amp; E-commerce</dd></div>
              <div><dt>Location</dt><dd>{CLIENT.address}</dd></div>
              <div><dt>Website</dt><dd><a href={CLIENT.website} target="_blank" rel="noopener">ethnicwear.com.au</a></dd></div>
              <div><dt>Products</dt><dd className="iew-cats">{categories.map((k) => <span key={k}>{k}</span>)}</dd></div>
              <div><dt>Services</dt><dd className="scp-chips">
                {used.map((s) => <Link key={s.slug} href={`/services/${s.slug}/`}>{s.name}</Link>)}
              </dd></div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 3. SEO PERFORMANCE DASHBOARD */}
      <section id="search-console" className="scp-sec scp-soft">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">SEO performance dashboard</p>
            <h2>Google Search Console, {GSC.period}</h2>
            <p>The four figures below are the reported totals from the supplied Search Console screenshot, with the 16-month range selected. The graph is a recreation of its shape.</p>
          </Reveal>
          <div className="iew-kpis">
            <Reveal className="iew-kpi blue"><p className="iew-kpi-h">Total clicks <MousePointerClick size={18} /></p><p className="iew-kpi-n"><CountUp value={GSC.clicks} /></p><small>Clicks from Google Search</small></Reveal>
            <Reveal className="iew-kpi purple" delay={80}><p className="iew-kpi-h">Total impressions <Eye size={18} /></p><p className="iew-kpi-n"><CountUp value={10.7} decimals={1} suffix="K" /></p><small>Times the store appeared in results</small></Reveal>
            <Reveal className="iew-kpi teal" delay={160}><p className="iew-kpi-h">Average CTR <Percent size={18} /></p><p className="iew-kpi-n"><CountUp value={GSC.ctr} decimals={1} suffix="%" /></p><small>Clicks ÷ impressions</small></Reveal>
            <Reveal className="iew-kpi orange" delay={240}><p className="iew-kpi-h">Average position <BarChart3 size={18} /></p><p className="iew-kpi-n"><CountUp value={GSC.position} decimals={1} /></p><small>Average ranking across queries</small></Reveal>
          </div>
          <Reveal className="iew-dash" delay={120}>
            <div className="iew-dash-top">
              <span className="pill">24 hours</span><span className="pill">7 days</span><span className="pill">28 days</span><span className="pill">3 months</span><span className="pill on">16 months</span>
              <span className="right">
                <span className="iew-legend"><i style={{ background: "#2563eb" }} /> Clicks</span>
                <span className="iew-legend"><i style={{ background: "#7c3aed" }} /> Impressions</span>
                <span className="iew-legend"><i style={{ background: "#0f766e" }} /> CTR</span>
                <span className="iew-legend"><i style={{ background: "#ea580c" }} /> Position</span>
              </span>
            </div>
            <Chart />
            <div className="iew-axis" aria-hidden="true">{chartDates.map((d) => <span key={d}>{d}</span>)}</div>
            <div className="iew-dash-foot">
              <p><b>Recreated graph, not the original.</b> Line shapes follow the screenshot ({GSC.range}) and are approximate. Impressions and clicks climb sharply from late October 2026 as newly optimised product and category pages are indexed.</p>
              <a className="iew-shot" href={`${IMG}/search-console-16-months.jpg`} target="_blank" rel="noopener"><img src={`${IMG}/search-console-16-months.jpg`} alt="Original Google Search Console screenshot" width={1533} height={562} loading="lazy" /> View original screenshot <ArrowUpRight size={14} /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. E-COMMERCE SEO STRATEGY */}
      <section id="seo-strategy" className="scp-sec scp-navy">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">E-commerce SEO strategy</p>
            <h2>Five SEO Workstreams for a Fashion Store</h2>
            <p>Keyword research sets the targets, on-page and technical work make every product and category page eligible to rank, and local and image SEO cover how Sydney shoppers actually search.</p>
          </Reveal>
          <div className="iew-seo">
            {seoPillars.map((p, i) => (
              <Reveal key={p.t} className={`iew-seo-card${p.kw ? " kw" : ""}`} delay={i * 60}>
                <span className="scp-ico"><p.icon size={22} /></span>
                <h3>{p.t}</h3>
                <ul>{p.items.map((it) => <li key={it}>{p.kw ? <Search size={14} /> : <CheckCircle2 size={15} />} {it}</li>)}</ul>
              </Reveal>
            ))}
          </div>
          <Reveal as="div">
            <ol className="iew-flow" aria-label="SEO workflow">
              {seoFlow.map((f) => (
                <li key={f.t}><span><f.icon size={22} /></span><b>{f.t}</b><small>{f.s}</small></li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 5. SOCIAL MEDIA CONTENT */}
      <section id="content" className="scp-sec">
        <div className="scp-wrap">
          <Reveal className="scp-head scp-head-split">
            <div>
              <p className="scp-kicker">Social media marketing &amp; content creation</p>
              <h2>A Lookbook Feed Built From the Real Products</h2>
            </div>
            <p>
              Every creative uses the store’s own product photography, gold-and-ink branding, the Blacktown address and a clear price or “Shop Now”.
              The grids below are screenshots of the published work.
            </p>
          </Reveal>
          <ul className="scp-formats">
            {formats.map((f) => <li key={f.t}><f.icon size={18} /> {f.t}</li>)}
          </ul>
          <Reveal>
            <Gallery items={gallery} tabs={["Post designs", "Product showcase", "Festive campaigns"]} />
          </Reveal>
        </div>
      </section>

      {/* 6. PLATFORMS */}
      <section id="platforms" className="scp-sec scp-soft">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Social media platforms</p>
            <h2>Four Channels, One Brand Story</h2>
            <p>Each platform has its own job and content format, so the same collection drop reaches shoppers wherever they scroll.</p>
          </Reveal>
          <div className="iew-platforms">
            {platforms.map((p, i) => (
              <Reveal key={p.name} className={`iew-platform ${p.cls}`} delay={i * 70}>
                <span className="logo">{p.icon ? <p.icon size={26} /> : <TikTokIcon />}</span>
                <h3>{p.name}</h3>
                <p className="handle">{p.handle}</p>
                <dl>
                  <div><dt>Marketing strategy</dt><dd>{p.strategy}</dd></div>
                  <div><dt>Content format</dt><dd>{p.format}</dd></div>
                </dl>
                <a className="visit" href={p.href} target="_blank" rel="noopener">Visit Profile <ArrowUpRight size={16} /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PAID ADVERTISING */}
      <section id="paid-ads" className="scp-sec">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Paid advertising strategy</p>
            <h2>Performance Campaigns for Every Stage of the Shopper Journey</h2>
            <p>Meta campaigns are planned by objective and audience, then the creatives from the content library do the selling.</p>
          </Reveal>
          <div className="iew-ads">
            <Reveal>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 14 }}>Campaign types</h3>
              <ul className="iew-ads-types">
                {campaigns.map((k) => <li key={k.t}><k.icon size={22} /> {k.t}</li>)}
              </ul>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Target audiences</h3>
              <ul className="iew-aud">
                {audiences.map((a) => <li key={a}><Users size={17} /> {a}</li>)}
              </ul>
              <p className="iew-note"><Info size={15} /> No advertising results, budgets, ROAS, purchases or CPA are published. Campaign performance is reported privately to the client.</p>
            </Reveal>
            <Reveal className="iew-ad-mock" delay={120}>
              <div className="iew-ad-card" aria-hidden="true">
                <div className="row"><img src={`${IMG}/logo.png`} alt="" width={34} height={34} /><div><b>Indian Ethnic Wear</b><small>Sponsored · Sydney</small></div></div>
                <p className="copy">Diwali Sale is on ✨ Elegant festive styles for the whole family, in store at Blacktown and online Australia-wide.</p>
                <img src={`${IMG}/diwali-sale.jpg`} alt="" width={1000} height={627} loading="lazy" />
                <div className="cta"><div><small>ethnicwear.com.au</small><b style={{ background: "none", padding: 0 }}>Diwali Collection</b></div><b>Shop Now</b></div>
              </div>
              <ol className="iew-ad-flow" aria-label="Campaign flow">
                {adFlow.map((f) => <li key={f.t}><f.icon size={18} /><b>{f.t}</b><small>{f.s}</small></li>)}
              </ol>
              <p className="iew-note"><Eye size={15} /> Illustrative ad mockup using a real campaign creative.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. GROWTH STRATEGY */}
      <section id="growth" className="scp-sec scp-navy">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Growth strategy</p>
            <h2>A Four-Pillar E-commerce Growth Framework</h2>
            <p>Search brings intent, social builds desire, ads add scale and the store converts. Each pillar feeds the others.</p>
          </Reveal>
          <div className="iew-growth">
            <Reveal className="iew-pillars">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="34" />
                <line x1="18" y1="18" x2="82" y2="82" /><line x1="82" y1="18" x2="18" y2="82" />
                <line x1="18" y1="18" x2="82" y2="18" /><line x1="18" y1="82" x2="82" y2="82" />
                <line x1="18" y1="18" x2="18" y2="82" /><line x1="82" y1="18" x2="82" y2="82" />
              </svg>
              {pillars.map((p) => (
                <div key={p.t} className={`iew-pillar ${p.cls}`}><span><p.icon size={18} /></span><b>{p.t}</b><small>{p.s}</small></div>
              ))}
              <div className="iew-hub"><div><small>Growth</small><b>Indian Ethnic Wear</b></div></div>
            </Reveal>
            <Reveal delay={120}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>KPI measurement framework</h3>
              <p>What we track for each pillar. Values are reported privately to the client, so no KPI figures are shown here.</p>
              <ul className="iew-kpi-list">
                {kpiList.map((k) => <li key={k.t}><k.icon size={17} /><b>{k.t}</b><span>Tracked</span></li>)}
              </ul>
            </Reveal>
          </div>

          <Reveal className="scp-head scp-funnel-head" as="div">
            <p className="scp-kicker">Shopper journey</p>
            <h2>From First Search to Repeat Order</h2>
          </Reveal>
          <Reveal>
            <Funnel stages={funnel} />
          </Reveal>
        </div>
      </section>

      {/* 9. RESULTS */}
      <section id="results" className="scp-sec scp-soft">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Results</p>
            <h2>Verified Search Performance</h2>
            <p>The only performance figures published for this project are the four Google Search Console metrics below.</p>
          </Reveal>
          <div className="iew-results">
            {[
              { icon: MousePointerClick, n: "335", t: "Total clicks", s: "Google Search, 16 months", c: "#1d4ed8" },
              { icon: Eye, n: "10.7K", t: "Total impressions", s: "Google Search, 16 months", c: "#6d28d9" },
              { icon: Percent, n: "3.1%", t: "Average CTR", s: "Clicks ÷ impressions", c: "#0f766e" },
              { icon: BarChart3, n: "14.1", t: "Average position", s: "Across all queries", c: "#ea580c" },
            ].map((r, i) => (
              <Reveal key={r.t} delay={i * 70}>
                <div className="iew-result" style={{ ["--rc" as string]: r.c } as React.CSSProperties}>
                  <span className="scp-ico"><r.icon size={20} /></span>
                  <b className="iew-kpi-n">{r.n}</b>
                  <span className="iew-result-t">{r.t}</span>
                  <small>{r.s}</small>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="iew-results-note"><Info size={17} /> Performance figures are based on the supplied Google Search Console screenshot. Other business growth and advertising results require additional analytics verification.</p>
        </div>
      </section>

      {/* 10. SERVICES */}
      <section className="scp-sec">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Digital marketing services</p>
            <h2>Everything Delivered in This Project</h2>
          </Reveal>
          <div className="scp-services">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 35}>
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

      {/* 11. FINAL CTA */}
      <section className="scp-sec scp-cta-sec">
        <div className="scp-wrap">
          <Reveal className="scp-cta">
            <div className="scp-bg" aria-hidden="true"><i /><i /></div>
            <Store size={34} className="scp-cta-i" />
            <h2>Want to Grow Your E-commerce Business?</h2>
            <p>Let’s build a powerful digital presence through SEO, social media marketing, creative content and performance advertising.</p>
            <div className="scp-btns center">
              <Link href={c.header.ctaHref} className="scp-btn light">Start Your Project <ArrowRight size={18} /></Link>
              <Link href="/services/" className="scp-btn outline">Explore Our Services</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
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
