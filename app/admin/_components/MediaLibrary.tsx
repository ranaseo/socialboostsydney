"use client";
import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { MediaItem } from "@/lib/media";
import { removeMedia } from "../actions";

export default function MediaLibrary({ items }: { items: MediaItem[] }) {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [pending, start] = useTransition();

  async function upload(files: FileList) {
    setBusy(true);
    setMsg("");
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("file", file);
      const r = await fetch("/api/admin/upload/", { method: "POST", body: fd });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) setMsg(`${file.name}: ${j.error || "upload failed"}`);
    }
    setBusy(false);
    if (ref.current) ref.current.value = "";
    router.refresh();
  }

  const absolute = (u: string) => (u.startsWith("http") ? u : `${window.location.origin}${u}`);

  return (
    <div className="a-card">
      <div className="a-row">
        <button className="a-btn a-btn-primary" onClick={() => ref.current?.click()} disabled={busy}>{busy ? "Uploading…" : "Upload images"}</button>
        <input ref={ref} type="file" accept="image/*" multiple hidden onChange={(e) => e.target.files && upload(e.target.files)} />
        {msg && <span className="a-err">{msg}</span>}
      </div>
      {items.length === 0 ? (
        <p className="a-muted">No uploads yet.</p>
      ) : (
        <div className="a-media">
          {items.map((m) => (
            <figure key={m.url}>
              <div className="a-media-img"><img src={m.url} alt="" loading="lazy" /></div>
              <figcaption>
                <span title={m.name}>{m.name}</span>
                <small>{Math.round(m.size / 1024)} KB</small>
                <span className="a-row">
                  <button className="a-btn a-btn-small" onClick={() => navigator.clipboard.writeText(absolute(m.url)).then(() => setMsg("URL copied"))}>Copy URL</button>
                  <button className="a-btn a-btn-small a-btn-danger" disabled={pending} onClick={() => confirm("Delete this image? Pages using it will show a broken image.") && start(async () => { const r = await removeMedia(m.url); if (!r.ok) setMsg(r.error || ""); router.refresh(); })}>Delete</button>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
