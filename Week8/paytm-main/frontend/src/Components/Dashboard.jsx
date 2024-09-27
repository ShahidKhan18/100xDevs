import React, { useEffect, useState } from 'react'
import Appbar from './UI/Appbar'
import Input from './UI/Input'
import Balance from './UI/Balance'
import Users from './UI/Users'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const tokenRemover=()=>{
      localStorage.removeItem("token");
      setIsLogin(false);
  }

  useEffect(()=>{
    if(localStorage.getItem("token"))
    setIsLogin(true);
    else{
      setIsLogin(false);
      navigate('/')
    }
  },[isLogin])

  if(!isLogin) 
   return null;
  
  return (
    <div>
      <Appbar user={"shahid"} tokenRemover={tokenRemover} />
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] mx-auto">
        <Balance balance={5000} />
        <Users
          users={[{ name: "shahid" }, { name: "shahil" }, { name: "Fareed" }]}
        />
      </div>
    </div>
  );
}

export default Dashboard