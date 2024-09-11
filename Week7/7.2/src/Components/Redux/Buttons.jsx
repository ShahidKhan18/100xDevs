import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incCount,decCount } from './Store/countSlice';

const Buttons = () => {
   const dispatch=useDispatch();
   const count=useSelector(((state)=>state.count))
  return (
    <div>
        <button onClick={()=>dispatch(decCount())}>-</button>
        <button onClick={()=>dispatch(incCount())}>+</button>
    </div>
  )
}

export default Buttons