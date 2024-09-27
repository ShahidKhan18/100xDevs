import React from 'react'

const Input = ({label,placeHolder,type,onChange}) => {
  return (
    <div className=''>
        <p className='font-semibold my-2'>{label}</p>
        <input className=' py-1 w-full border-gray border-2 px-2 rounded-sm' onChange={onChange} required={true} type={type} placeholder={placeHolder}  />
    </div>
  )
}

export default Input