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

function App() {
  const { todos, loading } = useTodos(7);
  if (loading) return <h1>Loading ...</h1>;

  return (
    <>
      {todos.map((todo) => (
        <TODO title={todo?.title} desc={todo?.description} />
      ))}
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
