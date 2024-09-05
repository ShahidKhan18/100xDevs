import React, { useEffect,useState } from 'react'
import TODO from './TODO'


const TODOS = ({ todos, dataLoad }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TODO key={index} todo={todo} dataLoad={dataLoad} />
      ))}
    </div>
  );
};

export default TODOS