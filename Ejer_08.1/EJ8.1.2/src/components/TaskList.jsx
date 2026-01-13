import { useTasks } from "../context/TasksContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks, dispatch } = useTasks();

  return (
    <div style={{ marginTop: "3rem" }}>
      <h2>Lista de Tareas</h2>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} dispatch={dispatch} />
      ))}
    </div>
  );
}
