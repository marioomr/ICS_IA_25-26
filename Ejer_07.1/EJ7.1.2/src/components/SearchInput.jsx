import React from 'react'

export default function SearchInput({ search, setSearch }) {
  console.log('SearchInput render')
  return (
    <input
      type="text"
      placeholder="Buscar usuario..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  )
}
