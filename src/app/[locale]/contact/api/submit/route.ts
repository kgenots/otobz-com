import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }

  // No Resend API key — open mailto: directly
  const subjectEncoded = encodeURIComponent(subject);
  const bodyEncoded = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  return NextResponse.json({ mailto: `mailto:contact@otobz.com?subject=${subjectEncoded}&body=${bodyEncoded}` });
}
