import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";
import { waLink } from "@/lib/content";
import { getContent } from "@/lib/getContent";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return { title: seo.contact.title, description: seo.contact.description, alternates: { canonical: "/contact/" } };
}

export default async function Contact() {
  const c = await getContent();
  const { contact: t, business: site } = c;
  return (
    <>
      <PageBanner title={t.bannerTitle} crumbs={[{ name: "Contact", path: "/contact/" }]} lead={t.bannerLead} />
      <section className="sec">
        <div className="wrap contact">
          <div className="contact-cards">
            <div className="c-card"><h2 className="side-h">Call / WhatsApp</h2><a href={waLink(site.whatsapp)} rel="noopener" target="_blank">{site.phoneDisplay}</a></div>
            <div className="c-card"><h2 className="side-h">Email</h2><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div className="c-card">
              <h2 className="side-h">Office</h2>
              <address>{site.address.streetAddress}, {site.address.addressLocality} {site.address.addressRegion} {site.address.postalCode}</address>
            </div>
            <div className="c-card"><h2 className="side-h">Hours</h2><p>{site.hoursDisplay}</p></div>
          </div>
          <div className="contact-form-box">
            <h2>{t.formTitle}</h2>
            <ContactForm services={c.services.map((s) => s.name)} submitLabel={t.submitLabel} successMessage={t.successMessage} source="Contact page" />
          </div>
        </div>
      </section>
    </>
  );
}
