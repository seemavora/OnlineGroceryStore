const router = require("express").Router();
const User = require("../models/userModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//configures the router
// registeration
router.post("/", async (req, res) => {

  try {
    const { email, password, passwordVerify } = req.body;

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
    const existingUser = await User.findOne({ email });// checking if that user already exists
    if (existingUser) {
      return res.status(400).json({ errorMessage: "Account with this email exists." }); //400 = bad request   
    }

    // hashing the password
    const salt = await bcrypt.genSalt(); //creates random string of numbers
    const passwordHash = await bcrypt.hash(password,salt);

    //save a new user account to database
    const newUser = new User({email, passwordHash});
    const savedUser = await newUser.save();

    //log-in the user
    const token = jwt.sign({user: savedUser._id,}, process.env.JWT_SECRET);
    
    //sign cookie to send as a HTTP-only cookie
    res.cookie("token", token,{
      httpOnly:true,
    }).send();
  } catch (err) {
    console.error(err);
    res.status(500).send(); // 500 = internal server error
  }

});

//login
router.post("/login", async(req, res) =>{
  try{
    const {email, password} = req.body;

    // validate
    if(!email || !password){
      return res.status(400).json({errorMessage: "Please enter all required fields."});
    }
    const existingUser = await User.findOne({email});
    if(!existingUser){
      return res.status(401).json({errorMessage: "Wrong email or password."}); // 401 = unauthorized
    }
    const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
    if(!passwordCorrect){
      return res.status(401).json({errorMessage: "Wrong email or password."});
    }

 //log-in the user
 const token = jwt.sign({user: existingUser._id,}, process.env.JWT_SECRET);
    
 //sign cookie to send as a HTTP-only cookie
 res.cookie("token", token,{
   httpOnly:true,
 }).send();
  }catch(err){
    console.error(err);
    res.status(500).send(); // 500 = internal server error
  }
});

//logout user
router.get("/logout", (req, res) =>{
  res.cookie("token","",{
    httpOnly : true,
    expires: new Date(0)
  }).send();
});

module.exports = router;