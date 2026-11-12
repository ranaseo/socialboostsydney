import type { SiteContent } from "@/lib/content";

export default function FounderAvatar({ b }: { b: SiteContent["business"] }) {
  if (b.founderPhoto) return <img src={b.founderPhoto} alt={b.founder} className="f-avatar f-photo" width={320} height={320} />;
  return <div className="f-avatar" aria-hidden="true">{b.founderInitials}</div>;
}
