import { useEffect, useState } from 'react'
import CreateTodo from './Components/CreateTodo'
import Todo from './Components/Todo'


function App() {
  const [todos, setTodos] = useState([]);
 
  const fetchTodos=async()=>{
    const data = await fetch('https://todo-server-ayo7.onrender.com/todos');
    const json=await data.json();
    
    setTodos(json);
  }
  useEffect(() => {
    fetchTodos();
  }, [todos]);
  

  return (
  <>
    <div>
      <CreateTodo/>
      <Todo todos={
        todos
      }/>
    </div>
  </>
  )
}

export default App
