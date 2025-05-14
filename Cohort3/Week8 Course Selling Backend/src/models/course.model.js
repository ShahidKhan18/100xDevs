const mongoose = require("mongoose");



const courseSchema = new mongoose.Schema({
  title: {
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
  price:{
    require: true,
    type: Number,
  },
  creatorId:{
    require: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  imageURL: {
    require: true,
    type: String,
  }
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
