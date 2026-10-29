/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole site builds to /out and can be hosted anywhere
  // (Vercel, Netlify, cPanel, S3). Remove `output` to use SSR/ISR on Vercel.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
