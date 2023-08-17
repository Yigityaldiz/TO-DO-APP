
import  {  useEffect, useState } from "react";
import { TaskList } from "./TaskList";

export default function TodoList ({setTodo,todo})  {
  
   
   const [input,setInput] = useState([])
   
   const addList = (e) => {
    setInput(e.target.value)
   
    }
    const addTodo = ()=>{
      console.log("bastin")
      todo.push(input)
     
      
     }
    
    useEffect(()=>{
     
    },[todo])
  
    return (
      <>
        <div
          id="mainpage"
          className=" bg-slate-900 h-screen w-screen   flex items-center flex-col gap-4"
        >
          <div className="border-2 flex w-[100%] h-[10%] justify-center m-4">
            <h1 className="font-mono text-[50px] subpixel-antialiased font-bold text-white ">
              TO-DO APP
            </h1>
          </div>
          <div className="border-2  p-3  h-[10%] w-[60%] ">
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
               className="font-mono font-bold text-white p-x-2 border-2 "
                type="button">sfsfs</button>
               
                
                
              
            </form>
          </div>

          <div className="border-2 w-[60%] h-screen  flex flex-col items-center gap-4 p-4">
            <div className="w-[100%] p-2 ">
              <h1 id="tasklistHead" className="text-white font-mono font-bold ">
                Task List
              </h1>
            </div>
            <div id="taskList" className="h-[50%] w-[100%] gap-4 ">
            <TaskList todo ={todo} />
            </div>

            <div className="w-[100%] p-2">
              <h1 id="comletedTaskListHead" className="font-mono font-bold text-white">
               
                Comleted Task List
              </h1>
            </div>
            <div id="completedTaskList" className="h-[50%] w-[100%] gap-4">
           

            </div>
          </div>
        </div>
      </>
    );
  
}
