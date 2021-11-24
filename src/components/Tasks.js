import Task from "./Task"
// but we want tasks as part of state so we have to integate in to componant Tasks
const Tasks = ({ tasks , onDelete  , onToggle}) => {
    return (
        <>
            {tasks.map((task) =>(
                <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle} />
            ))}   
        </>
    )
}

export default Tasks
