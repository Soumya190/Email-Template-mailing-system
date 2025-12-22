import { prisma } from "../../../lib/prisma.config";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const groups = await prisma.contact.findMany({
      where: { group: { not: null } },
      select: { group: true },
      distinct: ["group"]
    });

    const groupNames = groups.map(g => g.group);

    return new Response(JSON.stringify(groupNames), { status: 200 });
  } catch (error) {
    console.error("Error fetching groups:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch groups" }), { status: 500 });
  }
}
