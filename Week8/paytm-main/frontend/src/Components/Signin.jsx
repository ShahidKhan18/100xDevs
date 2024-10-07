import React, { useEffect, useState } from 'react'
import Heading from "./UI/Heading";
import SubHeading from "./UI/SubHeading";
import Input from "./UI/Input";
import Button from "./UI/Button";
import ButtonWarning from "./UI/ButtonWarning";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { InfinitySpin } from "react-loader-spinner";
import SiginLoader from './UI/SiginLoader';

const Signin = () => {
   const [username, setUserName] = useState();
   const [password, setPassword] = useState();
   const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

 useEffect(()=>{
   if(localStorage.getItem('token'))
     navigate("/dashboard");
 },[])

   const onsubmitHandler = async () => {
     try {
      setLoading(true);
       const response = await axios.post(
         "https://paytmbackend-ak0n.onrender.com/api/v1/user/signIn",
         {
           username,
           password,
         }
       );
        setLoading(false);
         localStorage.setItem("token", response?.data?.token);
         toast.success("You Login Successfully", {
           theme: "light",
           autoClose: 1400,
         });
         navigate("/dashboard");
     } catch (error) {
       toast.error(error?.response?.data?.error, {
         theme: "light",
         autoClose: 1400,
       });
     }
   };
  
  
  

  return (
    <>
      <div className="w-full h-screen bg-gray flex justify-center  items-center ">
        <div className="bg-white p-4 rounded-md shadow-lg max-w-[300px]">
          <Heading title={"Sign In"} />
          <SubHeading
            textData={"Enter your credentials to access your account"}
          />
          <Input
            label={"Email"}
            placeHolder={"shahid@gmail.com"}
            type={"email"}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            label={"Password"}
            placeHolder={""}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            btnText={"Sign In"}
            to={"/dashboard"}
            onClick={() => {
              onsubmitHandler();
            }}
          />
          <ButtonWarning
            onClick={() => {
              navigate("/signUp");
            }}
            warning={"Don't have an account"}
            toText={"Sign up"}
          />
        </div>
      </div>
      {
       loading &&
      <SiginLoader msg={"Signing in ..."}/>
      }
    </>
  );
}

export default Signin