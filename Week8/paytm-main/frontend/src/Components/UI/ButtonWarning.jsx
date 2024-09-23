import React from 'react'

const ButtonWarning = ({warning,toText,to}) => {
  return (
    <div className='text-center mt-2'>
        {warning} ? <span className='underline cursor-pointer' to={to}>{toText}</span>
    </div>
  )
}

export default ButtonWarning