import React from 'react'

function ToastItem({ error, onClose }) {
  console.log('ToastItem render', error.id)
  return (
    <div className="toast">
      <span>{error.message}</span>
      <button onClick={() => onClose(error.id)}>X</button>
    </div>
  )
}

export default React.memo(ToastItem)
