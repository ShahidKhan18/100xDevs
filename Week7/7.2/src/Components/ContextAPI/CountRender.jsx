import React from "react";
import { useContext } from "react";
import { CountContext } from "./countContext";

const CountRender = () => {
  const { count } = useContext(CountContext);
  console.log(count);
  return <div>Current Count : {count}</div>;
};

export default CountRender;
