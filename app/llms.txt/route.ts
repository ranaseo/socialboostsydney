import { generalFaqs, services, site } from "@/lib/site";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): a plain Markdown summary that LLM tools can
// read in one request. Built from lib/site.ts so it never drifts from the pages.
export function GET() {
  const body = `# ${site.name}

> ${site.description}

- Location: ${site.address.addressLocality} ${site.address.addressRegion} ${site.address.postalCode}, Australia
- Service area: Greater Sydney (${site.areas.join(", ")}) and remote clients Australia-wide
- Founder: ${site.founder}
- Contact: ${site.email}, ${site.phoneDisplay}, WhatsApp ${site.whatsappDisplay} (https://wa.me/${site.whatsapp})
- Hours: Monday to Friday, 9:00 am to 5:30 pm AEST

## Services

${services.map((s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.short} ${s.priceFrom}.`).join("\n")}

## Key pages

- [Home](${site.url}/)
- [About](${site.url}/about/)
- [FAQ](${site.url}/faq/)
- [Contact / free audit](${site.url}/contact/)

## FAQ

${generalFaqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
