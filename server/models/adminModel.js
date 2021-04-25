//what a user looks like in the database
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email:{type:String, required: true}, //allows you to force admin to enter email
  passwordHash:{type:String, required: true},
  adminCode:{type:String, require:true},
});

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;