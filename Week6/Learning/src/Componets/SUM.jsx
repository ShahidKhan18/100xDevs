import { set } from 'mongoose';
import React, { useMemo, useState } from 'react'

const SUM = () => {
    const [num, setNum] = useState("");
    const [count, setCount] = useState(0);


    //- Use Memo save from extra Re-rerendering  and Memoise the value to use , it only changes when num is updated
    let totalSum=useMemo(()=>{
        let sum = 0;
        for (let i = 1; i <= Number(num); i++) {
          sum += i;
        }
      return sum;
    },[num])
  return (
    <div>
      <input
        type="text"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <h2>Sum is :- {totalSum}</h2>

      <button onClick={() => setCount(count + 1)}>Count ( {count} )</button>
    </div>
  );
}

export default SUM