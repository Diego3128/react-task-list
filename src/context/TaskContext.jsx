import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(task) {
        setTasks([...tasks, {
            id: tasks.length,
            name: task.name || 'No name',
            description: task.description || 'No description'
        }]);
    }
    function deleteTask(taskId) {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    );
}