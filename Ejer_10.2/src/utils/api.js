let projects = [
{ id: "p1", name: "Proyecto Demo" }
];


let tasks = [
{ id: "t1", projectId: "p1", title: "Tarea inicial", completed: false }
];


export function getProjects() {
return projects;
}


export function getProjectById(id) {
return projects.find(p => p.id === id);
}


export function getTasksByProject(projectId) {
return tasks.filter(t => t.projectId === projectId);
}


export function addProject(name) {
const newProject = { id: Date.now().toString(), name };
projects.push(newProject);
return newProject;
}


export function deleteProject(id) {
projects = projects.filter(p => p.id !== id);
tasks = tasks.filter(t => t.projectId !== id);
}


export function addTask(projectId, title) {
const newTask = { id: Date.now().toString(), projectId, title, completed: false };
tasks.push(newTask);
return newTask;
}


export function toggleTask(id) {
const task = tasks.find(t => t.id === id);
if (task) task.completed = !task.completed;
}


export function deleteTask(id) {
tasks = tasks.filter(t => t.id !== id);
}