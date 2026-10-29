import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Social Boost Sydney | Free Social Media Audit",
  description:
    "Book a free social media audit with Social Boost Sydney. Call, email or send the form and we reply within one business day.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact/" }]} />
          <h1>Book your free social media audit</h1>
          <p className="lead">Tell us about your business and we will reply within one business day.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap two">
          {/* Demo form: connect to Formspree, HubSpot or a Next.js API route before launch */}
          <form className="form" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <label>Name<input name="name" required autoComplete="name" /></label>
            <label>Email<input type="email" name="email" required autoComplete="email" /></label>
            <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
            <label>Business website or Instagram<input name="website" /></label>
            <label>
              Service
              <select name="service" defaultValue="">
                <option value="" disabled>Choose a service</option>
                {services.map((s) => <option key={s.slug}>{s.name}</option>)}
              </select>
            </label>
            <label>Message<textarea name="message" rows={4} /></label>
            <button className="btn btn-yellow" type="submit">Send request</button>
          </form>
          <div>
            <h2>Contact details</h2>
            <address className="contact-box">
              <strong>{site.name}</strong>
              <br />
              {site.address.streetAddress}, {site.address.addressLocality} {site.address.addressRegion}{" "}
              {site.address.postalCode}
              <br />
              Phone: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phoneDisplay}</a>
              <br />
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              Hours: Monday to Friday, 9:00 am to 5:30 pm
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
