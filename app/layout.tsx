import type { Metadata, Viewport } from "next";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Social Media Marketing Agency Sydney | Social Boost Sydney",
    template: "%s",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    url: site.url,
    images: [{ url: "/og-image.png", width: 1640, height: 624, alt: site.name }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  other: { "geo.region": "AU-NSW", "geo.placename": "Sydney" },
};

export const viewport: Viewport = { themeColor: "#16171D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <JsonLd data={organizationSchema()} />
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
