import React, { useEffect, useState } from "react";
import Input from "./UI/Input";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const SendMoney = () => {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const [amount, setAmount] = useState();
  const fundTransfer = async () => {
    try {
      const response = await axios.post(
        "https://paytmbackend-ak0n.onrender.com/api/v1/account/transfer",
        {
          amount: amount,
          to: id,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      console.log(response.data.message)
      toast.success(response.data.message, {
        theme: "light",
        autoClose: 1400,
      });
    } catch (error) {
       toast.error(error?.response?.data?.error, {
         theme: "light",
         autoClose: 1400,
       });
    }
  };
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
          <div className="font-bold text-lg uppercase">{name}</div>
        </div>
        <Input
          placeHolder={"Enter Amount"}
          label={"Amount (in ₹)"}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button
          onClick={fundTransfer}
          className="text-white bg-green-500 py-1 mt-4 rounded-lg w-full hover:bg-green-400 ease-in-out delay-75 "
        >
          Initiate Transfer
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
