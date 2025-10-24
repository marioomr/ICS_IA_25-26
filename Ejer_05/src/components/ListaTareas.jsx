import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, toggleCompletada }) {
  if (tareas.length === 0) {
    return <p className="text-center text-muted">No hay tareas para este filtro.</p>;
  }

  return (
    <div>
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} toggleCompletada={toggleCompletada} />
      ))}
    </div>
  );
}

export default ListaTareas;
