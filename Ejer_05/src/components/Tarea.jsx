import React from 'react';

function Tarea({ tarea, toggleCompletada }) {
  const prioridadColor = {
    alta: 'border-danger',
    media: 'border-warning',
    baja: 'border-success',
  };

  return (
    <div
      className={`card mb-2 border-start ${prioridadColor[tarea.prioridad]} border-4`}
      style={{
        backgroundColor: tarea.completada ? '#f8f9fa' : 'white',
        textDecoration: tarea.completada ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={() => toggleCompletada(tarea.id)}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <span>{tarea.texto}</span>
        <span className="badge bg-secondary text-capitalize">{tarea.prioridad}</span>
      </div>
    </div>
  );
}

export default Tarea;
