import React from 'react';

function ResumenTareas({ tareas = [], total = 0 }) {
  const lista = Array.isArray(tareas) ? tareas : [];

  if (lista.length === 0) {
    return <p>No hay tareas para este filtro.</p>;
  }

  const todasCompletadas = lista.every(t => t.completada);

  if (todasCompletadas) {
    return <p>¡Felicidades! Has completado todas las tareas de esta sección.</p>;
  }

  return <p>Mostrando {lista.length} de {total} tareas.</p>;
}

export default ResumenTareas;
