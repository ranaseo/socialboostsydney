import { waLink, type SiteContent } from "@/lib/content";
import { WhatsApp } from "./Icons";

export default function WhatsAppButton({ c }: { c: SiteContent }) {
  return (
    <a className="wa-btn" href={waLink(c.business.whatsapp, c.whatsapp.message)} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
      <WhatsApp size={30} />
      <span className="wa-label">{c.whatsapp.label}</span>
    </a>
  );
}
