import React, { useState } from 'react'
import SearchInput from './components/SearchInput'
import UserList from './components/UserList'
import './App.css'

function generateUsers(n = 10000) {
  const users = []
  for (let i = 0; i < n; i++) {
    users.push({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
    })
  }
  return users
}

export default function App() {
  const [search, setSearch] = useState('')
  const users = generateUsers(10000) // sin optimizar aún

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Filtro de usuarios</h1>
      <SearchInput search={search} setSearch={setSearch} />
      <UserList users={filtered} />
    </div>
  )
}
