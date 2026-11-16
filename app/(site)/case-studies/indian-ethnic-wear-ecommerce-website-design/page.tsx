// Premium website design case study for Indian Ethnic Wear (ethnicwear.com.au).
// This static route takes priority over /case-studies/[slug]/ for this slug;
// the hub card, sitemap and llms.txt still come from the admin-editable entry.
// Every screenshot is a real render of the live store's own pages. Platform
// facts (WordPress, WooCommerce, Elementor, Rank Math, AUD, 121 products,
// 21 categories, the store pages) were checked on the site itself. No traffic,
// sales, conversion, ranking or performance figures are published.
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Baby, BadgeCheck, BookOpen, CheckCircle2, Code2, Contact, FileText, Gem, Globe, Hand, Image as ImageIcon,
  Info, Layers, LayoutGrid, Link2, ListTree, MapPin, Menu, Monitor, MousePointerClick, Navigation, Package, PenTool, Receipt, RotateCcw,
  Search, Shirt, ShoppingBag, ShoppingCart, Smartphone, Sparkles, Store, Tag, Truck, User,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyCard from "@/components/CaseStudyCard";
import JsonLd from "@/components/JsonLd";
import { Gallery, Reveal, SectionNav, type GalleryItem } from "@/components/scp/Interactive";
import Showcase, { type ShowcaseScreen } from "@/components/scp/Showcase";
import { caseStudySchema, visibleCaseStudies } from "@/lib/caseStudies";
import { getContent } from "@/lib/getContent";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "../sydney-cleaning-and-pest-local-seo-social-media/scp.css";
import "./wd.css";

const SLUG = "indian-ethnic-wear-ecommerce-website-design";
const PATH = `/case-studies/${SLUG}/`;
const IMG = "/case-studies/iew-web";
const CLIENT = {
  name: "Indian Ethnic Wear",
  website: "https://ethnicwear.com.au/",
  address: "6 Redwood Street, Blacktown, NSW 2148, Australia",
};
const TITLE = "Building a Premium E-commerce Shopping Experience for Indian Ethnic Wear";
const DESCRIPTION =
  "E-commerce website design case study: how ethnicwear.com.au was designed and built as an elegant, mobile-friendly WooCommerce store for an Indian fashion retailer in Blacktown, Sydney, with mega-menu navigation, 21 product categories and SEO-ready architecture.";

export const metadata: Metadata = {
  title: { absolute: "E-commerce Website Design Case Study: Indian Ethnic Wear Sydney" },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: "2026-11-16",
    images: [{ url: `${IMG}/cover.jpg`, width: 1200, height: 630, alt: "ethnicwear.com.au homepage on desktop and mobile" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${IMG}/cover.jpg`] },
};

const nav = [
  { id: "overview", label: "Overview" },
  { id: "showcase", label: "Showcase" },
  { id: "journey", label: "Journey" },
  { id: "features", label: "Features" },
  { id: "collections", label: "Collections" },
  { id: "responsive", label: "Responsive" },
  { id: "seo", label: "SEO" },
  { id: "scope", label: "Scope" },
];

const stats = [
  { n: "121", l: "products in the catalogue" },
  { n: "21", l: "product categories" },
  { n: "5", l: "mega-menu departments" },
  { n: "3", l: "device layouts" },
];

const objectives = [
  { icon: Gem, t: "Professional Brand Presence", s: "A premium storefront in the brand’s gold and ink that matches the quality of the clothing and the Blacktown store." },
  { icon: Search, t: "Better Product Discovery", s: "Department mega menus, category tiles and filters so shoppers reach the right suit, saree or kurta in a few taps." },
  { icon: ShoppingCart, t: "Smooth Shopping Experience", s: "Clear product pages, size guide, cart, account and order tracking, on every screen size." },
  { icon: Store, t: "E-commerce Business Growth", s: "One online store that sells Australia-wide and supports the physical shop, search and social campaigns." },
];

const screens: ShowcaseScreen[] = [
  {
    key: "home", label: "Homepage", url: "ethnicwear.com.au", src: `${IMG}/home-full.jpg`, w: 1100, h: 5966,
    alt: "Full-length screenshot of the ethnicwear.com.au homepage with hero slider, category tiles and product sections",
    title: "A homepage that works like a store window",
    points: ["Full-width hero slider for new and festive collections", "Category tiles for suits, kurtis, sarees, lehengas, men and kids", "Product rows with prices, sale badges and quick add to cart", "Store promises, newsletter and full footer navigation"],
  },
  {
    key: "menu", label: "Navigation", url: "ethnicwear.com.au · Women menu", src: `${IMG}/mega-menu.jpg`, w: 1440, h: 640,
    alt: "Women mega menu on ethnicwear.com.au listing suit and saree categories beside new arrival products",
    title: "Mega menus organised by department",
    points: ["Men, Women, Teens, Kids and Diwali departments", "Category lists next to featured new arrivals with prices", "Search, account, wishlist and cart always in the header", "Gold-on-white styling that keeps long menus easy to scan"],
  },
  {
    key: "shop", label: "Shop", url: "ethnicwear.com.au/shop/", src: `${IMG}/shop.jpg`, w: 1200, h: 1416,
    alt: "Shop page on ethnicwear.com.au with sidebar filters and a grid of ethnic wear products",
    title: "A shop page built for browsing",
    points: ["Sidebar filters for category, price and attributes", "Consistent product cards with image, name and AUD price", "Sale badges and sorting controls", "Breadcrumbs back to the department"],
  },
  {
    key: "category", label: "Category", url: "ethnicwear.com.au/product-category/…", src: `${IMG}/category-desktop.jpg`, w: 1440, h: 900,
    alt: "Product category page on ethnicwear.com.au showing a grid of suits",
    title: "Category pages for every collection",
    points: ["One clean URL per collection under /product-category/", "Large product imagery that shows fabric and embroidery", "Same card layout across all 21 categories", "Space for category descriptions that support SEO"],
  },
  {
    key: "product", label: "Product", url: "ethnicwear.com.au/product/…", src: `${IMG}/product-full.jpg`, w: 1200, h: 1916,
    alt: "Product page on ethnicwear.com.au with image gallery, price, size options, size guide and product details",
    title: "Product pages that answer questions before they’re asked",
    points: ["Image gallery with thumbnails", "Price, size selection and size guide", "Product details table: fabric, work and what’s included", "“You may also like” suggestions to keep shoppers browsing"],
  },
  {
    key: "contact", label: "Store info", url: "ethnicwear.com.au/our-contacts/", src: `${IMG}/contact.jpg`, w: 1200, h: 1109,
    alt: "Contact page on ethnicwear.com.au with contact form, phone, address, email, WhatsApp and store hours",
    title: "Connecting the website to the Blacktown store",
    points: ["Contact form, phone, email and WhatsApp", "Store address at 6 Redwood Street, Blacktown", "Opening hours, 10am to 8pm", "Shipping, returns and FAQ pages linked from the footer"],
  },
];

const ux = [
  { icon: Navigation, t: "Clean navigation" },
  { icon: Layers, t: "Fashion-focused hierarchy" },
  { icon: LayoutGrid, t: "Category browsing" },
  { icon: Search, t: "Product discovery" },
  { icon: Smartphone, t: "Responsive layouts" },
  { icon: ShoppingBag, t: "Easy shopping interface" },
  { icon: MousePointerClick, t: "Clear calls to action" },
  { icon: Contact, t: "Visible support & contact" },
];

const journey = [
  { t: "Homepage", s: "Hero collections and category tiles set the scene.", img: `${IMG}/home-desktop.jpg` },
  { t: "Category", s: "Mega menu or tile leads to a filtered collection.", img: `${IMG}/category-desktop.jpg` },
  { t: "Product", s: "Gallery, price, size guide and details.", img: `${IMG}/product-desktop.jpg` },
  { t: "Cart", s: "Review items and quantities before checkout.", icon: ShoppingCart },
  { t: "Checkout", s: "WooCommerce checkout with Australian shipping zones.", icon: Receipt },
];

const features = [
  { icon: Package, t: "Product Catalog", s: "121 products managed in WooCommerce." },
  { icon: ListTree, t: "Product Categories", s: "21 categories across Women, Men, Teens and Kids." },
  { icon: ImageIcon, t: "Product Image Gallery", s: "Main image with thumbnail gallery on every product." },
  { icon: Tag, t: "Product Pricing Display", s: "AUD prices with sale and regular price shown." },
  { icon: ShoppingCart, t: "Shopping Cart", s: "Header cart and a dedicated cart page." },
  { icon: User, t: "Customer Account", s: "Registration, login and My Account area." },
  { icon: Truck, t: "Order Tracking", s: "Dedicated Track Order page for customers." },
  { icon: Store, t: "Store Information", s: "Blacktown address, hours and contact details." },
  { icon: Contact, t: "Contact Page", s: "Form, phone, email and WhatsApp in one place." },
  { icon: Globe, t: "Shipping Information", s: "Shipping & Delivery Information page." },
  { icon: RotateCcw, t: "Return & Exchange Information", s: "Return & Exchange Policy page." },
  { icon: BookOpen, t: "Blog Integration", s: "Blog section for styling and festive content." },
];

const groups = [
  { icon: Sparkles, t: "Women", items: ["Salwar Kameez", "Readymade Salwar Kameez", "Sharara Suits", "Palazzo Suits", "Premium Suits", "Sarees", "Lehengas", "Party Wear"] },
  { icon: Shirt, t: "Men", items: ["Men’s Kurta", "Kurta Sets", "Pathani Suits", "Nehru Jackets"] },
  { icon: Baby, t: "Teens & Kids", items: ["Teen Boys", "Teen Girls", "Kids Wear", "Kids Salwar Kameez"] },
];

// Category tiles as they appear on the live homepage. Captions name what each tile shows.
const tile = (src: string, caption: string, tag: string, alt: string, extra: Partial<GalleryItem> = {}): GalleryItem => ({ src: `${IMG}/${src}.jpg`, alt, caption, tag, w: 456, h: 454, ...extra });
const gallery: GalleryItem[] = [
  tile("cat-salwar", "Salwar Kameez collection banner", "Women", "Salwar kameez category banner from the ethnicwear.com.au homepage", { wide: true }),
  tile("cat-readymade", "Readymade Suits", "Women", "Readymade salwar suit category tile"),
  tile("cat-sharara", "Sharara Suits", "Women", "Sharara suit category tile"),
  tile("cat-palazzo", "Palazzo Suits", "Women", "Palazzo suit category tile"),
  tile("cat-premium", "Party wear palazzo suits", "Women", "Party wear palazzo suit category tile"),
  tile("cat-sarees", "Sarees collection banner", "Women", "Sarees category banner from the homepage", { wide: true }),
  tile("cat-lehenga", "Lehengas collection banner", "Women", "Lehenga category banner from the homepage", { wide: true }),
  tile("cat-party-wear", "3 Piece Party Wear", "Women", "Three piece party wear category tile"),
  tile("cat-palazzo-cream", "3 Piece Palazzo Suits", "Women", "Three piece palazzo suit category tile"),
  tile("cat-kurtis", "Kurtis", "Women", "Kurtis category tile"),
  tile("cat-mens-kurta", "Men’s Kurta", "Men", "Men’s kurta category tile"),
  tile("cat-kurta-pajama", "Kurta pajama sets", "Men", "Men’s kurta pajama set category banner", { wide: true }),
  tile("cat-men-printed", "Men’s printed kurta", "Men", "Men’s printed kurta category tile"),
  tile("cat-nehru", "Kurta and Nehru jacket sets", "Men", "Kurta and Nehru jacket set category banner", { wide: true }),
  tile("cat-kids", "Kids Wear", "Teens & Kids", "Kids wear category tile"),
  { src: "/case-studies/iew/kids-lookbook.jpg", alt: "Kids’ ethnic wear lookbook image", caption: "Kids’ ethnic wear", tag: "Teens & Kids", w: 1000, h: 1000, wide: true },
];

const respPoints = [
  { icon: Menu, t: "Responsive navigation" },
  { icon: Smartphone, t: "Mobile product browsing" },
  { icon: LayoutGrid, t: "Responsive product cards" },
  { icon: Hand, t: "Touch-friendly buttons" },
  { icon: ShoppingBag, t: "Mobile shopping bar" },
];

const seoItems = [
  { icon: ListTree, t: "Product & category structure", s: "live" },
  { icon: Link2, t: "SEO-friendly URLs", s: "live" },
  { icon: FileText, t: "Product metadata (Rank Math)", s: "live" },
  { icon: ImageIcon, t: "Image alt text", s: "live" },
  { icon: Layers, t: "Internal linking", s: "live" },
  { icon: Navigation, t: "Breadcrumbs", s: "live" },
  { icon: Code2, t: "Product schema", s: "opp" },
  { icon: MapPin, t: "Local SEO landing pages", s: "opp" },
  { icon: Smartphone, t: "Mobile optimisation", s: "live" },
];
const keywords = ["Indian Ethnic Wear Sydney", "Indian Clothing Store Blacktown", "Salwar Kameez Australia", "Indian Sarees Sydney", "Men’s Kurta Australia"];

const scope = [
  { icon: Monitor, t: "Frontend", c: "#2563eb", items: ["Responsive layout", "Navigation and mega-menu components", "Product listing interface", "Product detail presentation", "Shopping experience and mobile bar"] },
  { icon: ShoppingCart, t: "E-commerce", c: "#d6b779", items: ["Product catalogue and categories", "Shopping cart", "Customer account and registration", "Order tracking access", "Customer support pages"] },
  { icon: Store, t: "Business", c: "#101828", items: ["Store information", "Blacktown location details", "Phone, email and WhatsApp contact", "Shipping & delivery information", "Return & exchange policy"] },
];
const stack = ["WordPress", "WooCommerce", "Elementor Pro", "Rank Math SEO", "Responsive child theme", "AUD pricing", "Australia-wide shipping zones"];

const outcomes = [
  { icon: Store, t: "Centralised online storefront", s: "Every collection, policy and contact detail in one branded store." },
  { icon: LayoutGrid, t: "Organised product discovery", s: "Departments, 21 categories and filters instead of one long list." },
  { icon: Gem, t: "Fashion-focused presentation", s: "Large imagery and a gold-and-ink palette that lets the clothing lead." },
  { icon: Navigation, t: "Convenient shopping navigation", s: "Mega menus on desktop, a bottom shopping bar on mobile." },
  { icon: MapPin, t: "Online and in-store connection", s: "Address, hours and WhatsApp link the website to the Blacktown shop." },
  { icon: Search, t: "SEO-friendly content foundation", s: "Clean URLs, metadata and category pages ready for search and campaigns." },
];

export default async function EthnicWearWebsiteDesignCaseStudy() {
  const c = await getContent();
  const entry = c.caseStudies.find((x) => x.slug === SLUG);
  const related = visibleCaseStudies(c.caseStudies).filter((x) => x.slug !== SLUG).slice(0, 3);
  const used = ["ecommerce-seo", "content-creation"].map((s) => c.services.find((x) => x.slug === s)).filter((s) => !!s);
  const u = c.business.url;

  return (
    <div className="scp wd">
      {entry && (
        <JsonLd
          data={{
            ...caseStudySchema(c, { ...entry, title: TITLE, summary: DESCRIPTION, image: `${IMG}/cover.jpg` }, used),
            about: {
              "@type": "OnlineStore",
              name: CLIENT.name,
              url: CLIENT.website,
              address: { "@type": "PostalAddress", streetAddress: "6 Redwood Street", addressLocality: "Blacktown", addressRegion: "NSW", postalCode: "2148", addressCountry: "AU" },
            },
            url: `${u}${PATH}`,
          }}
        />
      )}

      {/* HERO */}
      <section className="scp-hero">
        <div className="scp-bg" aria-hidden="true"><i /><i /><i /></div>
        <div className="scp-wrap scp-hero-in">
          <div className="scp-hero-copy">
            <Breadcrumbs items={[{ name: "Case Studies", path: "/case-studies/" }, { name: "Indian Ethnic Wear Website", path: PATH }]} />
            <p className="scp-kicker">E-commerce website design case study</p>
            <h1>Building a Premium <span>E-commerce Shopping Experience</span> for Indian Ethnic Wear</h1>
            <p className="scp-lead">
              An elegant, customer-focused online shopping experience designed to showcase traditional Indian fashion, simplify product discovery
              and support e-commerce growth in Sydney, Australia.
            </p>
            <ul className="wd-meta">
              <li><small>Project</small><b>Indian Ethnic Wear</b></li>
              <li><small>Industry</small><b>Fashion &amp; E-commerce</b></li>
              <li><small>Location</small><b>Sydney, Australia</b></li>
              <li><small>Services</small><b>Website Design, UI/UX, E-commerce Development</b></li>
            </ul>
            <div className="scp-btns">
              <a href="#showcase" className="scp-btn primary">Explore Project <ArrowRight size={18} /></a>
              <a href={CLIENT.website} target="_blank" rel="noopener" className="scp-btn ghost">Visit Live Website <ArrowUpRight size={18} /></a>
            </div>
          </div>
          <div className="scp-hero-visual">
            <div className="wd-hero-stage">
              <div className="wd-browser">
                <div className="wd-bar" aria-hidden="true"><i /><i /><i /><span>ethnicwear.com.au</span></div>
                <div className="wd-screen"><img src={`${IMG}/home-desktop.jpg`} alt="ethnicwear.com.au homepage on a desktop browser" width={1440} height={900} fetchPriority="high" /></div>
              </div>
              <div className="wd-phone"><div className="wd-screen"><img src={`${IMG}/home-mobile.jpg`} alt="ethnicwear.com.au homepage on a mobile phone" width={585} height={1266} /></div></div>
              <div className="wd-hero-chip"><span><ShoppingBag size={18} /></span><div><b>WooCommerce store</b><small>21 categories · 121 products</small></div></div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav items={nav} />

      {/* OVERVIEW */}
      <section id="overview" className="scp-sec">
        <div className="scp-wrap">
          <div className="scp-overview">
            <Reveal className="scp-overview-copy">
              <p className="scp-kicker">Project overview</p>
              <h2>An online home for a Blacktown fashion retailer</h2>
              <p>
                Indian Ethnic Wear is an Indian fashion retailer at 6 Redwood Street, Blacktown, with traditional and modern collections for women,
                men, teens and kids: salwar kameez, sharara and palazzo suits, sarees, lehengas, kurtas, Nehru jackets and kids’ ethnic wear.
              </p>
              <p>
                The goal was a website that feels as considered as the clothing: a premium storefront where shoppers across Australia can browse
                collections, check details and sizes, and order online, while local customers can still find the shop, its hours and a quick way to
                ask a question.
              </p>
              <div className="wd-stats">
                {stats.map((s) => <div key={s.l} className="wd-stat"><b>{s.n}</b><span>{s.l}</span></div>)}
              </div>
              <p className="wd-stats-note">Counts taken from the live store. No traffic, sales or conversion figures are published.</p>
            </Reveal>
            <Reveal className="scp-card scp-info" delay={120}>
              <div className="scp-info-head">
                <img src="/case-studies/iew/logo.png" alt="Ethnic Wear logo" width={168} height={56} />
                <div><b>{CLIENT.name}</b><small>Client</small></div>
              </div>
              <dl className="scp-info-list">
                <div><dt>Industry</dt><dd>Fashion &amp; E-commerce</dd></div>
                <div><dt>Location</dt><dd>{CLIENT.address}</dd></div>
                <div><dt>Website</dt><dd><a href={CLIENT.website} target="_blank" rel="noopener">ethnicwear.com.au</a></dd></div>
                <div><dt>Platform</dt><dd>WordPress, WooCommerce &amp; Elementor</dd></div>
                <div><dt>Delivered</dt><dd>Website design, UI/UX, e-commerce development</dd></div>
                <div><dt>Related work</dt><dd><Link href="/case-studies/indian-ethnic-wear-digital-marketing/">SEO, social media &amp; ads case study</Link></dd></div>
              </dl>
            </Reveal>
          </div>
          <div className="wd-objectives">
            {objectives.map((o, i) => (
              <Reveal key={o.t} className="wd-obj" delay={i * 70}>
                <span className="scp-ico"><o.icon size={22} /></span>
                <small>0{i + 1}</small>
                <h3>{o.t}</h3>
                <p>{o.s}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="scp-sec scp-navy wd-dark">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Visual showcase</p>
            <h2>The Homepage on Desktop and Mobile</h2>
            <p>Real screenshots of the live store. Scroll inside the browser to see the full homepage.</p>
          </Reveal>
          <div className="wd-showcase-grid">
            <Reveal>
              <div className="wd-browser">
                <div className="wd-bar" aria-hidden="true"><i /><i /><i /><span>ethnicwear.com.au</span></div>
                <div className="wd-screen scroll"><img src={`${IMG}/home-full.jpg`} alt="Full-length screenshot of the ethnicwear.com.au homepage" width={1100} height={5966} loading="lazy" /></div>
              </div>
              <span className="wd-caption">Desktop homepage, full length</span>
            </Reveal>
            <Reveal delay={120}>
              <div className="wd-phone"><div className="wd-screen"><img src={`${IMG}/home-mobile.jpg`} alt="ethnicwear.com.au homepage on mobile" width={585} height={1266} loading="lazy" /></div></div>
              <span className="wd-caption" style={{ textAlign: "center" }}>Mobile homepage</span>
            </Reveal>
          </div>
          <div className="wd-mega">
            <Reveal>
              <div className="wd-browser">
                <div className="wd-bar" aria-hidden="true"><i /><i /><i /><span>ethnicwear.com.au · Women</span></div>
                <div className="wd-screen"><img src={`${IMG}/mega-menu.jpg`} alt="Women mega menu with suit and saree categories and new arrivals" width={1440} height={640} loading="lazy" /></div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h3>Navigation menu</h3>
              <p>Each department opens a mega menu that pairs a category list with featured new arrivals and prices, so shoppers can jump straight to a collection or a product.</p>
              <ul className="wd-pill-list">{["Men", "Women", "Teens", "Kids", "Diwali"].map((d) => <li key={d}>{d}</li>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* UI/UX + INTERACTIVE SCREENS */}
      <section id="showcase" className="scp-sec scp-soft">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">UI/UX design</p>
            <h2>Every Key Screen, Designed for Shoppers</h2>
            <p>Pick a screen to see the real page and the design decisions behind it.</p>
          </Reveal>
          <Reveal><Showcase screens={screens} /></Reveal>
          <ul className="wd-ux">
            {ux.map((x) => <li key={x.t}><x.icon size={18} /> {x.t}</li>)}
          </ul>
        </div>
      </section>

      {/* SHOPPING JOURNEY */}
      <section id="journey" className="scp-sec scp-navy wd-dark">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Shopping journey</p>
            <h2>From Homepage to Checkout in Five Steps</h2>
            <p>The store is laid out so each step leads naturally to the next, on desktop and mobile.</p>
          </Reveal>
          <ol className="wd-journey">
            {journey.map((j, i) => (
              <Reveal as="li" key={j.t} delay={i * 80}>
                <div className={`wd-j-img${j.icon ? " icon" : ""}`}>
                  {j.img ? <img src={j.img} alt={`${j.t} page on ethnicwear.com.au`} width={1440} height={900} loading="lazy" /> : j.icon ? <j.icon size={46} strokeWidth={1.4} /> : null}
                </div>
                <div className="wd-j-body"><small>STEP 0{i + 1}</small><b>{j.t}</b><p>{j.s}</p></div>
              </Reveal>
            ))}
          </ol>
          <p className="wd-note"><Info size={15} /> Cart and checkout are standard WooCommerce pages and are shown as icons. Payment and third-party integrations are not described here.</p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scp-sec">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">E-commerce features</p>
            <h2>Twelve Store Features, All Live on the Site</h2>
            <p>Each feature below exists on ethnicwear.com.au today.</p>
          </Reveal>
          <div className="wd-features">
            {features.map((f, i) => (
              <Reveal key={f.t} className="wd-feature" delay={(i % 4) * 60}>
                <span className="scp-ico"><f.icon size={20} /></span>
                <h3>{f.t}</h3>
                <p>{f.s}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FASHION COLLECTIONS */}
      <section id="collections" className="scp-sec scp-soft">
        <div className="scp-wrap">
          <Reveal className="scp-head scp-head-split">
            <div>
              <p className="scp-kicker">Fashion collections</p>
              <h2>Collections Presented the Way Shoppers Browse</h2>
            </div>
            <p>Category tiles from the live homepage, grouped by department. Click any image to enlarge it.</p>
          </Reveal>
          <div className="wd-groups">
            {groups.map((g) => (
              <Reveal key={g.t} className="wd-group">
                <h3><g.icon size={18} /> {g.t}</h3>
                <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </Reveal>
            ))}
          </div>
          <Reveal><Gallery items={gallery} tabs={["Women", "Men", "Teens & Kids"]} /></Reveal>
        </div>
      </section>

      {/* RESPONSIVE */}
      <section id="responsive" className="scp-sec">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Responsive design</p>
            <h2>One Store, Designed for Every Screen</h2>
            <p>The same homepage on desktop, tablet and mobile, rendered from the live site.</p>
          </Reveal>
          <Reveal className="wd-devices">
            <div className="wd-devices-stage">
              <div className="wd-browser">
                <div className="wd-bar" aria-hidden="true"><i /><i /><i /><span>ethnicwear.com.au</span></div>
                <div className="wd-screen"><img src={`${IMG}/home-desktop.jpg`} alt="Homepage on desktop" width={1440} height={900} loading="lazy" /></div>
              </div>
              <div className="wd-tablet"><div className="wd-screen"><img src={`${IMG}/home-tablet.jpg`} alt="Homepage on tablet" width={834} height={1112} loading="lazy" /></div></div>
              <div className="wd-phone"><div className="wd-screen"><img src={`${IMG}/home-mobile.jpg`} alt="Homepage on mobile" width={585} height={1266} loading="lazy" /></div></div>
            </div>
          </Reveal>
          <ul className="wd-resp-points">
            {respPoints.map((r) => <li key={r.t}><r.icon size={22} /> {r.t}</li>)}
          </ul>
          <div className="wd-mobile-trio">
            {[
              { src: "home-mobile", t: "Homepage", s: "Hero, categories and products" },
              { src: "category-mobile", t: "Category", s: "Two-column product cards" },
              { src: "product-mobile", t: "Product", s: "Gallery, price and add to cart" },
            ].map((m, i) => (
              <Reveal as="div" key={m.src} delay={i * 90}>
                <figure>
                  <div className="wd-phone"><div className="wd-screen"><img src={`${IMG}/${m.src}.jpg`} alt={`${m.t} page on mobile`} width={585} height={1266} loading="lazy" /></div></div>
                  <figcaption>{m.t}<small>{m.s}</small></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO ARCHITECTURE */}
      <section id="seo" className="scp-sec scp-navy wd-dark">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">SEO-ready architecture</p>
            <h2>Built So Search Engines Understand the Catalogue</h2>
            <p>A clear structure from homepage to product, with metadata managed in Rank Math. This is the foundation; no ranking results are claimed here.</p>
          </Reveal>
          <div className="wd-seo">
            <Reveal className="wd-tree">
              <p>URL structure</p>
              <ul>
                <li><b>ethnicwear.com.au/</b>
                  <ul>
                    <li><em>/shop/</em></li>
                    <li><em>/product-category/</em><span> 21 collections</span>
                      <ul>
                        <li><em>/sharara-suit/</em></li>
                        <li><em>/palazzo-suit/</em></li>
                        <li><em>/sarees/</em><span> …and more</span></li>
                      </ul>
                    </li>
                    <li><em>/product/</em><span>&lt;product-name&gt;/</span></li>
                    <li><em>/blogs/</em></li>
                    <li><em>/our-contacts/</em> · <em>/faq/</em></li>
                  </ul>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <ul className="wd-seo-list">
                {seoItems.map((s) => <li key={s.t}><s.icon size={17} /> {s.t}<em className={s.s === "opp" ? "opp" : undefined}>{s.s === "opp" ? "Opportunity" : "In place"}</em></li>)}
              </ul>
              <div className="wd-kw">
                <h3 style={{ color: "#fff" }}>Target keyword examples</h3>
                <ul>{keywords.map((k) => <li key={k}><Search size={14} /> {k}</li>)}</ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT SCOPE */}
      <section id="scope" className="scp-sec scp-soft">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Development scope</p>
            <h2>What Was Designed and Built</h2>
          </Reveal>
          <div className="wd-scope">
            {scope.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="wd-scope-col" style={{ ["--c" as string]: s.c } as React.CSSProperties}>
                  <span className="scp-ico"><s.icon size={22} /></span>
                  <h3>{s.t}</h3>
                  <ul>{s.items.map((it) => <li key={it}><CheckCircle2 size={16} /> {it}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="wd-stack">
            <h3><BadgeCheck size={18} /> Verified platform</h3>
            <ul>{stack.map((s) => <li key={s}>{s}</li>)}</ul>
            <small>Checked on the live site. Payment providers and other integrations are not listed.</small>
          </Reveal>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="scp-sec scp-navy wd-dark">
        <div className="scp-wrap">
          <Reveal className="scp-head">
            <p className="scp-kicker">Project outcomes</p>
            <h2>What the New Store Delivers</h2>
            <p>Qualitative outcomes of the design and build. Sales and traffic figures are not published.</p>
          </Reveal>
          <div className="wd-outcomes">
            {outcomes.map((o, i) => (
              <Reveal key={o.t} className="wd-outcome" delay={(i % 3) * 70}>
                <span className="scp-ico"><o.icon size={20} /></span>
                <div><b>{o.t}</b><p>{o.s}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scp-sec scp-cta-sec">
        <div className="scp-wrap">
          <Reveal className="scp-cta">
            <div className="scp-bg" aria-hidden="true"><i /><i /></div>
            <PenTool size={34} className="scp-cta-i" />
            <h2>Ready to Build Your Next E-commerce Website?</h2>
            <p>Let’s transform your business idea into a professional online shopping experience with modern UI/UX design, e-commerce functionality and SEO-friendly architecture.</p>
            <div className="scp-btns center">
              <Link href={c.header.ctaHref} className="scp-btn light">Start Your Website Project <ArrowRight size={18} /></Link>
              <Link href="/services/" className="scp-btn outline">Explore Our Services</Link>
            </div>
          </Reveal>
        </div>
      </section>

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
