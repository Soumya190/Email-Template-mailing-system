import { prisma } from "../../../lib/prisma";

export async function GET() {
    try {
        const templates = await prisma.emailTemplate.findMany();
        return Response.json(templates);
    } catch (error) {
        console.error("Error fetching templates:", error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const { name, subject, body } = await request.json();

        const template = await prisma.emailTemplate.create({
            data: { name, subject, body },
        });

        return Response.json(template);
    } catch (error) {
        console.error("Error creating template:", error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id"); 

        // if (!id) {
        //     return Response.json(
        //         { error: "Template ID is required" },
        //         { status: 400 }
        //     );
        // }

        await prisma.emailTemplate.delete({
            where: { id },
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Error deleting template:", error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const { id, name, subject, body } = await request.json();

        const updatedTemplate = await prisma.emailTemplate.update({
            where: { id },
            data: { name, subject, body },
        });

        return Response.json(updatedTemplate);
    } catch (error) {
        console.error("Error updating template:", error);
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
