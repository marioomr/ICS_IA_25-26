import { useFetcher, useSubmit } from "react-router-dom";


export default function TaskList({ tasks }) {
const fetcher = useFetcher();
const submit = useSubmit();


function toggleTask(id) {
fetcher.submit({ taskId: id }, { method: "patch" });
}


function deleteTask(id) {
if (window.confirm("¿Eliminar tarea?")) {
submit({ taskId: id }, { method: "delete" });
}
}


return (
<ul>
{tasks.map(task => (
<li key={task.id}>
<input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
{task.title}
<button onClick={() => deleteTask(task.id)}>Eliminar</button>
</li>
))}
</ul>
);
}