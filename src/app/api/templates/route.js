import { prisma } from "../../../lib/prisma.config";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const templates = await prisma.emailTemplate.findMany();
        return NextResponse.json(templates);

    } catch (error) {
        console.error("Error fetching templates:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const { name, subject, body } = await request.json();

        if (!name?.trim() || !subject?.trim() || !body?.trim()) {
            return NextResponse.json(
                { error: "Name, subject, and body cannot be empty or spaces" },
                { status: 400 }
            );
        }

        const template = await prisma.emailTemplate.create({
            data: { name, subject, body },
        });

        return NextResponse.json(template, { status: 201 });
    } catch (error) {
        if (error.code === "P2002") {
            return NextResponse.json(
                { error: "Template name already exists" },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}


export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        await prisma.emailTemplate.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting template:", error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const { id, name, subject, body } = await request.json();

        if (!id) {
            return NextResponse.json({ error: "Template ID is required" }, { status: 400 });
        }

        if (!name?.trim() || !subject?.trim() || !body?.trim()) {
            return NextResponse.json(
                { error: "Name, subject, and body cannot be empty or spaces" },
                { status: 400 }
            );
        }

        const updatedTemplate = await prisma.emailTemplate.update({
            where: { id },
            data: { name, subject, body },
        });

        return NextResponse.json(updatedTemplate);
    } catch (error) {
        console.error("Error updating template:", error);

        if (error.code === "P2002") {
            return NextResponse.json(
                { error: "Template name already exists" },
                { status: 409 }
            );
        }

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

