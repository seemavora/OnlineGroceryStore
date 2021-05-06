const router = require("express").Router();
const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/",async (req, res) =>{

  try{
    const {email, password, passwordVerify, accessCode } = req.body;

    //validation
    if (!email || !password || !passwordVerify || !accessCode) {
      return res.status(400).json({ errorMessage: "Please enter all required fields." }); //400 = bad request
    }
    if (password.length < 6) {
      return res.status(400).json({ errorMessage: "Please enter a password of at least 6 characters." }); //400 = bad request
    }
    if (password != passwordVerify) {
      return res.status(400).json({ errorMessage: "Please enter same password twice." }); //400 = bad request
    }
    if (accessCode != "frankbutt") {
      return res.status(400).json({ errorMessage: "Please enter same password twice." }); //400 = bad request
    }
    const existingAdmin = await Admin.findOne({ email });// checking if that admin already exists
    if (existingAdmin) {
      return res.status(400).json({ errorMessage: "Account with this email exists." }); //400 = bad request   
    }

      // hashing the password
      const salt = await bcrypt.genSalt(); //creates random string of numbers
      const passwordHash = await bcrypt.hash(password,salt);

      //save a new admin account to database
      const newAdmin = new Admin({email, passwordHash, accessCode});
      const savedAdmin = await newAdmin.save();
  
      //log-in the admin
      const token = jwt.sign({admin: savedAdmin._id,}, process.env.JWT_SECRET);

     //sign cookie to send as a HTTP-only cookie
     res.cookie("token", token,{
      httpOnly:true,
    }).send();
  }catch(err){
    console.error(err);
    res.status(500).send();
  }
});

//login
router.post("/adminlogin", async(req, res) =>{
  try{
    const {email, password} = req.body;

    // validate
    if(!email || !password){
      return res.status(400).json({errorMessage: "Please enter all required fields."});
    }
    const existingAdmin = await Admin.findOne({email});
    if(!existingAdmin){
      return res.status(401).json({errorMessage: "Wrong email or password."}); // 401 = unauthorized
    }
    const passwordCorrect = await bcrypt.compare(password, existingAdmin.passwordHash);
    if(!passwordCorrect){
      return res.status(401).json({errorMessage: "Wrong email or password."});
    }

 //log-in the user
 const token = jwt.sign({user: existingAdmin._id,}, process.env.JWT_SECRET);
    
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
router.get("/adminlogout", (req, res) =>{
  res.cookie("token","",{
    httpOnly : true,
    expires: new Date(0)
  }).send();
});

//checks if user is loggedin
router.get("/adminloggedIn", (req, res) =>{
  try{
    //trying to read cookie from request (See if authorized)
    const token = req.cookies.token; //object to store cookies
    if(!token){
      return res.status(200).json(false); //checks if user is logged in
    }
    jwt.verify(token, process.env.JWT_SECRET);//returns string/obj compares token to password, if token hasnt been created throw an error
    res.send(true);

  }catch(err){
    console.error(err);
    res.status(200).json(false);
  }
});

module.exports = router;