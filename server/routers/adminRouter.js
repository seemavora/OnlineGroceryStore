const router = require("express").Router();
const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try{
    const {email, password, passwordVerify, adminCode} = req.body;
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
    if (adminCode != 'frankbutt') {
      return res.status(400).json({ errorMessage: "Incorrect Admin Code." }); //400 = bad request
    }

    const existingAdmin = await Admin.findOne({email});
    if (existingAdmin) {
      return res.status(400).json({ errorMessage: "Account with this email exists." }); //400 = bad request   
    }

     // hashing the password
    const salt = await bcrypt.genSalt(); //creates random string of numbers
    const passwordHash = await bcrypt.hash(password,salt);

    //save a new admin account to database
    const newAdmin = new Admin({email, passwordHash});
    const savedAdmin = await newAdmin.save();

    //log-in the admin
    const token = jwt.sign({admin: savedAdmin._id,}, process.env.JWT_SECRET);
    
    //sign cookie to send as a HTTP-only cookie
  }catch(err){
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;