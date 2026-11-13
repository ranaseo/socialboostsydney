import type { MetadataRoute } from "next";
import { getContent } from "@/lib/getContent";
import { seoPages } from "@/lib/seoPages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const c = await getContent();
  const now = new Date();
  const paths = ["/", "/services/", "/about/", "/faq/", "/contact/", ...c.services.map((s) => `/services/${s.slug}/`), ...seoPages.map((p) => `/${p.slug}/`)];
  return paths.map((p) => ({
    url: `${c.business.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.startsWith("/services/") || seoPages.some((x) => p === `/${x.slug}/`) ? 0.8 : 0.6,
  }));
}
