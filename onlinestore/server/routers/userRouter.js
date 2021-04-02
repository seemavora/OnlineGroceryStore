const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
router.post("/", async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    //validation
    if (!email || !password || !passwordVerify) {
      return res.status(400).json({ errorMessage: "Please enter all required fields." });
    }
    if (password.length < 6) {
      return res.status(400).json({ errorMessage: "Please enter password of at least 6 characters" });
    }
    if (password !== passwordVerify) {
      return res.status(400).json({ errorMessage: "Passwords do not match." });
    }

    const existingUser = await User.findOne({ email }); // results in a function
    if (existingUser) {
      return res.status(400).json({ errorMessage: "Account with this email already exists" });
    }

    //hashing the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //save a new user account to database
    const newUser = new User({
      email, passwordHash
    });
    const savedUser = await newUser.save();

    //sign the token -- saving user
    const token = jwt.sign({
      user: savedUser._id
    },
      process.env.JWT_SECRET
    );
    
    //send the token in a HTTP cookie
    res.cookie("token", token,{
      httpOnly:true,
    }).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//post
router.post("/login", async(req,res) =>{
  try{
    const{email, password} = req.body;

    // validate
    if (!email || !password) {
      return res.status(400).json({ errorMessage: "Please enter all required fields." });
    }
    const existingUser= await User.findOne({email});
    if(!existingUser){
        return res.status(401).json({ errorMessage: "Wrong email or password." });
    }
    const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
    if(!passwordCorrect){
      return res.status(401).json({ errorMessage: "Wrong email or password." });
    }
     //sign the token -- saving user
     const token = jwt.sign({
      user: existingUser._id
    },
      process.env.JWT_SECRET
    );
    
    //send the token in a HTTP cookie
    res.cookie("token", token,{
      httpOnly:true,
    }).send();

  }catch(err){
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) =>{
  res.cookie("token","",{
    httpOnly:true,
    expires:new Date(0)
  }).send();
});
module.exports = router;