"use client"

import { useState } from "react"

interface Props {
  onUpload: () => void
}

export default function UploadForm({ onUpload }: Props) {
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!image) return

    setLoading(true)

    const formData = new FormData()
    formData.append("image", image)

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })

    setImage(null)
    setLoading(false)
    onUpload()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow flex flex-col gap-4"
    >
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            setImage(e.target.files[0])
          }
        }}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white p-2 rounded hover:bg-gray-800"
      >
        {loading ? "Subiendo..." : "Subir imagen"}
      </button>
    </form>
  )
}