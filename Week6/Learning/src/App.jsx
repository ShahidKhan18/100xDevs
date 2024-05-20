/* eslint-disable react/prop-types */
import { memo, useState } from "react";
import "./App.css";
import TODO from "./Componets/TODO";
import CardWrapper from "./Componets/WrapperCopm/CardWrapper";
import TextComponent from "./Componets/WrapperCopm/TextComponent";
import TODOID from "./Componets/TODOID";
import SUM from "./Componets/SUM";

function App() {
  const [randomNumber, setRandomNumber] = useState(0.999);
  const titleHandler = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      {/* <div>
        <button onClick={titleHandler}>Click Me to Change to Title</button>
        <h3>My name is Shahid</h3>
        <Header title={"Week 6 "}></Header>
        <Header title={"2nd Header "} />
        <Header title={"2nd Header "} />
        <Header title={"2nd Header "} />
        <Header title={"2nd Header "} />
        <Header title={"2nd Header "} />
        <Header title={"2nd Header "} />
        <Header title={randomNumber} />
      </div> */}
      {/* <TODO /> */}



    {/* <CardWrapper innerComponent={<TextComponent/>}/>
     */}
    {/* <CardWrapper>
      hii there
    </CardWrapper>
    <CardWrapper>
      <TextComponent/>
    </CardWrapper>
    <CardWrapper>
      <CardWrapper>
         Haha
      </CardWrapper>
    </CardWrapper> */}


     {/* ****************** Week 6.2 ************** */}
      
      {/* <TODOID/> */}
      <SUM/>
    </div>
  );
}

export default App;
