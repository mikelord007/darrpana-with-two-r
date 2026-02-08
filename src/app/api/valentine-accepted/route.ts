import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const MY_EMAIL = process.env.MY_EMAIL;
const VALENTINE_EMAIL = process.env.VALENTINE_EMAIL;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

export async function POST() {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return NextResponse.json(
      { error: "GMAIL_USER and GMAIL_APP_PASSWORD must be set in .env" },
      { status: 500 }
    );
  }

  if (!MY_EMAIL) {
    return NextResponse.json(
      { error: "MY_EMAIL is not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const from = `Valentine <${GMAIL_USER}>`;

  try {
    await transporter.sendMail({
      from,
      to: MY_EMAIL,
      subject: "She said yes! 💕",
      text: "Darrpana has accepted my valentine.",
    });

    if (VALENTINE_EMAIL) {
      await transporter.sendMail({
        from,
        to: VALENTINE_EMAIL,
        subject: "Thank you 💖",
        text: "Thank you for accepting to be my valentine. 💕",
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Valentine email error:", err);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
