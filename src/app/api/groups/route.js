import { prisma } from "../../../lib/prisma.config";

export async function GET() {
  try {
    const groups = await prisma.contact.findMany({
      select: { group: true },
    });
    const uniqueGroups = [...new Set(groups.map(g => g.group))];

    return new Response(JSON.stringify(uniqueGroups), { status: 200 });
  } catch (error) {
    console.error("Error fetching groups:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch groups" }),
      { status: 500 }
    );
  }
}
