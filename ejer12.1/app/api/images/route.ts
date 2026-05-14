import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const query = searchParams.get("query") || ""

  const filters = query
    .split(",")
    .map((term) => term.trim().toLowerCase())
    .filter(Boolean)

  const db = await connectDB()

  let images

  if (filters.length > 0) {
    images = await db
      .collection("images")
      .find({
        tags: {
          $all: filters,
        },
      })
      .toArray()
  } else {
    images = await db.collection("images").find().toArray()
  }

  return NextResponse.json(images)
}