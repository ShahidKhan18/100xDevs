import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./Store/Atom/countAtom";

const Buttons = () => {
 
  const setCount = useSetRecoilState(countAtom);
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
};

export default Buttons;
