import Link from "next/link";
import { adminPages } from "@/lib/admin/schema";
import { canWrite, hasDatabase } from "@/lib/db";
import { canUpload, hasBlob } from "@/lib/media";
import { requireAdmin } from "@/lib/session";
import { logout } from "../actions";
import NavLinks from "../_components/NavLinks";

export const dynamic = "force-dynamic";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  const nav = [
    { href: "/admin/", label: "Dashboard", icon: "📊" },
    { href: "/admin/leads/", label: "Leads", icon: "📥" },
    ...adminPages.map((p) => ({ href: `/admin/${p.slug}/`, label: p.title, icon: p.icon })),
    { href: "/admin/media/", label: "Media library", icon: "🖼️" },
    { href: "/admin/backup/", label: "Backup & restore", icon: "💾" },
  ];
  return (
    <div className="a-shell">
      <aside className="a-side">
        <Link href="/admin/" className="a-brand">
          <img src="/brand/logo-horizontal-white.svg" alt="Social Boost Sydney" width={150} height={53} />
          <span>Admin</span>
        </Link>
        <NavLinks items={nav} />
        <div className="a-side-foot">
          <a href="/" target="_blank" rel="noopener" className="a-btn a-btn-small a-btn-light">View website ↗</a>
          <form action={logout}><button className="a-btn a-btn-small a-btn-dark">Log out</button></form>
        </div>
      </aside>
      <div className="a-main">
        {!canWrite() && (
          <p className="a-note warn">
            <b>No database connected.</b> You can look around, but changes and leads can’t be saved. In Vercel → Storage, add a{" "}
            <b>Neon Postgres</b> database to this project (it sets <code>DATABASE_URL</code>), then redeploy.
          </p>
        )}
        {canWrite() && !hasDatabase() && (
          <p className="a-note">Local mode: content and leads are saved to <code>.data/</code> on this computer.</p>
        )}
        {!canUpload() && (
          <p className="a-note warn">
            <b>Image uploads are off.</b> In Vercel → Storage, create a <b>Blob</b> store for this project (it sets <code>BLOB_READ_WRITE_TOKEN</code>). You can still paste image URLs.
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
