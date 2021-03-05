import { FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`box ${task.done ? 'done' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3 className="d-flex justify-content-between">
                {task.text}
                <FaTimes className="mt-1" onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
