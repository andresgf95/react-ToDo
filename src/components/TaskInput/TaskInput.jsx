/* eslint-disable react/prop-types */
import { useState } from "react";

const TaskInput = ({ addTask }) => {
    const [title, setTitle] = useState("");

    const handleAddTask = () => {
        if (title.trim() !== "") {
            addTask(title);
            setTitle("");
        }
    };

    return (
        <div className="mt-6 relative">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="border border-solid p-3 rounded-full"></span>
                </div>
                <input
                    type="text"
                    className="focus:shadow-lg focus:shadow-teal-800 font-shantell-sans pl-12 pr-20 w-full py-4 bg-slate-700 rounded-xl border-0 text-zinc-200 outline-none transition-all duration-300 ease-in-out"
                    placeholder="Escriba una tarea..."
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key.toLowerCase() === "enter") {
                            handleAddTask();
                        }
                    }}
                />
                <button
                    className="absolute inset-y-0 right-0 px-2 py-0 bg-slate-600 hover:bg-teal-700 rounded-r-xl"
                    onClick={handleAddTask}
                >
                    <img 
                        src="add-icon.svg" 
                        alt="Añadir tarea"
                className="h-12 w-12cursor-pointer transition-all duration-300 ease-in-out" />
                </button>
            </div>
        </div>
    );
};

export { TaskInput };
