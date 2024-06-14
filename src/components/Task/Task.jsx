/* eslint-disable react/prop-types */

const Task = ({ task, handleCompleted, handleDelete }) => {

    const { id, title, completed } = task


    return (
        <div
            className="
            flex
            items-center
            justify-between
            p-4
            bg-slate-700
            border-b
            border-solid
            border-slate-600
            font-shantell-sans">

            <div className="flex items-center">
                {
                    completed ? (
                        <div
                            className="bg-slate-600 p-1 rounded-full cursor-pointer"
                            onClick={() => handleCompleted(id)}>
                            <img
                                className="h-5 w-5"
                                src="check-icon.svg"
                                alt="cono de tarea completada" />
                        </div>
                    ) : (
                        <span
                            onClick={() => handleCompleted(id)}
                            className="
                            border 
                            border-solid 
                            border-slate-600 
                            rounded-full
                            p-3
                            cursor-pointer">
                        </span>
                    )
                }

                <p className={"pl-3 " + (completed && "text-red-500 transition-all duration-50 ease-in-out")}>
                    {title}
                </p>
            </div>
            <img
                onClick={() => handleDelete(id)}
                src="/close-icon.svg"
                alt="Cerrar tarea"
                className="h-7 w-7 cursor-pointer transition-all duration-300 ease-in-out" />
        </div >
    )
}

export { Task }