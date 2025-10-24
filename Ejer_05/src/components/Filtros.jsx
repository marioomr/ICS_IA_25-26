import React from 'react';

function Filtros({ filtro = 'Todas', setFiltro }) {
  const prioridades = ['Todas', 'Alta', 'Media', 'Baja'];

  return (
    <div className="mb-3 d-flex gap-2">
      {prioridades.map((p) => (
        <button
          key={p}
          className={`btn ${filtro === p ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFiltro(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
