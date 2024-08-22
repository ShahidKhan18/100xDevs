const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());
try {
  mongoose.connect(
    "mongodb+srv://shahidseran786:V55LgKmueBn5gqM8@cluster0.brwganl.mongodb.net/BasicDBTest"
  );
  console.log("DB connection established")
} catch (err) {return console.log("Error in connection of DB :-"+err)}

const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

app.post("/",async(req,res)=>{
  
  const name=req.body.username;
  const email=req.body.email;
  const password = req.body.password;
  
  const userExists= await User.findOne({"email":email})

  console.log(userExists);

  if(userExists){
    return res.status(400).json({message:"User already exists"})
  }


  const user = new User({
    name: name,
    email: email,
    password: password,
  });

  user.save();

  res.json({message:"User created successfully"})

})



app.listen(3000, () => {
  console.log("App listening on port 3000");
});
