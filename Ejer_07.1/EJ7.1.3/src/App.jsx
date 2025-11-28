
import React, { useState } from 'react'
import ToastContainer from './components/ToastContainer'

export default function App() {
  const [errors, setErrors] = useState([])

  const addError = () => {
    const id = Date.now()
    setErrors([...errors, { id, message: 'Error aleatorio' }])
  }

  const clearAll = () => setErrors([])

  return (
    <div>
      <h1>Toast de errores</h1>
      <button onClick={addError}>Agregar error</button>
      <button onClick={clearAll}>Limpiar todos</button>
      <ToastContainer
        errors={errors}
        onClose={id => setErrors(errors.filter(e => e.id !== id))}
      />
    </div>
  )
}
