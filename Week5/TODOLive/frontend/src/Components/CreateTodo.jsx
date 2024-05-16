import React, { useRef } from 'react'

const CreateTodo = ({ fetchTodo }) => {
  const title = useRef();
  const description = useRef();
  const addTodoHandler = async () => {
    const response = await fetch("https://todo-server-ayo7.onrender.com/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title.current.value,
        description: description.current.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = response.json();
    title.current.value = "";
    description.current.value = "";
    alert("Todo Added successfully");
    fetchTodo();
  };
  return (
    <div>
      <input type="text" placeholder="title" ref={title} />
      <br />
      <br />
      <input type="text" placeholder="description" ref={description} />
      <br />
      <br />
      <button onClick={addTodoHandler}>Add a todo</button>
    </div>
  );
};

export default CreateTodo