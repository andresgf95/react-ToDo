/* eslint-disable react/prop-types */
import { Filters } from "../Filters/Filters"
import { Task } from "../Task/Task"


// eslint-disable-next-line react/prop-types
const TaskList = ({ 
    tasks, 
    handleCompleted, 
    handleDelete, 
    activeFilter, 
    handleClearCompleted, 
    showAllTasks, 
    showActiveTasks, 
    showCompletedTasks }) => {
    return(
        <div 
            className="
                flex
                flex-col
                mt-7
                rounded-lg
                overflow-hidden
                shadow-2xl">
            { tasks.map( task => {
                return(
                    <Task 
                        key={task.id} 
                        task={task}
                        handleDelete={handleDelete}
                        handleCompleted={handleCompleted}/>
                )
            } ) }
            <Filters 
                activeFilter={activeFilter}
                total={tasks.length}
                handleClearCompleted={handleClearCompleted}
                showAllTasks={showAllTasks}
                showActiveTasks={showActiveTasks}
                showCompletedTasks={showCompletedTasks}
            />
        </div>
    )
}

export { TaskList }