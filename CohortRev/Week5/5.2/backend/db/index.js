const mongoose=require('mongoose');
try {
    mongoose.connect(
      "mongodb+srv://shahidseran786:V55LgKmueBn5gqM8@cluster0.brwganl.mongodb.net/TODOapp"
    );
    console.log("MongoDB Connection established")
} catch (error) {
    console.log("An error occurred while connecting to MongoDB");
}

const TodoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});


const TODOs=mongoose.model("TODOs");
module.exports={
    TODOs,
};