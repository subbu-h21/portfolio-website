import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  honeypot: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Bot check
    if (data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? "subramanyah65@gmail.com";

    if (!apiKey) {
      console.warn("RESEND_API_KEY not set — skipping email send");
      return NextResponse.json({ ok: true, note: "Email not configured" });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: data.email,
      subject: `New message from ${data.name} via portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Portfolio Contact</h2>
          <p><strong>From:</strong> ${data.name} (${data.email})</p>
          <hr style="border: 1px solid #eee;" />
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
