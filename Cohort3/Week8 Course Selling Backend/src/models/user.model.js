const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
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

userSchema.methods.createJWTToken = function (payload, secret, duration) {
  return jwt.sign(payload, secret, {
    expiresIn: duration
  })
}

const User = mongoose.model('User', userSchema);
module.exports = User;