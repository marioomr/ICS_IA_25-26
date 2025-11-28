import React from 'react'
import ToastItem from './ToastItem'

function ToastContainer({ errors, onClose }) {
  console.log('ToastContainer render')
  return (
    <div>
      {errors.map(e => (
        <ToastItem key={e.id} error={e} onClose={onClose} />
      ))}
    </div>
  )
}

export default React.memo(ToastContainer)
