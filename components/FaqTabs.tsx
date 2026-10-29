"use client";
import { useState } from "react";
import type { Faq } from "@/lib/site";
import FaqList from "./FaqList";

// Every panel is rendered into the HTML (inactive ones are only hidden), so
// crawlers and AI engines still see all answers.
export default function FaqTabs({ groups }: { groups: { name: string; faqs: Faq[] }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="tabs" role="tablist">
        {groups.map((g, i) => (
          <button key={g.name} role="tab" aria-selected={active === i} className={active === i ? "tab on" : "tab"} onClick={() => setActive(i)}>
            {g.name}
          </button>
        ))}
      </div>
      {groups.map((g, i) => (
        <div key={g.name} role="tabpanel" hidden={active !== i}>
          <FaqList faqs={g.faqs} />
        </div>
      ))}
    </div>
  );
}
