import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { s3 } from "@/lib/s3"
import { groq } from "@/lib/groq"
import { connectDB } from "@/lib/mongodb"
import mime from "mime-types"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get("image") as File

    if (!file) {
      return NextResponse.json(
        { error: "No se ha enviado ninguna imagen" },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const extension = mime.extension(file.type)
    const fileName = `${uuidv4()}.${extension}`

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      })
    )

    const imageUrl = `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${fileName}`
}