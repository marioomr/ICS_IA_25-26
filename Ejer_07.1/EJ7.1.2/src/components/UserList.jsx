import React from 'react'
import UserCard from './UserCard'

function UserList({ users }) {
  console.log('UserList render')
  return (
    <div>
      {users.map(u => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  )
}

export default React.memo(UserList)
