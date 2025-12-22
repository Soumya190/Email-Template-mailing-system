import { prisma } from "../../../lib/prisma.config";
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { templateId, group } = await req.json();

    if (!templateId || !group) {
      return NextResponse.json(
        { error: "Template and group required" },
        { status: 400 }
      );
    }

    const template = await prisma.emailTemplate.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    const contacts = await prisma.contact.findMany({
      where: { group },
      select: { email: true, name: true },
    });

    if (contacts.length === 0) {
      return NextResponse.json(
        { error: "No contacts in this group" },
        { status: 404 }
      );
    }

    const messages = contacts.map((c) => ({
      to: c.email,
      from: {
        email: "soumyatiwari7866@gmail.com",
        name: "Email API Integration & Template Management System",
      },
      subject: template.subject.replace("{{name}}", c.name),
      text: template.body.replace(/<[^>]+>/g, ""),
      html: template.body.replace("{{name}}", c.name),
    }));

    await sgMail.send(messages);
    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send emails" },
      { status: 500 }
    );
  }
}
