import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_TO, contactSchema } from "@/lib/contact";

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Client will fall back to FormSubmit when Resend is not configured.
    return NextResponse.json({ fallback: "formsubmit" }, { status: 501 });
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Northridge Advisory <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Northridge Advisory — inquiry from ${name}`,
      text: [
        `New inquiry from the Northridge Advisory site`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Unable to send right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: "Unable to send right now. Please try again." },
      { status: 502 }
    );
  }
}
