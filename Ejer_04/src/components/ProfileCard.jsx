import React from "react";

function ProfileCard({ usuario }) {
  const { nombre, email, avatarUrl, direccion, aficiones } = usuario;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img
            src={avatarUrl}
            alt={nombre}
            className="rounded-circle me-3"
            width="80"
            height="80"
          />
          <div>
            <h4 className="mb-0">{nombre}</h4>
            <small className="text-muted">{email}</small>
          </div>
        </div>

        <h6 className="text-secondary">Información de Contacto</h6>
        <p className="mb-1">
          <strong>Calle:</strong> {direccion.calle}
        </p>
        <p className="mb-3">
          <strong>Ciudad:</strong> {direccion.ciudad}
        </p>

        <h6 className="text-secondary">Aficiones</h6>
        <div>
          {aficiones.map((aficion, index) => (
            <span
              key={index}
              className="badge bg-primary me-2 mb-2"
              style={{ fontSize: "0.85rem" }}
            >
              {aficion}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
