import { WelcomeEmail } from '../../../emails/welcome';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:any) {
  try {
    const body = await request.json();
    const {email, name, message, subject} = body;
    const data = await resend.emails.send({
      from: 'Diana <contact@dianacdev.com>',
      to: email,
      subject: "This is Diana Cervantes, Software Engineer.",
      react: WelcomeEmail({ name:name, subject:subject, message:message}) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}