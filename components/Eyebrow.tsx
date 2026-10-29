export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span className="eb-dot" aria-hidden="true" />{children}</p>;
}
