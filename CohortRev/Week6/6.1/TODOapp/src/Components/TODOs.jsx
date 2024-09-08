import { useState,useRef } from "react"
import TODO from "./TODO";


const TODOs = () => {
    const [todos, setTodos] = useState([
      {
        title: "Math",
        description: "Done before 10:00 AM",
      },
    ]);
    const title=useRef(null);
    const description = useRef(null);
  return (
    <div>
        
     <div className="form">
        <input type="text" placeholder='Title' ref={title} />
        <input type="text" placeholder='Description'  ref={description}/>
        <button onClick={()=>{
            setTodos([...todos,{
                title:title.current.value,
                description:description.current.value
            }])
        }}>ADD TODO</button>
     </div>
     {
        todos.map((todo,index)=>  <TODO key={index} todo={todo}/>
  )
     }
    </div>
  )
}

export default TODOs