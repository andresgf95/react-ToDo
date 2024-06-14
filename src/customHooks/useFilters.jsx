import { useState, useEffect } from "react";

const useFilters = (tasks) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const showAllTasks = () => {
    setActiveFilter("all");
  };

  const showActiveTasks = () => {
    setActiveFilter("active");
  };

  const showCompletedTasks = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTasks(tasks);
    } else if (activeFilter === "active") {
      const activeTasks = tasks.filter((task) => task.completed === false);
      setFilteredTasks(activeTasks);
    } else if (activeFilter === "completed") {
      const completedTasks = tasks.filter((task) => task.completed === true);
      setFilteredTasks(completedTasks);
    }
  }, [activeFilter, tasks]);

  return { activeFilter, filteredTasks, showAllTasks, showActiveTasks, showCompletedTasks };
};

export default useFilters;
