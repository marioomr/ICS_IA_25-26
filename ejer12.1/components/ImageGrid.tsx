import ImageCard from "./ImageCard"

interface ImageType {
  _id: string
  imageUrl: string
  tags: string[]
}

interface Props {
  images: ImageType[]
}

export default function ImageGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <ImageCard
          key={image._id}
          imageUrl={image.imageUrl}
          tags={image.tags}
        />
      ))}
    </div>
  )
}