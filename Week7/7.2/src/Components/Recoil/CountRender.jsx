import React from "react";
import { useRecoilValue } from "recoil";
import { countAtom, countSelector } from "./Store/Atom/countAtom";
import EvenRender from "./EvenRender";

const CountRender = () => {
  const count = useRecoilValue(countAtom);
  
  return (
    <div>
      <EvenRender />
      Current Count : {count}
    </div>
  );
};

export default CountRender;
