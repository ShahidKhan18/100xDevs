const mongoose = require('mongoose');
const  ENVConfig  = require('./ENV.config');

const mongoDBConfig=async()=>{
    
    try {
         const connection=await  mongoose.connect(ENVConfig.MONGO_URI)
           console.log("MongoDB connected successfully",connection.connection.host,connection.connection.port);
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports=mongoDBConfig;

