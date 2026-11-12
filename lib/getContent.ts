import "server-only";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import { deepMerge, defaultContent, type SiteContent } from "./content";
import { kvGet } from "./db";

export const CONTENT_KEY = "site_content";
export const CONTENT_TAG = "site-content";

// Raw stored content (no cache), used by the admin panel.
export async function readStoredContent(): Promise<SiteContent> {
  try {
    const stored = await kvGet<Partial<SiteContent>>(CONTENT_KEY);
    return deepMerge(defaultContent, stored);
  } catch (e) {
    console.error("[content] could not read stored content, using defaults", e);
    return defaultContent;
  }
}

// Cached for public pages. Pages stay static (fast, crawlable HTML) and are
// regenerated when the admin saves (revalidateTag + revalidatePath).
const cached = unstable_cache(readStoredContent, [CONTENT_KEY], { tags: [CONTENT_TAG] });

export const getContent = cache(async (): Promise<SiteContent> => cached());
