import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import HomePage from "./routes/HomePage";
import ProjectsPage, { projectsLoader } from "./routes/ProjectsPage";
import ProjectDetailsPage, { projectDetailsLoader, projectAction } from "./routes/ProjectDetailsPage";
import NewProjectPage, { newProjectAction } from "./routes/NewProjectPage";
import NewTaskPage, { newTaskAction } from "./routes/NewTaskPage";
import "./index.css";


const router = createBrowserRouter([
{
path: "/",
element: <RootLayout />,
children: [
{ index: true, element: <HomePage /> },
{
path: "projects",
element: <ProjectsPage />,
loader: projectsLoader
},
{
path: "projects/new",
element: <NewProjectPage />,
action: newProjectAction
},
{
path: "projects/:projectId",
element: <ProjectDetailsPage />,
loader: projectDetailsLoader,
action: projectAction
},
{
path: "projects/:projectId/new-task",
element: <NewTaskPage />,
action: newTaskAction
}
]
}
]);


ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);