//what a user looks like in the database
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email:{type:String, required: true}, //allows you to force user to enter email
  passwordHash:{type:String, required: true},
  isAdmin:{type:String, require:true}
});

const User = mongoose.model("user", userSchema);
module.exports = User;