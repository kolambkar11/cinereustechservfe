import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, company, email, phone, industry, message } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kolambkarashutosh@gmail.com",
      subject: "Hello World",

      html: `
        <h2>New Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Industry:</strong> ${industry}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
