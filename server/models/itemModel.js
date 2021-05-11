const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name:{type: String, required: true},
  weight:{type: Number, required:true},
  price:{ type:Number, require:true},
  quantity:{type:Number, require:true},
  description:{type:String, require:true}
});

const Item = mongoose.model("item", itemSchema);
module.exports = Item;