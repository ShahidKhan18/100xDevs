import React from "react";
import { useSelector } from "react-redux";


const CountRender = () => {
  const count=useSelector((state)=>state.count)

  return <div>Current Count : {count}</div>;
};

export default CountRender;
