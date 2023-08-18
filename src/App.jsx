import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { CompletedTaskList } from "./components/CompletedTaskList";



function App() {
  const [completedTodo, setCompletedTodo]= useState([])
  const [isOpen ,setIsOpen] = useState(true)
  const [ todo , setTodo ] = useState([])
  return (
    <>
    <TodoList setTodo = {setTodo} todo ={todo} setIsOpen={setIsOpen} setCompletedTodo={setCompletedTodo} completedTodo= {completedTodo} />
    
    </>
  );
}

export default App;
