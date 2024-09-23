import React from 'react'
import Heading from "./UI/Heading";
import SubHeading from "./UI/SubHeading";
import Input from "./UI/Input";
import Button from "./UI/Button";
import ButtonWarning from "./UI/ButtonWarning";

const Signin = () => {
  return (
    <div className="w-full h-screen bg-gray flex justify-center  items-center ">
      <div className="bg-white p-4 rounded-md shadow-lg max-w-[300px]">
        <Heading title={"Sign In"} />
        <SubHeading textData={"Enter your credentials to access your account"} />
        <Input
          label={"Email"}
          placeHolder={"shahid@gmail.com"}
          type={"email"}
        />
        <Input label={"Password"} placeHolder={""} type={"password"} />
        <Button btnText={"Sign In"} to={"/dashboard"} />
        <ButtonWarning
          to={"/signin"}
          warning={"Don't have an account"}
          toText={"Sign up"}
        />
      </div>
    </div>
  );
}

export default Signin