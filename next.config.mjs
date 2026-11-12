/** @type {import('next').NextConfig} */
const nextConfig = {
  // Runs on Vercel with ISR: public pages are static HTML, regenerated when the
  // admin panel saves. The admin panel and APIs need a server, so no static export.
  trailingSlash: true,
  images: { unoptimized: true },
  async headers() {
    return [{ source: "/admin/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};
export default nextConfig;
