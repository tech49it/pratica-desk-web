import { NextResponse } from "next/server";

export const runtime = "edge";

interface DemoPayload {
  name?: string;
  firm?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: DemoPayload;
  try {
    data = (await request.json()) as DemoPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = data.name?.trim();
  const firm = data.firm?.trim();
  const email = data.email?.trim();

  if (!name || !firm || !email) {
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
  //   const hook = process.env.DEMO_WEBHOOK_URL;
  //   if (hook) await fetch(hook, { method: "POST", body: JSON.stringify(data) });
  console.log("[demo request]", { name, firm, email });

  return NextResponse.json({ ok: true }, { status: 200 });
}
