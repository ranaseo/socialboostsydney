// The full, editable content model for the website.
// Every page, the JSON-LD, sitemap and llms.txt read from getContent(), so the
// admin panel (/admin) can change anything without touching code, and names,
// phone and areas stay consistent everywhere (entity consistency matters for
// local SEO and AI answer engines).
import { features, generalFaqs, platforms, services, site, stats, steps, type Faq, type Service } from "./site";

export type { Faq, Service };
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
    founderRole: "Founder · SEO Specialist & Social Media Manager",
    founderInitials: "AR",
    founderPhoto: "",
    founderBio:
      "Al Rubel Rana is a results-driven SEO specialist and social media manager with expertise in ads, branding and digital growth. He has ranked over 5,000 keywords, generated 20,000+ leads through strategic campaigns, and trains businesses and marketers in digital marketing.",
    founderSkills: ["SEO", "Meta Ads", "Branding", "Canva & design", "Training"],
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
  home: {
    eyebrow: "Social media marketing agency · Sydney NSW",
    heroTitleBefore: "The Social Media Agency for ",
    heroTitleHighlight: "Higher ROI",
    heroTitleAfter: " in Sydney",
    heroLead:
      "Social Boost Sydney manages Instagram, Facebook, TikTok and LinkedIn, runs paid social ads, creates short-form video and does local and ecommerce SEO, so Sydney businesses get more leads, bookings and sales without hiring an in-house team.",
    primaryCta: { label: "Get a Free Audit", href: "/contact/" } as Link,
    secondaryCta: { label: "Explore Services", href: "/services/" } as Link,
    heroPoints: ["No lock-in after 3 months", "You own every account", "Sydney-based team"],
    marqueeTitle: "Platforms we grow Sydney brands on",
    aboutEyebrow: "About us",
    aboutTitle: "Why Social Boost should be your top choice in Sydney",
    aboutText:
      "Social Boost Sydney is where social media, paid ads and search work together. Founded by digital marketer Al Rubel Rana, we focus on one thing: turning your online presence into enquiries and sales.",
    aboutButton: { label: "More About Us", href: "/about/" } as Link,
    servicesEyebrow: "Our services",
    servicesTitle: "Services we’re offering in Sydney",
    servicesText: "Pick one service or combine them into a full growth plan for social media and search.",
    processEyebrow: "Work process",
    processTitle: "Our 4-step work process",
    whyEyebrow: "Why choose us",
    whyTitle: "Leads, not likes",
    whyPoints: [
      "Clear monthly reporting on calls, forms, bookings and sales",
      "Meta Pixel, Conversions API, TikTok Pixel and GA4 set up properly",
      "Content shot on location across Greater Sydney",
      "SEO, schema and FAQ content ready for Google AI Overviews and ChatGPT",
    ],
    areasTitle: "Areas we serve",
    areasNote: "Plus remote clients Australia-wide.",
    founderEyebrow: "Meet the founder",
    faqEyebrow: "Frequently asked",
    faqTitle: "Find the answers you need",
    faqText: "Short, direct answers to what Sydney business owners ask us most.",
  },
  about: {
    bannerTitle: "About Social Boost Sydney",
    bannerLead:
      "Social Boost Sydney is a social media marketing agency based in Sydney, NSW, founded by digital marketer Al Rubel Rana. We help local and online businesses turn social media and search into a steady flow of enquiries.",
    founderEyebrow: "Our founder",
    beliefsEyebrow: "What we believe",
    beliefsTitle: "How we work with Sydney businesses",
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
    sidebarTitle: "Get a free audit and a clear plan for your business.",
  },
  faqPage: {
    bannerTitle: "Social media marketing FAQ",
    bannerLead: "Short, direct answers to the questions Sydney business owners ask us most.",
  },
  contact: {
    bannerTitle: "Book your free audit",
    bannerLead: "Tell us about your business and we will reply within one business day.",
    formTitle: "Send us a message",
    successMessage: "Thanks! We have your message and will reply within one business day.",
    submitLabel: "Send Message",
  },
  cta: {
    eyebrow: "Get started with us",
    title: "Start a conversation to boost your business",
    text: "Book a free social media and SEO audit. We review your profiles, ads, Google listing and competitors, then send a 1-page action plan within 2 business days.",
    primary: { label: "Let’s Talk", href: "/contact/" } as Link,
    secondary: { label: "View Services", href: "/services/" } as Link,
    formTitle: "Get a free consultation with our experts",
  },
  header: {
    ctaLabel: "Free Audit",
    ctaHref: "/contact/",
    phoneLabel: "Call / WhatsApp",
  },
  footer: {
    blurb: "Grow your Sydney business with social media, paid ads and SEO that bring real enquiries.",
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
