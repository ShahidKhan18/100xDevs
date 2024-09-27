import React from "react";
import { render } from "react-dom";
import { redirect } from "react-router-dom";

const Button = ({ btnText, to, onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="bg-slate-800 text-white px-4 rounded-md outline-none border-none py-2 shadow-md w-[300px] mt-4 hover:bg-slate-600 "
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
