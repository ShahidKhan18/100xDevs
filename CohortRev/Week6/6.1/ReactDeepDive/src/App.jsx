import { useState,memo } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState(1234);

  return (
    <div>
      <button onClick={()=>{
        setName(Math.random().toFixed(5)*10000)
      }}>Update name</button>
     <Header title={name}/>
     <Header title={"Shahid"}/>
     <Header title={"Shahid"}/>
     <Header title={"Shahid"}/>
     <Header title={"Shahid"}/>
     <Header title={"Shahid"}/>
    </div>
  )
}

const Header= memo( ({title})=>{
  return(
    <div>
      My name is {title}
    </div>
  )
})


export default App
