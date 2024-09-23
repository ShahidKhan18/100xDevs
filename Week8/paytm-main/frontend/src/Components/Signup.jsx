import React from "react";
import Heading from "./UI/Heading";
import SubHeading from "./UI/SubHeading";
import Input from "./UI/Input";
import Button from "./UI/Button";
import ButtonWarning from "./UI/ButtonWarning";
const Signup = () => {
  return (
    <div className="w-full h-screen bg-gray flex justify-center  items-center ">
      <div className="bg-white p-4 rounded-md shadow-lg max-w-[300px]">
        <Heading title={"Sign up"} />
        <SubHeading textData={"Enter your Information to create an account"} />
        <Input label={"First Name"} placeHolder={"Jhon"} type={"text"} />
        <Input label={"Last Name"} placeHolder={"Doe"} type={"text"} />
        <Input label={"Email"} placeHolder={"shahid@gmail.com"} type={"email"} />
        <Input label={"Password"} placeHolder={"123456"} type={"password"} />
        <Button btnText={"Sign Up"} to={"/dashboard"}/>
        <ButtonWarning to={"/signin"} warning={"Already have an account"} toText={"Sign in"}/>
      </div>
    </div>
  );
};

export default Signup;
