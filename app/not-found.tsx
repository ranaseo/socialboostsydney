import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/getContent";

export default async function NotFound() {
  const c = await getContent();
  return (
    <>
      <Header c={c} />
      <main id="main">
        <section className="banner">
          <div className="wrap banner-in">
            <h1>Page not found</h1>
            <p className="lead">That page does not exist. <Link href="/">Go to the homepage</Link>.</p>
          </div>
        </section>
      </main>
      <Footer c={c} />
    </>
  );
}
