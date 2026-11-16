// Case studies: shown at /case-studies/ and /case-studies/<slug>/.
// Editable in the admin panel (/admin/case-studies/). The defaults below are
// EXAMPLES (isExample: true). Example case studies show an "Example" label,
// are kept out of Google (noindex, not in the sitemap or llms.txt) and should
// be replaced with real client results before they are switched to real.

export type CaseStudyResult = { n: string; l: string };
export type CaseStudyImage = { src: string; caption: string };

export type CaseStudy = {
  slug: string;
  published: boolean;
  isExample: boolean;
  title: string; // H1
  client: string; // client name, or an anonymous description
  website?: string; // client's website (optional, linked on the page)
  industry: string; // shown as a label, e.g. "Plumbing"
  industrySlug: string; // links to /industries/<slug>/ (optional)
  location: string; // suburb or area
  services: string[]; // service slugs, link to /services/<slug>/
  duration: string;
  date: string; // YYYY-MM-DD, used as the published date
  summary: string; // answer-first paragraph, also used on cards
  metaTitle: string;
  metaDescription: string;
  image: string; // cover image (optional)
  results: CaseStudyResult[];
  challenge: string;
  approach: string[];
  outcome: string;
  testimonial: { quote: string; name: string; role: string };
  gallery: CaseStudyImage[];
};

export const caseStudiesPageDefaults = {
  bannerTitle: "Case Studies: Results for Sydney Businesses",
  bannerLead:
    "These case studies show how Social Boost Sydney uses SEO, social media management and paid ads to win Sydney businesses more calls, bookings and sales. Each one covers the problem, what we did, and the numbers that changed.",
  cardCta: "Read the case study",
  homeEyebrow: "Case studies",
  homeTitle: "Real results for Sydney businesses",
  homeText: "Rankings, leads and sales we have helped local and online businesses win. Open a case study to see exactly what we did.",
  exampleLabel: "Example",
};

export const caseStudiesSeo = {
  title: "Case Studies | SEO & Social Media Results Sydney | Social Boost",
  description:
    "See how Social Boost Sydney grows local and online businesses with SEO, social media and Meta ads. Real problems, the plan we ran and the results.",
};

export const defaultCaseStudies: CaseStudy[] = [
  {
    slug: "sydney-cleaning-and-pest-local-seo-social-media",
    published: true,
    isExample: false,
    title: "How a Blacktown Cleaning & Pest Control Company Reached 5,260 Google Searches in 3 Months",
    client: "Sydney Cleaning and Pest",
    website: "https://sydneycleaningandpest.com/",
    industry: "Cleaning & Pest Control",
    industrySlug: "cleaning-business-marketing-sydney",
    location: "Blacktown, Western Sydney",
    services: ["local-seo", "social-media-management", "content-creation"],
    duration: "3 months",
    date: "2026-11-16",
    summary:
      "Sydney Cleaning and Pest is a family-run, licensed cleaning and pest control company in Blacktown with 30+ years in the trade. In three months of local SEO, Google Business Profile work and 95+ branded social media post designs, its website appeared in 5,260 Google searches with an average position of 8.8, backed by a 5.0★ Google rating from 52 reviews.",
    metaTitle: "Cleaning & Pest Control Local SEO Case Study | Blacktown",
    metaDescription:
      "Local SEO, Google Business Profile and social content got a Blacktown cleaning and pest control company 5,260 Google impressions in 3 months.",
    image: "",
    results: [
      { n: "5,260", l: "Google search impressions in 3 months" },
      { n: "8.8", l: "average Google position" },
      { n: "5.0★", l: "Google rating from 52 reviews" },
      { n: "95+", l: "branded social post designs" },
    ],
    challenge:
      "Sydney Cleaning and Pest had 30 years of happy customers but very little visibility online. Carpet cleaning and pest control in Western Sydney are crowded searches, full of franchise brands and lead-selling directories. The business needed to show up when locals search for things like “carpet cleaning Blacktown” or “pest control near me”, prove its reputation with reviews, and give people a clear reason to choose a family-run team over a big name.",
    approach: [
      "Optimised the Google Business Profile: correct categories, every cleaning and pest service, service areas, opening hours, real job photos and regular posts",
      "Built a separate, answer-first page for each service: carpet steam cleaning, commercial carpet cleaning, end of lease, sofa and upholstery, mattress, rug, and tile and grout cleaning",
      "Created suburb pages starting with Blacktown, targeting searches across Parramatta, Penrith, Liverpool, the Hills District and Western Sydney",
      "Added LocalBusiness schema, a consistent name, address and phone everywhere, and a WhatsApp “Book Now” button with quotes in under 2 hours",
      "Set up a simple review request after every job, building a 5.0★ rating from 52 Google reviews",
      "Managed the Facebook page with regular posts, offers and fast replies to customer questions",
      "Designed 95+ branded social posts in the client’s blue and green colours, each with the phone number, website and a “Book Now” call to action",
      "Turned real job photos into before-and-after posts for carpets, sofas, lounges, chairs, mattresses and stairs, the proof that wins cleaning jobs",
      "Created service posts for carpet, sofa, mattress, rug, office and commercial cleaning, window cleaning and pest control, plus seasonal posts such as Diwali greetings",
      "Filmed short before-and-after videos for TikTok and Facebook Reels: carpet stains lifted, sofas refreshed, pest treatments explained",
    ],
    outcome:
      "In the last three months the website appeared in 5,260 Google searches and earned 71 organic clicks, with an average position of 8.8, inside the top 10 results on average across its searches. Together with a 5.0★ Google rating from 52 reviews and a steady feed of 95+ branded posts and before-and-after videos on Facebook and TikTok, Sydney Cleaning and Pest now has a local presence that turns searches into calls and WhatsApp bookings.",
    testimonial: { quote: "", name: "", role: "" },
    gallery: [
      {
        src: "/case-studies/sydney-cleaning-and-pest-search-console.png",
        caption: "Google Search Console, last 3 months: 71 clicks, 5,260 impressions, average position 8.8",
      },
      { src: "/case-studies/sydney-cleaning-and-pest-social-posts-1.jpg", caption: "Social post designs: service promos and real before-and-after job photos" },
      { src: "/case-studies/sydney-cleaning-and-pest-social-posts-2.jpg", caption: "Branded posts for sofa, lounge, chair, mattress, rug and office carpet cleaning" },
      { src: "/case-studies/sydney-cleaning-and-pest-social-posts-3.jpg", caption: "Pest control, window and home cleaning posts alongside before-and-after results" },
    ],
  },
  {
    slug: "sydney-cleaning-and-pest-website-design",
    published: true,
    isExample: false,
    title: "Website Design for a Sydney Cleaning & Pest Control Company: 12 Pages Built to Win Local Bookings",
    client: "Sydney Cleaning and Pest",
    website: "https://sydneycleaningandpest.com/",
    industry: "Cleaning & Pest Control",
    industrySlug: "cleaning-business-marketing-sydney",
    location: "Blacktown, Western Sydney",
    services: ["local-seo", "content-creation"],
    duration: "3 months",
    date: "2026-11-16",
    summary:
      "We designed and built sydneycleaningandpest.com, a 12-page WordPress website for a family-run cleaning and pest control company in Blacktown. It has a separate, search-ready page for each main service, click-to-call and WhatsApp booking on every page, live Google reviews and local SEO built in. In its first three months the new site appeared in 5,260 Google searches with an average position of 8.8.",
    metaTitle: "Cleaning Company Website Design Case Study | Sydney",
    metaDescription:
      "How we designed a 12-page, mobile-first WordPress website for a Blacktown cleaning and pest control company, with service pages, WhatsApp booking and local SEO.",
    image: "/case-studies/scp/web/web-design-cover.jpg",
    results: [
      { n: "12", l: "pages designed and built" },
      { n: "7", l: "service and suburb landing pages" },
      { n: "5,260", l: "Google search impressions in the first 3 months" },
      { n: "8.8", l: "average Google position" },
    ],
    challenge:
      "Sydney Cleaning and Pest had 30+ years of experience and happy customers, but no website that showed it. People searching for carpet cleaning or pest control in Western Sydney had nowhere to see the team’s work, read reviews or book quickly, so the business relied on word of mouth while franchise brands and directories took the searches. It needed a fast, professional site that explains each service clearly, builds trust in seconds and makes it easy to call or message from a phone.",
    approach: [
      "Planned the site around how customers search: one page per service instead of a single “services” list, so each page can rank for its own keyword",
      "Designed a clean, mobile-first look in the brand’s navy, blue and green, with the logo, phone number and opening hours visible at the top of every page",
      "Built it on WordPress with Astra Pro and Elementor Pro, so the client can update text, photos and prices without a developer",
      "Wrote and built 7 detailed landing pages: Carpet Cleaning Sydney, Commercial Carpet Cleaning, End of Lease Carpet Cleaning, Carpet Cleaning Blacktown, Sofa & Upholstery, Mattress and Rug Cleaning",
      "Gave every service page the same proven structure: a quick-facts table, what the service removes, the step-by-step process, pricing factors, drying times, real job photos, related services and FAQs",
      "Added a “Book Now” button, click-to-call and WhatsApp links throughout, plus a “Get a Free Quote” form on the homepage",
      "Showed proof up front: a live Google reviews feed (5.0★ from 52 reviews), “30+ years” and “Licensed & Insured” badges, a four-step booking explainer and a gallery of recent cleaning results",
      "Set up Rank Math SEO with a focus keyword, title and meta description for each page, plus HouseCleaningService local business schema",
      "Connected Google Site Kit for Search Console and Analytics, and added LiteSpeed Cache for faster loading",
    ],
    outcome:
      "The website went live in July 2026 with 12 pages, including 7 service and suburb landing pages written for local search. In its first three months it appeared in 5,260 Google searches and earned 71 organic clicks, with an average position of 8.8. Every page now gives visitors a one-tap way to call, WhatsApp or request a quote, and the site is the base for the client’s ongoing local SEO and social media work.",
    testimonial: { quote: "", name: "", role: "" },
    gallery: [
      { src: "/case-studies/scp/web/web-design-homepage.jpg", caption: "Homepage: clear headline, booking buttons, quote form and live Google reviews above the fold" },
      { src: "/case-studies/scp/web/web-design-mobile.jpg", caption: "Mobile-first design: phone number, menu and booking buttons within easy reach" },
      { src: "/case-studies/scp/web/web-design-service-page.jpg", caption: "Service landing page (Carpet Cleaning Sydney): quick facts, process and real job photos" },
      { src: "/case-studies/scp/web/web-design-services-results.jpg", caption: "Service sections, areas served, four-step booking and recent cleaning results" },
      {
        src: "/case-studies/sydney-cleaning-and-pest-search-console.png",
        caption: "Google Search Console, first 3 months: 71 clicks, 5,260 impressions, average position 8.8",
      },
    ],
  },
  {
    slug: "inner-west-plumber-local-seo",
    published: true,
    isExample: true,
    title: "How an Inner West Plumber Tripled Calls From Google Maps",
    client: "Family-owned plumbing company",
    industry: "Plumbing",
    industrySlug: "plumber-marketing-sydney",
    location: "Inner West, Sydney",
    services: ["local-seo", "facebook-instagram-ads"],
    duration: "6 months",
    date: "2026-09-30",
    summary:
      "A 4-van plumbing company in Sydney’s Inner West went from page 2 of Google to the top 3 of Google Maps for 38 local searches. Calls from Google grew 214% in six months and the business stopped paying for shared leads.",
    metaTitle: "Plumber Local SEO Case Study Sydney | 214% More Calls",
    metaDescription:
      "How local SEO and Google Business Profile work took an Inner West plumber to the Google Maps top 3 for 38 searches and lifted calls 214% in 6 months.",
    image: "",
    results: [
      { n: "+214%", l: "calls from Google" },
      { n: "38", l: "searches in the Maps top 3" },
      { n: "160+", l: "leads per month" },
      { n: "$0", l: "spent on shared lead sites" },
    ],
    challenge:
      "The business relied on paid lead websites that sold the same job to three other plumbers. Its Google Business Profile had the wrong categories, 11 reviews and no photos, and the website crammed every service and suburb onto one page, so Google did not rank it for searches like “emergency plumber Marrickville”.",
    approach: [
      "Rebuilt the Google Business Profile: correct primary and secondary categories, services, service areas, weekly posts and 60+ real job photos",
      "Created a page for each core service and each priority suburb, written answer-first with local proof",
      "Set up an SMS review request after every completed job, lifting reviews from 11 to 140+",
      "Fixed NAP consistency across 40 Australian directories and added LocalBusiness schema",
      "Ran a small Meta lead campaign for hot water system replacements to fill quiet weeks",
    ],
    outcome:
      "Within six months the business ranked in the Google Maps top 3 for 38 tracked searches across the Inner West. Calls from Google grew 214% and the owner cancelled every shared-lead subscription.",
    testimonial: {
      quote: "We used to fight three other plumbers for every lead. Now the phone rings from Google and the jobs are ours.",
      name: "Owner",
      role: "Plumbing company, Inner West",
    },
    gallery: [],
  },
  {
    slug: "parramatta-dental-clinic-meta-ads",
    published: true,
    isExample: true,
    title: "420 New Patient Bookings for a Parramatta Dental Clinic",
    client: "Independent dental clinic",
    industry: "Dental",
    industrySlug: "dental-marketing-sydney",
    location: "Parramatta, Sydney",
    services: ["facebook-instagram-ads", "social-media-management", "content-creation"],
    duration: "6 months",
    date: "2026-08-31",
    summary:
      "An independent dental clinic in Parramatta booked 420 new patients in six months from Facebook and Instagram ads, at an average cost of $18 per lead, while staying inside AHPRA advertising rules.",
    metaTitle: "Dental Marketing Case Study Sydney | 420 New Patients",
    metaDescription:
      "How Meta ads and social media brought a Parramatta dental clinic 420 new patient bookings in 6 months at $18 per lead, within AHPRA advertising rules.",
    image: "",
    results: [
      { n: "420", l: "new patient bookings" },
      { n: "$18", l: "average cost per lead" },
      { n: "6.2x", l: "return on ad spend" },
      { n: "+3,100", l: "local Instagram followers" },
    ],
    challenge:
      "The clinic had two new chairs sitting empty on weekdays. Earlier ads from another agency used testimonials and before-and-after photos that broke AHPRA rules, so the clinic had paused all advertising and was nervous to start again.",
    approach: [
      "Wrote AHPRA-compliant ad copy and creative, focused on clear pricing, gap-free check-ups and same-week appointments",
      "Built Meta lead forms with instant booking-time options, connected to the clinic’s practice software",
      "Filmed short Reels with the dentists answering common questions, used for ads and organic posts",
      "Set up the Meta Pixel and Conversions API so bookings, not clicks, trained the campaigns",
      "Called every lead within 5 minutes with a simple script for the front desk",
    ],
    outcome:
      "The clinic filled both new chairs within ten weeks and averaged 70 new patient bookings a month. Each dollar of ad spend returned $6.20 in first-visit and treatment revenue.",
    testimonial: {
      quote: "Finally an agency that understood the advertising rules and still got us busy.",
      name: "Practice manager",
      role: "Dental clinic, Parramatta",
    },
    gallery: [],
  },
  {
    slug: "sydney-ecommerce-store-seo",
    published: true,
    isExample: true,
    title: "186% More Organic Revenue for a Sydney Online Fashion Store",
    client: "Online fashion and accessories store",
    industry: "Ecommerce",
    industrySlug: "ecommerce-marketing-sydney",
    location: "Surry Hills, Sydney",
    services: ["ecommerce-seo", "content-creation"],
    duration: "9 months",
    date: "2026-07-31",
    summary:
      "A Sydney-based online fashion store grew organic revenue 186% in nine months. Ecommerce SEO took 1,200+ product and category keywords to page one of Google Australia without increasing ad spend.",
    metaTitle: "Ecommerce SEO Case Study Sydney | 186% Organic Revenue",
    metaDescription:
      "How ecommerce SEO took a Sydney online fashion store to page one for 1,200+ keywords and grew organic revenue 186% in 9 months on Shopify.",
    image: "",
    results: [
      { n: "+186%", l: "organic revenue" },
      { n: "1,200+", l: "keywords on page one" },
      { n: "+240%", l: "organic traffic" },
      { n: "-35%", l: "reliance on paid ads" },
    ],
    challenge:
      "The Shopify store spent most of its marketing budget on Google Shopping and Meta ads. Product pages used the supplier’s descriptions, collections had no text, and thousands of filtered URLs were being crawled, so organic traffic had been flat for two years.",
    approach: [
      "Technical clean-up: canonical tags for variants and filters, faster images, fixed broken internal links",
      "Researched and mapped 2,000+ keywords to the right category and product pages",
      "Wrote unique category copy and product descriptions answering size, fabric and delivery questions",
      "Added Product, Offer, Review and FAQ schema, plus a Merchant Center feed clean-up",
      "Published buying guides that link to collections and earned links from Australian fashion blogs",
    ],
    outcome:
      "Organic traffic grew 240% and organic revenue 186% in nine months. The store cut paid spend by 35% while total revenue kept growing.",
    testimonial: {
      quote: "Google is now our biggest sales channel, and we didn’t have to spend more on ads to get there.",
      name: "Founder",
      role: "Online fashion store, Sydney",
    },
    gallery: [],
  },
  {
    slug: "bondi-cafe-tiktok-instagram",
    published: true,
    isExample: true,
    title: "2.1 Million Views and Busier Weekends for a Bondi Café",
    client: "Beachside café",
    industry: "Hospitality",
    industrySlug: "restaurant-marketing-sydney",
    location: "Bondi, Sydney",
    services: ["tiktok-marketing", "content-creation", "social-media-management"],
    duration: "4 months",
    date: "2026-10-31",
    summary:
      "A Bondi café reached 2.1 million views on TikTok and Instagram Reels in four months with weekly on-location filming. Weekend covers rose 38% and Google Maps direction requests more than doubled.",
    metaTitle: "Café TikTok Marketing Case Study Bondi | 2.1M Views",
    metaDescription:
      "How short-form video on TikTok and Instagram brought a Bondi café 2.1 million views, 38% more weekend covers and double the Google Maps direction requests.",
    image: "",
    results: [
      { n: "2.1M", l: "video views" },
      { n: "+38%", l: "weekend covers" },
      { n: "+112%", l: "Google Maps direction requests" },
      { n: "+9,800", l: "new followers" },
    ],
    challenge:
      "The café had great food but posted a photo once a fortnight. Newer cafés nearby were going viral, and locals and tourists searching “best brunch Bondi” on TikTok and Google were finding competitors first.",
    approach: [
      "Filmed on location every week: menu drops, behind-the-counter moments and staff picks",
      "Posted 5 short videos a week across TikTok and Instagram Reels using trending sounds and local hashtags",
      "Ran a creator day with 6 Sydney food creators, with paid boosts on the best-performing videos",
      "Updated the Google Business Profile with menu, photos and posts to catch people after they watched",
      "Tracked direction requests, bookings and weekend covers, not just views",
    ],
    outcome:
      "Two videos passed 500,000 views each. Weekend covers rose 38% and direction requests on Google Maps more than doubled, and the café now has a queue most Saturday mornings.",
    testimonial: {
      quote: "People literally show us the TikTok at the counter and order the same thing.",
      name: "Owner",
      role: "Café, Bondi",
    },
    gallery: [],
  },
];

export const caseStudyPath = (cs: { slug: string }) => `/case-studies/${cs.slug}/`;

/** Case studies that should appear on the site. */
export const visibleCaseStudies = (list: CaseStudy[]) => list.filter((cs) => cs.published && cs.slug);

/** Case studies that may be indexed by search engines (real ones only). */
export const indexableCaseStudies = (list: CaseStudy[]) => visibleCaseStudies(list).filter((cs) => !cs.isExample);

/* ---------------- JSON-LD ---------------- */
type SchemaCtx = {
  business: { url: string; name: string; founder: string; address: { addressLocality: string } };
  brand: { logo: string; ogImage: string };
};
const absUrl = (base: string, u: string) => (u.startsWith("http") ? u : `${base}${u}`);

// One case study: an Article about the client's results, written by the founder,
// published by the agency, mentioning the services used.
export function caseStudySchema(c: SchemaCtx, cs: CaseStudy, serviceNames: { slug: string; name: string }[]) {
  const u = c.business.url;
  const url = `${u}${caseStudyPath(cs)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: cs.title,
    description: cs.summary,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: absUrl(u, cs.image || cs.gallery[0]?.src || c.brand.ogImage),
    datePublished: cs.date,
    dateModified: cs.date,
    inLanguage: "en-AU",
    articleSection: "Case studies",
    author: { "@type": "Person", name: c.business.founder, url: `${u}/about/` },
    publisher: { "@id": `${u}/#organization` },
    about: {
      "@type": "Organization",
      name: cs.client,
      ...(cs.website ? { url: cs.website } : {}),
      ...(cs.location ? { location: { "@type": "Place", name: cs.location } } : {}),
    },
    mentions: serviceNames.map((s) => ({ "@type": "Service", name: s.name, url: `${u}/services/${s.slug}/`, provider: { "@id": `${u}/#organization` } })),
  };
}

export function caseStudiesHubSchema(c: SchemaCtx, list: CaseStudy[], name: string, description: string) {
  const u = c.business.url;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${u}/case-studies/#webpage`,
    url: `${u}/case-studies/`,
    name,
    description,
    inLanguage: "en-AU",
    isPartOf: { "@id": `${u}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: list.map((cs, i) => ({ "@type": "ListItem", position: i + 1, name: cs.title, url: `${u}${caseStudyPath(cs)}` })),
    },
  };
}

/** Case studies with their own hand-built page under app/(site)/case-studies/<slug>/. */
export const customCaseStudyPages = new Set(["sydney-cleaning-and-pest-local-seo-social-media"]);
