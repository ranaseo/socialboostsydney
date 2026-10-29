// Single source of truth for business facts. Every page, the JSON-LD and
// llms.txt read from here, so names, phone and areas stay consistent
// (entity consistency matters for local SEO and AI answer engines).
// TODO before launch: replace the placeholder phone and street address.

export const site = {
  name: "Social Boost Sydney",
  legalName: "Social Boost Sydney",
  url: "https://socialboostsydney.com.au",
  tagline: "Social media marketing agency in Sydney",
  description:
    "Social Boost Sydney is a social media marketing agency in Sydney, NSW. We manage Instagram, Facebook, TikTok and LinkedIn, run paid social ads, create short-form video content and grow local and ecommerce businesses with SEO.",
  email: "hello@socialboostsydney.com.au",
  phone: "+61 2 0000 0000", // placeholder
  phoneDisplay: "(02) 0000 0000", // placeholder
  address: {
    streetAddress: "Level 1, 000 George Street", // placeholder
    addressLocality: "Sydney",
    addressRegion: "NSW",
    postalCode: "2000",
    addressCountry: "AU",
  },
  geo: { latitude: -33.8688, longitude: 151.2093 },
  hours: "Mo-Fr 09:00-17:30",
  founder: "Al Rubel Rana",
  sameAs: [
    "https://www.facebook.com/socialboostsydney",
    "https://www.instagram.com/socialboostsydney",
    "https://www.linkedin.com/company/socialboostsydney",
    "https://www.tiktok.com/@socialboostsydney",
  ],
  areas: [
    "Sydney CBD",
    "Parramatta",
    "North Sydney",
    "Chatswood",
    "Bondi",
    "Surry Hills",
    "Liverpool",
    "Penrith",
    "Hills District",
    "Sutherland Shire",
    "Northern Beaches",
    "Inner West",
  ],
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string; // <title>
  metaDescription: string;
  answer: string; // answer-first paragraph shown at top of page
  includes: string[];
  forWho: string[];
  priceFrom: string;
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    short: "Monthly content, posting and community management on Instagram, Facebook, TikTok and LinkedIn.",
    title: "Social Media Management Sydney | Social Boost Sydney",
    metaDescription:
      "Done-for-you social media management in Sydney. Content calendar, posting, captions, hashtags and community replies on Instagram, Facebook, TikTok and LinkedIn.",
    answer:
      "Social media management is when an agency plans, creates, posts and replies on your social accounts for you. Social Boost Sydney handles your content calendar, design, captions, scheduling and comment replies every month, and sends you a plain-English report on reach, engagement and enquiries.",
    includes: [
      "Monthly content calendar approved by you",
      "12 to 20 branded posts, carousels and Reels per month",
      "Captions, hashtags and local keywords",
      "Comment and DM replies during business hours",
      "Monthly performance report and strategy call",
    ],
    forWho: ["Cafes and restaurants", "Trades and home services", "Clinics and allied health", "Real estate agents", "Retail and e-commerce"],
    priceFrom: "From $990 + GST per month",
    faqs: [
      {
        q: "How much does social media management cost in Sydney?",
        a: "Social media management in Sydney usually costs between $800 and $3,000 per month for small businesses. Our plans start at $990 + GST per month and depend on the number of platforms, posts and videos you need.",
      },
      {
        q: "Which platforms should my business be on?",
        a: "Most Sydney local businesses get the best results from Instagram and Facebook, with TikTok for younger audiences and LinkedIn for B2B. We recommend starting with two platforms done well rather than four done poorly.",
      },
    ],
  },
  {
    slug: "facebook-instagram-ads",
    name: "Facebook & Instagram Ads",
    short: "Meta ad campaigns built for leads, bookings and sales, tracked to real enquiries.",
    title: "Facebook & Instagram Ads Agency Sydney | Social Boost Sydney",
    metaDescription:
      "Meta ads management in Sydney. Lead generation, retargeting and sales campaigns on Facebook and Instagram with pixel and Conversions API tracking.",
    answer:
      "Facebook and Instagram ads are paid campaigns on Meta that show your offer to people in Sydney who match your ideal customer. Social Boost Sydney sets up tracking, writes and designs the ads, tests audiences and creative, and optimises weekly for cost per lead or cost per sale.",
    includes: [
      "Meta Pixel and Conversions API setup",
      "Audience research and local radius targeting",
      "Ad copy, static and video creative",
      "Lead forms or landing page campaigns",
      "Weekly optimisation and monthly reporting",
    ],
    forWho: ["Service businesses wanting leads", "E-commerce stores", "Events and hospitality", "Gyms and studios"],
    priceFrom: "From $790 + GST per month (plus ad spend)",
    faqs: [
      {
        q: "How much should I spend on Facebook ads in Sydney?",
        a: "A starting ad budget of $20 to $50 per day ($600 to $1,500 per month) is enough for most Sydney local businesses to test offers and audiences. Spend is paid directly to Meta and is separate from our management fee.",
      },
      {
        q: "How fast will I see results from Meta ads?",
        a: "Most campaigns produce first leads within 3 to 7 days, and stable results after a 2 to 4 week learning and testing phase.",
      },
    ],
  },
  {
    slug: "tiktok-marketing",
    name: "TikTok Marketing",
    short: "Organic TikTok growth and TikTok ads that reach Sydney customers under 40.",
    title: "TikTok Marketing Agency Sydney | Social Boost Sydney",
    metaDescription:
      "TikTok marketing in Sydney: content strategy, filming, editing, trends and TikTok ads for local brands that want to reach younger customers.",
    answer:
      "TikTok marketing means growing your brand on TikTok with short, native videos and, when it makes sense, TikTok ads. Social Boost Sydney plans hooks and trends, films or briefs your team, edits the videos and runs Spark Ads on your best organic posts.",
    includes: [
      "TikTok profile and content strategy",
      "Hook and trend research each week",
      "Filming days in Sydney or remote creator briefs",
      "Editing, captions and posting",
      "TikTok Spark Ads and TikTok Pixel setup",
    ],
    forWho: ["Food and beverage", "Beauty and fashion", "Fitness", "Consumer products"],
    priceFrom: "From $1,290 + GST per month",
    faqs: [
      {
        q: "Is TikTok worth it for a small business in Sydney?",
        a: "Yes, if your customers are under 40 and your product is visual. TikTok gives small Sydney businesses organic reach that is now hard to get on Facebook and Instagram, and Spark Ads let you boost proven videos cheaply.",
      },
    ],
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    short: "Reels, short-form video, photography and UGC-style content shot in Sydney.",
    title: "Social Media Content Creation Sydney | Reels & UGC | Social Boost Sydney",
    metaDescription:
      "Social media content creation in Sydney: Reels, TikToks, product photography and UGC-style videos filmed and edited for your brand.",
    answer:
      "Social media content creation is the filming, photography, design and editing of posts made for each platform. Social Boost Sydney runs half-day and full-day content shoots across Sydney and delivers a month of edited Reels, photos and graphics in your brand style.",
    includes: [
      "Creative brief and shot list",
      "On-location shoots across Greater Sydney",
      "Edited Reels and TikToks with captions",
      "Product and lifestyle photography",
      "Canva brand templates for your team",
    ],
    forWho: ["Brands without in-house creators", "Businesses launching a new product", "Agencies needing white-label content"],
    priceFrom: "From $1,500 + GST per shoot",
    faqs: [
      {
        q: "How many videos do I get from one content shoot?",
        a: "A half-day shoot usually produces 8 to 12 edited short-form videos plus 20 to 30 photos, enough for about one month of posting.",
      },
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO & Google Business Profile",
    short: "Rank in Google Maps and AI answers for “near me” searches across Sydney.",
    title: "Local SEO Sydney & Google Business Profile | Social Boost Sydney",
    metaDescription:
      "Local SEO in Sydney: Google Business Profile optimisation, local citations, reviews strategy, suburb pages and AI search (AEO/GEO) visibility.",
    answer:
      "Local SEO is the work that helps your business appear in Google Maps, the local pack and AI answers when people nearby search for what you sell. Social Boost Sydney optimises your Google Business Profile, builds consistent citations, plans reviews and creates suburb and FAQ content that answer engines can quote.",
    includes: [
      "Google Business Profile audit and optimisation",
      "NAP citation cleanup and building",
      "Review request system",
      "Suburb and service landing pages",
      "Schema markup, FAQ content and AI search (AEO/GEO) checks",
    ],
    forWho: ["Trades and home services", "Clinics and dentists", "Lawyers and accountants", "Any business with a Sydney service area"],
    priceFrom: "From $890 + GST per month",
    faqs: [
      {
        q: "How long does local SEO take to work?",
        a: "Google Business Profile improvements can show within 2 to 6 weeks. Ranking new suburb pages in organic results usually takes 3 to 6 months, depending on competition.",
      },
      {
        q: "What is AEO and GEO?",
        a: "AEO (answer engine optimisation) structures your content so search features and voice assistants can lift a direct answer. GEO (generative engine optimisation) makes your business clear and trustworthy enough for AI tools like ChatGPT, Perplexity and Google AI Overviews to mention and cite.",
      },
    ],
  },
  {
    slug: "ecommerce-seo",
    name: "Ecommerce SEO",
    short: "Shopify and WooCommerce SEO that gets product and category pages ranking and selling.",
    title: "Ecommerce SEO Sydney | Shopify & WooCommerce SEO | Social Boost Sydney",
    metaDescription:
      "Ecommerce SEO in Sydney for Shopify and WooCommerce stores: technical fixes, category and product page optimisation, product schema, Merchant Center and AI shopping visibility.",
    answer:
      "Ecommerce SEO is the work that gets an online store's category and product pages found in Google, Google Shopping and AI shopping answers. Social Boost Sydney fixes technical issues, researches buyer keywords, rewrites category and product pages, adds product schema and connects Google Merchant Center so more searches turn into sales.",
    includes: [
      "Technical SEO audit (speed, crawl, duplicate and faceted URLs)",
      "Keyword research for categories and products",
      "Category and product page copy and on-page optimisation",
      "Product, Offer and Breadcrumb schema",
      "Google Merchant Center free listings and feed checks",
      "Monthly ranking, traffic and revenue reporting",
    ],
    forWho: ["Shopify stores", "WooCommerce stores", "Australian D2C brands", "Retailers moving online"],
    priceFrom: "From $1,190 + GST per month",
    faqs: [
      {
        q: "How long does ecommerce SEO take to show results?",
        a: "Technical fixes and category page improvements usually show movement in 6 to 12 weeks. Strong, steady organic revenue growth typically builds over 4 to 9 months.",
      },
      {
        q: "Do you do SEO for Shopify stores?",
        a: "Yes. We work on Shopify and WooCommerce, including theme speed, collection pages, product schema, duplicate URL cleanup and Google Merchant Center.",
      },
    ],
  },
];

export const generalFaqs: Faq[] = [
  {
    q: "What does a social media marketing agency in Sydney do?",
    a: "A social media marketing agency plans, creates and manages your social media content and paid ads so you get more followers, enquiries and sales. Social Boost Sydney covers strategy, content creation, posting, community management, Facebook, Instagram and TikTok ads, and monthly reporting.",
  },
  {
    q: "How much does a social media agency cost in Sydney?",
    a: "Most Sydney small businesses pay $800 to $3,000 per month for social media management, plus ad spend if they run paid campaigns. Social Boost Sydney plans start from $790 + GST per month, with no lock-in after the first 3 months.",
  },
  {
    q: "Do you work with businesses outside the Sydney CBD?",
    a: "Yes. We work with businesses across Greater Sydney, including Parramatta, North Sydney, Chatswood, Bondi, the Inner West, Western Sydney, the Hills District and the Northern Beaches, and we also work remotely with clients across Australia.",
  },
  {
    q: "How long until I see results from social media marketing?",
    a: "Paid ads can bring enquiries within the first week. Organic growth in reach and followers usually becomes clear after 2 to 3 months of consistent posting.",
  },
  {
    q: "Do I need to sign a long contract?",
    a: "No. We ask for a 3-month starting term so there is enough time to test and learn, then plans continue month to month with 30 days notice.",
  },
  {
    q: "Will I own my social accounts and ad accounts?",
    a: "Yes. Your pages, ad accounts, pixels and content always stay in your name. We are added as partners through Meta Business Suite and TikTok Business Center.",
  },
];

export const steps = [
  { t: "Free audit", d: "We review your profiles, ads and competitors and show you the quick wins." },
  { t: "Strategy", d: "A 90-day plan with goals, platforms, content pillars and budget." },
  { t: "Create & launch", d: "We shoot, design, write and publish, and launch ads with tracking." },
  { t: "Report & grow", d: "Monthly reports in plain English and a call to plan the next month." },
];

// Founder track record (from Al Rubel Rana's own work, used in the About counters)
export const stats = [
  { n: "5,000+", l: "Keywords ranked" },
  { n: "20,000+", l: "Leads generated" },
  { n: "6", l: "Growth services" },
];

export const features = [
  { t: "Data-driven decisions", d: "Every campaign is tracked to calls, forms and sales with Meta Pixel, Conversions API and GA4." },
  { t: "Social + search together", d: "Social content, Google Business Profile and SEO pages work as one system for Google and AI search." },
  { t: "Sydney local team", d: "We shoot content on location across Sydney and know the suburbs your customers live in." },
];

export const platforms = ["Instagram", "Facebook", "TikTok", "Google", "LinkedIn", "YouTube", "Shopify", "WooCommerce", "Meta Ads", "Google Business Profile"];
