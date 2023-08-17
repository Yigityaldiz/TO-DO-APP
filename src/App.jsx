import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList";



function App() {

  const [ todo , setTodo ] = useState([])
  return (
    <>
    <TodoList setTodo = {setTodo} todo ={todo} />
    </>
  );
}

export default App;
