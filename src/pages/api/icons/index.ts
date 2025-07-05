import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const icons = await db.icon.findMany({
      select: {
        id: true,
        name: true,
        category: true,
        tags: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return res.status(200).json({
      success: true,
      data: icons,
      count: icons.length,
    });
  } catch (error) {
    console.error("Error fetching icons:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
