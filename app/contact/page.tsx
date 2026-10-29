import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Social Boost Sydney | Free Social Media Audit",
  description:
    "Book a free social media and SEO audit with Social Boost Sydney. Call, email or send the form and we reply within one business day.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  const tel = `tel:${site.phone.replace(/\s/g, "")}`;
  return (
    <>
      <PageBanner
        title="Book your free audit"
        crumbs={[{ name: "Contact", path: "/contact/" }]}
        lead="Tell us about your business and we will reply within one business day."
      />
      <section className="sec">
        <div className="wrap contact">
          <div className="contact-cards">
            <div className="c-card"><h2 className="side-h">Call us</h2><a href={tel}>{site.phoneDisplay}</a></div>
            <div className="c-card"><h2 className="side-h">Email</h2><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div className="c-card">
              <h2 className="side-h">Office</h2>
              <address>{site.address.streetAddress}, {site.address.addressLocality} {site.address.addressRegion} {site.address.postalCode}</address>
            </div>
            <div className="c-card"><h2 className="side-h">Hours</h2><p>Monday to Friday, 9:00 am to 5:30 pm</p></div>
          </div>
          <div className="contact-form-box">
            <h2>Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
