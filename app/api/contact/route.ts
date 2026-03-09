import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const toAddress = process.env.CONTACT_TO_EMAIL;

    if (!toAddress) {
      return NextResponse.json(
        { error: "Contact email not configured" },
        { status: 500 }
      );
    }

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
