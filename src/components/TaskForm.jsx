import { useState, useContext } from "react";
import { TaskContext } from '../context/TaskContext';
function TaskForm() {
    const { createTask } = useContext(TaskContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name && !description) return;

        const newTask = {
            name,
            description
        }
        createTask(newTask);
        setName('');
        setDescription('');
    }
    return (
        <form className="form" onSubmit={(e) => {
            handleSubmit(e);
            e.target.reset();
        }}>
            <input type="text" placeholder="Write your task" autoFocus
                onChange={(e) => { setName(e.target.value); }}
            />
            <textarea placeholder="Write a description"
                onChange={(e) => { setDescription(e.target.value) }}
            ></textarea>
            <input type="submit" />
        </form >
    )
}
export default TaskForm;