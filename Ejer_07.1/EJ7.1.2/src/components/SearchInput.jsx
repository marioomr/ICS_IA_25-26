import React from 'react'

function SearchInput({ search, setSearch }) {
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

export default React.memo(SearchInput)
