import React from 'react'
import IconoOnline from './IconoOnline'

function Avatar({ user }) {
  console.log('Avatar render', user.id)
  return (
    <div className="avatar">
      <img src={user.avatar} alt={user.name} width={32} height={32} />
      <IconoOnline isOnline={user.isOnline} />
    </div>
  )
}

export default React.memo(Avatar)
