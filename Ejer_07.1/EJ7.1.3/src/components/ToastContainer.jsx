import React from 'react'
import ToastItem from './ToastItem'

export default function ToastContainer({ errors, onClose }) {
  console.log('ToastContainer render')
  return (
    <div>
      {errors.map(e => (
        <ToastItem key={e.id} error={e} onClose={() => onClose(e.id)} />
      ))}
    </div>
  )
}
