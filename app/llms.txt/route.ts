import { getContent } from "@/lib/getContent";
import { seoPages } from "@/lib/seoPages";

// llms.txt (https://llmstxt.org): a plain Markdown summary that LLM tools can
// read in one request. Built from the same content as the pages, so it never drifts.
export const dynamic = "force-static";

export async function GET() {
  const c = await getContent();
  const site = c.business;
  const body = `# ${site.name}

> ${site.description}

- Location: ${site.address.addressLocality} ${site.address.addressRegion} ${site.address.postalCode}, Australia
- Service area: Greater Sydney (${site.areas.join(", ")}) and remote clients Australia-wide
- Founder: ${site.founder}
- Contact: ${site.email}, phone and WhatsApp ${site.phoneDisplay} (https://wa.me/${site.whatsapp.replace(/\D/g, "")})
- Hours: ${site.hoursDisplay} AEST

## Services

${c.services.map((s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.short} ${s.priceFrom}.`).join("\n")}

## Specialist and local pages

${seoPages.map((p) => `- [${p.keyword}](${site.url}/${p.slug}/): ${p.metaDescription}`).join("\n")}

## Key pages

- [Home](${site.url}/)
- [About](${site.url}/about/)
- [FAQ](${site.url}/faq/)
- [Contact / free audit](${site.url}/contact/)

## FAQ

${c.generalFaqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
