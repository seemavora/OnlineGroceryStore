const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title:{type: String, required: true},
  price:{ type:Number, require:true},
  weight:{type: Number, required:true},
  quantity:{type:Number, require:true},
  description:{type:String, require:true},
  count: {type:Number, required:false}
});
const Item = mongoose.model("item", itemSchema);
module.exports = Item;