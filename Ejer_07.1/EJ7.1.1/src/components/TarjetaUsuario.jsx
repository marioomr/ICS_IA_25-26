import React from 'react'
import Avatar from './Avatar'

function TarjetaUsuario({ user }) {
  console.log('TarjetaUsuario render', user.id)
  return (
    <div className="tarjeta">
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <Avatar user={user} />
    </div>
  )
}

export default React.memo(TarjetaUsuario)
