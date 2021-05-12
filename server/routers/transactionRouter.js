const router = require("express").Router();
const Transaction = require('../models/transactionModel');
const auth = require("../middleware/auth");

router.post("/",auth, async(req, res) => { //auth function addes middleware, first run request to auth
  try{
    const { userEmail, purchaseTotal } = req.body;
    const newTransaction = new Transaction({
       userEmail, purchaseTotal
    });
    // if (!name || !weight || !price || !quantity || !description) {
    //   return res.status(400).json({ errorMessage: "Please enter all required fields." }); //400 = bad request
    // }
    const savedTransaction =  await newTransaction.save();

    res.json(savedTransaction);
  }catch(err){
    console.error(err);
    res.status(500).send();
  }
});

router.get("/", auth, async(req, res) =>{
  try{
    const transactions = await Transaction.find();
    res.json(transactions);
  }catch(err){
    console.error(err);
    res.status(500).send();
  }
});


module.exports = router;