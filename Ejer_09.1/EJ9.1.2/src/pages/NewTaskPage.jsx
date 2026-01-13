import { useNavigate } from "react-router-dom";

export default function NewTaskPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí simularías guardar la tarea...
    alert("Tarea guardada!");
    navigate("/dashboard"); // redirige a la lista
  };

  return (
    <div>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea required></textarea>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
