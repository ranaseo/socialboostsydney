import type { Faq } from "@/lib/content";

// Answers are rendered in the HTML (not hidden behind JS), so crawlers and
// AI answer engines can read them; <details> keeps the page tidy for people.
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <details key={i} open={i === 0}>
          <summary>
            <h3>{f.q}</h3>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
