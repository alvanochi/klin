import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { to, subject, text } = await req.json();

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: '"Next.js Project" <no-reply@example.com>',
      to,
      subject,
      text,
    });

    return NextResponse.json({
      message: "Email terkirim!",
      previewUrl: nodemailer.getTestMessageUrl(info),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal kirim email" }, { status: 500 });
  }
}
