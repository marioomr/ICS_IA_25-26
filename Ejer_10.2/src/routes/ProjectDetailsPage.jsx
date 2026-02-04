import { useLoaderData, Link, redirect, useSubmit } from "react-router-dom";
import { getProjectById, getTasksByProject, toggleTask, deleteTask, deleteProject } from "../utils/api";
import TaskList from "../components/TaskList";


export function projectDetailsLoader({ params }) {
const project = getProjectById(params.projectId);
const tasks = getTasksByProject(params.projectId);
return { project, tasks };
}


export function projectAction({ request, params }) {
if (request.method === "PATCH") {
return request.formData().then(data => {
toggleTask(data.get("taskId"));
return null;
});
}


if (request.method === "DELETE") {
return request.formData().then(data => {
const taskId = data.get("taskId");
if (taskId) {
deleteTask(taskId);
return null;
}
deleteProject(params.projectId);
return redirect("/projects");
});
}
}


export default function ProjectDetailsPage() {
const { project, tasks } = useLoaderData();
const submit = useSubmit();


function deleteHandler() {
if (window.confirm("¿Eliminar proyecto?")) {
submit(null, { method: "delete" });
}
}


return (
<>
<h2>{project.name}</h2>
<button onClick={deleteHandler}>Eliminar Proyecto</button>
<Link to={`new-task`}>Nueva Tarea</Link>
<TaskList tasks={tasks} />
</>
);
}