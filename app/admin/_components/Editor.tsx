"use client";
import { useEffect, useRef, useState, useTransition } from "react";
import type { AdminPage, Field } from "@/lib/admin/schema";
import type { SectionKey, SiteContent } from "@/lib/content";
import { resetSections, saveSections } from "../actions";

type Obj = Record<string, unknown>;
type OnChange = (v: unknown) => void;

export default function Editor({ page, initial }: { page: AdminPage; initial: Obj }) {
  const [data, setData] = useState<Obj>(initial);
  const [dirty, setDirty] = useState(false);
  const [toast, setToast] = useState<{ ok: boolean; msg: string } | null>(null);
  const [pending, start] = useTransition();
  const keys = [...new Set(page.blocks.map((b) => b.key))] as SectionKey[];

  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => {
      if (dirty) e.preventDefault();
    };
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const set = (key: string, v: unknown) => {
    setData((d) => ({ ...d, [key]: v }));
    setDirty(true);
  };

  const save = () =>
    start(async () => {
      const r = await saveSections(data as Partial<SiteContent>);
      if (r.ok) setDirty(false);
      setToast(r.ok ? { ok: true, msg: "Saved. The live site is updated." } : { ok: false, msg: r.error || "Could not save." });
    });

  const reset = () => {
    if (!confirm(`Reset everything on “${page.title}” to the original default content? This cannot be undone.`)) return;
    start(async () => {
      const r = await resetSections(keys);
      setToast(r.ok ? { ok: true, msg: "Reset to default. Reloading…" } : { ok: false, msg: r.error || "Could not reset." });
      if (r.ok) setTimeout(() => window.location.reload(), 600);
    });
  };

  return (
    <div className="a-editor">
      {page.blocks.map((b, i) => (
        <section key={i} className="a-card">
          <h2>{b.title}</h2>
          {b.help && <p className="a-help">{b.help}</p>}
          {b.root === "items" ? (
            <Items
              value={(data[b.key] as Obj[]) || []}
              fields={b.fields}
              titleKey={b.titleKey || "name"}
              newItem={b.newItem || {}}
              addLabel={b.addLabel}
              onChange={(v) => set(b.key, v)}
            />
          ) : b.root === "list" ? (
            <ListInput label="One per line" value={(data[b.key] as string[]) || []} onChange={(v) => set(b.key, v)} />
          ) : (
            <Fields fields={b.fields} value={(data[b.key] as Obj) || {}} onChange={(v) => set(b.key, v)} />
          )}
        </section>
      ))}

      <div className={`a-savebar${dirty ? " dirty" : ""}`}>
        <span className="a-savebar-msg">{dirty ? "You have unsaved changes" : "All changes saved"}</span>
        <button type="button" className="a-btn a-btn-ghost" onClick={reset} disabled={pending}>Reset to default</button>
        <button type="button" className="a-btn a-btn-primary" onClick={save} disabled={pending || !dirty}>
          {pending ? "Saving…" : "Save changes"}
        </button>
      </div>
      {toast && <div className={`a-toast ${toast.ok ? "ok" : "err"}`} role="status">{toast.msg}</div>}
    </div>
  );
}

function Fields({ fields, value, onChange }: { fields: Field[]; value: Obj; onChange: (v: Obj) => void }) {
  return (
    <div className="a-fields">
      {fields.map((f) => (
        <FieldInput key={f.k} f={f} value={value[f.k]} onChange={(v) => onChange({ ...value, [f.k]: v })} />
      ))}
    </div>
  );
}

function FieldInput({ f, value, onChange }: { f: Field; value: unknown; onChange: OnChange }) {
  const help = f.help ? <small className="a-help">{f.help}</small> : null;
  switch (f.type) {
    case "group":
      return (
        <fieldset className="a-group">
          <legend>{f.label}</legend>
          {help}
          <Fields fields={f.fields} value={(value as Obj) || {}} onChange={onChange} />
        </fieldset>
      );
    case "items":
      return (
        <fieldset className="a-group">
          <legend>{f.label}</legend>
          {help}
          <Items value={(value as Obj[]) || []} fields={f.fields} titleKey={f.titleKey} newItem={f.newItem} addLabel={f.addLabel} onChange={onChange} />
        </fieldset>
      );
    case "list":
      return <ListInput label={f.label} help={f.help} placeholder={f.placeholder} value={(value as string[]) || []} onChange={onChange} />;
    case "bool":
      return (
        <label className="a-check">
          <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />
          <span>{f.label}</span>
          {help}
        </label>
      );
    case "select":
      return (
        <label className="a-field">
          <span className="a-label">{f.label}</span>
          <select value={String(value ?? "")} onChange={(e) => onChange(e.target.value)}>
            <option value="">(default)</option>
            {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          {help}
        </label>
      );
    case "image":
      return <ImageInput label={f.label} help={f.help} value={String(value ?? "")} onChange={onChange} />;
    case "color":
      return (
        <label className="a-field">
          <span className="a-label">{f.label}</span>
          <span className="a-color">
            <input type="color" value={/^#[0-9a-fA-F]{6}$/.test(String(value)) ? String(value) : "#000000"} onChange={(e) => onChange(e.target.value.toUpperCase())} />
            <input type="text" value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} />
          </span>
          {help}
        </label>
      );
    case "number":
      return (
        <label className="a-field">
          <span className="a-label">{f.label}</span>
          <input type="number" step="any" value={value === undefined || value === null ? "" : String(value)} onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))} />
          {help}
        </label>
      );
    default: {
      const v = String(value ?? "");
      const counter = f.max ? (
        <small className={`a-count${v.length > f.max ? " over" : ""}`}>{v.length} / {f.max}</small>
      ) : null;
      return (
        <label className="a-field">
          <span className="a-label">{f.label}{counter}</span>
          {f.type === "textarea" ? (
            <textarea rows={f.rows || 3} value={v} placeholder={f.placeholder} onChange={(e) => onChange(e.target.value)} />
          ) : (
            <input type={f.type === "email" ? "email" : f.type === "url" ? "url" : "text"} value={v} placeholder={f.placeholder} onChange={(e) => onChange(e.target.value)} />
          )}
          {help}
        </label>
      );
    }
  }
}

function ListInput({ label, help, placeholder, value, onChange }: { label: string; help?: string; placeholder?: string; value: string[]; onChange: OnChange }) {
  // Keep the raw text while typing so empty lines don't vanish mid-edit.
  const [text, setText] = useState(value.join("\n"));
  const last = useRef(value);
  useEffect(() => {
    if (value !== last.current) {
      last.current = value;
      setText(value.join("\n"));
    }
  }, [value]);
  return (
    <label className="a-field">
      <span className="a-label">{label} <small className="a-muted">(one per line)</small></span>
      <textarea
        rows={Math.min(12, Math.max(3, value.length + 1))}
        value={text}
        placeholder={placeholder}
        onChange={(e) => {
          setText(e.target.value);
          const arr = e.target.value.split("\n").map((s) => s.trim()).filter(Boolean);
          last.current = arr;
          onChange(arr);
        }}
      />
      {help && <small className="a-help">{help}</small>}
    </label>
  );
}

function Items({ value, fields, titleKey, newItem, addLabel, onChange }: { value: Obj[]; fields: Field[]; titleKey: string; newItem: Obj; addLabel?: string; onChange: OnChange }) {
  const [open, setOpen] = useState<boolean[]>(() => value.map(() => false));
  const isOpen = (i: number) => !!open[i];
  const move = (i: number, d: number) => {
    const j = i + d;
    if (j < 0 || j >= value.length) return;
    const next = [...value];
    [next[i], next[j]] = [next[j], next[i]];
    const o = [...open];
    [o[i], o[j]] = [o[j], o[i]];
    setOpen(o);
    onChange(next);
  };
  const remove = (i: number) => {
    const name = String(value[i]?.[titleKey] || "this item");
    if (!confirm(`Delete “${name}”?`)) return;
    setOpen(open.filter((_, k) => k !== i));
    onChange(value.filter((_, k) => k !== i));
  };
  const add = () => {
    setOpen([...open, true]);
    onChange([...value, structuredClone(newItem)]);
  };
  return (
    <div className="a-items">
      {value.map((item, i) => (
        <div key={i} className={`a-item${isOpen(i) ? " open" : ""}`}>
          <div className="a-item-head">
            <button type="button" className="a-item-toggle" onClick={() => setOpen((o) => { const n = [...o]; n[i] = !n[i]; return n; })} aria-expanded={isOpen(i)}>
              <span className="a-caret">{isOpen(i) ? "▾" : "▸"}</span>
              <span className="a-item-title">{String(item[titleKey] || "(untitled)")}</span>
            </button>
            <span className="a-item-tools">
              <button type="button" title="Move up" onClick={() => move(i, -1)} disabled={i === 0}>↑</button>
              <button type="button" title="Move down" onClick={() => move(i, 1)} disabled={i === value.length - 1}>↓</button>
              <button type="button" title="Delete" className="del" onClick={() => remove(i)}>✕</button>
            </span>
          </div>
          {isOpen(i) && (
            <div className="a-item-body">
              <Fields fields={fields} value={item} onChange={(v) => onChange(value.map((x, k) => (k === i ? v : x)))} />
            </div>
          )}
        </div>
      ))}
      <button type="button" className="a-btn a-btn-add" onClick={add}>+ {addLabel || "Add item"}</button>
    </div>
  );
}

function ImageInput({ label, help, value, onChange }: { label: string; help?: string; value: string; onChange: OnChange }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  async function upload(file: File) {
    setBusy(true);
    setErr("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const r = await fetch("/api/admin/upload/", { method: "POST", body: fd });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Upload failed");
      onChange(j.url);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }
  return (
    <div className="a-field">
      <span className="a-label">{label}</span>
      <div className="a-image">
        <div className="a-thumb">{value ? <img src={value} alt="" /> : <span>No image</span>}</div>
        <div className="a-image-ctl">
          <input type="text" value={value} placeholder="https://… or /path.png" onChange={(e) => onChange(e.target.value)} />
          <div className="a-row">
            <button type="button" className="a-btn a-btn-small" onClick={() => fileRef.current?.click()} disabled={busy}>{busy ? "Uploading…" : "Upload image"}</button>
            {value && <button type="button" className="a-btn a-btn-small a-btn-ghost" onClick={() => onChange("")}>Remove</button>}
          </div>
          <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
          {err && <small className="a-err">{err}</small>}
          {help && <small className="a-help">{help}</small>}
        </div>
      </div>
    </div>
  );
}
