import { healthIndustries } from "./health";
import { localIndustries } from "./local";
import { professionalIndustries } from "./professional";
import type { Industry } from "./types";

export type { Industry };
export { INDUSTRIES_UPDATED } from "./types";

export const industries: Industry[] = [...localIndustries, ...healthIndustries, ...professionalIndustries];

export const industryGroups: { group: string; items: Industry[] }[] = industries.reduce(
  (acc, i) => {
    const g = acc.find((x) => x.group === i.group);
    if (g) g.items.push(i);
    else acc.push({ group: i.group, items: [i] });
    return acc;
  },
  [] as { group: string; items: Industry[] }[],
);

export const industryPath = (i: Industry) => `/industries/${i.slug}/`;

export const industriesHub = {
  title: "Businesses We Help in Sydney | Industry Marketing | Social Boost",
  h1: "Businesses We Help in Sydney",
  metaDescription:
    "SEO, social media and ads built for Sydney tradies, clinics, salons, restaurants, professional services and online stores. Find your industry.",
  lead:
    "Social Boost Sydney provides SEO, social media and paid ads for local and online businesses across Greater Sydney. Each industry below has its own plan, because a plumber, a dentist and an online store win customers in different ways. Choose your industry to see how we would market your business.",
};
