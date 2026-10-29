import { generalFaqs, services, type Faq } from "./site";

const isPricing = (f: Faq) => /cost|spend|contract|price/i.test(f.q);
const serviceFaqs = services.flatMap((s) => s.faqs);
const all = [...generalFaqs, ...serviceFaqs];

export const faqGroups = [
  { name: "General", faqs: generalFaqs.filter((f) => !isPricing(f)) },
  { name: "Pricing", faqs: all.filter(isPricing) },
  { name: "Services", faqs: serviceFaqs.filter((f) => !isPricing(f)) },
];

export const allFaqs = all;
