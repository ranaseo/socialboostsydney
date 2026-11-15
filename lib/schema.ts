import type { Faq, Service, SiteContent } from "./content";

export function organizationSchema(c: SiteContent) {
  const b = c.business;
  const id = (frag: string) => `${b.url}/#${frag}`;
  const abs = (u: string) => (u.startsWith("http") ? u : `${b.url}${u}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": id("organization"),
        name: b.name,
        legalName: b.legalName,
        url: b.url,
        logo: abs(c.brand.logo),
        image: abs(c.brand.ogImage),
        description: b.description,
        email: b.email,
        telephone: b.phone,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: b.phone,
          email: b.email,
          url: `https://wa.me/${b.whatsapp.replace(/\D/g, "")}`,
          availableLanguage: b.languages,
        },
        founder: { "@type": "Person", name: b.founder },
        address: { "@type": "PostalAddress", ...b.address },
        geo: { "@type": "GeoCoordinates", ...b.geo },
        openingHours: b.hours,
        priceRange: b.priceRange,
        areaServed: [
          { "@type": "City", name: b.address.addressLocality },
          ...b.areas.map((name) => ({ "@type": "Place", name: `${name}, ${b.address.addressRegion}` })),
        ],
        knowsAbout: b.knowsAbout,
        sameAs: b.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": id("website"),
        url: b.url,
        name: b.name,
        inLanguage: "en-AU",
        publisher: { "@id": id("organization") },
      },
    ],
  };
}

export function serviceSchema(c: SiteContent, s: Service) {
  const u = c.business.url;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${u}/services/${s.slug}/#service`,
    name: `${s.name} in ${c.business.address.addressLocality}`,
    serviceType: s.name,
    description: s.answer,
    provider: { "@id": `${u}/#organization` },
    areaServed: { "@type": "City", name: c.business.address.addressLocality },
    url: `${u}/services/${s.slug}/`,
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

export function breadcrumbSchema(baseUrl: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${baseUrl}${it.path}`,
    })),
  };
}

// Industry landing pages: a Service aimed at a business audience, plus a
// WebPage with author and dateModified so engines can judge freshness.
export function industrySchema(
  c: SiteContent,
  i: { slug: string; name: string; h1: string; title: string; answer: string; primaryKeyword: string },
  updated: string,
) {
  const u = c.business.url;
  const url = `${u}/industries/${i.slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: i.h1,
        serviceType: `Digital marketing for ${i.name.toLowerCase()}`,
        description: i.answer,
        provider: { "@id": `${u}/#organization` },
        areaServed: { "@type": "City", name: c.business.address.addressLocality },
        audience: { "@type": "BusinessAudience", name: i.name },
        url,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: i.title,
        description: i.answer,
        inLanguage: "en-AU",
        isPartOf: { "@id": `${u}/#website` },
        about: { "@id": `${url}#service` },
        author: { "@type": "Person", name: c.business.founder, worksFor: { "@id": `${u}/#organization` } },
        dateModified: updated,
      },
    ],
  };
}

export function itemListSchema(baseUrl: string, name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, n) => ({ "@type": "ListItem", position: n + 1, name: it.name, url: `${baseUrl}${it.path}` })),
  };
}
