import React, { useEffect, useState } from "react";

const TODOID = () => {
  const [todo, setTodo] = useState({});
  const [todoID, setTodoID] = useState(1);
  const [id, setId] = useState("");
  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${todoID}`).then(
      async (res) => {
        const json = await res.json();
        setTodo(json?.todo);
      }
    );
  }, [todoID]);

  return (
    <div>
      <div className="input">
        <button onClick={() => setTodoID(1)}> 1</button>
        <button onClick={() => setTodoID(2)}>2</button>
        <button onClick={() => setTodoID(3)}> 3</button>
        <button onClick={() => setTodoID(4)}> 4</button>
      </div>

      {todo && (
        <div>
          <TODO title={todo?.title} desc={todo?.description} />
        </div>
      )}
    </div>
  );
};

const TODO = ({ title, desc }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{desc}</h4>
    </div>
  );
};

export default TODOID;
