import { waLink } from "@/lib/site";
import { WhatsApp } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a className="wa-btn" href={waLink("Hi Social Boost Sydney, I'd like a free social media audit.")} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
      <WhatsApp size={30} />
      <span className="wa-label">Chat on WhatsApp</span>
    </a>
  );
}
