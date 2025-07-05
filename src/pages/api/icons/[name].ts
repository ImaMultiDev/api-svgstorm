import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name } = req.query;

  if (!name || typeof name !== "string") {
    return res.status(400).json({
      success: false,
      message: "Icon name is required",
    });
  }

  try {
    const icon = await db.icon.findUnique({
      where: {
        name: name,
      },
    });

    if (!icon) {
      return res.status(404).json({
        success: false,
        message: "Icon not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: icon,
    });
  } catch (error) {
    console.error("Error fetching icon:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
