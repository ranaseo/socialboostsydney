import Link from "next/link";
import type { SiteContent } from "@/lib/content";
import ContactForm from "./ContactForm";
import Eyebrow from "./Eyebrow";

export default function Cta({ c }: { c: SiteContent }) {
  const t = c.cta;
  return (
    <section className="cta-sec">
      <div className="wrap cta-box">
        <div className="cta-copy">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2>{t.title}</h2>
          <p>{t.text}</p>
          <div className="btn-row">
            <Link href={t.primary.href} className="btn btn-yellow">{t.primary.label}</Link>
            <Link href={t.secondary.href} className="btn btn-outline-light">{t.secondary.label}</Link>
          </div>
        </div>
        <div className="cta-form">
          <h3>{t.formTitle}</h3>
          <ContactForm services={c.services.map((s) => s.name)} submitLabel={c.contact.submitLabel} successMessage={c.contact.successMessage} source="CTA form" />
        </div>
      </div>
    </section>
  );
}
