// The full, editable content model for the website.
// Every page, the JSON-LD, sitemap and llms.txt read from getContent(), so the
// admin panel (/admin) can change anything without touching code, and names,
// phone and areas stay consistent everywhere (entity consistency matters for
// local SEO and AI answer engines).
import { features, generalFaqs, platforms, services, site, stats, steps, type Faq, type Service } from "./site";
import { caseStudiesPageDefaults, caseStudiesSeo, defaultCaseStudies, type CaseStudy } from "./caseStudies";

export type { Faq, Service, CaseStudy };
export type Link = { label: string; href: string };
export type PageSeo = { title: string; description: string };
export type Item = { t: string; d: string };
export type Stat = { n: string; l: string };

export const defaultContent = {
  business: {
    ...site,
    hoursDisplay: "Monday to Friday, 9:00 am to 5:30 pm",
    hoursShort: "Mon – Fri 9:00 AM – 5:30 PM",
    locationShort: "Sydney NSW, Australia",
    priceRange: "$$",
    languages: ["English", "Bengali"],
    knowsAbout: [
      "Social media marketing",
      "Facebook advertising",
      "Instagram marketing",
      "TikTok marketing",
      "Content creation",
      "Local SEO",
      "Answer engine optimisation",
      "Generative engine optimisation",
    ],
    founderRole: "Founder, SEO and social media",
    founderInitials: "AR",
    founderPhoto: "",
    founderBio:
      "Al Rubel Rana is an SEO specialist and social media manager. He has ranked more than 5,000 keywords and brought in over 20,000 leads for clients through SEO, Meta ads and social campaigns. He also trains business owners and marketers, so if you want to understand what we are doing and why, he will happily walk you through it.",
  },
  brand: {
    logo: "/brand/logo-horizontal-primary.svg",
    logoWhite: "/brand/logo-horizontal-white.svg",
    icon: "/brand/icon-yellow-tile.svg",
    iconPlain: "/brand/icon-plain.svg",
    ogImage: "/og-image.png",
    colorInk: "#16171D",
    colorYellow: "#FFE500",
  },
  services: services as Service[],
  generalFaqs: generalFaqs as Faq[],
  steps: steps as Item[],
  stats: stats as Stat[],
  features: features as Item[],
  platforms: platforms as string[],
  caseStudies: defaultCaseStudies as CaseStudy[],
  caseStudiesPage: caseStudiesPageDefaults,
  home: {
    eyebrow: "Social media and SEO agency, Sydney NSW",
    heroTitleBefore: "A Sydney social media agency for businesses that want ",
    heroTitleHighlight: "the phone to ring",
    heroTitleAfter: "",
    heroLead:
      "Social Boost Sydney runs Instagram, Facebook, TikTok and LinkedIn for local and online businesses, sets up Meta and TikTok ads, films short-form video around Sydney and does local and ecommerce SEO. Each month you get one report that shows the calls, forms and bookings it brought in.",
    primaryCta: { label: "Get a free audit", href: "/contact/" } as Link,
    secondaryCta: { label: "See our services", href: "/services/" } as Link,
    heroPoints: ["No lock-in after 3 months", "Your accounts stay in your name", "Based in Sydney"],
    marqueeTitle: "Where we do the work",
    // Hero proof: a real job photo plus the Search Console screenshot from a case study
    heroPhoto: "/case-studies/scp/technician-steam-cleaning-carpet.jpg",
    heroPhotoAlt: "Sydney Cleaning and Pest technician steam cleaning an office carpet",
    heroProofCase: "sydney-cleaning-and-pest-local-seo-social-media",
    aboutEyebrow: "About us",
    aboutTitle: "Social, ads and search, handled by one team",
    aboutText:
      "A lot of small businesses end up with one person posting on Facebook, another running Google, and nobody checking whether any of it brings in work. We look after all of it together and judge it on the enquiries it brings in. Social Boost Sydney was started by digital marketer Al Rubel Rana.",
    aboutButton: { label: "More about us", href: "/about/" } as Link,
    servicesEyebrow: "Services",
    servicesTitle: "What we can take off your plate",
    servicesText: "Take one on its own or put a few together. Prices are monthly starting points, plus GST.",
    processEyebrow: "How it works",
    processTitle: "It starts with a free audit",
    whyEyebrow: "Why us",
    whyTitle: "Leads, not likes",
    whyPoints: [
      "Clear monthly reporting on calls, forms, bookings and sales",
      "Meta Pixel, Conversions API, TikTok Pixel and GA4 set up properly",
      "Content shot on location across Greater Sydney",
      "SEO, schema and FAQ content ready for Google AI Overviews and ChatGPT",
    ],
    areasTitle: "Areas we serve",
    areasNote: "Plus remote clients Australia-wide.",
    faqEyebrow: "FAQ",
    faqTitle: "Questions we get before people sign up",
    faqText: "Costs, contracts, how long things take and who owns what.",
  },
  about: {
    bannerTitle: "About Social Boost Sydney",
    bannerLead:
      "Social Boost Sydney is a social media marketing agency based in Sydney, NSW, founded by digital marketer Al Rubel Rana. We help local and online businesses turn social media and search into a steady flow of enquiries.",
    founderEyebrow: "Our founder",
    beliefsEyebrow: "How we work",
    beliefsTitle: "A few rules we stick to",
    beliefsPoints: [
      "Every post has a business goal",
      "Report on enquiries and sales, not vanity metrics",
      "Clear pricing and no long lock-in contracts",
      "Your accounts and content stay in your name",
    ],
  },
  servicesPage: {
    bannerTitle: "Our services",
    bannerLead:
      "Social Boost Sydney offers six services: social media management, Facebook and Instagram ads, TikTok marketing, content creation, local SEO with Google Business Profile, and ecommerce SEO.",
    sidebarTitle: "Not sure which service fits? Start with a free audit and we will tell you what to fix first.",
  },
  faqPage: {
    bannerTitle: "Social media marketing FAQ",
    bannerLead: "Straight answers on costs, ad budgets, contracts and how long results take.",
  },
  contact: {
    bannerTitle: "Book your free audit",
    bannerLead: "Tell us about your business and we will reply within one business day.",
    formTitle: "Send us a message",
    successMessage: "Thanks, we have your message and will reply within one business day.",
    submitLabel: "Send message",
  },
  cta: {
    eyebrow: "Free audit",
    title: "Send us your website or Instagram and we will tell you what to fix first",
    text: "Book a free social media and SEO audit. We review your profiles, ads, Google listing and competitors, then send a 1-page action plan within 2 business days.",
    primary: { label: "Book the audit", href: "/contact/" } as Link,
    secondary: { label: "See services", href: "/services/" } as Link,
    formTitle: "Ask for your free audit",
  },
  header: {
    ctaLabel: "Free audit",
    ctaHref: "/contact/",
    phoneLabel: "Call / WhatsApp",
  },
  footer: {
    blurb: "Social media, Meta ads and SEO for Sydney businesses that care more about enquiries than followers.",
  },
  whatsapp: {
    enabled: true,
    label: "Chat on WhatsApp",
    message: "Hi Social Boost Sydney, I'd like a free social media audit.",
  },
  seo: {
    defaultTitle: "Social Media Marketing Agency Sydney | Social Boost Sydney",
    home: {
      title: "Social Media Marketing Agency Sydney | Social Boost Sydney",
      description: site.description,
    } as PageSeo,
    about: {
      title: "About Social Boost Sydney | Sydney Social Media Agency",
      description:
        "Meet Social Boost Sydney, a Sydney social media marketing agency founded by digital marketer Al Rubel Rana. Social, ads, content, local SEO and ecommerce SEO under one roof.",
    } as PageSeo,
    services: {
      title: "Social Media Marketing Services Sydney | Social Boost Sydney",
      description:
        "Social media management, Facebook & Instagram ads, TikTok marketing, content creation, local SEO and ecommerce SEO for Sydney businesses.",
    } as PageSeo,
    faq: {
      title: "Social Media Marketing FAQ Sydney | Costs, Results & Contracts",
      description:
        "Straight answers about social media marketing in Sydney: agency costs, ad budgets, how long results take, TikTok, local SEO, ecommerce SEO, AEO and GEO.",
    } as PageSeo,
    contact: {
      title: "Contact Social Boost Sydney | Free Social Media Audit",
      description:
        "Book a free social media and SEO audit with Social Boost Sydney. Call, email or send the form and we reply within one business day.",
    } as PageSeo,
    caseStudies: caseStudiesSeo as PageSeo,
    geoRegion: "AU-NSW",
    geoPlacename: "Sydney",
    googleVerification: "",
    bingVerification: "",
    allowAiCrawlers: true,
  },
  tracking: {
    ga4Id: "",
    gtmId: "",
    metaPixelId: "",
    tiktokPixelId: "",
  },
  notifications: {
    leadEmail: "",
  },
};

export type SiteContent = typeof defaultContent;
export type SectionKey = keyof SiteContent;
export const sectionKeys = Object.keys(defaultContent) as SectionKey[];

const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v);

// Stored content is merged over the defaults, so new fields added in code
// always have a value. Arrays are replaced as a whole.
export function deepMerge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) return (Array.isArray(over) ? over : base) as T;
  if (isObj(base)) {
    if (!isObj(over)) return base;
    const out: Record<string, unknown> = { ...base };
    for (const k of Object.keys(over)) {
      out[k] = k in base ? deepMerge((base as Record<string, unknown>)[k], over[k]) : over[k];
    }
    return out as T;
  }
  if (typeof base === "number") return (typeof over === "number" ? over : Number(over) || base) as T;
  if (typeof base === "boolean") return (typeof over === "boolean" ? over : base) as T;
  return (typeof over === "string" ? over : base) as T;
}

export const waLink = (number: string, text?: string) =>
  `https://wa.me/${number.replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export function faqGroups(c: SiteContent) {
  const isPricing = (f: Faq) => /cost|spend|contract|price|pricing/i.test(f.q);
  const serviceFaqs = c.services.flatMap((s) => s.faqs);
  const all = [...c.generalFaqs, ...serviceFaqs];
  return {
    all,
    groups: [
      { name: "General", faqs: c.generalFaqs.filter((f) => !isPricing(f)) },
      { name: "Pricing", faqs: all.filter(isPricing) },
      { name: "Services", faqs: serviceFaqs.filter((f) => !isPricing(f)) },
    ].filter((g) => g.faqs.length > 0),
  };
}
