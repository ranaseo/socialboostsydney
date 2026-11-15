import { getContent } from "@/lib/getContent";
import { industries, industryPath } from "@/lib/industries";
import { caseStudyPath, indexableCaseStudies } from "@/lib/caseStudies";

// llms.txt (https://llmstxt.org): a plain Markdown summary that LLM tools can
// read in one request. Built from the same content as the pages, so it never drifts.
export const dynamic = "force-static";

export async function GET() {
  const c = await getContent();
  const site = c.business;
  const cases = indexableCaseStudies(c.caseStudies);
  const body = `# ${site.name}

> ${site.description}

- Location: ${site.address.addressLocality} ${site.address.addressRegion} ${site.address.postalCode}, Australia
- Service area: Greater Sydney (${site.areas.join(", ")}) and remote clients Australia-wide
- Founder: ${site.founder}
- Contact: ${site.email}, phone and WhatsApp ${site.phoneDisplay} (https://wa.me/${site.whatsapp.replace(/\D/g, "")})
- Hours: ${site.hoursDisplay} AEST

## Services

${c.services.map((s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.short} ${s.priceFrom}.`).join("\n")}

## Industries we help

${industries.map((i) => `- [${i.h1}](${site.url}${industryPath(i)}): ${i.answer}`).join("\n")}

${cases.length ? `## Case studies\n\n${cases.map((cs) => `- [${cs.title}](${site.url}${caseStudyPath(cs)}): ${cs.summary}`).join("\n")}\n\n` : ""}## Key pages

- [Home](${site.url}/)
- [Businesses we help](${site.url}/industries/)
- [Case studies](${site.url}/case-studies/)
- [About](${site.url}/about/)
- [FAQ](${site.url}/faq/)
- [Contact / free audit](${site.url}/contact/)

## FAQ

${c.generalFaqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
