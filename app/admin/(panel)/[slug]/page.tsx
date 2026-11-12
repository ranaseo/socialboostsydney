import { notFound } from "next/navigation";
import { adminPages } from "@/lib/admin/schema";
import { readStoredContent } from "@/lib/getContent";
import { requireAdmin } from "@/lib/session";
import Editor from "../../_components/Editor";

export const dynamic = "force-dynamic";

export default async function EditPage({ params }: { params: Promise<{ slug: string }> }) {
  await requireAdmin();
  const { slug } = await params;
  const page = adminPages.find((p) => p.slug === slug);
  if (!page) notFound();
  const c = await readStoredContent();
  const initial = Object.fromEntries([...new Set(page.blocks.map((b) => b.key))].map((k) => [k, c[k]]));
  return (
    <>
      <header className="a-head">
        <h1><span aria-hidden="true">{page.icon}</span> {page.title}</h1>
        <p>{page.desc}</p>
      </header>
      <Editor key={slug} page={page} initial={initial} />
    </>
  );
}
