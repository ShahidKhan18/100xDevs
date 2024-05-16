import { useState } from 'react'
import './App.css'
import Header from './Componets/Header'

function App() {
   
  return (
    <>
      <HeaderWithButtons/>
      <h3>My name is Shahid</h3>
      <Header title={"Week 6 "} />
      <Header title={"2nd Header "} />
     
    </>
  );
}

const HeaderWithButtons=()=>{
   const [randomNumber, setRandomNumber] = useState(0.999);
   const titleHandler = () => {
     setRandomNumber(Math.floor(Math.random()*100));
   };
   return(
    <>
     <button onClick={titleHandler}>Click Me to Change to Title</button>
      <h3>My name is {randomNumber}</h3>
    </>
   )
}

export default App
