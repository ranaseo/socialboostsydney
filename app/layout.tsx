import type { Metadata, Viewport } from "next";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "./globals.css";
import { getContent } from "@/lib/getContent";

export async function generateMetadata(): Promise<Metadata> {
  const c = await getContent();
  const b = c.business;
  const verification: Metadata["verification"] = {};
  if (c.seo.googleVerification) verification.google = c.seo.googleVerification;
  if (c.seo.bingVerification) verification.other = { "msvalidate.01": c.seo.bingVerification };
  return {
    metadataBase: new URL(b.url),
    title: { default: c.seo.defaultTitle, template: "%s" },
    description: b.description,
    applicationName: b.name,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: b.name,
      url: b.url,
      images: [{ url: c.brand.ogImage, width: 1640, height: 624, alt: b.name }],
    },
    twitter: { card: "summary_large_image", images: [c.brand.ogImage] },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    verification,
    other: { "geo.region": c.seo.geoRegion, "geo.placename": c.seo.geoPlacename },
  };
}

export async function generateViewport(): Promise<Viewport> {
  const c = await getContent();
  return { themeColor: c.brand.colorInk };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
