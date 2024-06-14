import { useEffect, useState } from "react";
import { TaskInput } from "./components/TaskInput/TaskInput";
import { TaskList } from "./components/TaskList/TaskList";
import { Title } from "./components/Title/Title";

export default function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Despertar",
      completed: false
    },
    {
      id: 2,
      title: "rutina café",
      completed: false
    },
    {
      id: 3,
      title: "darme unha ducha",
      completed: false
    }
  ])

  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  const addTask = (title) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1


    const newTask = {
      id: lastId + 1,
      title,
      completed: false
    }

    const taskList = [...tasks]
    taskList.push(newTask)
    setTasks(taskList)
  }

  const handleCompleted = (id) => {
    const updatedList = tasks.map(
      task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed}
        }
        return task
      }
    )
    setTasks(updatedList)
  }

  const handleDelete = (id) => {
    const updatedList = tasks.filter(
      task => task.id !== id
    )
    setTasks(updatedList)
  }

  const handleClearCompleted = () => {
    const updatedList = tasks.filter(
      task => !task.completed
    )
    setTasks(updatedList)
  }

  const showAllTasks = () => {
    setActiveFilter('all')
  }

  const showActiveTasks = () => {
    setActiveFilter('active')
  }

  const showCompletedTasks = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTasks(tasks)
    } else if (activeFilter === 'active') {
      const activeTasks = tasks.filter(task => task.completed === false)
      setFilteredTasks(activeTasks)
    } else if (activeFilter === 'completed') {
      const completedTasks = tasks.filter(task => task.completed === true)
      setFilteredTasks(completedTasks)
    }
  }, [activeFilter, tasks])

  return (
    
    <div 
      className="
        bg-gray-800 
        min-h-screen 
        h-full 
        text-gray-100 
        flex-items-center
        justify-center
        py-20
        px-5">
           
      <div 
        className="
          container
          flex
          flex-col
          max-w-xl">

          <Title />
          <TaskInput addTask={addTask} />
          <TaskList 
            tasks={filteredTasks}
            activeFilter={activeFilter}
            handleCompleted={handleCompleted} 
            handleDelete={handleDelete}
            handleClearCompleted={handleClearCompleted}
            showAllTasks={showAllTasks}
            showActiveTasks={showActiveTasks}
            showCompletedTasks={showCompletedTasks} />
      </div> 
    </div>
  

  )
}