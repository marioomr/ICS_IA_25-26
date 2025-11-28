import React from 'react'

function PuntitoVerde({ isOnline }) {
  console.log('PuntitoVerde render')
  const style = {
    display: 'inline-block',
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: isOnline ? 'green' : 'red',
  }
  return <div style={style}></div>
}

export default React.memo(PuntitoVerde)
