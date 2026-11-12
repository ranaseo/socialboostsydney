// Storage layer for site content and leads.
// - Production (Vercel): Postgres via Neon. Set DATABASE_URL (or POSTGRES_URL).
//   Tables are created automatically on first use.
// - Local development without a database: JSON files in ./.data/
import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

export type LeadStatus = "new" | "contacted" | "won" | "lost";
export type Lead = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  website: string;
  message: string;
  source: string;
  status: LeadStatus;
  notes: string;
};
export type NewLead = Pick<Lead, "name" | "email" | "phone" | "service" | "website" | "message" | "source">;

const dbUrl = () => process.env.DATABASE_URL || process.env.POSTGRES_URL || "";
export const hasDatabase = () => !!dbUrl();
// On Vercel the filesystem is read-only, so saving needs a database.
export const canWrite = () => hasDatabase() || !process.env.VERCEL;

/* ---------------- Postgres ---------------- */
let ready: Promise<void> | null = null;
function sql() {
  return neon(dbUrl());
}
async function ensureTables() {
  if (!ready) {
    ready = (async () => {
      const q = sql();
      await q.query(`CREATE TABLE IF NOT EXISTS sbs_kv (
        key text PRIMARY KEY,
        value jsonb NOT NULL,
        updated_at timestamptz NOT NULL DEFAULT now()
      )`);
      await q.query(`CREATE TABLE IF NOT EXISTS sbs_leads (
        id serial PRIMARY KEY,
        created_at timestamptz NOT NULL DEFAULT now(),
        name text NOT NULL DEFAULT '',
        email text NOT NULL DEFAULT '',
        phone text NOT NULL DEFAULT '',
        service text NOT NULL DEFAULT '',
        website text NOT NULL DEFAULT '',
        message text NOT NULL DEFAULT '',
        source text NOT NULL DEFAULT '',
        status text NOT NULL DEFAULT 'new',
        notes text NOT NULL DEFAULT ''
      )`);
    })().catch((e) => {
      ready = null;
      throw e;
    });
  }
  return ready;
}

/* ---------------- Local JSON files ---------------- */
const dataDir = path.join(process.cwd(), ".data");
async function readFile<T>(name: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await fs.readFile(path.join(dataDir, name), "utf8")) as T;
  } catch {
    return fallback;
  }
}
async function writeFile(name: string, data: unknown) {
  if (!canWrite()) throw new Error("No database connected. Add DATABASE_URL in Vercel to save changes.");
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(path.join(dataDir, name), JSON.stringify(data, null, 2));
}

/* ---------------- Key/value (site content) ---------------- */
export async function kvGet<T = unknown>(key: string): Promise<T | null> {
  if (hasDatabase()) {
    await ensureTables();
    const rows = await sql().query("SELECT value FROM sbs_kv WHERE key = $1", [key]);
    return rows.length ? (rows[0].value as T) : null;
  }
  const all = await readFile<Record<string, unknown>>("kv.json", {});
  return (all[key] as T) ?? null;
}

export async function kvSet(key: string, value: unknown) {
  if (hasDatabase()) {
    await ensureTables();
    await sql().query(
      "INSERT INTO sbs_kv (key, value, updated_at) VALUES ($1, $2::jsonb, now()) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()",
      [key, JSON.stringify(value)],
    );
    return;
  }
  const all = await readFile<Record<string, unknown>>("kv.json", {});
  all[key] = value;
  await writeFile("kv.json", all);
}

export async function kvDelete(key: string) {
  if (hasDatabase()) {
    await ensureTables();
    await sql().query("DELETE FROM sbs_kv WHERE key = $1", [key]);
    return;
  }
  const all = await readFile<Record<string, unknown>>("kv.json", {});
  delete all[key];
  await writeFile("kv.json", all);
}

/* ---------------- Leads ---------------- */
export async function addLead(l: NewLead): Promise<void> {
  if (hasDatabase()) {
    await ensureTables();
    await sql().query(
      "INSERT INTO sbs_leads (name, email, phone, service, website, message, source) VALUES ($1,$2,$3,$4,$5,$6,$7)",
      [l.name, l.email, l.phone, l.service, l.website, l.message, l.source],
    );
    return;
  }
  const leads = await readFile<Lead[]>("leads.json", []);
  const id = leads.reduce((m, x) => Math.max(m, x.id), 0) + 1;
  leads.push({ ...l, id, created_at: new Date().toISOString(), status: "new", notes: "" });
  await writeFile("leads.json", leads);
}

export async function listLeads(): Promise<Lead[]> {
  if (hasDatabase()) {
    await ensureTables();
    const rows = await sql().query("SELECT * FROM sbs_leads ORDER BY created_at DESC LIMIT 2000");
    return rows.map((r) => ({ ...r, created_at: new Date(r.created_at as string).toISOString() })) as Lead[];
  }
  const leads = await readFile<Lead[]>("leads.json", []);
  return leads.sort((a, b) => b.created_at.localeCompare(a.created_at));
}

export async function updateLead(id: number, patch: Partial<Pick<Lead, "status" | "notes">>) {
  if (hasDatabase()) {
    await ensureTables();
    if (patch.status !== undefined) await sql().query("UPDATE sbs_leads SET status = $1 WHERE id = $2", [patch.status, id]);
    if (patch.notes !== undefined) await sql().query("UPDATE sbs_leads SET notes = $1 WHERE id = $2", [patch.notes, id]);
    return;
  }
  const leads = await readFile<Lead[]>("leads.json", []);
  const l = leads.find((x) => x.id === id);
  if (l) Object.assign(l, patch);
  await writeFile("leads.json", leads);
}

export async function deleteLead(id: number) {
  if (hasDatabase()) {
    await ensureTables();
    await sql().query("DELETE FROM sbs_leads WHERE id = $1", [id]);
    return;
  }
  const leads = await readFile<Lead[]>("leads.json", []);
  await writeFile("leads.json", leads.filter((x) => x.id !== id));
}
