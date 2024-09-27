import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Dashboard from "./Components/Dashboard";
import SendMoney from "./Components/SendMoney";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route
            path="/dashboard"
            element={
              
                <Dashboard />
            
            }
          />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
