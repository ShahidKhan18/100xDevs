import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <div>
     <HeaderWithButton/>
     <Header title={"Shahid"}/>
    </div>
  )
}

const HeaderWithButton=()=>{
  const [name, setName] = useState(1234);
  return (
    <div style={{
      border: "4px solid red",
      padding: "20px"
    }}>
      <button
        onClick={() => {
          setName(Math.random().toFixed(5) * 100000);
        }}
      >
        Update name
      </button>
      <Header title={name}/>
    </div>
  )
    
}

const Header=({title})=>{
  return(
    <div style={{padding:"10px", margin:"10px"}}>
      My name is {title}
    </div>
  )
}


export default App
