import { useLoaderData, Link } from "react-router-dom";
import { getProjects } from "../utils/api";
import ProjectList from "../components/ProjectList";


export function projectsLoader() {
return getProjects();
}


export default function ProjectsPage() {
const projects = useLoaderData();


return (
<>
<h2>Proyectos</h2>
<Link to="/projects/new">Nuevo Proyecto</Link>
<ProjectList projects={projects} />
</>
);
}