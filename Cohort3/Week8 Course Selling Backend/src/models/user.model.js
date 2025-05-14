const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String,
        unique:true
    },
    password:{
        require:true,
        type:String
    },

})

const User=mongoose.model('User',userSchema);
module.exports=User;