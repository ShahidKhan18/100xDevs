import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Components/signup"
import Signin from "./Components/Signin"
import Dashboard from "./Components/Dashboard"
import SendMoney from "./Components/SendMoney"

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/signin" element={<Signin/>}/>
             <Route path="/dashboard" element={<Dashboard/>}/>
             <Route path="/send" element={<SendMoney/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
