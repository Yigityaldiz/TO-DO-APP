import { useEffect, useState } from "react";
import { TaskList } from "./TaskList";
import { CompletedTaskList } from "./CompletedTaskList";

export default function TodoList({
  setTodo,
  todo,
  completedTodo,
  setCompletedTodo,
}) {
  const [input, setInput] = useState([]);

  const addList = (e) => {
    setInput(e.target.value);
  };
  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = [...todo, input];
    if (setTodo) {
      setTodo(newTodo);
    }
    setInput("");
  };

  return (
    <>
      <div className="">
        <div
          id="mainpage"
          className=" bg-slate-900  w-[100%] h-screen flex items-center flex-col gap-4"
        >
          <div className=" flex w-[100%] h-[10%] justify-center m-4">
            <h1 className="font-mono text-[50px] subpixel-antialiased font-bold text-white ">
              TO-DO APP
            </h1>
          </div>
          <div className="  p-3  h-[10%] w-[60%] ">
            <form
              className="  flex  justify-center gap-4 w-[100%] h-[100%]  "
              action=""
            >
              <input
                onChange={addList}
                className="bg-slate-700 border-2  rounded-lg w-[75%] text-left p-2  "
                placeholder="What would you like to do ?"
                type="text"
              />
              <button
                onClick={addTodo}
                className="font-mono font-bold text-white p-2 border-2 "
                type="button"
              >
                Add Todo
              </button>
            </form>
          </div>

          <div className=" w-[60%]  flex flex-col items-center  gap-4 p-4">
            <div className="w-[100%] p-2 ">
              <h1 id="tasklistHead" className="text-white font-mono font-bold ">
                Task List
              </h1>
            </div>
            <div id="taskList" className="  w-[100%]  ">
              <TaskList
                todo={todo}
                setTodo={setTodo}
                completedTodo={completedTodo}
                setCompletedTodo={setCompletedTodo}
              />
            </div>

            <div className="w-[100%] p-2">
              <h1
                id="comletedTaskListHead"
                className="font-mono font-bold text-white"
              >
                Comleted Task List
              </h1>
            </div>
            <div id="completedTaskList" className=" w-[100%] h-[100%] gap-4">
              <CompletedTaskList
                completedTodo={completedTodo}
                setCompletedTodo={setCompletedTodo}
                setTodo={setTodo}
                todo = {todo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
