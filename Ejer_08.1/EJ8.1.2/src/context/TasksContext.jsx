import { createContext, useReducer, useContext } from "react";
import { tasksReducer } from "../reducer/tasksReducer";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const initialTasks = [
    { id: 1, text: "Aprender React", author: "Ana", completed: false },
    { id: 2, text: "Repasar JS", author: "Luis", completed: false },
    { id: 3, text: "Hacer examen", author: "Ana", completed: true },
  ];

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
