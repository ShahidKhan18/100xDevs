import { useState, Component, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { set } from "mongoose";

const useTodos = (n) => {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    let intervalID = setInterval(() => {
      setLoading(true);
      axios.get("https://randomtodo.onrender.com/").then((res) => {
        setTodos(res?.data?.TODOS);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://randomtodo.onrender.com/").then((res) => {
      setTodos(res?.data?.TODOS);
      setLoading(false);
    });

    return () => {
      clearInterval(intervalID);
    };
  }, [n]);

  return { todos, loading };
};


const useIsOnline=()=>{
  const [online, setOnline] = useState(window.navigator.onLine);
  useEffect(()=>{
   window.addEventListener("online",()=>setOnline(true))
   window.addEventListener("offline",()=>setOnline(false))
  },[])
  return online;
}

const useMousePointer=()=>{
  const [position, setPosition] = useState({
    x:0,
    y:0
  });

 const handelMouseMovement=(e)=>{
   setPosition({
    x:e.clientX,
    y:e.clientY
   })
 }

 useEffect(()=>{
   window.addEventListener('mousemove',handelMouseMovement)
   return ()=>{
    window.removeEventListener('mousemove',handelMouseMovement);
   }
 },[])


 return position;
}

const useInterval=(fn,interval)=>{
  
   useEffect(()=>{

    let intervalId=setInterval(()=>{
      fn();
    },interval)
    
    return ()=>{
      clearInterval(intervalId);
    }

   },[fn,interval])

  
}


const useDebounce=(inputValue,delay)=>{
  const [debouncedValue, setDebouncedValue] = useState(inputValue);
    useEffect(()=>{
     let timeOutID=setTimeout(()=>{
     setDebouncedValue(inputValue)
     },delay)
     return()=>{
      clearTimeout(timeOutID)
     }
    },[inputValue])

    return debouncedValue;
}


function App() {
  // const { todos, loading } = useTodos(7);
  // if (loading) return <h1>Loading ...</h1>;

  // const online=useIsOnline();
 
  // const position=useMousePointer();
  const [count, setCount] = useState(0);
  // useInterval(()=>setCount(r=>r+1),1000);

  const [inputValue,setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  return (
    <>
      {/* {todos.map((todo) => (
        <TODO title={todo?.title} desc={todo?.description} />
      ))} */}

    {/* {
      online?<div>You are Online</div>:<div>Sorry, You are offline connect to internet First </div>
    } */}


    {/* <p>Position of Mouse : ( {position.x} , {position.y}  ) </p> */}
    

     {/* <p>Count : {count}</p> */}


     <input
      type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      placeholder="Search...."
     />
     <h2>Search for : {debouncedValue}</h2>
    </>
  );
}

function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("Component mounted successfully");

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("Component Unmounted successfully");
    };
  }, []);

  // Render UI
  return <div>Hello from components</div>;
}

class MyComponents extends Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("Component mounted successfully");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("Component unmounted successfully");
  }

  render() {
    // Render UI
  }
}

const TODO = ({ title, desc }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{desc}</p>
    </>
  );
};
export default App;
