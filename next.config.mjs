/** @type {import('next').NextConfig} */
const nextConfig = {
  // Runs on Vercel with ISR: public pages are static HTML, regenerated when the
  // admin panel saves. The admin panel and APIs need a server, so no static export.
  trailingSlash: true,
  images: { unoptimized: true },
  async headers() {
    return [
      { source: "/admin/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
      // Vercel deployment URLs (socialboostsydney.vercel.app, preview and branch
      // URLs) must never be indexed: they duplicate the real site. Only requests
      // whose Host ends in .vercel.app get this header, so socialboostsydney.com.au
      // stays fully indexable. Crawling is still allowed so Google can see the
      // noindex and drop any Vercel URLs it has already indexed.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?:.*\\.)?vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};
export default nextConfig;
