// app/api/send/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_5Up9jKtg_8rEVkqfcvVdeAQ4B1a7sdbdj');

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Will use your domain later
      to: 'danielabudiara18@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}