import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: 10,
        margin: 10,
      }}
    >
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
      Dashboard
      </button>
    </div>
  );
}

export default Navbar