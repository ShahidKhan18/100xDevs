import React from "react";
import { useRecoilValue } from "recoil";
import { countAtom } from "./Store/Atom/countAtom";

const CountRender = () => {
 const count=useRecoilValue(countAtom)
  return <div>Current Count : {count}</div>;
};

export default CountRender;
