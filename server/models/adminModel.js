const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {type:String, require:true},
  passwordHash: {type:String, require:true},
  accessCode: {type:String, required: true}

});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;