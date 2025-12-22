import { prisma } from "../../../lib/prisma.config";

export async function GET() {
  try {
    const templatesCount = await prisma.emailTemplate.count();
    const contactsCount = await prisma.contact.count();
    const groupsCount = await prisma.contact.groupBy({
      by: ["group"],
    });

    return Response.json({
      templates: templatesCount,
      contacts: contactsCount,
      groups: groupsCount.length,
    });
  } catch (error) {
    return Response.json({ error: "Failed to load dashboard data" }, { status: 500 });
  }
}
