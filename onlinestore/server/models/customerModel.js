const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name:{type:String, rquired:true}
});

const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;