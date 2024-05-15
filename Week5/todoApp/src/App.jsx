import { useRef, useState } from 'react'


function App() {

  const TODO = ({ todo,key }) => {
    const { title, description, completed } = todo;
    // const btnHandler=()=>{
    //   const filterOut=todo.filter((to,index)=>index!=key)
    //   setTodo(filterOut)
    // }
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {/* <button onClick={btnHandler}>
         Remove
        </button> */}
      </div>
    );
  };
  
  const [todo, setTodo] = useState([
    {
    title:"MERN",
    description:"Done at 09:00-11:00",
    completed:false
   },
    {
    title:"DSA",
    description:"Done at 11:00-01:00",
    completed:false
   },
]);

const title=useRef();
const desc=useRef();
const addTodo=()=>{
 setTodo((prev)=>([...prev,{
  title:title.current.value,
  description:desc.current.value,
  completed:false
 }]))
}
  return (
    <>
      <div className="todo">
        <input type="text" placeholder="Enter Title.." ref={title} />
        <input type="text" placeholder="Enter Description.." ref={desc} />
        <button onClick={addTodo}>ADD TODO</button>
      </div>
      <div className="todolist">
        {
          todo.map((to,index)=>{
            return <TODO todo={to} key={index} />
          })
        }
        </div>
    </>
  );
}

export default App
