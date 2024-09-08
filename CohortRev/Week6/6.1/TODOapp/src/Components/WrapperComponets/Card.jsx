import React from 'react'

const Card = ({children}) => {
  return (
    <div style={{
        border: '2px solid black',
        boxShadow:"5px 5px 10px gray",
        backgroundColor:"gray",
        padding:"15px"
    }}>
     
      {children}
    </div>
  )
}

export default Card