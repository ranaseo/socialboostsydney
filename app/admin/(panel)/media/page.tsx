import { listMedia } from "@/lib/media";
import { requireAdmin } from "@/lib/session";
import MediaLibrary from "../../_components/MediaLibrary";

export const dynamic = "force-dynamic";

export default async function MediaPage() {
  await requireAdmin();
  const items = await listMedia().catch(() => []);
  return (
    <>
      <header className="a-head">
        <h1><span aria-hidden="true">🖼️</span> Media library</h1>
        <p>Upload images (max 4 MB), then copy the URL into any image field. Image fields also have their own upload button.</p>
      </header>
      <MediaLibrary items={items} />
    </>
  );
}
