const mongoose = require('mongoose');

const adminSchema=new mongoose.Schema({
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
    }

})

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

adminSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Admin=mongoose.model('Admin',adminSchema);
module.exports = Admin;