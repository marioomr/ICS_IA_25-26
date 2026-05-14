interface Props {
  imageUrl: string
  tags: string[]
}

export default function ImageCard({ imageUrl, tags }: Props) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img
        src={imageUrl}
        alt="Imagen"
        className="w-full h-64 object-cover"
      />

      <div className="p-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}