import React from 'react'
import { useRef } from 'react';
const TODOForm = ({ dataLoad }) => {
  const title = useRef(null);
  const description = useRef(null);
  const addTodoHandler = async () => {
    await fetch("http://localhost:3000/todo/create", {
      method: "POST",
      body: JSON.stringify({
        title: title.current.value,
        description: description.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dataLoad();
    title.current.value="";
    description.current.value="";
  };

  return (
    <div>
      <input
        ref={title}
        type="text"
        placeholder="Title"
        style={{ padding: "10px" }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        style={{ padding: "10px" }}
        ref={description}
      />
      <br />
      <br />
      <button onClick={addTodoHandler}>ADD TODO</button>
    </div>
  );
};

export default TODOForm