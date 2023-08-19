import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { CompletedTaskList } from "./components/CompletedTaskList";



function App() {
  const taskLocal = JSON.parse(localStorage.getItem('tasklists') )
  const completedTaskLocal = JSON.parse(localStorage.getItem('completedtasklist'))
  console.log(completedTaskLocal)
  const [completedTodo, setCompletedTodo]= useState(completedTaskLocal)
  const [isOpen ,setIsOpen] = useState(true)
  const [ todo , setTodo ] = useState(taskLocal)
  

  
  useEffect(()=>{
   localStorage.setItem('tasklists', JSON.stringify(todo) || [])
   localStorage.setItem('completedtasklist', JSON.stringify(completedTodo) || [])
  
  },[todo,completedTodo])

  return (
    <>
    <TodoList setTodo = {setTodo} todo ={todo} setIsOpen={setIsOpen} setCompletedTodo={setCompletedTodo} completedTodo= {completedTodo} />
    
    </>
  );
}

export default App;
