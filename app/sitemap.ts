import type { MetadataRoute } from "next";
import { getContent } from "@/lib/getContent";
import { industries, industryPath } from "@/lib/industries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const c = await getContent();
  const now = new Date();
  const paths = ["/", "/services/", "/about/", "/faq/", "/contact/", ...c.services.map((s) => `/services/${s.slug}/`), "/industries/", ...industries.map(industryPath)];
  return paths.map((p) => ({
    url: `${c.business.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.startsWith("/services/") || p.startsWith("/industries/") ? 0.8 : 0.6,
  }));
}
