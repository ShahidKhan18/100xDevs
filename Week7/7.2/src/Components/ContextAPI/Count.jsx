import React from "react";
import CountRender from "./CountRender";
import Buttons from "./Buttons";
import CountProvider from "./countContext";

const Count = () => {
  return (
    <div>
      <CountProvider>
        <CountRender />
        <Buttons />
      </CountProvider>
    </div>
  );
};

export default Count;
