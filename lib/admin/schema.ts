// Describes every editable field in the admin panel. The generic editor
// (app/admin/_components/Editor.tsx) renders forms from these definitions,
// so adding a field here plus a default in lib/content.ts is all it takes.
import type { SectionKey } from "../content";

export type Field =
  | { k: string; label: string; type: "text" | "textarea" | "url" | "image" | "color" | "number" | "email"; help?: string; max?: number; rows?: number; placeholder?: string }
  | { k: string; label: string; type: "bool"; help?: string }
  | { k: string; label: string; type: "select"; options: string[]; help?: string }
  | { k: string; label: string; type: "list"; help?: string; placeholder?: string }
  | { k: string; label: string; type: "group"; fields: Field[]; help?: string }
  | { k: string; label: string; type: "items"; fields: Field[]; titleKey: string; newItem: Record<string, unknown>; help?: string; addLabel?: string };

export type Block = { key: SectionKey; title: string; help?: string; fields: Field[]; root?: "items" | "list"; titleKey?: string; newItem?: Record<string, unknown>; addLabel?: string };
export type AdminPage = { slug: string; title: string; icon: string; desc: string; blocks: Block[] };

const link = (k: string, label: string): Field => ({
  k,
  label,
  type: "group",
  fields: [
    { k: "label", label: "Button text", type: "text" },
    { k: "href", label: "Link (e.g. /contact/)", type: "text" },
  ],
});

const seoPage = (k: string, label: string): Field => ({
  k,
  label,
  type: "group",
  fields: [
    { k: "title", label: "Meta title", type: "text", max: 60 },
    { k: "description", label: "Meta description", type: "textarea", max: 160, rows: 3 },
  ],
});

const faqFields: Field[] = [
  { k: "q", label: "Question", type: "text" },
  { k: "a", label: "Answer (start with a direct answer — AI engines quote this)", type: "textarea", rows: 4 },
];

export const serviceIconOptions = [
  "social-media-management",
  "facebook-instagram-ads",
  "tiktok-marketing",
  "content-creation",
  "local-seo",
  "ecommerce-seo",
  "star",
  "chart",
  "mail",
  "globe",
  "pen",
  "users",
];

export const adminPages: AdminPage[] = [
  {
    slug: "business",
    title: "Business info",
    icon: "🏢",
    desc: "Name, phone, WhatsApp, email, address, hours, social links and founder. Used on every page, in Google schema and in llms.txt.",
    blocks: [
      {
        key: "business",
        title: "Business details",
        fields: [
          { k: "name", label: "Business name", type: "text" },
          { k: "legalName", label: "Legal name", type: "text" },
          { k: "url", label: "Website URL (no trailing slash)", type: "url" },
          { k: "tagline", label: "Tagline", type: "text" },
          { k: "description", label: "Business description (used in schema, llms.txt, default meta)", type: "textarea", rows: 4, max: 300 },
          { k: "email", label: "Email", type: "email" },
          { k: "phone", label: "Phone (schema, international format)", type: "text" },
          { k: "phoneDisplay", label: "Phone shown on site", type: "text" },
          { k: "whatsapp", label: "WhatsApp number (digits only, with country code)", type: "text", help: "Example: 8801750423058. All call/WhatsApp buttons use this." },
          { k: "whatsappDisplay", label: "WhatsApp shown on site", type: "text" },
          {
            k: "address",
            label: "Address (NAP — keep identical to Google Business Profile)",
            type: "group",
            fields: [
              { k: "streetAddress", label: "Street address", type: "text" },
              { k: "addressLocality", label: "City / suburb", type: "text" },
              { k: "addressRegion", label: "State", type: "text" },
              { k: "postalCode", label: "Postcode", type: "text" },
              { k: "addressCountry", label: "Country code", type: "text" },
            ],
          },
          {
            k: "geo",
            label: "Map coordinates",
            type: "group",
            fields: [
              { k: "latitude", label: "Latitude", type: "number" },
              { k: "longitude", label: "Longitude", type: "number" },
            ],
          },
          { k: "hours", label: "Opening hours (schema format)", type: "text", help: "Example: Mo-Fr 09:00-17:30" },
          { k: "hoursDisplay", label: "Opening hours (contact page)", type: "text" },
          { k: "hoursShort", label: "Opening hours (top bar)", type: "text" },
          { k: "locationShort", label: "Location (top bar)", type: "text" },
          { k: "priceRange", label: "Price range (schema)", type: "text" },
          { k: "sameAs", label: "Social profile URLs", type: "list", placeholder: "https://www.instagram.com/…" },
          { k: "areas", label: "Areas served (suburbs)", type: "list" },
          { k: "languages", label: "Languages spoken", type: "list" },
          { k: "knowsAbout", label: "Expertise topics (schema knowsAbout)", type: "list" },
        ],
      },
      {
        key: "business",
        title: "Founder (E-E-A-T)",
        fields: [
          { k: "founder", label: "Founder name", type: "text" },
          { k: "founderRole", label: "Role line", type: "text" },
          { k: "founderBio", label: "Bio", type: "textarea", rows: 5 },
          { k: "founderPhoto", label: "Photo (optional)", type: "image", help: "If empty, the initials badge is shown." },
          { k: "founderInitials", label: "Initials badge", type: "text" },
          { k: "founderSkills", label: "Skill chips", type: "list" },
        ],
      },
    ],
  },
  {
    slug: "home",
    title: "Homepage",
    icon: "🏠",
    desc: "Hero, about, services, process, why-us, founder and FAQ sections of the homepage, plus counters and platforms.",
    blocks: [
      {
        key: "home",
        title: "Hero",
        fields: [
          { k: "eyebrow", label: "Small label above heading", type: "text" },
          { k: "heroTitleBefore", label: "Heading — text before highlight", type: "text" },
          { k: "heroTitleHighlight", label: "Heading — highlighted (yellow) words", type: "text" },
          { k: "heroTitleAfter", label: "Heading — text after highlight", type: "text" },
          { k: "heroLead", label: "Answer-first summary paragraph", type: "textarea", rows: 4, help: "The one paragraph AI engines should quote. Say who you are, what you do, where." },
          link("primaryCta", "Main button"),
          link("secondaryCta", "Second button"),
          { k: "heroPoints", label: "Tick points", type: "list" },
          { k: "marqueeTitle", label: "Platforms strip title", type: "text" },
        ],
      },
      {
        key: "home",
        title: "Sections",
        fields: [
          { k: "aboutEyebrow", label: "About — label", type: "text" },
          { k: "aboutTitle", label: "About — heading", type: "text" },
          { k: "aboutText", label: "About — text", type: "textarea", rows: 4 },
          link("aboutButton", "About — button"),
          { k: "servicesEyebrow", label: "Services — label", type: "text" },
          { k: "servicesTitle", label: "Services — heading", type: "text" },
          { k: "servicesText", label: "Services — text", type: "textarea", rows: 2 },
          { k: "processEyebrow", label: "Process — label", type: "text" },
          { k: "processTitle", label: "Process — heading", type: "text" },
          { k: "whyEyebrow", label: "Why us — label", type: "text" },
          { k: "whyTitle", label: "Why us — heading", type: "text" },
          { k: "whyPoints", label: "Why us — tick points", type: "list" },
          { k: "areasTitle", label: "Areas box — heading", type: "text" },
          { k: "areasNote", label: "Areas box — note", type: "text" },
          { k: "founderEyebrow", label: "Founder — label", type: "text" },
          { k: "faqEyebrow", label: "FAQ — label", type: "text" },
          { k: "faqTitle", label: "FAQ — heading", type: "text" },
          { k: "faqText", label: "FAQ — text", type: "textarea", rows: 2 },
        ],
      },
      {
        key: "stats",
        title: "Counters",
        help: "Shown on the homepage and About page. The first one also appears as the badge.",
        root: "items",
        titleKey: "l",
        newItem: { n: "100+", l: "New counter" },
        addLabel: "Add counter",
        fields: [
          { k: "n", label: "Number", type: "text" },
          { k: "l", label: "Label", type: "text" },
        ],
      },
      {
        key: "features",
        title: "Feature cards",
        root: "items",
        titleKey: "t",
        newItem: { t: "New feature", d: "" },
        addLabel: "Add feature",
        fields: [
          { k: "t", label: "Title", type: "text" },
          { k: "d", label: "Text", type: "textarea", rows: 2 },
        ],
      },
      {
        key: "steps",
        title: "Work process steps",
        help: "Also shown on every service page under “How it works”.",
        root: "items",
        titleKey: "t",
        newItem: { t: "New step", d: "" },
        addLabel: "Add step",
        fields: [
          { k: "t", label: "Step title", type: "text" },
          { k: "d", label: "Step text", type: "textarea", rows: 2 },
        ],
      },
      { key: "platforms", title: "Platforms strip", help: "Names in the scrolling strip under the hero.", root: "list", fields: [] },
    ],
  },
  {
    slug: "services",
    title: "Services",
    icon: "🧩",
    desc: "Add, edit, reorder or remove services. Each service gets its own page at /services/slug/ with schema and FAQs.",
    blocks: [
      {
        key: "services",
        title: "Services",
        root: "items",
        titleKey: "name",
        addLabel: "Add service",
        newItem: {
          slug: "new-service",
          name: "New Service",
          short: "",
          title: "New Service Sydney | Social Boost Sydney",
          metaDescription: "",
          answer: "",
          includes: [],
          forWho: [],
          priceFrom: "From $ + GST per month",
          faqs: [],
          icon: "star",
          image: "",
        },
        fields: [
          { k: "name", label: "Service name", type: "text" },
          { k: "slug", label: "URL slug", type: "text", help: "Lowercase letters, numbers and dashes. Changing it changes the page URL." },
          { k: "short", label: "Short description (cards)", type: "textarea", rows: 2 },
          { k: "priceFrom", label: "Price line", type: "text" },
          { k: "title", label: "Meta title", type: "text", max: 60 },
          { k: "metaDescription", label: "Meta description", type: "textarea", rows: 3, max: 160 },
          { k: "answer", label: "Answer-first intro paragraph", type: "textarea", rows: 4 },
          { k: "includes", label: "What’s included", type: "list" },
          { k: "forWho", label: "Who it’s for", type: "list" },
          { k: "icon", label: "Icon", type: "select", options: serviceIconOptions },
          { k: "image", label: "Page image (optional, replaces the icon tile)", type: "image" },
          { k: "faqs", label: "Service FAQs", type: "items", titleKey: "q", newItem: { q: "New question?", a: "" }, addLabel: "Add FAQ", fields: faqFields },
        ],
      },
    ],
  },
  {
    slug: "faqs",
    title: "FAQs",
    icon: "❓",
    desc: "General FAQs (homepage, FAQ page, FAQPage schema and llms.txt). Service FAQs are edited under Services.",
    blocks: [
      {
        key: "generalFaqs",
        title: "General FAQs",
        root: "items",
        titleKey: "q",
        newItem: { q: "New question?", a: "" },
        addLabel: "Add FAQ",
        fields: faqFields,
      },
    ],
  },
  {
    slug: "pages",
    title: "Pages & sections",
    icon: "📄",
    desc: "Texts on About, Services, FAQ and Contact pages, the call-to-action box, header, footer and WhatsApp button.",
    blocks: [
      {
        key: "about",
        title: "About page",
        fields: [
          { k: "bannerTitle", label: "Page heading", type: "text" },
          { k: "bannerLead", label: "Intro paragraph", type: "textarea", rows: 3 },
          { k: "founderEyebrow", label: "Founder label", type: "text" },
          { k: "beliefsEyebrow", label: "Beliefs label", type: "text" },
          { k: "beliefsTitle", label: "Beliefs heading", type: "text" },
          { k: "beliefsPoints", label: "Beliefs tick points", type: "list" },
        ],
      },
      {
        key: "servicesPage",
        title: "Services page",
        fields: [
          { k: "bannerTitle", label: "Page heading", type: "text" },
          { k: "bannerLead", label: "Intro paragraph", type: "textarea", rows: 3 },
          { k: "sidebarTitle", label: "Service page sidebar text", type: "text" },
        ],
      },
      {
        key: "faqPage",
        title: "FAQ page",
        fields: [
          { k: "bannerTitle", label: "Page heading", type: "text" },
          { k: "bannerLead", label: "Intro paragraph", type: "textarea", rows: 2 },
        ],
      },
      {
        key: "contact",
        title: "Contact page & form",
        fields: [
          { k: "bannerTitle", label: "Page heading", type: "text" },
          { k: "bannerLead", label: "Intro paragraph", type: "textarea", rows: 2 },
          { k: "formTitle", label: "Form heading", type: "text" },
          { k: "submitLabel", label: "Submit button text", type: "text" },
          { k: "successMessage", label: "Message after sending", type: "textarea", rows: 2 },
        ],
      },
      {
        key: "cta",
        title: "Call-to-action box (bottom of pages)",
        fields: [
          { k: "eyebrow", label: "Label", type: "text" },
          { k: "title", label: "Heading", type: "text" },
          { k: "text", label: "Text", type: "textarea", rows: 3 },
          link("primary", "Main button"),
          link("secondary", "Second button"),
          { k: "formTitle", label: "Form heading", type: "text" },
        ],
      },
      {
        key: "header",
        title: "Header",
        fields: [
          { k: "ctaLabel", label: "Header button text", type: "text" },
          { k: "ctaHref", label: "Header button link", type: "text" },
          { k: "phoneLabel", label: "Phone label", type: "text" },
        ],
      },
      {
        key: "footer",
        title: "Footer",
        fields: [{ k: "blurb", label: "Footer text", type: "textarea", rows: 2 }],
      },
      {
        key: "whatsapp",
        title: "Floating WhatsApp button",
        fields: [
          { k: "enabled", label: "Show the floating WhatsApp button", type: "bool" },
          { k: "label", label: "Button label", type: "text" },
          { k: "message", label: "Pre-filled message", type: "textarea", rows: 2 },
        ],
      },
    ],
  },
  {
    slug: "brand",
    title: "Logo & colours",
    icon: "🎨",
    desc: "Logos, social share image and the two brand colours.",
    blocks: [
      {
        key: "brand",
        title: "Brand",
        fields: [
          { k: "logo", label: "Logo (light backgrounds)", type: "image" },
          { k: "logoWhite", label: "Logo (dark footer)", type: "image" },
          { k: "icon", label: "Icon tile", type: "image" },
          { k: "iconPlain", label: "Icon (plain)", type: "image" },
          { k: "ogImage", label: "Social share image (1640×624 or 1200×630)", type: "image" },
          { k: "colorInk", label: "Dark colour", type: "color" },
          { k: "colorYellow", label: "Accent colour", type: "color" },
        ],
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO & tracking",
    icon: "📈",
    desc: "Meta titles and descriptions per page, search console verification, AI crawler access, GA4, GTM, Meta and TikTok pixels, lead alerts.",
    blocks: [
      {
        key: "seo",
        title: "Page SEO",
        fields: [
          { k: "defaultTitle", label: "Default title (fallback)", type: "text", max: 60 },
          seoPage("home", "Homepage"),
          seoPage("services", "Services page"),
          seoPage("about", "About page"),
          seoPage("faq", "FAQ page"),
          seoPage("contact", "Contact page"),
          { k: "geoRegion", label: "geo.region meta", type: "text" },
          { k: "geoPlacename", label: "geo.placename meta", type: "text" },
          { k: "googleVerification", label: "Google Search Console verification code", type: "text", help: "Only the content=\"…\" value." },
          { k: "bingVerification", label: "Bing Webmaster verification code", type: "text" },
          { k: "allowAiCrawlers", label: "Allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot…) — recommended for GEO", type: "bool" },
        ],
      },
      {
        key: "tracking",
        title: "Analytics & pixels",
        help: "Leave empty to disable. Form submissions fire generate_lead (GA4), Lead (Meta) and SubmitForm (TikTok).",
        fields: [
          { k: "ga4Id", label: "Google Analytics 4 ID", type: "text", placeholder: "G-XXXXXXX" },
          { k: "gtmId", label: "Google Tag Manager ID", type: "text", placeholder: "GTM-XXXXXX" },
          { k: "metaPixelId", label: "Meta Pixel ID", type: "text" },
          { k: "tiktokPixelId", label: "TikTok Pixel ID", type: "text" },
        ],
      },
      {
        key: "notifications",
        title: "Lead alerts",
        help: "Get an email for every new lead. Needs RESEND_API_KEY set in Vercel (free at resend.com).",
        fields: [{ k: "leadEmail", label: "Send new leads to this email", type: "email" }],
      },
    ],
  },
];
