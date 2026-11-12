"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import { checkPassword, createSessionToken, SESSION_COOKIE, SESSION_DAYS, adminConfigured } from "@/lib/auth";
import { deepMerge, defaultContent, sectionKeys, type SectionKey, type SiteContent } from "@/lib/content";
import { deleteLead, kvGet, kvSet, updateLead, type LeadStatus } from "@/lib/db";
import { CONTENT_KEY, CONTENT_TAG } from "@/lib/getContent";
import { deleteMedia } from "@/lib/media";
import { isAdmin, requireAdmin } from "@/lib/session";

export type ActionResult = { ok: boolean; error?: string };

/* ---------- auth ---------- */
export async function login(_: unknown, form: FormData): Promise<{ error?: string }> {
  if (!adminConfigured()) return { error: "Admin is not set up yet. Add ADMIN_PASSWORD and AUTH_SECRET in Vercel → Settings → Environment Variables, then redeploy." };
  const ok = await checkPassword(String(form.get("password") || ""));
  if (!ok) {
    await new Promise((r) => setTimeout(r, 800)); // slow down guessing
    return { error: "Wrong password." };
  }
  const c = await cookies();
  c.set(SESSION_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DAYS * 86400,
  });
  redirect("/admin/");
}

export async function logout() {
  const c = await cookies();
  c.delete(SESSION_COOKIE);
  redirect("/admin/login/");
}

/* ---------- content ---------- */
const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function clean(content: SiteContent): SiteContent {
  // Unique, URL-safe service slugs.
  const seen = new Set<string>();
  content.services = content.services.map((s) => {
    let slug = slugify(s.slug || s.name) || "service";
    while (seen.has(slug)) slug += "-2";
    seen.add(slug);
    return { ...s, slug, faqs: (s.faqs || []).filter((f) => f.q?.trim()) };
  });
  content.generalFaqs = content.generalFaqs.filter((f) => f.q?.trim());
  content.business.url = content.business.url.replace(/\/+$/, "");
  return content;
}

async function writeContent(next: SiteContent) {
  await kvSet(CONTENT_KEY, clean(next));
  revalidateTag(CONTENT_TAG);
  revalidatePath("/", "layout");
}

async function currentContent() {
  return deepMerge(defaultContent, await kvGet<Partial<SiteContent>>(CONTENT_KEY));
}

export async function saveSections(patch: Partial<SiteContent>): Promise<ActionResult> {
  if (!(await isAdmin())) return { ok: false, error: "Your session expired. Please log in again." };
  try {
    const keys = Object.keys(patch).filter((k): k is SectionKey => (sectionKeys as string[]).includes(k));
    const cur = await currentContent();
    const next = { ...cur } as Record<string, unknown>;
    for (const k of keys) next[k] = patch[k];
    await writeContent(deepMerge(defaultContent, next));
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

export async function resetSections(keys: SectionKey[]): Promise<ActionResult> {
  if (!(await isAdmin())) return { ok: false, error: "Your session expired. Please log in again." };
  try {
    const cur = await currentContent();
    const next = { ...cur } as Record<string, unknown>;
    for (const k of keys) if ((sectionKeys as string[]).includes(k)) next[k] = defaultContent[k];
    await writeContent(next as SiteContent);
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

export async function importContent(json: string): Promise<ActionResult> {
  if (!(await isAdmin())) return { ok: false, error: "Your session expired. Please log in again." };
  try {
    const data = JSON.parse(json);
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("That file is not a content backup.");
    await writeContent(deepMerge(defaultContent, data));
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

/* ---------- leads ---------- */
const statuses: LeadStatus[] = ["new", "contacted", "won", "lost"];

export async function setLeadStatus(id: number, status: LeadStatus): Promise<ActionResult> {
  await requireAdmin();
  if (!statuses.includes(status)) return { ok: false, error: "Bad status" };
  await updateLead(id, { status });
  revalidatePath("/admin", "layout");
  return { ok: true };
}

export async function setLeadNotes(id: number, notes: string): Promise<ActionResult> {
  await requireAdmin();
  await updateLead(id, { notes: notes.slice(0, 5000) });
  revalidatePath("/admin", "layout");
  return { ok: true };
}

export async function removeLead(id: number): Promise<ActionResult> {
  await requireAdmin();
  await deleteLead(id);
  revalidatePath("/admin", "layout");
  return { ok: true };
}

/* ---------- media ---------- */
export async function removeMedia(url: string): Promise<ActionResult> {
  await requireAdmin();
  try {
    await deleteMedia(url);
    revalidatePath("/admin/media/");
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}
