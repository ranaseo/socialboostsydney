// Long-form, keyword-focused landing content.
//
// - `seoPages`: standalone pages served at the site root (e.g. /wordpress-seo-sydney/),
//   one per search phrase that Search Console shows we already get impressions for.
// - `serviceGuides`: extra long-form content for existing /services/<slug>/ pages, so
//   the URLs that already have impressions are improved instead of duplicated.
//
// Rules for this file: every page is written for its own topic or suburb (no
// suburb-swapped copies), and nothing here claims client results, reviews or an
// office we don't have. Local facts are public, checkable facts about the area.
import type { Faq } from "./site";

export type Section = { h: string; p: string[]; list?: string[] };

export type Area = {
  name: string;
  postcode: string;
  region: string; // e.g. "Lower North Shore"
  council: string;
  nearby: string[];
};

export type SeoPage = {
  slug: string; // served at /<slug>/
  keyword: string; // primary search phrase
  name: string; // short label for links and breadcrumbs
  title: string; // <title>
  metaDescription: string;
  h1: string;
  intro: string; // first paragraph, contains the exact keyword
  serviceType: string; // schema.org Service.serviceType
  serviceSlug: string; // parent service page (/services/<slug>/)
  area?: Area;
  sections: Section[];
  faqs: Faq[];
  related: string[]; // internal paths
};

export type ServiceGuide = {
  h1: string;
  intro: string; // replaces the banner lead, contains the exact keyword
  sections: Section[];
  faqs: Faq[]; // added after the service's own FAQs
  related: string[];
};

export const seoPages: SeoPage[] = [
  // ───────────────────────── WordPress SEO Sydney ─────────────────────────
  {
    slug: "wordpress-seo-sydney",
    keyword: "WordPress SEO Sydney",
    name: "WordPress SEO Sydney",
    title: "WordPress SEO Sydney | Technical & On-Page WordPress SEO | Social Boost Sydney",
    metaDescription:
      "WordPress SEO in Sydney: speed and Core Web Vitals fixes, Yoast or Rank Math setup, schema, internal linking and content that ranks. Free WordPress SEO audit.",
    h1: "WordPress SEO Sydney",
    intro:
      "WordPress SEO in Sydney is the work of making a WordPress website fast, crawlable and clearly relevant, so Google and AI search tools show it to people in Sydney looking for what you sell. Social Boost Sydney audits your WordPress install, fixes the technical problems that hold it back, sets up your SEO plugin and schema properly, and writes pages that match how Sydney customers actually search.",
    serviceType: "WordPress search engine optimisation",
    serviceSlug: "local-seo",
    sections: [
      {
        h: "Why WordPress sites in Sydney often underperform in Google",
        p: [
          "WordPress powers a large share of small business websites in Australia, and it can rank very well. The problem is rarely WordPress itself. It is usually what has been added on top of it over the years: a heavy theme, a page builder, twenty or thirty plugins, uncompressed images and a cheap shared host located overseas.",
          "Each of those adds a little weight. Together they produce slow pages, duplicate URLs and thin archive pages that Google has to crawl but should never rank. When a Sydney competitor has a lighter site with clearer pages, they usually win the click even when your business is better.",
        ],
        list: [
          "Slow Largest Contentful Paint caused by page builders, sliders and render-blocking scripts",
          "Tag, category, author and attachment pages indexed with no useful content",
          "Two SEO plugins installed at once, or none configured at all",
          "Missing or conflicting canonical tags after a redesign or domain change",
          "Service pages that never mention a suburb, a price range or a real question",
        ],
      },
      {
        h: "What our WordPress SEO service covers",
        p: [
          "We start with a crawl of the whole site and a look inside wp-admin, so recommendations are based on what is actually installed. Then we work through a fixed list, in order of impact, and show you each change before and after.",
        ],
        list: [
          "Technical audit: crawl, indexation report, redirects, canonicals, robots.txt and XML sitemap",
          "Speed and Core Web Vitals: caching, image compression and WebP, script clean-up, hosting advice",
          "Yoast SEO or Rank Math configured correctly, with noindex on thin archives",
          "Titles, meta descriptions and H1s rewritten around real Sydney search terms",
          "Schema markup: Organization or LocalBusiness, Service, FAQPage, BreadcrumbList and Product for WooCommerce",
          "Internal linking between services, suburbs and blog posts",
          "Google Search Console and GA4 connected, with a monthly report in plain English",
        ],
      },
      {
        h: "Elementor, Divi, Gutenberg and WooCommerce",
        p: [
          "You do not need to rebuild your site to rank. We work with the builder you already have. On Elementor and Divi sites we reduce unused widgets, fonts and animations and load scripts only where they are needed. On Gutenberg sites we tidy block markup and headings. On WooCommerce stores we deal with filter and sort URLs, out-of-stock products and product schema, and we link the work to our ecommerce SEO service where the store is the main focus.",
          "If a rebuild genuinely makes more sense than repairs, we say so and explain the cost of each option before you decide.",
        ],
      },
      {
        h: "Local signals for Sydney businesses on WordPress",
        p: [
          "Ranking in Sydney is not only about the website. Google also looks at your Google Business Profile, your business details on other sites and how well your pages match the suburbs you serve. We connect your WordPress pages to that local picture: a consistent name, address and phone number in the footer and schema, a clear service area, and suburb pages written for the areas where you really work, from Parramatta and the Hills District to the Inner West and the Northern Beaches.",
        ],
      },
      {
        h: "How a WordPress SEO project runs",
        p: [
          "Week one is the audit and a prioritised fix list. Weeks two to four cover technical fixes and plugin setup, done on a staging copy where your host allows it, so the live site is never broken. From month two we focus on content and internal links: improving the pages that already get impressions in Search Console, then adding new pages for the searches you are missing. Most sites see technical improvements reflected in Search Console within a few weeks, while ranking gains for competitive Sydney terms build over three to six months.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is WordPress good for SEO?",
        a: "Yes. WordPress gives you full control over URLs, titles, headings, schema and site speed, which is everything Google needs. Most ranking problems on WordPress come from heavy themes, too many plugins or poor configuration, and those can be fixed without changing platform.",
      },
      {
        q: "Should I use Yoast SEO or Rank Math?",
        a: "Both work well. The important thing is to use only one and configure it properly: correct titles, noindex on thin archive pages, a clean XML sitemap and accurate schema. If you already use one, we usually keep it.",
      },
      {
        q: "How much does WordPress SEO cost in Sydney?",
        a: "It depends on the size of the site and how much technical work is needed. We quote a fixed price after a free audit, so you know the cost of the one-off fixes and of any ongoing monthly work before you commit.",
      },
      {
        q: "Will WordPress SEO work break my website?",
        a: "We make technical changes on a staging copy where possible, take a full backup before any change on the live site, and test pages and forms afterwards. You keep admin access and ownership of everything.",
      },
      {
        q: "Do you need to be in Sydney to work on my WordPress site?",
        a: "No. WordPress SEO is done online through wp-admin, your host and Search Console, so we can work with businesses anywhere in Greater Sydney and across Australia.",
      },
    ],
    related: ["/services/local-seo/", "/services/ecommerce-seo/", "/seo-consultant-bella-vista/", "/seo-mosman/"],
  },

  // ───────────────────────── Facebook Ads Chatswood ─────────────────────────
  {
    slug: "facebook-ads-chatswood",
    keyword: "Facebook Ads Chatswood",
    name: "Facebook Ads Chatswood",
    title: "Facebook Ads Chatswood | Meta Ads for Chatswood Businesses | Social Boost Sydney",
    metaDescription:
      "Facebook ads in Chatswood: Meta lead and sales campaigns for Chatswood and North Shore businesses, with local radius targeting, multilingual creative and proper tracking.",
    h1: "Facebook Ads Chatswood",
    intro:
      "Facebook ads in Chatswood are Meta campaigns that put your offer in front of people who live, work or shop in Chatswood and the surrounding North Shore. Social Boost Sydney plans the targeting, writes and designs the ads in the languages your customers use, sets up Meta Pixel and Conversions API tracking, and optimises each week for enquiries, bookings or sales rather than likes.",
    serviceType: "Facebook and Instagram advertising",
    serviceSlug: "facebook-instagram-ads",
    area: {
      name: "Chatswood",
      postcode: "2067",
      region: "North Shore",
      council: "Willoughby City Council",
      nearby: ["Artarmon", "Willoughby", "Roseville", "Lane Cove", "St Leonards", "Lindfield", "Castle Cove"],
    },
    sections: [
      {
        h: "Advertising in Chatswood is different from advertising in the rest of Sydney",
        p: [
          "Chatswood is one of the busiest commercial centres on the North Shore. Two major shopping centres, the Victoria Avenue mall, a dense mix of restaurants and dessert shops, medical and dental practices, tutoring colleges and a growing number of high-rise apartments all sit within a few hundred metres of Chatswood station, which connects the T1 North Shore line with the Sydney Metro.",
          "That density changes how Facebook and Instagram ads should be run. A small radius around the station already reaches a large number of residents and office workers, so you rarely need wide targeting. Competition for attention is also high, so creative that looks generic gets scrolled past quickly.",
        ],
      },
      {
        h: "Speak to Chatswood in more than one language",
        p: [
          "Chatswood has one of the largest Chinese-speaking communities in Sydney, and Korean, Japanese and Hindi are also widely spoken in the area. Meta lets you target by language and run separate ad sets for each, which usually beats a single English ad translated as an afterthought.",
          "We build separate ad sets for English and for the languages your customers use, with headlines and offers written for each audience. We can work with your own team or a translator you trust to check wording, and we report results per language so you can see where the enquiries come from.",
        ],
      },
      {
        h: "Campaign types that suit Chatswood businesses",
        p: ["The right campaign depends on what a customer needs to do next. These are the setups we use most for businesses around Chatswood:"],
        list: [
          "Restaurants, cafes and dessert bars: local awareness and offer ads inside a 2 to 5 km radius, timed for lunch and evening",
          "Tutoring and education: lead form campaigns for trial lessons and term enrolments, with seasonal pushes before each school term and the selective school test",
          "Medical, dental and allied health: booking campaigns that send people straight to your online booking system, written within AHPRA advertising rules",
          "Real estate and apartment projects: appraisal and enquiry lead forms with retargeting of website visitors",
          "Retail and beauty: catalogue, Instagram Reels and retargeting ads for people who have visited your site or engaged with your page",
        ],
      },
      {
        h: "Targeting Chatswood and the wider North Shore",
        p: [
          "We usually start with a pin on your business location and a tight radius, then test larger areas that include nearby suburbs such as Artarmon, Willoughby, Roseville, Lane Cove, St Leonards and Lindfield. For services people travel for, like specialist clinics or tutoring, we widen the radius along the train line rather than drawing a simple circle.",
          "Meta's interest targeting has become less precise, so we rely more on location, language, website visitors, video viewers and lookalike audiences built from your customer list, with your consent and in line with Australian privacy law.",
        ],
      },
      {
        h: "Tracking that shows what an ad really produced",
        p: [
          "Before spending anything we install the Meta Pixel and Conversions API, mark your key actions (form submissions, calls, bookings and purchases) and connect Google Analytics 4. That means every report shows cost per lead or cost per sale, not just reach. You own the ad account, the pixel and the data, and we work through Meta Business Suite as your partner.",
        ],
      },
      {
        h: "Budget and timing",
        p: [
          "Most Chatswood local businesses can test properly on $20 to $50 a day in ad spend, paid directly to Meta. The first two to four weeks are a testing phase where we compare audiences, offers and creative. After that we move budget to what works and stop what doesn't. Our management fee is separate and listed on the service page.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much should a Chatswood business spend on Facebook ads?",
        a: "A starting budget of $20 to $50 a day, about $600 to $1,500 a month, is enough for most Chatswood local businesses to test offers and audiences. Ad spend is paid to Meta and is separate from our management fee.",
      },
      {
        q: "Can you run Facebook ads in Chinese or Korean for my Chatswood business?",
        a: "Yes. We set up separate ad sets targeted by language, with copy written for each audience, and report results per language. We ask you or a translator you trust to approve non-English wording before it runs.",
      },
      {
        q: "Do Facebook ads also show on Instagram?",
        a: "Yes. Meta campaigns can run on Facebook, Instagram, Messenger and Threads placements from one ad account. For most Chatswood businesses, Instagram Reels and Stories bring a large share of the results.",
      },
      {
        q: "How quickly will I get enquiries from Facebook ads in Chatswood?",
        a: "Most campaigns produce first leads within the first week. Results become more stable after two to four weeks of testing, once the best audience and creative are clear.",
      },
      {
        q: "Do you have an office in Chatswood?",
        a: "We work with Chatswood businesses remotely and meet or film on location when a project needs it. Strategy calls, reporting and campaign management happen online.",
      },
    ],
    related: ["/services/facebook-instagram-ads/", "/facebook-ads-bankstown/", "/services/content-creation/", "/services/social-media-management/"],
  },

  // ───────────────────────── Facebook Ads Bankstown ─────────────────────────
  {
    slug: "facebook-ads-bankstown",
    keyword: "Facebook Ads Bankstown",
    name: "Facebook Ads Bankstown",
    title: "Facebook Ads Bankstown | Meta Ads Agency for Bankstown Businesses | Social Boost Sydney",
    metaDescription:
      "Facebook ads in Bankstown: lead, booking and sales campaigns for Bankstown and Canterbury-Bankstown businesses, with Arabic and Vietnamese creative and real tracking.",
    h1: "Facebook Ads Bankstown",
    intro:
      "Facebook ads in Bankstown are paid Meta campaigns that reach people across Bankstown and the Canterbury-Bankstown area on Facebook and Instagram. Social Boost Sydney helps Bankstown businesses turn that reach into calls, bookings and sales, with campaigns built around local suburbs, the languages spoken at home, cultural calendar moments and tracking that shows the cost of each enquiry.",
    serviceType: "Facebook and Instagram advertising",
    serviceSlug: "facebook-instagram-ads",
    area: {
      name: "Bankstown",
      postcode: "2200",
      region: "South West Sydney",
      council: "City of Canterbury-Bankstown",
      nearby: ["Yagoona", "Punchbowl", "Greenacre", "Condell Park", "Revesby", "Bass Hill", "Chester Hill", "Lakemba"],
    },
    sections: [
      {
        h: "Why Facebook ads work well in Bankstown",
        p: [
          "Bankstown is a busy commercial hub in South West Sydney, with a large shopping centre, a strong food scene, a Western Sydney University campus in the CBD and thousands of small businesses, from auto workshops and trades to beauty salons, sweets shops and medical centres. Many customers find these businesses through Facebook groups, Instagram and word of mouth rather than through Google alone.",
          "That makes Meta ads a natural fit. People in Bankstown and the surrounding suburbs already spend time on Facebook and Instagram, and a well-targeted local campaign can put a business in front of them at a lower cost than many inner-city areas.",
        ],
      },
      {
        h: "Ads in the languages Bankstown speaks",
        p: [
          "Canterbury-Bankstown is one of the most linguistically diverse areas in Australia. Arabic and Vietnamese are among the most common languages spoken at home, alongside Greek, Mandarin, Cantonese, Bengali, Urdu and others. A customer is more likely to stop scrolling for an ad in the language they use with family.",
          "We create separate ad sets by language where it makes sense, write copy for each audience instead of translating word for word, and ask you or a translator you trust to approve every non-English ad. Our team also speaks Bengali, which helps for businesses serving the Bangladeshi community in the area.",
        ],
      },
      {
        h: "Plan around the local calendar",
        p: [
          "Demand in Bankstown moves with the cultural calendar as much as with school holidays and end of financial year. Ramadan and Eid, Lunar New Year, Christmas and back-to-school all shift what people buy and when they buy it. Food, sweets, fashion, gifts, beauty and event businesses can see their busiest weeks of the year around these dates.",
          "We plan campaigns and creative ahead of these periods, raise budgets in the days that matter and pull back when demand drops, so you are not paying full price for attention in quiet weeks.",
        ],
      },
      {
        h: "Campaigns we run for Bankstown businesses",
        list: [
          "Trades and home services: lead form campaigns for quotes, targeted by suburb and job type",
          "Auto repair, panel beating and car sales: call and message campaigns with retargeting of past enquiries",
          "Food, cafes, sweets and catering: offer and event ads, plus pre-order campaigns before Eid and Christmas",
          "Beauty, hair and barbers: booking ads that link to your online booking page or WhatsApp",
          "Medical, dental and allied health: appointment campaigns written within AHPRA advertising rules",
          "Real estate: appraisal lead forms and listing ads for Bankstown and nearby suburbs",
        ],
        p: ["Each campaign has one clear action. We test two or three offers and creative styles, then put the budget behind the winner."],
      },
      {
        h: "Targeting Bankstown and nearby suburbs",
        p: [
          "We usually target a radius around your business, then test suburb groups such as Yagoona, Punchbowl, Greenacre, Condell Park, Revesby and Bass Hill. For businesses that serve the wider South West, we extend into Lakemba, Chester Hill and beyond. Language targeting, website visitors, video viewers and customer-list lookalikes do most of the work, because Meta's interest targeting is far less reliable than it used to be.",
        ],
      },
      {
        h: "Messenger and WhatsApp campaigns",
        p: [
          "Many Bankstown customers prefer to message rather than fill in a form. Click-to-message ads open a chat on Messenger, Instagram or WhatsApp straight from the ad. We set up quick replies and simple qualifying questions, and track every conversation that starts, so you can see what a new chat costs and how many turn into jobs.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much do Facebook ads cost for a Bankstown business?",
        a: "Most Bankstown local businesses start with $20 to $50 a day in ad spend, paid directly to Meta. Our management fee is separate. We recommend a 2 to 4 week test before judging results.",
      },
      {
        q: "Can you run Facebook ads in Arabic or Vietnamese?",
        a: "Yes. We build separate ad sets targeted by language with copy written for each audience, and you or your translator approve the wording before anything goes live.",
      },
      {
        q: "What is the best Facebook ad type for a small business in Bankstown?",
        a: "For most service businesses, lead form or click-to-message ads work best because people can enquire without leaving Facebook or Instagram. Shops and food businesses usually do better with offer and Reels ads targeted to a small radius.",
      },
      {
        q: "Can my Facebook ads send people to WhatsApp?",
        a: "Yes. Click-to-WhatsApp ads open a chat with your business number directly from the ad, and we can track how many conversations each ad starts.",
      },
      {
        q: "Do you meet clients in Bankstown?",
        a: "We manage campaigns online for Bankstown businesses and can arrange on-location content shoots when you need fresh photos or videos for ads.",
      },
    ],
    related: ["/services/facebook-instagram-ads/", "/facebook-ads-chatswood/", "/services/content-creation/", "/services/tiktok-marketing/"],
  },

  // ───────────────────────── SEO Consultant Bella Vista ─────────────────────────
  {
    slug: "seo-consultant-bella-vista",
    keyword: "SEO Consultant Bella Vista",
    name: "SEO Consultant Bella Vista",
    title: "SEO Consultant Bella Vista | Norwest & Hills District SEO | Social Boost Sydney",
    metaDescription:
      "SEO consultant for Bella Vista, Norwest and Hills District businesses: local SEO, Google Business Profile, B2B and service page SEO, with clear monthly reporting.",
    h1: "SEO Consultant Bella Vista",
    intro:
      "An SEO consultant in Bella Vista helps businesses around Norwest and the Hills District get found on Google when local customers and other businesses search for their services. Social Boost Sydney works as your SEO consultant: we audit your website and Google Business Profile, identify the searches worth winning, and then fix, write and build what is needed to rank, with a clear plan and monthly reporting.",
    serviceType: "Search engine optimisation consulting",
    serviceSlug: "local-seo",
    area: {
      name: "Bella Vista",
      postcode: "2153",
      region: "Hills District",
      council: "The Hills Shire Council and Blacktown City Council",
      nearby: ["Norwest", "Baulkham Hills", "Kellyville", "Castle Hill", "Glenwood", "Rouse Hill", "Seven Hills"],
    },
    sections: [
      {
        h: "SEO in Bella Vista: two different kinds of search",
        p: [
          "Bella Vista combines a large residential area with Norwest Business Park, one of Sydney's main business districts outside the city, home to national head offices, medical and health providers, finance and IT firms. The Bella Vista and Norwest stations on the Sydney Metro Northwest have made the area easier to reach and brought more apartments and businesses with them.",
          "This means local businesses face two kinds of search. Residents look for everyday services nearby: dentists, physios, childcare, trades, gyms and cafes. Businesses in Norwest look for suppliers and partners: accountants, IT support, commercial cleaners, fit-outs and consultants. Each needs a different SEO approach, and many Bella Vista businesses need both.",
        ],
      },
      {
        h: "What working with an SEO consultant looks like",
        p: [
          "A consultant should explain what will be done, why and in what order. We start with an audit and a 90-day plan, then either implement the work ourselves or guide your web developer. You always see the reasoning and the evidence behind each recommendation.",
        ],
        list: [
          "SEO audit: technical health, indexation, speed, content gaps and competitor comparison for Hills District searches",
          "Keyword plan: the searches your customers in Bella Vista, Norwest and Castle Hill actually use, grouped by page",
          "Google Business Profile: categories, services, service area, photos, posts and a review request process",
          "On-page work: titles, headings, service pages and FAQs written for the Hills District",
          "Local citations: consistent business details on Australian directories",
          "Monthly report: rankings, Search Console clicks and impressions, calls and form enquiries",
        ],
      },
      {
        h: "Local SEO for Hills District service businesses",
        p: [
          "For businesses that serve residents, the Google Maps pack usually brings more calls than the organic results. Your Google Business Profile, its categories, your reviews and how close you are to the searcher matter most here. Bella Vista, Kellyville, Baulkham Hills and Castle Hill sit close together, so a profile and website that clearly show which suburbs you serve can help you appear across all of them.",
          "We set up suburb pages only where you genuinely work and have something useful to say about that area, so they help customers rather than look like copies with a name swapped.",
        ],
      },
      {
        h: "B2B SEO for Norwest Business Park",
        p: [
          "Business buyers search differently. They use more specific terms, compare several providers, read case studies and often check LinkedIn before they call. For B2B firms in and around Norwest we focus on detailed service pages, industry-specific content, clear pricing guidance where possible, and strong About and team pages that build trust. We also make sure your content is clear enough for AI search tools, such as Google AI Overviews and ChatGPT, to describe your business accurately.",
        ],
      },
      {
        h: "Why choose an SEO consultant over a large agency",
        p: [
          "With a consultant you deal with the person doing the work. Social Boost Sydney is led by Al Rubel Rana, an SEO specialist who has ranked more than 5,000 keywords and generated over 20,000 leads through his campaigns. You get direct answers, a plan written for your business, and no long lock-in contracts: after the first three months, work continues month to month.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does an SEO consultant do for a Bella Vista business?",
        a: "An SEO consultant audits your website and Google Business Profile, finds the searches that bring customers in Bella Vista and the Hills District, and then fixes or creates the pages, profile details and links needed to rank for them, with regular reporting on progress.",
      },
      {
        q: "How long does SEO take for a business in the Hills District?",
        a: "Google Business Profile improvements can show within 2 to 6 weeks. Ranking service and suburb pages in organic results usually takes 3 to 6 months, depending on how competitive the search is.",
      },
      {
        q: "Do you work with B2B companies in Norwest Business Park?",
        a: "Yes. B2B SEO focuses on detailed service pages, industry content and trust signals, and we adapt the keyword plan to how business buyers search and compare providers.",
      },
      {
        q: "How much does an SEO consultant cost in Bella Vista?",
        a: "Our local SEO plans start from the price shown on the Local SEO service page. Larger B2B or multi-location projects are quoted after a free audit, so you know the full cost before starting.",
      },
      {
        q: "Can you work with my existing web developer?",
        a: "Yes. We can provide a prioritised list of changes for your developer, or make the changes ourselves if you give us access.",
      },
    ],
    related: ["/services/local-seo/", "/wordpress-seo-sydney/", "/seo-mosman/", "/services/ecommerce-seo/"],
  },

  // ───────────────────────── SEO Mosman ─────────────────────────
  {
    slug: "seo-mosman",
    keyword: "SEO Mosman",
    name: "SEO Mosman",
    title: "SEO Mosman | Local SEO for Mosman & Lower North Shore Businesses | Social Boost Sydney",
    metaDescription:
      "SEO for Mosman businesses: Google Business Profile, local SEO and premium service pages for Military Road, Spit Junction and Lower North Shore businesses.",
    h1: "SEO Mosman",
    intro:
      "SEO in Mosman is about being the business that appears first when people on the Lower North Shore search Google for a service near them. Social Boost Sydney helps Mosman businesses with local SEO, Google Business Profile optimisation and website content that reflects the quality of their work, so more of the right customers in Mosman, Neutral Bay and Cremorne find and choose them.",
    serviceType: "Local search engine optimisation",
    serviceSlug: "local-seo",
    area: {
      name: "Mosman",
      postcode: "2088",
      region: "Lower North Shore",
      council: "Mosman Municipal Council",
      nearby: ["Neutral Bay", "Cremorne", "Cremorne Point", "Clifton Gardens", "Balmoral", "Beauty Point", "Cammeray"],
    },
    sections: [
      {
        h: "The Mosman market: small area, high expectations",
        p: [
          "Mosman is a compact harbourside suburb on the Lower North Shore, known for Military Road and Spit Junction, Balmoral Beach and Taronga Zoo. Its residents tend to have high household incomes and high expectations. They research before they buy, read reviews closely and expect a business website to look and feel as good as the service itself.",
          "Search volumes for \"Mosman\" terms are smaller than for \"Sydney\" terms, but the value of each customer is often high. A real estate agency, interior designer, dentist, boutique, physio or private tutor in Mosman may need only a few extra clients a month for SEO to pay for itself many times over.",
        ],
      },
      {
        h: "Google Maps comes first",
        p: [
          "For most searches with a local intent, such as \"physio Mosman\" or \"dentist near me\", Google shows a map with three businesses before any organic result. In a small suburb, where competitors are only a few hundred metres apart along Military Road, small details decide who appears there.",
        ],
        list: [
          "The right primary and secondary categories on your Google Business Profile",
          "Services, products, attributes and opening hours filled in completely",
          "Recent, genuine reviews with replies from the business",
          "Regular photos and updates that show the business is active",
          "Matching business name, address and phone number across your website and directories",
        ],
      },
      {
        h: "A website that matches a premium service",
        p: [
          "When a Mosman customer clicks through from Google, the website has a few seconds to confirm they are in the right place. We work on the pages that matter most: clear service pages with real detail, pricing guidance where your industry allows it, an About page that introduces the people behind the business, and FAQs that answer the questions customers ask before booking.",
          "Pages are also structured with schema markup and plain, factual answers, which helps Google and AI search tools describe your business accurately.",
        ],
      },
      {
        h: "Reaching beyond Mosman on the Lower North Shore",
        p: [
          "Many Mosman businesses also serve Neutral Bay, Cremorne, Cammeray and the wider Lower North Shore, and some serve clients across the harbour. We help you decide where it is worth creating separate location content and where one strong page is enough, so you can expand your reach without creating thin pages that compete with each other.",
        ],
      },
      {
        h: "How we work with Mosman businesses",
        p: [
          "We begin with a free audit of your Google Business Profile, website and the businesses ranking above you. You get a short, prioritised plan, and then we carry out the work month by month with a plain-English report on calls, enquiries, rankings and Search Console data. There is a three-month starting term, then work continues month to month.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is SEO worth it for a small business in Mosman?",
        a: "Usually yes. Search volume in Mosman is smaller than for Sydney-wide terms, but competition is local and each customer is often high value. Improving your Google Business Profile and key service pages can bring steady enquiries at a lower cost than paid ads.",
      },
      {
        q: "How do I get my Mosman business into the Google Maps results?",
        a: "Verify and fully complete your Google Business Profile, choose accurate categories, keep your name, address and phone consistent everywhere, collect genuine reviews and post updates regularly. Your website should also clearly show your services and that you serve Mosman.",
      },
      {
        q: "How long does local SEO take in Mosman?",
        a: "Google Business Profile changes can show results in 2 to 6 weeks. Organic rankings for service pages usually take 3 to 6 months to build, depending on competition.",
      },
      {
        q: "What types of Mosman businesses do you help with SEO?",
        a: "Any local business that wants more enquiries from search, including clinics and allied health, real estate, interior design, trades, boutiques, cafes, tutors and professional services.",
      },
      {
        q: "Do you offer SEO for areas near Mosman?",
        a: "Yes. We work with businesses across the Lower North Shore, including Neutral Bay, Cremorne and Cammeray, and across Greater Sydney.",
      },
    ],
    related: ["/services/local-seo/", "/seo-consultant-bella-vista/", "/wordpress-seo-sydney/", "/facebook-ads-chatswood/"],
  },
];

// Extra long-form content for existing service pages.
export const serviceGuides: Record<string, ServiceGuide> = {
  // ───────────────────────── Local SEO Sydney ─────────────────────────
  "local-seo": {
    h1: "Local SEO Sydney",
    intro:
      "Local SEO in Sydney is the work that helps your business appear in Google Maps, the local pack and AI answers when people nearby search for what you sell. Social Boost Sydney optimises your Google Business Profile, builds consistent citations, plans genuine reviews and creates suburb and FAQ content that Google and answer engines can trust and quote.",
    sections: [
      {
        h: "What local SEO means for a Sydney business",
        p: [
          "Greater Sydney is huge, and Google knows it. Someone searching \"plumber\" in Parramatta sees different results from someone searching the same word in Bondi. Local SEO is how you tell Google exactly where you are, which suburbs you serve and why you are a trustworthy choice there.",
          "It combines three things: your Google Business Profile, your website and your reputation across the web. When all three agree with each other, your business has a much better chance of appearing in the map pack and in the organic results below it.",
        ],
      },
      {
        h: "SEO optimisation in Sydney: the work, step by step",
        p: ["People often search for \"SEO optimization Sydney\" when they want someone to simply make their site rank. In practice, that work follows a clear order:"],
        list: [
          "Audit: Google Business Profile, website technical health, current rankings and competitors in your suburbs",
          "Google Business Profile: categories, services, service areas, photos, products, posts and Q&A",
          "Website: titles, headings, service pages, suburb pages, internal links and LocalBusiness schema",
          "Citations: consistent name, address and phone on Australian directories such as True Local, Yellow Pages, Hotfrog and StartLocal",
          "Reviews: a simple, compliant process to ask happy customers for Google reviews and reply to every one",
          "Reporting: calls, direction requests, website clicks and Search Console data, explained in plain English each month",
        ],
      },
      {
        h: "Suburb pages done properly",
        p: [
          "Suburb pages can help you rank across Sydney, but only if they are useful. Pages that repeat the same text with a different suburb name tend to be ignored or filtered by Google. We create a suburb page only where you genuinely work, and we write it around that area: the local businesses or customers you serve there, travel time, common jobs, local regulations or council rules where relevant, and questions people in that suburb ask.",
          "Examples of this approach on our own site include our pages on SEO in Mosman and our SEO consultant page for Bella Vista and Norwest.",
        ],
      },
      {
        h: "Local SEO and AI search",
        p: [
          "Google AI Overviews, ChatGPT and Perplexity increasingly answer \"best\" and \"near me\" questions directly. These tools rely on the same signals as local SEO: consistent business details, clear service descriptions, reviews and well-structured pages. We add answer-first paragraphs, FAQs and schema markup so your business is easy for these tools to understand and cite.",
        ],
      },
      {
        h: "Who local SEO suits best",
        p: [
          "Local SEO works best for businesses with a physical location or a defined service area in Sydney: trades and home services, clinics and dentists, lawyers and accountants, cafes and restaurants, gyms, salons and real estate agencies. If you sell online across Australia, our ecommerce SEO or WordPress SEO services may be a better fit, and we will tell you which one during the free audit.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between local SEO and normal SEO?",
        a: "Normal SEO aims to rank a website for searches anywhere. Local SEO focuses on searches with a location, such as \"near me\" or a suburb name, and includes your Google Business Profile, reviews and local citations as well as your website.",
      },
      {
        q: "How much does local SEO cost in Sydney?",
        a: "Local SEO in Sydney typically costs from several hundred to a few thousand dollars a month, depending on competition and how many locations you have. Our plans start from the price shown on this page, and we quote after a free audit.",
      },
      {
        q: "Do I need a physical address in Sydney for local SEO?",
        a: "You need a real address to verify a Google Business Profile, but service-area businesses can hide their address and show the suburbs they serve instead. Virtual offices and co-working addresses usually break Google's guidelines and can get a profile suspended.",
      },
    ],
    related: ["/seo-mosman/", "/seo-consultant-bella-vista/", "/wordpress-seo-sydney/", "/services/ecommerce-seo/"],
  },

  // ───────────────────────── Ecommerce SEO Sydney ─────────────────────────
  "ecommerce-seo": {
    h1: "Ecommerce SEO Sydney",
    intro:
      "Ecommerce SEO in Sydney is the work that gets an online store's category and product pages found in Google, Google Shopping and AI shopping answers by people ready to buy. Social Boost Sydney fixes the technical issues that hold Shopify and WooCommerce stores back, researches buyer keywords, rewrites category and product pages, adds product schema and connects Google Merchant Center so more searches turn into sales.",
    sections: [
      {
        h: "Why online stores need a different kind of SEO",
        p: [
          "An online store has very different SEO problems from a service business website. It may have hundreds or thousands of URLs, created automatically by collections, filters, sorting, variants and pagination. Many product descriptions come straight from the supplier and appear on dozens of other sites. Products go out of stock and come back. All of this can confuse Google about which pages matter.",
          "Ecommerce SEO brings order to that. It makes sure Google spends its time on the pages that make you money and that each of those pages is the best answer for the search behind it.",
        ],
      },
      {
        h: "Category pages: where most ecommerce traffic comes from",
        p: [
          "Shoppers rarely search for an exact product name. They search for a type of product, often with a qualifier: \"women's linen pants\", \"organic baby clothes Australia\" or \"standing desk Sydney\". Those searches match category or collection pages, not individual products.",
          "We map buyer keywords to categories, add a short helpful introduction and buying guidance to each one, improve filters and internal links, and create new categories where there is clear demand that your store does not yet cover.",
        ],
      },
      {
        h: "Product pages that rank and convert",
        list: [
          "Unique product descriptions instead of supplier copy, starting with your best-selling products",
          "Clear titles that include the product type, key attribute and brand",
          "Product and Offer schema with price, availability, shipping and returns details",
          "Image file names and alt text that describe the product",
          "Reviews shown on the page and included in schema where they are genuine",
          "Sensible handling of out-of-stock and discontinued products, so links and rankings are not lost",
        ],
        p: ["Product pages also feed Google Shopping. When the page, the schema and your Merchant Center feed all agree, your products are eligible for free listings and perform better in paid Shopping campaigns."],
      },
      {
        h: "Shopify and WooCommerce specifics",
        p: [
          "On Shopify, we deal with duplicate collection and product URLs, theme speed, app bloat, and the limits Shopify places on robots.txt and URL structure. On WooCommerce, which runs on WordPress, we handle filter and attribute URLs, plugin conflicts, hosting performance and product schema. If your store runs on WordPress, our WordPress SEO Sydney service covers the wider site as well.",
        ],
      },
      {
        h: "Selling to Sydney and the rest of Australia",
        p: [
          "Many Sydney stores sell nationwide, but local signals still matter. Searches that include Sydney, click and collect, same-day delivery or a showroom location can convert very well. We make sure your store's shipping, pickup and returns information is clear for Australian customers, uses Australian spelling and pricing in AUD with GST, and appears consistently in your pages, schema and Merchant Center.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is ecommerce SEO better than Google Shopping ads?",
        a: "They work best together. Ads bring sales immediately while you pay for clicks. SEO builds free traffic that grows over time and lowers your cost per sale. Good product data helps both, because Shopping ads and free listings use the same feed.",
      },
      {
        q: "Should I rewrite all my product descriptions?",
        a: "Start with your best sellers and highest-margin products. Rewriting every description at once is rarely worth it. Unique, helpful copy on the pages that matter most usually brings the biggest gain for the effort.",
      },
      {
        q: "Does a Sydney store need ecommerce SEO if it sells Australia-wide?",
        a: "Yes. Most of the work, such as categories, product pages, technical fixes and schema, helps you rank nationally. Local signals add extra visibility for Sydney shoppers searching for pickup, fast delivery or a showroom.",
      },
    ],
    related: ["/wordpress-seo-sydney/", "/services/local-seo/", "/services/facebook-instagram-ads/", "/services/content-creation/"],
  },

  // ───────────────────────── Social Media Management Services Sydney ─────────────────────────
  "social-media-management": {
    h1: "Social Media Management Services Sydney",
    intro:
      "Social media management services in Sydney cover the planning, content, posting and community replies that keep your business active and visible on Instagram, Facebook, TikTok and LinkedIn. Social Boost Sydney handles your content calendar, design, captions, scheduling and comment replies every month, and sends you a plain-English report on reach, engagement and enquiries.",
    sections: [
      {
        h: "What our social media management services include",
        p: [
          "Every month starts with a content calendar that you approve before anything is posted. It is built around your goals for the month, such as launching a new service, filling quieter weekdays or promoting an event, and balanced with content that builds trust over time: behind the scenes, team, customer questions and education.",
          "We then design the posts, edit the Reels, write the captions and schedule everything at the times your audience is active. During business hours we reply to comments and messages, or pass enquiries to you straight away if they need your answer.",
        ],
      },
      {
        h: "Content made for Sydney audiences",
        p: [
          "Generic stock content does not work for local businesses. Sydney customers respond to recognisable places, real people and familiar moments: summer at the beach, footy season, Vivid, end of financial year, back to school and the Christmas rush. We plan content around these moments and the suburbs you serve.",
          "When you need fresh photos and video, we organise content shoots on location across Sydney through our content creation service, so your feed shows your real business rather than borrowed images.",
        ],
      },
      {
        h: "Choosing the right platforms",
        list: [
          "Instagram: the main platform for most consumer brands, with Reels for reach and Stories for regular customers",
          "Facebook: still strong for local communities, groups, events and audiences over 35",
          "TikTok: best for reaching customers under 35 with short, native video",
          "LinkedIn: for B2B services, recruitment and founder-led brands",
        ],
        p: ["We usually recommend starting with two platforms done well. You can add more once the first two are working and you can see what they bring in."],
      },
      {
        h: "Organic and paid working together",
        p: [
          "Organic posting builds trust, but reach on its own is limited. Our managed clients can add Facebook and Instagram ads to boost the best-performing posts, retarget people who visit their website and generate leads. Both are reported together, so you can see what each part of your social media spend produces.",
        ],
      },
      {
        h: "Reporting you can actually read",
        p: [
          "Each month you receive a short report showing reach, engagement, follower growth, website clicks, messages and enquiries, with notes on what worked and what we will change. We also hold a monthly call to plan the next calendar. You keep ownership of all accounts and content, and after the first three months plans continue month to month.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is included in social media management services?",
        a: "Typically a monthly content calendar, post and Reel design, captions and hashtags, scheduling, comment and message replies, and a monthly report. Our plans also include a strategy call each month.",
      },
      {
        q: "How many posts per month do I need?",
        a: "Most Sydney local businesses see good results with 12 to 20 posts a month across feed posts, carousels and Reels, plus regular Stories. Consistency matters more than volume.",
      },
      {
        q: "Can I approve content before it is posted?",
        a: "Yes. You approve the monthly calendar before anything goes live, and you can request changes to any post.",
      },
    ],
    related: ["/services/facebook-instagram-ads/", "/services/content-creation/", "/services/tiktok-marketing/", "/facebook-ads-chatswood/"],
  },
};

// Labels for internal links to the keyword pages.
export const keywordLinks: { label: string; href: string }[] = [
  { label: "Social Media Management Sydney", href: "/services/social-media-management/" },
  { label: "Local SEO Sydney", href: "/services/local-seo/" },
  { label: "Ecommerce SEO Sydney", href: "/services/ecommerce-seo/" },
  { label: "WordPress SEO Sydney", href: "/wordpress-seo-sydney/" },
  { label: "SEO Consultant Bella Vista", href: "/seo-consultant-bella-vista/" },
  { label: "SEO Mosman", href: "/seo-mosman/" },
  { label: "Facebook Ads Chatswood", href: "/facebook-ads-chatswood/" },
  { label: "Facebook Ads Bankstown", href: "/facebook-ads-bankstown/" },
];

export const linkLabel = (href: string) => keywordLinks.find((l) => l.href === href)?.label;
