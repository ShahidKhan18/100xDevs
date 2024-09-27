import React, { useContext, useEffect, useState } from "react";
import Heading from "./UI/Heading";
import SubHeading from "./UI/SubHeading";
import Input from "./UI/Input";
import Button from "./UI/Button";
import ButtonWarning from "./UI/ButtonWarning";
import axios from "axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate();

useEffect(() => {
  if (localStorage.getItem("token")) navigate("/dashboard");
}, []);
  
  
  const onsubmitHandler=async()=>{
    console.log(firstName,lastName,username,password);
    try {
       const response = await axios.post(
         "https://paytmbackend-ak0n.onrender.com/api/v1/user/signup",
         {
           firstName,
           lastName,
           username,
           password,
         }
       );
       localStorage.setItem("token", response.data.token);
       toast.success(firstName+" , your account created", {
         theme: "light",
         autoClose: 1400,
       });
       navigate("/dashboard");
       console.log(response.data.token); 
    } catch (error) {
      console.log(error.response.data)
     toast.error(error.response.data.error, {
       theme: "light",
       autoClose: 1400
     });

    }
    
  }
  return (
    <div className="w-full h-screen bg-gray flex justify-center  items-center ">
      <div className="bg-white p-4 rounded-md shadow-lg max-w-[300px]">
        <Heading title={"Sign up"} />
        <SubHeading textData={"Enter your Information to create an account"} />
        <Input onChange={
          (e)=>{
           setFirstName(e.target.value);
          }
        } label={"First Name"} placeHolder={"Jhon"} type={"text"} />
        <Input  onChange={
          (e)=>{
           setLastName(e.target.value);
          }} label={"Last Name"} placeHolder={"Doe"} type={"text"} />
        <Input onChange={
          (e)=>{
           setUserName(e.target.value);
          } }label={"Email"} placeHolder={"shahid@gmail.com"} type={"email"} />
        <Input onChange={
          (e)=>{
           setPassword(e.target.value);
          } }label={"Password"} placeHolder={"123456"} type={"password"} />
        <Button onClick={onsubmitHandler} btnText={"Sign Up"} to={"/dashboard"}/>
        <ButtonWarning to={"/signin"} warning={"Already have an account"} toText={"Sign in"} onClick={()=>{
          navigate("/")
        }} />
      </div>
    </div>
  );
};

export default Signup;
