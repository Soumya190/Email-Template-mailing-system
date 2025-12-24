import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma.config";

export async function GET() {
  try {
    const contacts = await prisma.Contact.findMany();
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

    const contact = await prisma.Contact.create({
      data: {
        name: body.name,
        email: body.email,
        group:body.group?.toLowerCase(),
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

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Contact ID is required" },
        { status: 400 }
      );
    }

    await prisma.contact.delete({
      where: {
        id: String(id),
      },
    });

    return NextResponse.json({ message: "Contact deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}