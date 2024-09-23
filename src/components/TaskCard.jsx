import { useContext } from "react";
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);
    return (
        <div className="task">
            <h2 className="task__name">{task.name}</h2>
            <p className="task__desc">{task.description}</p>
            <p className="task__id" >{task.id}</p>
            <button onClick={() => { deleteTask(task.id) }}>Delete task</button>
        </div>
    );
}

export default TaskCard;