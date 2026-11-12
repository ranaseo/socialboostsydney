import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySessionToken } from "./auth";

export async function isAdmin() {
  const c = await cookies();
  return verifySessionToken(c.get(SESSION_COOKIE)?.value);
}

// Call at the top of every admin page and server action (defence in depth,
// on top of middleware.ts).
export async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin/login/");
}
