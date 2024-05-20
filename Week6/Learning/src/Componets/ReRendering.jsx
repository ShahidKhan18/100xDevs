// - 1st way to avoid Multiple Re-rendering
// const HeaderWithButtons=()=>{
//    const [randomNumber, setRandomNumber] = useState(0.999);
//    const titleHandler = () => {
//      setRandomNumber(Math.floor(Math.random()*100));
//    };
//    return(
//     <>
//      <button onClick={titleHandler}>Click Me to Change to Title</button>
//       <h3>My name is {randomNumber}</h3>
//     </>
//    )
// }

// -2nd way to avoid multiple re-rendering (using memo)

const Header = memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default Header;