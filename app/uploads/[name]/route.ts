import { promises as fs } from "fs";
import path from "path";
import { localDir } from "@/lib/media";

// Serves images uploaded in local mode (no Vercel Blob). On Vercel, uploads go to Blob URLs instead.
const types: Record<string, string> = { png: "image/png", jpg: "image/jpeg", webp: "image/webp", gif: "image/gif", avif: "image/avif", svg: "image/svg+xml", ico: "image/x-icon" };

export async function GET(_: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  if (name !== path.basename(name)) return new Response("Not found", { status: 404 });
  try {
    const buf = await fs.readFile(path.join(localDir, name));
    const ext = name.split(".").pop() || "";
    return new Response(new Uint8Array(buf), {
      headers: { "Content-Type": types[ext] || "application/octet-stream", "Cache-Control": "public, max-age=31536000, immutable", "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'" },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
