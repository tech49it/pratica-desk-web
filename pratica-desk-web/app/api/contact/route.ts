import { NextResponse } from "next/server";

export const runtime = "edge";

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  role?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = data.name?.trim();
  const company = data.company?.trim();
  const email = data.email?.trim();
  const role = data.role?.trim();
  const message = data.message?.trim();

  if (!name || !company || !email) {
    return NextResponse.json(
      { error: "Name, firm, and email are required." },
      { status: 422 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 422 });
  }

  // TODO: wire to your CRM / email provider (Resend, HubSpot, Slack webhook…).
  // Read the destination from an environment variable so nothing is hard-coded:
  //   const hook = process.env.CONTACT_WEBHOOK_URL;
  //   if (hook) await fetch(hook, { method: "POST", body: JSON.stringify(data) });
  console.log("[contact request]", { name, company, email, role, message });

  return NextResponse.json({ ok: true }, { status: 200 });
}
