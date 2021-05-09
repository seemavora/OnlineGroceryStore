const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name:{type: String, required: true},
  weight:{type: String, required:true},
  price:{ type:String, require:true},
  quantity:{type:String, require:true},
  description:{type:String, require:true}
});

const Item = mongoose.model("item", itemSchema);
module.exports = Item;