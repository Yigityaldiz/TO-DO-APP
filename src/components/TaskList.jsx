import { useState } from "react";

export const TaskList = ({
  todo,
  setTodo,
  completedTodo,
  setCompletedTodo,
}) => {
  const [editValue, setEditValue] = useState();
  const [editMode, setEditMode] = useState(false);

  const edit = (x) => {
    
    setEditMode(true);
  };

  const save = (x) => {
    const updateValue = todo.map((value) => {
      if (value === x) {
        return editValue === "" ? value : editValue;
      }
      
    });
    setTodo(...todo , updateValue);

    setEditMode(false)
  };

  const deleteTodo = (taskToDelete) => {
    const updatedTodo = todo.filter((task) => task !== taskToDelete);
    setTodo(updatedTodo); // splice yapinca niye yenilenmiyor sor
  };

  const success = (taskToDelete) => {
    const updatedTodo = todo.filter((task) => task !== taskToDelete);
    setTodo(updatedTodo);

    const newTodo = [...completedTodo, taskToDelete];
    if (setCompletedTodo) {
      setCompletedTodo(newTodo);
    }
  };

  return (
    <>
      {Array.isArray(todo) &&
        todo.map((x, i) => (
          <div
            id="change"
            key={i}
            className="  bg-red-700/25 items-center flex gap-4 p-1 rounded-lg m-2"
          >
            <svg
              onClick={() => success(x)}
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-trophy"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 21l8 0" />
              <path d="M12 17l0 4" />
              <path d="M7 4l10 0" />
              <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
              <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            </svg>
            {!editMode ? (
             <p className=" h-[80%] w-[50%] p-1 text-white ">{x}</p>
            ) : (
              <input
              onChange={(e) => {
                setEditValue(e.target.value);
              }}
              value={x}
              type="text"
              className=" h-[80%] w-[50%] p-1 text-white   bg-red-700/0  border-none "
            />
              
            )}

            {!editMode ? (
              <button
                onClick={() => {
                  edit(x);
                }}
              >
                Edit
              </button>
            ) : (
              <button onClick={()=>{save(x)}}>Save</button>
            )}

            <button onClick={() => deleteTodo(x)}>Delete</button>
          </div>
        ))}
    </>
  );
};
