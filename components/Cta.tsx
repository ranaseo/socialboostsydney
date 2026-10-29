import Link from "next/link";
import ContactForm from "./ContactForm";
import Eyebrow from "./Eyebrow";

export default function Cta() {
  return (
    <section className="cta-sec">
      <div className="wrap cta-box">
        <div className="cta-copy">
          <Eyebrow>Get started with us</Eyebrow>
          <h2>Start a conversation to boost your business</h2>
          <p>Book a free social media and SEO audit. We review your profiles, ads, Google listing and competitors, then send a 1-page action plan within 2 business days.</p>
          <div className="btn-row">
            <Link href="/contact/" className="btn btn-yellow">Let’s Talk</Link>
            <Link href="/services/" className="btn btn-outline-light">View Services</Link>
          </div>
        </div>
        <div className="cta-form">
          <h3>Get a free consultation with our experts</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
