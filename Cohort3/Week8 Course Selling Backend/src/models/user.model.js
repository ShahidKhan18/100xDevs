const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { ENVConfig } = require('../config');
const userSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String
  },
  email: {
    require: true,
    type: String,
    unique: true
  },
  password: {
    require: true,
    type: String,
    select: false // This will not be returned in queries
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  purchasedCourse: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Purchased",
  }],
})

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateJWTTokens = function () {
  
  const accessToken = jwt.sign({_id:this._id}, ENVConfig.JWT_ACCESS_SECRET, {
    expiresIn: "10m"
  })
  const refreshToken = jwt.sign({ _id: this._id }, ENVConfig.JWT_REFRESH_SECRET, {
    expiresIn: "7d"
  })
  return {
    accessToken,
    refreshToken
  } 
}

const User = mongoose.model('User', userSchema);
module.exports = User;