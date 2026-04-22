import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isLocale, type Locale } from "@/lib/i18n";

export const dynamic = "force-static";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not set — saving to localStorage fallback");
    return NextResponse.json({ fallback: "config" });
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: "OTOBZ Contact <contact@otobz.com>",
      to: ["contact@otobz.com"],
      subject: `[Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
