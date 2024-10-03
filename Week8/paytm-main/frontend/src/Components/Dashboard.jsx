import React, { useEffect, useState } from 'react'
import Appbar from './UI/Appbar'
import Input from './UI/Input'
import Balance from './UI/Balance'
import Users from './UI/Users'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState(null);
  const [balance, setBalance] = useState(null)
  const tokenRemover=()=>{
      localStorage.removeItem("token");
      setIsLogin(false);
  }

  const getUsersDebouncing = async (
    func,
    delay,url = "https://paytmbackend-ak0n.onrender.com/api/v1/user/bulk"
  ) => {
    let timeOutId;
    return function (...args) {
      if (timeOutId) clearTimeout(timeOutId);
      timeOutId = setTimeout(() => func(url), delay);
    };
  };

  const getUsers = async (
    url = "https://paytmbackend-ak0n.onrender.com/api/v1/user/bulk"
  ) => {
    const response = await axios.get(
     url
    );
    setUsers(response.data.users);
  };

  const getBalance=async()=>{
    const response = await axios.get(
      "https://paytmbackend-ak0n.onrender.com/api/v1/account/balance",
      {
        headers: {
          authorization: "Bearer "+localStorage.getItem('token'),
        },
      }
    );
    
    setBalance(response.data.balance)
  }


  useEffect(()=>{
    if(localStorage.getItem("token"))
    setIsLogin(true);
    else{
      setIsLogin(false);
      navigate('/')
    }
   getUsers();
   getBalance();
  },[isLogin])

  if(!isLogin) 
   return null;
  
  if(!users){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <Appbar user={"shahid"} tokenRemover={tokenRemover} />
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] mx-auto">
        {balance ? (
          <Balance balance={balance} />
        ) : (
          <Balance balance={" Loading ..."} />
        )}
        <Users getUsers={getUsers} users={users} />
      </div>
    </div>
  );
}

export default Dashboard