export const CompletedTaskList = ({
  completedTodo,
  setCompletedTodo,
  setTodo,
  todo,
}) => {
  const deleteTodo = (taskToDelete) => {
    const updatedTodo = completedTodo.filter((task) => task !== taskToDelete);
    setCompletedTodo(updatedTodo); // splice yapinca niye yenilenmiyor sor
  };

  const unsuccess = (taskToDelete) => {
    const updatedTodo = completedTodo.filter((task) => task !== taskToDelete);
    setCompletedTodo(updatedTodo);
    const newTodo = [...todo,taskToDelete]
    setTodo(newTodo)
  };

  return (
    <>
      {Array.isArray(completedTodo) &&
        completedTodo.map((x, i) => (
          <div
            key={i}
            className="  bg-green-700/25 items-center flex gap-4 p-1 rounded-lg m-2"
          >
            <svg
              onClick={() => unsuccess(x)}
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-trophy-off"
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
              <path d="M8 21h8" />
              <path d="M12 17v4" />
              <path d="M8 4h9" />
              <path d="M17 4v8c0 .31 -.028 .612 -.082 .905m-1.384 2.632a5 5 0 0 1 -8.534 -3.537v-5" />
              <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M3 3l18 18" />
            </svg>
            <p className=" h-[80%] w-[50%] p-1 text-white ">{x}</p>
            <button>Edit</button>
            <button onClick={() => deleteTodo(x)}>Delete</button>
          </div>
        ))}
    </>
  );
};
