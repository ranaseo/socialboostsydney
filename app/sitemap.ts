import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["/", "/services/", "/about/", "/faq/", "/contact/", ...services.map((s) => `/services/${s.slug}/`)];
  return paths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
