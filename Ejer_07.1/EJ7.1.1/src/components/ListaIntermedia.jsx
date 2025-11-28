import React from 'react'
import TarjetaUsuario from './TarjetaUsuario'

function ListaIntermedia({ users }) {
  console.log('ListaIntermedia render')
  return (
    <div>
      {users.map(user => (
        <TarjetaUsuario key={user.id} user={user} />
      ))}
    </div>
  )
}

export default React.memo(ListaIntermedia)
