// App.jsx
import { TaskInput } from "./components/TaskInput/TaskInput";
import { TaskList } from "./components/TaskList/TaskList";
import { Title } from "./components/Title/Title";
import useTasks from "./customHooks/UseTask";
import useFilters from "./customHooks/useFilters";

export default function App() {
  const { tasks, addTask, handleCompleted, handleDelete, handleClearCompleted } = useTasks();
  const { activeFilter, filteredTasks, showAllTasks, showActiveTasks, showCompletedTasks } = useFilters(tasks);

  return (
    <div className="bg-gray-800 min-h-screen h-full text-gray-100 flex-items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
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
          showCompletedTasks={showCompletedTasks}
        />
      </div>
    </div>
  );
}
