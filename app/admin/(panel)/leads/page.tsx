import { listLeads } from "@/lib/db";
import { readStoredContent } from "@/lib/getContent";
import { requireAdmin } from "@/lib/session";
import LeadsTable from "../../_components/LeadsTable";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  await requireAdmin();
  const [leads, c] = await Promise.all([listLeads().catch(() => []), readStoredContent()]);
  return (
    <>
      <header className="a-head a-head-row">
        <div>
          <h1><span aria-hidden="true">📥</span> Leads</h1>
          <p>Every contact and free-audit form submission from the website.</p>
        </div>
        <a href="/api/admin/leads-csv/" className="a-btn">Download CSV</a>
      </header>
      <LeadsTable leads={leads} whatsappText={`Hi, this is ${c.business.founder} from ${c.business.name}. Thanks for your enquiry!`} />
    </>
  );
}
