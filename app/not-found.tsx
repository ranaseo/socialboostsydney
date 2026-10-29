import Link from "next/link";

export default function NotFound() {
  return (
    <section className="banner">
      <div className="wrap banner-in">
        <h1>Page not found</h1>
        <p className="lead">That page does not exist. <Link href="/">Go to the homepage</Link>.</p>
      </div>
    </section>
  );
}
