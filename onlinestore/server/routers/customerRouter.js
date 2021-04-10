const router = require("express").Router();
const Customer = require("../models/customerModel");

router.post("/", async(req,res) => {
  try{
    const {name} = req.body;

    const newCustomer = new Customer({
      name
    });
    const savedCustomer = await newCustomer.save();

    res.json(savedCustomer);
  }catch(err){
    console.error(err);
    req.status(500).send();
  }
});
module.exports = router;