import React from 'react'
import { useRecoilState } from 'recoil'
import { countAtom } from './Store/Atom/countAtom'

const Buttons = () => {
    const [count,setCount]=useRecoilState(countAtom)
  return (
    <div>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Buttons