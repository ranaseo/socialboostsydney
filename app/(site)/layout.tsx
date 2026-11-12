import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Tracking from "@/components/Tracking";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getContent } from "@/lib/getContent";
import { organizationSchema } from "@/lib/schema";

const hex = (v: string, d: string) => (/^#[0-9a-fA-F]{3,8}$/.test(v) ? v : d);

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const c = await getContent();
  const ink = hex(c.brand.colorInk, "#16171D");
  const yellow = hex(c.brand.colorYellow, "#FFE500");
  return (
    <>
      {(ink.toLowerCase() !== "#16171d" || yellow.toLowerCase() !== "#ffe500") && (
        <style>{`:root{--ink:${ink};--yellow:${yellow}}`}</style>
      )}
      <JsonLd data={organizationSchema(c)} />
      <a href="#main" className="skip">Skip to content</a>
      <Header c={c} />
      <main id="main">{children}</main>
      <Footer c={c} />
      {c.whatsapp.enabled && <WhatsAppButton c={c} />}
      <Tracking t={c.tracking} />
    </>
  );
}
