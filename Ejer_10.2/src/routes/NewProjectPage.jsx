import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { addProject } from "../utils/api";


export function newProjectAction({ request }) {
return request.formData().then(data => {
const name = data.get("name");
if (!name || name.trim().length < 5) {
return { error: "El nombre debe tener al menos 5 caracteres" };
}
addProject(name);
return redirect("/projects");
});
}


export default function NewProjectPage() {
const actionData = useActionData();
const navigation = useNavigation();


return (
<Form method="post">
<h2>Nuevo Proyecto</h2>
<input type="text" name="name" />
{actionData && <p>{actionData.error}</p>}
<button disabled={navigation.state === "submitting"}>
{navigation.state === "submitting" ? "Guardando Proyecto..." : "Guardar"}
</button>
</Form>
);
}