"use client"

interface Props {
  search: string
  setSearch: (value: string) => void
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Buscar por ejemplo: perro,coche,persona"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border p-3 rounded-xl"
    />
  )
}