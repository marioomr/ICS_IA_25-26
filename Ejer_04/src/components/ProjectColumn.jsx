import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectColumn({ titulo, proyectos, onActualizarEstado }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white text-center">
        {titulo}
      </div>
      <div className="card-body">
        {proyectos.length === 0 ? (
          <p className="text-muted text-center">Sin proyectos</p>
        ) : (
          proyectos.map((proyecto) => (
            <ProjectCard
              key={proyecto.id}
              proyecto={proyecto}
              onActualizarEstado={onActualizarEstado}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProjectColumn;
