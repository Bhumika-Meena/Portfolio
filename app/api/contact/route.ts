import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const toAddress = process.env.CONTACT_TO_EMAIL;

    if (!toAddress) {
      return NextResponse.json(
        { error: "Contact email not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Portfolio Terminal <no-reply@resend.dev>",
      to: toAddress,
      subject: `New message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message
      ].join("\n")
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
