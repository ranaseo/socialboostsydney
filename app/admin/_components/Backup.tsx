"use client";
import { useRef, useState, useTransition } from "react";
import { sectionKeys } from "@/lib/content";
import { importContent, resetSections } from "../actions";

export default function Backup() {
  const ref = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);
  const [pending, start] = useTransition();

  const restore = async (file: File) => {
    const text = await file.text();
    if (!confirm("Replace all website content with this backup?")) return;
    start(async () => {
      const r = await importContent(text);
      setMsg(r.ok ? { ok: true, t: "Backup restored. The live site is updated." } : { ok: false, t: r.error || "Restore failed" });
    });
    if (ref.current) ref.current.value = "";
  };

  return (
    <div className="a-grid2">
      <section className="a-card">
        <h2>Download backup</h2>
        <p className="a-muted">All texts, services, FAQs, SEO and settings. Leads are exported separately as CSV on the Leads page.</p>
        <a className="a-btn a-btn-primary" href="/api/admin/export/">Download content (.json)</a>
      </section>
      <section className="a-card">
        <h2>Restore backup</h2>
        <p className="a-muted">Upload a .json file you downloaded here before.</p>
        <button className="a-btn" disabled={pending} onClick={() => ref.current?.click()}>Choose backup file…</button>
        <input ref={ref} type="file" accept="application/json,.json" hidden onChange={(e) => e.target.files?.[0] && restore(e.target.files[0])} />
      </section>
      <section className="a-card a-danger-zone">
        <h2>Reset all content</h2>
        <p className="a-muted">Puts every text, service and setting back to the original website content. Leads and images are not touched.</p>
        <button
          className="a-btn a-btn-danger"
          disabled={pending}
          onClick={() =>
            confirm("Reset ALL website content to the original? Download a backup first if you might want it back.") &&
            start(async () => {
              const r = await resetSections(sectionKeys);
              setMsg(r.ok ? { ok: true, t: "All content reset to default." } : { ok: false, t: r.error || "Reset failed" });
            })
          }
        >
          Reset everything
        </button>
      </section>
      {msg && <div className={`a-toast ${msg.ok ? "ok" : "err"}`}>{msg.t}</div>}
    </div>
  );
}
