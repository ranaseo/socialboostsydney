"use client";
// Small client-side pieces for the premium case study page:
// scroll reveal, in-page section nav, image lightbox gallery and the funnel.
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

/* ---------- Scroll reveal: adds .in when the element enters the viewport ---------- */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: React.ReactNode; className?: string; delay?: number; as?: "div" | "section" | "li" | "article" }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as never} className={`scp-reveal${shown ? " in" : ""} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}

/* ---------- Sticky in-page navigation with active section ---------- */
export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  return (
    <nav className="scp-subnav" aria-label="Case study sections">
      <div className="scp-wrap scp-subnav-in">
        {items.map((i) => (
          <a key={i.id} href={`#${i.id}`} className={active === i.id ? "on" : undefined} aria-current={active === i.id ? "true" : undefined}>
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ---------- Gallery with filter tabs and a keyboard-friendly lightbox ---------- */
export type GalleryItem = { src: string; alt: string; caption: string; tag: string; w: number; h: number; wide?: boolean; tall?: boolean };

export function Gallery({ items, tabs }: { items: GalleryItem[]; tabs?: string[] }) {
  const [tab, setTab] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = tab === "All" ? items : items.filter((i) => i.tag === tab);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const cur = open === null ? null : list[open];
  return (
    <>
      {tabs && (
        <div className="scp-tabs" role="tablist" aria-label="Filter gallery">
          {["All", ...tabs].map((t) => (
            <button key={t} type="button" role="tab" aria-selected={tab === t} className={tab === t ? "on" : undefined} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
      )}
      <div className="scp-gallery">
        {list.map((it, i) => (
          <button
            key={it.src}
            type="button"
            className={`scp-g-item${it.wide ? " wide" : ""}${it.tall ? " tall" : ""}`}
            onClick={() => setOpen(i)}
            aria-label={`Open image: ${it.caption}`}
          >
            <img src={it.src} alt={it.alt} width={it.w} height={it.h} loading="lazy" decoding="async" />
            <span className="scp-g-cap">
              <small>{it.tag}</small>
              {it.caption}
            </span>
            <span className="scp-g-zoom" aria-hidden="true"><Maximize2 size={16} /></span>
          </button>
        ))}
      </div>
      {cur && (
        <div className="scp-lightbox" role="dialog" aria-modal="true" aria-label={cur.caption} onClick={close}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={cur.src} alt={cur.alt} />
            <figcaption>
              <span>{cur.caption}</span>
              <small>{(open ?? 0) + 1} / {list.length}</small>
            </figcaption>
          </figure>
          <button type="button" className="scp-lb-btn close" onClick={close} aria-label="Close"><X /></button>
          {list.length > 1 && (
            <>
              <button type="button" className="scp-lb-btn prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image"><ChevronLeft /></button>
              <button type="button" className="scp-lb-btn next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image"><ChevronRight /></button>
            </>
          )}
        </div>
      )}
    </>
  );
}

/* ---------- Marketing funnel: click or hover a stage to see its touchpoints ---------- */
export type FunnelStage = { key: string; title: string; text: string; points: string[] };

export function Funnel({ stages }: { stages: FunnelStage[] }) {
  const [active, setActive] = useState(0);
  const s = stages[active];
  return (
    <div className="scp-funnel">
      <ol className="scp-funnel-steps">
        {stages.map((st, i) => (
          <li key={st.key} style={{ ["--i" as string]: i } as React.CSSProperties}>
            <button
              type="button"
              className={i === active ? "on" : undefined}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={i === active}
            >
              <span className="scp-f-n">0{i + 1}</span>
              <span className="scp-f-t">{st.title}</span>
              <span className="scp-f-p">{st.points.join(" · ")}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="scp-funnel-detail" aria-live="polite">
        <p className="scp-kicker">Stage 0{active + 1}</p>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        <ul>
          {s.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </div>
  );
}
