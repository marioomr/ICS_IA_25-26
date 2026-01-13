import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";
import UserInfo from "./components/UserInfo";
import TaskList from "./components/TaskList";
import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <UserInfo />
        <TaskList />
      </TasksProvider>
    </AuthProvider>
  );
}
