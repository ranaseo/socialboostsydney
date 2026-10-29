import Link from "next/link";

export default function Cta() {
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <div>
          <h2>Get a free social media audit</h2>
          <p>We review your profiles, ads and competitors and send you a 1-page action plan within 2 business days.</p>
        </div>
        <Link href="/contact/" className="btn btn-yellow">Book my free audit</Link>
      </div>
    </section>
  );
}
