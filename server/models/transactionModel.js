const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  // cart :[{ type: String, required: true}],
  userEmail: {type: String, required: true},
  purchaseTotal: {type: Number, required: true}
});

const Transaction = mongoose.model("transaction", transactionSchema);
module.exports = Transaction; 