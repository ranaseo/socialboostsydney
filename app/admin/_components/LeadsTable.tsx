"use client";
import { useMemo, useState, useTransition } from "react";
import type { Lead, LeadStatus } from "@/lib/db";
import { removeLead, setLeadNotes, setLeadStatus } from "../actions";

const statuses: LeadStatus[] = ["new", "contacted", "won", "lost"];

export default function LeadsTable({ leads, whatsappText }: { leads: Lead[]; whatsappText: string }) {
  const [filter, setFilter] = useState<LeadStatus | "all">("all");
  const [q, setQ] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);
  const [pending, start] = useTransition();

  const counts = useMemo(() => Object.fromEntries(statuses.map((s) => [s, leads.filter((l) => l.status === s).length])), [leads]);
  const shown = leads.filter(
    (l) => (filter === "all" || l.status === filter) && (!q || `${l.name} ${l.email} ${l.phone} ${l.service} ${l.message}`.toLowerCase().includes(q.toLowerCase())),
  );

  if (leads.length === 0) return <div className="a-card"><p className="a-muted">No leads yet. When someone sends the contact or free-audit form, it shows up here.</p></div>;

  return (
    <div className="a-card a-leads">
      <div className="a-leads-bar">
        <div className="a-tabs">
          <button className={filter === "all" ? "on" : ""} onClick={() => setFilter("all")}>All <i>{leads.length}</i></button>
          {statuses.map((s) => (
            <button key={s} className={filter === s ? "on" : ""} onClick={() => setFilter(s)}>{s} <i>{counts[s]}</i></button>
          ))}
        </div>
        <input type="search" placeholder="Search name, email, message…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="a-table-wrap">
        <table className="a-table">
          <thead>
            <tr><th>Date</th><th>Name</th><th>Contact</th><th>Service</th><th>Status</th><th /></tr>
          </thead>
          <tbody>
            {shown.map((l) => {
              const phoneDigits = l.phone.replace(/\D/g, "");
              const waNumber = phoneDigits.startsWith("0") ? `61${phoneDigits.slice(1)}` : phoneDigits;
              return [
                <tr key={l.id} className={l.status === "new" ? "is-new" : undefined} onClick={() => setOpenId(openId === l.id ? null : l.id)}>
                  <td className="nowrap">{new Date(l.created_at).toLocaleString("en-AU", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</td>
                  <td><b>{l.name}</b></td>
                  <td>
                    <a href={`mailto:${l.email}`} onClick={(e) => e.stopPropagation()}>{l.email}</a>
                    {l.phone && <><br /><span className="a-muted">{l.phone}</span></>}
                  </td>
                  <td>{l.service || <span className="a-muted">—</span>}</td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <select
                      className={`a-pill-select s-${l.status}`}
                      value={l.status}
                      disabled={pending}
                      onChange={(e) => start(async () => { await setLeadStatus(l.id, e.target.value as LeadStatus); })}
                    >
                      {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="a-caret">{openId === l.id ? "▾" : "▸"}</td>
                </tr>,
                openId === l.id && (
                  <tr key={`${l.id}-d`} className="a-detail">
                    <td colSpan={6}>
                      <div className="a-detail-grid">
                        <div>
                          <h3>Message</h3>
                          <p className="a-pre">{l.message || <span className="a-muted">(no message)</span>}</p>
                          {l.website && <p><b>Website:</b> {l.website}</p>}
                          <p className="a-muted small">Source: {l.source || "—"}</p>
                          <div className="a-row">
                            <a className="a-btn a-btn-small" href={`mailto:${l.email}?subject=${encodeURIComponent("Your enquiry")}`}>Reply by email</a>
                            {waNumber && (
                              <a className="a-btn a-btn-small a-btn-wa" target="_blank" rel="noopener" href={`https://wa.me/${waNumber}?text=${encodeURIComponent(whatsappText)}`}>WhatsApp</a>
                            )}
                            <button
                              className="a-btn a-btn-small a-btn-danger"
                              disabled={pending}
                              onClick={() => confirm(`Delete lead from ${l.name}?`) && start(async () => { await removeLead(l.id); })}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <NotesBox lead={l} />
                      </div>
                    </td>
                  </tr>
                ),
              ];
            })}
          </tbody>
        </table>
      </div>
      {shown.length === 0 && <p className="a-muted">No leads match.</p>}
    </div>
  );
}

function NotesBox({ lead }: { lead: Lead }) {
  const [notes, setNotes] = useState(lead.notes);
  const [saved, setSaved] = useState(false);
  const [pending, start] = useTransition();
  return (
    <div>
      <h3>Private notes</h3>
      <textarea rows={5} value={notes} onChange={(e) => { setNotes(e.target.value); setSaved(false); }} placeholder="Call notes, budget, next step…" />
      <div className="a-row">
        <button className="a-btn a-btn-small a-btn-primary" disabled={pending || notes === lead.notes} onClick={() => start(async () => { await setLeadNotes(lead.id, notes); setSaved(true); })}>
          {pending ? "Saving…" : "Save notes"}
        </button>
        {saved && <span className="a-muted">Saved</span>}
      </div>
    </div>
  );
}
