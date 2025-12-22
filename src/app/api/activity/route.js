import { prisma } from "../../../lib/prisma.config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const activities = await prisma.activity.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    return NextResponse.json(activities);
  } catch (error) {
    console.error("Activity fetch error:", error);
    return NextResponse.json([], { status: 200 });
  }
}
