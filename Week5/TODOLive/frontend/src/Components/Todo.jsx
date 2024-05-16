import React from 'react'

const Todo = ({ todos, fetchTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        const completeTodoHandler = async () => {
          const response = await fetch(
            `https://todo-server-ayo7.onrender.com/completed`,
            {
              method: "PUT",
              body: JSON.stringify({
                id: todo._id,
              }),
              headers: {
                "content-type": "application/json",
              },
            }
          );
          const json = await response.json();
          alert("TODO marks as Completed");
          fetchTodo();
        };

        return (
          !todo.completed && (
            <div key={index}>
              <h2>{todo.title}</h2>
              <p>{todo.description} </p>
              <button onClick={completeTodoHandler}>
                {todo.completed ? "Completed" : "Mark as Completed"}
              </button>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Todo