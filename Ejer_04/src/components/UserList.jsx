import React from "react";

function UserList({ usuarios, onSeleccionarUsuario, usuarioSeleccionadoId }) {
  return (
    <div className="card">
      <div className="card-header bg-dark text-white">Lista de Usuarios</div>
      <ul className="list-group list-group-flush">
        {usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <li
              key={usuario.id}
              className={`list-group-item list-group-item-action ${
                usuarioSeleccionadoId === usuario.id ? "active" : ""
              }`}
              onClick={() => onSeleccionarUsuario(usuario.id)}
              style={{ cursor: "pointer" }}
            >
              {usuario.nombre}
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted text-center">
            No se encontraron usuarios
          </li>
        )}
      </ul>
    </div>
  );
}

export default UserList;
