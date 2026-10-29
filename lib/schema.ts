import { site, type Faq, type Service } from "./site";

const id = (frag: string) => `${site.url}/#${frag}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": id("organization"),
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: `${site.url}/brand/logo-horizontal-primary.svg`,
        image: `${site.url}/og-image.png`,
        description: site.description,
        email: site.email,
        telephone: site.phone,
        founder: { "@type": "Person", name: site.founder },
        address: { "@type": "PostalAddress", ...site.address },
        geo: { "@type": "GeoCoordinates", ...site.geo },
        openingHours: site.hours,
        priceRange: "$$",
        areaServed: [
          { "@type": "City", name: "Sydney" },
          ...site.areas.map((name) => ({ "@type": "Place", name: `${name}, NSW` })),
        ],
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
        sameAs: site.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": id("website"),
        url: site.url,
        name: site.name,
        inLanguage: "en-AU",
        publisher: { "@id": id("organization") },
      },
    ],
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${s.slug}/#service`,
    name: `${s.name} in Sydney`,
    serviceType: s.name,
    description: s.answer,
    provider: { "@id": id("organization") },
    areaServed: { "@type": "City", name: "Sydney" },
    url: `${site.url}/services/${s.slug}/`,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
