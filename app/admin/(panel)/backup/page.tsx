import { requireAdmin } from "@/lib/session";
import Backup from "../../_components/Backup";

export const dynamic = "force-dynamic";

export default async function BackupPage() {
  await requireAdmin();
  return (
    <>
      <header className="a-head">
        <h1><span aria-hidden="true">💾</span> Backup & restore</h1>
        <p>Download all website content as one JSON file, restore it later, or reset everything to the original content.</p>
      </header>
      <Backup />
    </>
  );
}
