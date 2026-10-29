import { services, site } from "@/lib/site";

// Demo form: connect to Formspree, HubSpot or a Next.js API route before launch.
export default function ContactForm() {
  return (
    <form className="form" action={`mailto:${site.email}`} method="post" encType="text/plain">
      <div className="form-row">
        <label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
        <label>Email<input type="email" name="email" required autoComplete="email" placeholder="you@business.com.au" /></label>
      </div>
      <div className="form-row">
        <label>Phone<input type="tel" name="phone" autoComplete="tel" placeholder="04xx xxx xxx" /></label>
        <label>
          Service
          <select name="service" defaultValue="">
            <option value="" disabled>Choose a service</option>
            {services.map((s) => <option key={s.slug}>{s.name}</option>)}
          </select>
        </label>
      </div>
      <label>Website or Instagram<input name="website" placeholder="https://" /></label>
      <label>Message<textarea name="message" rows={4} placeholder="Tell us about your goals" /></label>
      <button className="btn btn-yellow" type="submit">Send Message</button>
    </form>
  );
}
