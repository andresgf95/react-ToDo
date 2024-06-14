/* eslint-disable react/prop-types */
import { FiltersButton, FiltersButtonContainer, FiltersContainer, ItemsNum } from './utils';

const Filters = ({
  total,
  activeFilter,
  handleClearCompleted,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
}) => {
  return (
    <div>
      <FiltersContainer>
        <ItemsNum total={total} />
        <FiltersButtonContainer>
          <FiltersButton action={showAllTasks} active={activeFilter} filter="todas" />
          <FiltersButton action={showActiveTasks} active={activeFilter} filter="activas" />
          <FiltersButton action={showCompletedTasks} active={activeFilter} filter="completadas" />
        </FiltersButtonContainer>
        <button
          onClick={handleClearCompleted}
          className="text-zinc-200 hover:text-teal-700 cursor-pointer transition-all duration-300 ease-in-out"
        >
          Eliminar tareas completadas
        </button>
      </FiltersContainer>
    </div>
  );
};

export { Filters };