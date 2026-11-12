"use client";
import { useState } from "react";

type Props = { services: string[]; submitLabel?: string; successMessage: string; source: string };

// Sends the enquiry to /api/leads, which stores it in the database and shows it in Admin → Leads.
export default function ContactForm({ services, submitLabel = "Send Message", successMessage, source }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: `${source} (${window.location.pathname})` }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try WhatsApp or email.");
      setState("done");
      const w = window as unknown as { gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void; ttq?: { track: (e: string) => void } };
      w.gtag?.("event", "generate_lead");
      w.fbq?.("track", "Lead");
      w.ttq?.track("SubmitForm");
    } catch (err) {
      setState("error");
      setError((err as Error).message);
    }
  }

  if (state === "done") {
    return <p className="form-ok" role="status">{successMessage}</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>Name<input name="name" required maxLength={120} autoComplete="name" placeholder="Your name" /></label>
        <label>Email<input type="email" name="email" required maxLength={200} autoComplete="email" placeholder="you@business.com.au" /></label>
      </div>
      <div className="form-row">
        <label>Phone<input type="tel" name="phone" maxLength={40} autoComplete="tel" placeholder="04xx xxx xxx" /></label>
        <label>
          Service
          <select name="service" defaultValue="">
            <option value="" disabled>Choose a service</option>
            {services.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
      </div>
      <label>Website or Instagram<input name="website" maxLength={300} placeholder="https://" /></label>
      <label>Message<textarea name="message" rows={4} maxLength={4000} placeholder="Tell us about your goals" /></label>
      {/* Honeypot: hidden from people, bots fill it in */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      {state === "error" && <p className="form-err" role="alert">{error}</p>}
      <button className="btn btn-yellow" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
