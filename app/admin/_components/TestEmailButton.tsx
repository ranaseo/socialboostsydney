"use client";
import { useState, useTransition } from "react";
import { sendTestLeadEmail } from "../actions";

export default function TestEmailButton() {
  const [pending, start] = useTransition();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  return (
    <div>
      <button
        type="button"
        className="a-btn a-btn-small"
        disabled={pending}
        onClick={() =>
          start(async () => {
            const r = await sendTestLeadEmail();
            setMsg(r.ok ? { ok: true, text: `Test email sent to ${r.to}. Check your inbox (and spam).` } : { ok: false, text: r.error || "Could not send." });
          })
        }
      >
        {pending ? "Sending…" : "Send test email"}
      </button>
      {msg && <p className={msg.ok ? "a-muted small" : "a-err small"} role="status" style={msg.ok ? { color: "var(--a-ok)" } : undefined}>{msg.text}</p>}
    </div>
  );
}
