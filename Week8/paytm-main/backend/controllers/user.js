const zod=require('zod');
const { userSchema } = require('../zodValidation');
const { User } = require('../DB/db');
const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require('../config');

const userController = {
  helloWorldController: (req, res) => {
    return res.send("Hello World");
  },
  signUp:async (req, res) => {
    const { username, firstName, lastName, password } = req.body;
    const parseData=userSchema.safeParse({
        username,
        firstName,
        lastName,
        password
    })

    if(!parseData.success)
        return res.status(411).json({
          message: "Incorrect inputs"
    });

    const userExist=await User.findOne({username});
    if(userExist){
       return res.status(411).json({
         message: "Email already taken",
       }); 
    }
    
    const user =await User.create({
      username,
      firstName,
      lastName,
      password,
    });
    
    const userId=user._id;
    const jwtToken = jwt.sign({ userId }, JWT_SECRET);

    return res.json({
      message: "User created successfully",
      token: jwtToken,
    });

  },


  
};

module.exports = userController;
