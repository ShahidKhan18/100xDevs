/*
* Todo{
   title:string,
   description:string;
   completed:boolean;
}
*/

const mongoose=require('mongoose');
const { boolean } = require('zod');

mongoose
  .connect(
    "mongodb+srv://shahidseran786:V55LgKmueBn5gqM8@cluster0.brwganl.mongodb.net/todo-app"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Error connecting to MongoDB", err));


const schema = new mongoose.Schema({
  title: String,
  description: String,
  completed:Boolean
});

const todo=mongoose.model("todos",schema);

module.exports ={
    todo
}