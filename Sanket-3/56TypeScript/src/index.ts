import express from "express";
import { ENV } from "./config";

const app=express();

app.listen(ENV.PORT,()=>{
   
    console.log("App Start Listening on PORT  : ",ENV.PORT)
    console.log("Hello")

})