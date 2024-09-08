import { useEffect, useMemo, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState(1);
  const [sumN, setSumN] = useState(0);
  const fetchData = async () => {
    const data = await fetch(
      "https://random-data-api.com/api/v3/projects/ad639f66-90c1-4cc2-90bb-9dc932f16b10?api_key=gGXjxq2fODU-r_63kQZvnw"
    );
    const json = await data.json();
    setTodos(json?.Data);
  };
  useEffect(() => {
    fetchData();
  }, []);


//  let sum = useMemo(()=>{
//    let s = 0;
//    console.log("Before Loop");
//    for (let i = 1; i <= inputVal; i++) {
//      s = i + s;
//      console.log("Inside Loop");
//    }
//    console.log("After Loop");
//    return s;
//  },[inputVal]);
 
useEffect(()=>{
   let s = 0;
 console.log("Before Loop");
 for (let i = 1; i <= inputVal; i++) {
   s = i + s;
   console.log("Inside Loop");
 }
 console.log("After Loop");
 setSumN(s)
 },[inputVal])

 console.log("App Re-rendering")
  // if (todos.length == 0) return <h1>Loading...</h1>;
  return (
    <>
      {/* {
        todos?.map((todo,index)=>(
         <Todo todo={todo} key={index}/>
        ))
      } */}


      <div>
        <input
          type="text"
          value={inputVal?inputVal:0}
          onChange={(e) => {
            setInputVal(parseInt(e.target.value));
          }}
        />
        <p>Sum is {sumN}</p>
        <button onClick={()=>{ 
          setCount(count+1)          
        }}>Count {count}</button>
      </div>
    </>
  );
}

const Todo = ({ todo }) => {
  const { name, gender, food_ingredient } = todo;

  return (
    <>
      <h2>{name}</h2>
      <p>{gender}</p>
      <p>{food_ingredient}</p>
    </>
  );
};

export default App;
