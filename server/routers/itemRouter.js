const router = require("express").Router();
const Item = require('../models/itemModel');
const auth = require("../middleware/auth");

router.post("/",auth, async(req, res) => { //auth function addes middleware, first run request to auth
  try{
    const {name, weight, price, quantity, description} = req.body;
    const newItem = new Item({
      name,weight,price, quantity, description
    });
    if (!name || !weight || !price || !quantity || !description) {
      return res.status(400).json({ errorMessage: "Please enter all required fields." }); //400 = bad request
    }
    const savedItem =  await newItem.save();

    res.json(savedItem);
  }catch(err){
    console.error(err);
    res.status(500).send();
  }
});

router.get("/", auth, async(req, res) =>{
  try{
    const items = await Item.find();
    res.json(items);
  }catch(err){
    console.error(err);
    res.status(500).send();
  }
});
module.exports = router;