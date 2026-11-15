import type { Faq } from "../site";

// One landing page per industry, served at /industries/<slug>/.
// Each page is written answer-first (AEO) with clear entities, plain facts and
// FAQ answers that stand on their own, so search engines and AI answer engines
// (GEO) can quote them. Keyword targets come from the industry keyword sheet.
export type Industry = {
  slug: string;
  name: string; // "Plumbers"
  group: string; // hub grouping
  primaryKeyword: string;
  title: string; // <title>, 65 characters or fewer
  h1: string;
  metaDescription: string;
  card: string; // one line for the hub card
  answer: string; // answer-first paragraph under the H1
  problems: string[]; // why marketing is hard in this industry
  plan: { h: string; p: string }[]; // what we do, one H3 each
  searches: string[]; // example searches their customers make
  note?: { h: string; p: string }; // advertising rules worth knowing
  services: string[]; // slugs of /services/ pages to link
  faqs: Faq[];
};

export const INDUSTRIES_UPDATED = "2026-11-15";
