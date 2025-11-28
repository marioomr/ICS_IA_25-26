import React from 'react'
import PuntitoVerde from './PuntitoVerde'

function IconoOnline({ isOnline }) {
  console.log('IconoOnline render')
  return <PuntitoVerde isOnline={isOnline} />
}

export default React.memo(IconoOnline)
