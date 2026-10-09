import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, message, website } = payload as Record<string, unknown>;

  if (typeof website === "string" && website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const safeName = name.replace(/[\r\n]/g, " ").trim();
  const safeEmail = email.trim();
  const safeMessage = message.trim();

  if (
    !safeName ||
    safeName.length > 100 ||
    safeEmail.length > 254 ||
    !EMAIL_PATTERN.test(safeEmail) ||
    safeMessage.length < 10 ||
    safeMessage.length > 4000
  ) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Contact service is not configured" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: process.env.CONTACT_EMAIL ?? "armandoanchundiayela@gmail.com",
    replyTo: safeEmail,
    subject: `Portfolio contact from ${safeName}`,
    text: `Name: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`,
  });

  if (error) {
    console.error("Resend contact email failed:", error);
    return NextResponse.json(
      { error: "Could not send message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
