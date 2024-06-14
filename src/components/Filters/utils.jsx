/* eslint-disable react/prop-types */

const FiltersContainer = ({ children }) => {
    return(
        <div 
            className="
            flex 
            items-center 
            justify-between 
            p-4 
            bg-slate-700
            border-b
            border-solid
            border-slate-600 ">
            {children}
        </div>
    )
}

const ItemsNum = ({ total = 0 }) => {
    return(
        <p className="text-zinc-200 text-sm">
            {total} tareas 
        </p>
    )
}

const FiltersButtonContainer = ({ children }) => {
    return(
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
}

const FiltersButton = ({ action, active, filter }) => {
    return (
      <button
        onClick={action}
        className={`hover:text-teal-700 cursor-pointer transition-all duration-300 ease-in-out ${
          active.toLowerCase().includes(filter.toLowerCase()) ? 'text-zinc-200' : 'text-zinc-200'
        }`}
      >
        {filter}
      </button>
    );
  };
export { FiltersContainer, ItemsNum, FiltersButtonContainer, FiltersButton }