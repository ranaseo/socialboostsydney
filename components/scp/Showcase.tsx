"use client";
// Tabbed screen showcase for website design case studies: one browser frame,
// a list of real page screenshots, and the design notes for the active screen.
import { useState } from "react";
import { Check } from "lucide-react";

export type ShowcaseScreen = { key: string; label: string; url: string; src: string; w: number; h: number; alt: string; title: string; points: string[] };

export default function Showcase({ screens }: { screens: ShowcaseScreen[] }) {
  const [i, setI] = useState(0);
  const s = screens[i];
  return (
    <div className="wd-show">
      <div className="wd-show-tabs" role="tablist" aria-label="Website screens">
        {screens.map((x, k) => (
          <button key={x.key} type="button" role="tab" aria-selected={k === i} className={k === i ? "on" : undefined} onClick={() => setI(k)}>
            <span>0{k + 1}</span> {x.label}
          </button>
        ))}
      </div>
      <div className="wd-show-body">
        <div className="wd-browser wd-show-frame">
          <div className="wd-bar" aria-hidden="true"><i /><i /><i /><span>{s.url}</span></div>
          <div className="wd-screen scroll">
            <img key={s.src} src={s.src} alt={s.alt} width={s.w} height={s.h} loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="wd-show-notes" aria-live="polite">
          <p className="scp-kicker">Screen 0{i + 1}</p>
          <h3>{s.title}</h3>
          <ul>{s.points.map((p) => <li key={p}><Check size={16} /> {p}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
