import React from 'react'

export default function ToastItem({ error, onClose }) {
  console.log('ToastItem render', error.id)
  return (
    <div className="toast">
      <span>{error.message}</span>
      <button onClick={onClose}>X</button>
    </div>
  )
}
