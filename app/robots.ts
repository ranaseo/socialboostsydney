import type { MetadataRoute } from "next";
import { getContent } from "@/lib/getContent";

// Search engines and AI crawlers are explicitly welcome (toggle in Admin → SEO),
// so the site can be cited in ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews.
// The admin panel and API are never crawled.
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot-Extended", "Bingbot"];
const disallow = ["/admin/", "/api/"];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const c = await getContent();
  const aiRules = aiBots.map((userAgent) =>
    c.seo.allowAiCrawlers ? { userAgent, allow: "/", disallow } : { userAgent, disallow: "/" },
  );
  return {
    rules: [{ userAgent: "*", allow: "/", disallow }, ...aiRules],
    sitemap: `${c.business.url}/sitemap.xml`,
    host: c.business.url,
  };
}
