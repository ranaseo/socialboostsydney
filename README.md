# Social Boost Sydney: demo website (Next.js)

Next.js 15 (App Router, React 19, TypeScript). Builds to a fully static site in `out/`.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/ (upload to Vercel, Netlify or cPanel)
```

## Where to edit
- `lib/site.ts`: business details (NAP), services, prices, FAQs. Every page, JSON-LD and llms.txt read from here.
- `app/globals.css`: brand colours (#16171D, #FFE500, #7A7A7A) and layout.

## SEO / AEO / GEO built in
- Per-page title, meta description, canonical, Open Graph, Twitter card, `en-AU`, geo meta
- JSON-LD: Organization + ProfessionalService (LocalBusiness), WebSite, Service, FAQPage, BreadcrumbList
- `sitemap.xml`, `robots.txt` (AI crawlers allowed), `llms.txt`, web manifest, favicons
- Answer-first lead paragraph on every page, FAQ answers in the HTML, quick facts block
- Static HTML, self-hosted Montserrat, no client JS needed for content

## Before launch
- Replace placeholder phone and street address in `lib/site.ts`
- Check social profile URLs in `sameAs`
- Connect the contact form (Formspree, HubSpot or an API route)
- Add real case studies and reviews (only mark up reviews that are real)
