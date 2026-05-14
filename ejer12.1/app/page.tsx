"use client"

import { useEffect, useState } from "react"
import UploadForm from "@/components/UploadForm"
import SearchBar from "@/components/SearchBar"
import ImageGrid from "@/components/ImageGrid"

interface ImageType {
  _id: string
  imageUrl: string
  tags: string[]
}

export default function Home() {
  const [images, setImages] = useState<ImageType[]>([])
  const [search, setSearch] = useState("")

  const loadImages = async () => {
    const res = await fetch(`/api/images?query=${search}`)
    const data = await res.json()
    setImages(data)
  }

  useEffect(() => {
    loadImages()
  }, [search])

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center">
          Gestor de imágenes IA
        </h1>

        <UploadForm onUpload={loadImages} />

}