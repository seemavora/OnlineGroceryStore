const router = require("express").Router();
const Item = require('../models/itemModel');
const auth = require("../middleware/auth");

router.post("/",auth, async(req, res) => { //auth function addes middleware, first run request to auth
  try{
    const {title, weight, price, quantity, description, count} = req.body;
    const newItem = new Item({
      title,weight,price, quantity, description, count
    });
    if (!title || !weight || !price || !quantity || !description) {
      return res.status(400).json({ errorMessage: "Please enter all required fields." }); //400 = bad request
    }
    // count = 1;
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

router.delete("/deleteItem", auth, async(req, res) =>{
  try{
    const { title } = req.body;
    const existingItem = await Item.findOne({ title });
    // const newItem = new Item({
    //   title,weight,price, quantity, description
    // });
    const savedItem =  await existingItem.delete({title});

    res.json(savedItem);
  }catch(err){
    console.error(err);
    res.status(500).send();
  }
})
module.exports = router;