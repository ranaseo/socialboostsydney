"use client";
import { useActionState } from "react";
import { login } from "../actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, {} as { error?: string });
  return (
    <form action={action} className="a-login-form">
      <label className="a-field">
        <span className="a-label">Password</span>
        <input type="password" name="password" required autoFocus autoComplete="current-password" />
      </label>
      {state?.error && <p className="a-err" role="alert">{state.error}</p>}
      <button className="a-btn a-btn-primary" disabled={pending}>{pending ? "Checking…" : "Log in"}</button>
    </form>
  );
}
