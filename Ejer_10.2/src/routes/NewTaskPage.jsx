import { Form, redirect, useActionData } from "react-router-dom";
import { addTask } from "../utils/api";


export function newTaskAction({ request, params }) {
return request.formData().then(data => {
const title = data.get("title");
if (!title || title.trim() === "") {
return { error: "El título es obligatorio" };
}
addTask(params.projectId, title);
return redirect(`/projects/${params.projectId}`);
});
}


export default function NewTaskPage() {
const actionData = useActionData();


return (
<Form method="post">
<h2>Nueva Tarea</h2>
<input type="text" name="title" />
{actionData && <p>{actionData.error}</p>}
<button>Agregar</button>
</Form>
);
}