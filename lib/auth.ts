// Admin session: a signed, httpOnly cookie. Works in middleware (edge) and
// in server actions (Node), using Web Crypto only.
// Set ADMIN_PASSWORD and AUTH_SECRET in your environment (Vercel → Settings → Environment Variables).

export const SESSION_COOKIE = "sbs_admin";
export const SESSION_DAYS = 7;

const enc = new TextEncoder();

function secret() {
  return process.env.AUTH_SECRET || process.env.ADMIN_PASSWORD || "";
}

async function hmac(data: string) {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret()), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export const adminConfigured = () => !!process.env.ADMIN_PASSWORD;

export async function checkPassword(input: string) {
  const pw = process.env.ADMIN_PASSWORD || "";
  if (!pw) return false;
  // Compare HMACs so timing does not leak the password length or content.
  return safeEqual(await hmac(`pw:${input}`), await hmac(`pw:${pw}`));
}

export async function createSessionToken() {
  const exp = Date.now() + SESSION_DAYS * 864e5;
  const payload = `admin.${exp}`;
  return `${payload}.${await hmac(payload)}`;
}

export async function verifySessionToken(token?: string | null) {
  if (!token || !secret() || !adminConfigured()) return false;
  const i = token.lastIndexOf(".");
  if (i < 0) return false;
  const payload = token.slice(0, i);
  const sig = token.slice(i + 1);
  const exp = Number(payload.split(".")[1]);
  if (!exp || exp < Date.now()) return false;
  return safeEqual(sig, await hmac(payload));
}
