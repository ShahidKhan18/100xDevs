
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TODOForm from './Components/TODOForm'
import TODO from './Components/TODO'
import TODOS from './Components/TODOS'
import React, { useEffect, useState } from "react";

function App() {
 const [todos, setTodos] = useState([]);
 const dataLoad = async () => {
   const data = await fetch("http://localhost:3000/todo/todos");
   const dataJson = await data.json();

   setTodos(dataJson?.todos);
 };
 useEffect(() => {
   dataLoad();
 }, [todos]);

  return (
    <>
      <TODOForm dataLoad={dataLoad} />
      <TODOS todos={todos} dataLoad={dataLoad} />
    </>
  );
}

export default App
