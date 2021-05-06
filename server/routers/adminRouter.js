const router = require("express").Router();
const Admin = require("../models/adminModel");
router.post("/",async (req, res) =>{

  try{
    const {email, password,passwordVerify, accessCode } = req.body;

    //validation
    if (!email || !password || !passwordVerify) {
      return res.status(400).json({ errorMessage: "Please enter all required fields." }); //400 = bad request
    }
    if (password.length < 6) {
      return res.status(400).json({ errorMessage: "Please enter a password of at least 6 characters." }); //400 = bad request
    }
    if (password != passwordVerify) {
      return res.status(400).json({ errorMessage: "Please enter same password twice." }); //400 = bad request
    }
    if (accessCode != "frankbutt") {
      return res.status(400).json({ errorMessage: "Incorrect Access Code" }); //400 = bad request
    }
    const existingAdmin = await Admin.findOne({ email });// checking if that user already exists
    if (existingAdmin) {
      return res.status(400).json({ errorMessage: "Account with this email exists." }); //400 = bad request   
    }

    console.log(existingAdmin);

  }catch(err){
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;