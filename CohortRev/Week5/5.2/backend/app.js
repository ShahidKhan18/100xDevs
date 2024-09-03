const express=require('express');
const todoRouter=require("./routes")
const app=express();


app.use(express.json());
app.use("/todo",todoRouter)





app.listen(3000,()=>{
    console.log('listening on port 3000');
})