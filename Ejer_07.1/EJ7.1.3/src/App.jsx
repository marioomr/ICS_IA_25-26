import React, { useState, useCallback } from 'react'
import ToastContainer from './components/ToastContainer'

export default function App() {
  const [errors, setErrors] = useState([])

  const addError = () => {
    const id = Date.now()
    setErrors(prev => [...prev, { id, message: 'Error aleatorio' }])
  }

  const clearAll = () => setErrors([])

  // useCallback para pasar función estable a los ToastItem
  const removeError = useCallback(
    id => setErrors(prev => prev.filter(e => e.id !== id)),
    []
  )

  return (
    <div>
      <h1>Toast de errores</h1>
      <button onClick={addError}>Agregar error</button>
      <button onClick={clearAll}>Limpiar todos</button>
      <ToastContainer errors={errors} onClose={removeError} />
    </div>
  )
}
