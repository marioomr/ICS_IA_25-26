import { useParams, useNavigate } from "react-router-dom";
import { TASKS } from "../data/tasks";

export default function TaskDetailPage() {
  const { taskId } = useParams();
  const task = TASKS.find(t => t.id.toString() === taskId);
  const navigate = useNavigate();

  if (!task) return <p>Tarea no encontrada</p>;

  const handleDelete = () => {
    alert("Tarea borrada!");
    navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
}
