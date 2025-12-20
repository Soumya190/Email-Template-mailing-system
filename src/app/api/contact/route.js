// src/app/api/contact/route.js
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany();
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const contact = await prisma.contact.create({
      data: {
        name: body.name,
        email: body.email,
        group: body.group,
      },
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create contact" },
      { status: 500 }
    );
  }
}
