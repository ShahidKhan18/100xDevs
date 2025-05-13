require("dotenv").config();
const express=require("express");
const { ENVConfig, MongoDBConfig } = require("./src/config");
const { ErrorMiddlewware } = require("./src/middlewares");


const app=express();




app.use(require("cors"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//+ Global Middlewares
app.use(ErrorMiddlewware);

app.listen(ENVConfig.PORT,()=>{
    console.log(`Server is running on port ${ENVConfig.PORT}`);
    MongoDBConfig();
})