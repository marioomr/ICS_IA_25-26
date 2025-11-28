import React from 'react'

export default function UserCard({ user }) {
  console.log('UserCard render', user.id)
  return (
    <div className="user-card">
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  )
}
