import type { MetadataRoute } from "next";
import { getContent } from "@/lib/getContent";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { business: site, brand } = await getContent();
  return {
    name: site.name,
    short_name: "Social Boost",
    start_url: "/",
    display: "standalone",
    background_color: brand.colorInk,
    theme_color: brand.colorYellow,
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
