import { NextResponse } from "next/server";
import { readStoredContent } from "@/lib/getContent";
import { isAdmin } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const c = await readStoredContent();
  const date = new Date().toISOString().slice(0, 10);
  return new NextResponse(JSON.stringify(c, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="socialboostsydney-content-${date}.json"`,
    },
  });
}
