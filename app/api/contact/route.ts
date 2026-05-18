import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate incoming data
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid form data",
          details: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { name, company, email, phone, industry, message } = result.data;

    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: "kolambkarashutosh@gmail.com",
      subject: `New Inquiry from ${name}`,

      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Industry:</strong> ${industry || "-"}</p>

          <h3>Message</h3>

          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
