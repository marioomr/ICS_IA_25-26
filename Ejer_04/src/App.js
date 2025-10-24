import { useState } from "react";
import { usuarios } from "./datos/usuarios";
import UserList from "./components/UserList";
import ProfileCard from "./components/ProfileCard";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

function App() {
  // Estado principal del ejercicio 1
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState(null);
  const [filtro, setFiltro] = useState("");

  // Estado de vista actual (usuarios o proyectos)
  const [vista, setVista] = useState("usuarios");

  // Filtrar usuarios por nombre según el texto en SearchBar
  const usuariosFiltrados = usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  // Buscar usuario seleccionado
  const usuarioSeleccionado = usuarios.find(
    (u) => u.id === usuarioSeleccionadoId
  );

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        {vista === "usuarios"
          ? "Gestor de Perfiles de Usuario"
          : "Dashboard de Proyectos"}
      </h2>

      {/* Botones para cambiar de vista */}
      <div className="text-center mb-4">
        <button
          className={`btn btn-sm me-2 ${
            vista === "usuarios" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setVista("usuarios")}
        >
          Usuarios
        </button>
        <button
          className={`btn btn-sm ${
            vista === "proyectos" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setVista("proyectos")}
        >
          Proyectos
        </button>
      </div>

      {vista === "usuarios" ? (
        <div className="row">
          {/* Columna izquierda: lista + buscador */}
          <div className="col-md-4">
            <SearchBar filtro={filtro} setFiltro={setFiltro} />
            <UserList
              usuarios={usuariosFiltrados}
              onSeleccionarUsuario={setUsuarioSeleccionadoId}
              usuarioSeleccionadoId={usuarioSeleccionadoId}
            />
          </div>

          {/* Columna derecha: perfil */}
          <div className="col-md-8">
            {usuarioSeleccionado ? (
              <ProfileCard usuario={usuarioSeleccionado} />
            ) : (
              <div className="alert alert-info">
                Selecciona un usuario para ver los detalles.
              </div>
            )}
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
