import { prisma } from "../../../lib/prisma";



export async function GET(request) {
    try {
        const templates = await prisma.EmailTemplate.findMany();
        return new Response(JSON.stringify({ success: true, templates }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching templates:", error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { name, subject, body } = await request.json();
        const newTemplate = await prisma.EmailTemplate.create({
            data: { name, subject, body },
        });
        return new Response(JSON.stringify({ success: true, templates:newTemplate }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error creating template:", error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = parseInt(searchParams.get("id"));
        await prisma.template.delete({
            where: { id },
        });
        return Response.json({ success: true, message: "Template deleted successfully" });
    } catch (error) {
        console.error("Error deleting template:", error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}


export async function PUT(request) {
    try {
        const { id, name, subject, body } = await request.json();
        const updatedTemplate = await prisma.template.update({
            where: { id },
            data: { name, subject, body },
        });
        return Response.json({ success: true, template: updatedTemplate });
    } catch (error) {
        console.error("Error updating template:", error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}