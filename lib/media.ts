// Image uploads: Vercel Blob in production (set BLOB_READ_WRITE_TOKEN by
// creating a Blob store in Vercel → Storage), ./.data/uploads locally
// (served by app/uploads/[name]/route.ts).
import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { del, list, put } from "@vercel/blob";

export type MediaItem = { url: string; name: string; size: number; uploadedAt: string };

export const hasBlob = () => !!process.env.BLOB_READ_WRITE_TOKEN;
export const canUpload = () => hasBlob() || !process.env.VERCEL;

const ALLOWED: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
  "image/svg+xml": "svg",
  "image/x-icon": "ico",
  "image/vnd.microsoft.icon": "ico",
};
export const MAX_BYTES = 4 * 1024 * 1024;
export const localDir = path.join(process.cwd(), ".data", "uploads");

function safeName(name: string, ext: string) {
  const base = name.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "image";
  return `${base}-${Date.now().toString(36)}.${ext}`;
}

export async function uploadImage(file: File): Promise<MediaItem> {
  const ext = ALLOWED[file.type];
  if (!ext) throw new Error("Only PNG, JPG, WEBP, GIF, AVIF, SVG or ICO images are allowed.");
  if (file.size > MAX_BYTES) throw new Error("Image is larger than 4 MB. Please compress it first.");
  const name = safeName(file.name, ext);
  if (hasBlob()) {
    const r = await put(`uploads/${name}`, file, { access: "public", contentType: file.type });
    return { url: r.url, name, size: file.size, uploadedAt: new Date().toISOString() };
  }
  if (!canUpload()) throw new Error("No image storage connected. Create a Blob store in Vercel → Storage.");
  await fs.mkdir(localDir, { recursive: true });
  await fs.writeFile(path.join(localDir, name), Buffer.from(await file.arrayBuffer()));
  return { url: `/uploads/${name}`, name, size: file.size, uploadedAt: new Date().toISOString() };
}

export async function listMedia(): Promise<MediaItem[]> {
  if (hasBlob()) {
    const r = await list({ prefix: "uploads/", limit: 500 });
    return r.blobs
      .map((b) => ({ url: b.url, name: b.pathname.replace("uploads/", ""), size: b.size, uploadedAt: new Date(b.uploadedAt).toISOString() }))
      .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
  }
  try {
    const files = await fs.readdir(localDir);
    const items = await Promise.all(
      files.map(async (f) => {
        const st = await fs.stat(path.join(localDir, f));
        return { url: `/uploads/${f}`, name: f, size: st.size, uploadedAt: st.mtime.toISOString() };
      }),
    );
    return items.sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
  } catch {
    return [];
  }
}

export async function deleteMedia(url: string) {
  if (hasBlob()) {
    if (!/^https:\/\/[a-z0-9.-]+\.blob\.vercel-storage\.com\//.test(url)) throw new Error("Not a Blob URL");
    await del(url);
    return;
  }
  const name = path.basename(url);
  if (!url.startsWith("/uploads/") || name !== url.slice("/uploads/".length)) throw new Error("Invalid file");
  await fs.unlink(path.join(localDir, name));
}
