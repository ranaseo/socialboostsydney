import Link from "next/link";
import type { Section } from "@/lib/seoPages";
import { linkLabel } from "@/lib/seoPages";
import { Arrow, Check } from "./Icons";

// Long-form sections for keyword landing pages and service guides.
export function LongForm({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.h} className="lf">
          <h2>{s.h}</h2>
          {s.p.map((p, i) => <p key={i}>{p}</p>)}
          {s.list && <ul className="ticks">{s.list.map((i) => <li key={i}><Check /> {i}</li>)}</ul>}
        </section>
      ))}
    </>
  );
}

// "Related pages" list used in sidebars and at the end of articles.
export function RelatedLinks({ paths, title = "Related pages", names }: { paths: string[]; title?: string; names?: Record<string, string> }) {
  const items = paths.map((p) => ({ href: p, label: names?.[p] ?? linkLabel(p) })).filter((x) => x.label);
  if (!items.length) return null;
  return (
    <div className="side-box">
      <h2 className="side-h">{title}</h2>
      <ul className="side-list">
        {items.map((x) => <li key={x.href}><Link href={x.href}>{x.label} <Arrow /></Link></li>)}
      </ul>
    </div>
  );
}
