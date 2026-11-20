import "server-only";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import { deepMerge, defaultContent, type SiteContent } from "./content";
import { kvGet } from "./db";

export const CONTENT_KEY = "site_content";
export const CONTENT_TAG = "site-content";

// Raw stored content (no cache), used by the admin panel.
// The live site serves https://www.socialboostsydney.com.au and redirects the bare
// domain there, so canonicals, sitemap and schema must use the www host. An older
// saved "Website URL" without www is corrected here.
function canonicalHost(c: SiteContent): SiteContent {
  const url = c.business.url.replace(/^https?:\/\/socialboostsydney\.com\.au(?=\/|$)/i, "https://www.socialboostsydney.com.au");
  return url === c.business.url ? c : { ...c, business: { ...c.business, url } };
}

export async function readStoredContent(): Promise<SiteContent> {
  try {
    const stored = await kvGet<Partial<SiteContent>>(CONTENT_KEY);
    return canonicalHost(deepMerge(defaultContent, stored));
  } catch (e) {
    console.error("[content] could not read stored content, using defaults", e);
    return defaultContent;
  }
}

// Cached for public pages. Pages stay static (fast, crawlable HTML) and are
// regenerated when the admin saves (revalidateTag + revalidatePath).
// The deployment id is part of the key so a new deploy never serves content
// cached by an older build (new default content shows up straight away).
const BUILD_KEY = process.env.VERCEL_DEPLOYMENT_ID || process.env.VERCEL_GIT_COMMIT_SHA || "local";
const cached = unstable_cache(readStoredContent, [CONTENT_KEY, BUILD_KEY], { tags: [CONTENT_TAG] });

export const getContent = cache(async (): Promise<SiteContent> => cached());
