import { adminConfigured } from "@/lib/auth";
import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <div className="a-login">
      <div className="a-login-box">
        <img src="/brand/logo-horizontal-primary.svg" alt="Social Boost Sydney" width={190} height={67} />
        <h1>Admin login</h1>
        {!adminConfigured() && (
          <p className="a-note warn">
            Admin is not set up yet. In Vercel → Project → Settings → Environment Variables add <code>ADMIN_PASSWORD</code> and{" "}
            <code>AUTH_SECRET</code>, then redeploy.
          </p>
        )}
        <LoginForm />
        <a href="/" className="a-back">← Back to website</a>
      </div>
    </div>
  );
}
