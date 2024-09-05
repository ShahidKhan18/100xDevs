import React from "react";

const TODO = ({ todo, setTodo }) => {
  const { title, _id, description, completed } = todo;
  const completeHandel = async (id) => {
    await fetch(`http://localhost:3000/todo/update/${id}`, {
      method: "PUT",
    });
    setTodo();
  };
  const deleteHandel = async (id) => {
    await fetch(`http://localhost:3000/todo/delete/${id}`, {
      method: "DELETE",
    });
    setTodo();
  };
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      <h2
        style={
          completed
            ? { textDecoration: "line-through red 5px" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </h2>
      <p
        style={
          completed
            ? { textDecoration: "line-through red 2px" }
            : { textDecoration: "none" }
        }
      >
        {description}
      </p>
      <button onClick={() => completeHandel(_id)}>
        Marked as {completed ? "Not Completed" : "Completed"}
      </button>
      <button style={{ marginLeft: "40px" }} onClick={() => deleteHandel(_id)}>
        Delete
      </button>
    </div>
  );
};

export default TODO;
