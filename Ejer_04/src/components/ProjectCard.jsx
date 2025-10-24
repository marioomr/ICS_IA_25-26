import React from "react";
import TeamMemberList from "./TeamMemberList";

function ProjectCard({ proyecto, onActualizarEstado }) {
  const { id, titulo, descripcion, estado, prioridad, responsables } = proyecto;

  // Colores según prioridad
  const getPrioridadBadge = (nivel) => {
    const colores = {
      Alta: "danger",
      Media: "warning",
      Baja: "success",
    };
    return <span className={`badge bg-${colores[nivel]} float-end`}>{nivel}</span>;
  };

  // Estados disponibles para mover
  const estadosDisponibles = ["Pendiente", "En Progreso", "Completado"].filter(
    (e) => e !== estado
  );

  return (
    <div className="card mb-3 border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          {titulo} {getPrioridadBadge(prioridad)}
        </h5>
        <p className="card-text">{descripcion}</p>

        <h6 className="text-muted">Responsables:</h6>
        <TeamMemberList responsables={responsables} />

        <div className="mt-3">
          <select
            className="form-select"
            value={estado}
            onChange={(e) => onActualizarEstado(id, e.target.value)}
          >
            <option value={estado}>Mover a...</option>
            {estadosDisponibles.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
