import React from 'react'
import { useContext } from 'react'
import { CountContext } from './countContext'

const Buttons = () => {
    const {incCount,decCount}=useContext(CountContext)
  return (
    <div>
        <button onClick={()=>decCount()}>-</button>
        <button onClick={()=>incCount()}>+</button>
    </div>
  )
}

export default Buttons