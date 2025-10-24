import React from "react";

function TeamMemberList({ responsables }) {
  return (
    <div className="mb-2">
      {responsables.map((r) => (
        <span
          key={r.id}
          className="badge bg-info text-dark me-2 mb-1"
          style={{ fontSize: "0.85rem" }}
        >
          {r.nombre}
        </span>
      ))}
    </div>
  );
}

export default TeamMemberList;
