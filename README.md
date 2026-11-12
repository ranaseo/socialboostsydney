# Social Boost Sydney: website + admin panel (Next.js)

Next.js 15 (App Router, React 19, TypeScript). Public pages are static HTML (ISR) and are regenerated
automatically when you save in the admin panel at **`/admin`**.

## Admin panel (`/admin`)
- **Leads**: every contact / free-audit form submission, with status (new, contacted, won, lost), private notes,
  search, reply by email or WhatsApp, CSV download, optional email alerts.
- **Business info**: name, phone, WhatsApp, email, address (NAP), hours, social links, areas, founder bio and photo.
- **Homepage**: hero, every section heading and text, counters, feature cards, process steps, platforms strip.
- **Services**: add, edit, reorder, delete. Each service has its own page, meta title/description, includes, FAQs, icon or image.
- **FAQs**, **Pages & sections** (About, Services, FAQ, Contact, CTA box, header, footer, WhatsApp button).
- **Logo & colours**, **SEO & tracking** (per-page meta, Search Console / Bing verification, AI crawler toggle,
  GA4, GTM, Meta Pixel, TikTok Pixel), **Media library**, **Backup & restore**.

## Setup on Vercel (one time)
1. **Database**: Vercel → your project → Storage → Create → **Neon (Postgres)** → connect to this project.
   This adds `DATABASE_URL`. Tables are created automatically.
2. **Image uploads**: Vercel → Storage → Create → **Blob** → connect. This adds `BLOB_READ_WRITE_TOKEN`.
3. **Environment variables** (Settings → Environment Variables):
   - `ADMIN_PASSWORD`: your admin login password (use a long one)
   - `AUTH_SECRET`: any long random string (e.g. from `openssl rand -base64 32`)
   - optional `RESEND_API_KEY` (+ `LEAD_FROM_EMAIL`) for new-lead email alerts via resend.com
4. Redeploy, then open `https://socialboostsydney.com.au/admin/`.

If a Vercel project setting has **Output Directory = `out`** from the old static export, clear it.

## Run locally
```bash
npm install
ADMIN_PASSWORD=test AUTH_SECRET=dev npm run dev   # http://localhost:3000/admin
```
Without `DATABASE_URL`, content and leads are saved to `./.data/` (git-ignored).

## Where things live
- `lib/content.ts`: content model and default content (`lib/site.ts` holds the original service/FAQ defaults)
- `lib/admin/schema.ts`: admin form definitions (add a field here + a default in `lib/content.ts`)
- `lib/db.ts`: Postgres / local storage, `lib/media.ts`: uploads, `lib/auth.ts` + `middleware.ts`: admin login
- `app/(site)/`: public pages, `app/admin/`: admin panel, `app/api/leads`: form endpoint

## SEO / AEO / GEO built in (unchanged, now editable)
- Per-page title, meta description, canonical, Open Graph, Twitter card, `en-AU`, geo meta
- JSON-LD: Organization + ProfessionalService (LocalBusiness), WebSite, Service, FAQPage, BreadcrumbList
- `sitemap.xml`, `robots.txt` (AI crawlers allowed; `/admin` and `/api` blocked), `llms.txt`, manifest, favicons
- Answer-first lead paragraphs, FAQ answers in the HTML, static HTML pages
