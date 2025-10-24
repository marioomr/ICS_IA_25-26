import { useState } from "react";
import { proyectos as datosIniciales } from "../datos/proyectos";
import ProjectColumn from "./ProjectColumn";

function Dashboard() {
  const [proyectos, setProyectos] = useState(datosIniciales);

  // Función para actualizar el estado de un proyecto
  const handleActualizarEstado = (proyectoId, nuevoEstado) => {
    const nuevosProyectos = proyectos.map((p) =>
      p.id === proyectoId ? { ...p, estado: nuevoEstado } : p
    );
    setProyectos(nuevosProyectos);
  };

  // Filtrar proyectos según su estado
  const pendientes = proyectos.filter((p) => p.estado === "Pendiente");
  const enProgreso = proyectos.filter((p) => p.estado === "En Progreso");
  const completados = proyectos.filter((p) => p.estado === "Completado");

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Dashboard de Proyectos</h2>

      <div className="row">
        <div className="col-md-4">
          <ProjectColumn
            titulo="Pendiente"
            proyectos={pendientes}
            onActualizarEstado={handleActualizarEstado}
          />
        </div>
        <div className="col-md-4">
          <ProjectColumn
            titulo="En Progreso"
            proyectos={enProgreso}
            onActualizarEstado={handleActualizarEstado}
          />
        </div>
        <div className="col-md-4">
          <ProjectColumn
            titulo="Completado"
            proyectos={completados}
            onActualizarEstado={handleActualizarEstado}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
