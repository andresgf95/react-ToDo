import { useState } from "react";

const useTasks = () => {
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
  ]);

  const addTask = (title) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
      id: lastId + 1,
      title,
      completed: false
    };
    const taskList = [...tasks];
    taskList.push(newTask);
    setTasks(taskList);
  };

  const handleCompleted = (id) => {
    const updatedList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = tasks.filter((task) => task.id !== id);
    setTasks(updatedList);
  };

  const handleClearCompleted = () => {
    const updatedList = tasks.filter((task) => !task.completed);
    setTasks(updatedList);
  };

  return { tasks, addTask, handleCompleted, handleDelete, handleClearCompleted };
};

export default useTasks;
