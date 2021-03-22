const router = require("express").Router();
const User = require("../models/userModel");

router.post("/", async (req, res) => {
  try{
    const {email, password, passwordVerify} = req.body;
    
    //validation
    if(!email || !password || !passwordVerify){
      return res.status(400).json({errorMessage: "Please enter all required fields."});
    }
    if(password.length < 6){
      return res.status(400).json({errorMessage: "Please enter password of at least 6 characters"});
    }
    if(password !== passwordVerify){
      return res.status(400).json({errorMessage: "Passwords do not match."});
    }

    const existingUser = await User.findOne({email}); // results in a function
    if(existingUser){
      return res.status(400).json({errorMessage: "Account with this email already exists"});
    }
  }catch(err){
    console.error(err);
    res.status(500).send();
  }
});
module.exports = router;