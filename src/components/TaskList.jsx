import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from '../context/TaskContext';

function TaskList() {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return (
            <div className="tasks-container">
                <h1>No data</h1>
            </div>
        )
    }

    return (
        <div className="tasks-container">

            {tasks.map(task => (
                <TaskCard task={task} key={task.id} />
            ))}

        </div>
    );
}

export default TaskList;
