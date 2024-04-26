//- > MONGODB SetUp

const mongoose = require("mongoose");

//+ Connecting to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/user-app")
  .then(() => {
    console.log("Connecting to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB ", err);
  });

//+ Schema
const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//+ Collection Created with Schema (Table)
const User = mongoose.model("User", schema);

// ----------------------------------------------------------------//

// -> Express Routes for MongoDB

const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// - CRUD Operations
// + Create a New User

app.post("/create", async (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  try {
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    res.status(404).send("Error in creating User: " + err.message);
  }
});


//+ Read all the Users
app.get("/users",async(req,res)=>{

  try{
   const allUsers=await User.find()
   res.json({...allUsers})
  }catch(err){
    res.status(404).send("Error in getting users ");
  }
})

//+ Read user by Specific ID,name etc

app.get("/user/:name",async(req,res)=>{
  const name=req.params['name'];
  try{
     const getUser=await User.findOne({name:name})
     res.json(getUser)
  }catch(err){
    res.status(404).send("Error in getting user of name " + name)
  }
})

//+ Update user by Specific ID,name etc

app.put("/user/:name",async(req,res)=>{
   const name=req.params['name'];
   const updatedName=req.body.updatedName;
   try{
     await User.findOneAndUpdate({name:name},{name:updatedName})
     res.send("Name updated")
   }catch(err){
      res.status(404).send("Error in getting to Update name ")
   }
})

//+ Delete user

app.delete("/user/:id",async(req,res)=>{
  const id=req.params.id;
  try {
    await User.findByIdAndDelete(id)
    res.send("User deleted");
  } catch (error) {
    res.status(404).send("Error deleting user")
  }

})


app.listen(3000, () => {
  console.log("App listening on Port 3000");
});
