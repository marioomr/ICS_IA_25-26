import React from "react";
import { useAuth } from "../context/AuthContext";

function TaskItem({ task, dispatch }) {
  const { currentUser } = useAuth();
  const canEdit = task.author === currentUser && currentUser !== "Invitado";

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <input
        type="checkbox"
        checked={task.completed}
        disabled={!canEdit}
        onChange={() => dispatch({ type: "TOGGLE", payload: task.id })}
      />
      {task.text} ({task.author})
      <button disabled={!canEdit} onClick={() => dispatch({ type: "REMOVE", payload: task.id })}>
        Eliminar
      </button>
    </div>
  );
}

export default React.memo(TaskItem);
