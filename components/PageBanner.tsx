import Breadcrumbs from "./Breadcrumbs";

type Props = { title: string; lead: React.ReactNode; crumbs: { name: string; path: string }[]; children?: React.ReactNode };

export default function PageBanner({ title, lead, crumbs, children }: Props) {
  return (
    <section className="banner">
      <div className="banner-shape" aria-hidden="true" />
      <div className="wrap banner-in">
        <Breadcrumbs items={crumbs} />
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}
