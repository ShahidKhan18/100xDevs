import React, { useEffect } from 'react'
import Input from "./UI/Input"
import { useNavigate } from 'react-router-dom';
const SendMoney = () => {
  const navigate=useNavigate()

   useEffect(() => {
     if (!localStorage.getItem("token")) navigate("/");
   }, []);

  return (
    <div className="bg-slate-100 w-full h-screen grid justify-center items-center">
      <div className="moneyCard p-4 bg-white rounded-md shadow-md w-[300px] ">
        <h1 className="text-center font-bold text-3xl  ">Send Money</h1>
        <div className="rec mt-8 flex items-center gap-4">
          <div className="pro text-white bg-green-500 w-[40px] h-[40px] rounded-full text-center p-1.5">
            A
          </div>
          <div className="font-bold text-lg">Friend Name</div>
        </div>
        <Input placeHolder={"Enter Amount"} label={"Amount (in ₹)"} />
        <button className="text-white bg-green-500 py-1 mt-4 rounded-lg w-full hover:bg-green-400 ease-in-out delay-75 ">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}

export default SendMoney