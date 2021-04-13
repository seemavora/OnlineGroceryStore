const jwt = require("jsonwebtoken");

function auth(req, res, next){
  try{
    //trying to read cookie from request (See if authorized)
    const token = req.cookies.token; //object to store cookies

    if(!token){
      return res.status(401).json({errorMessage: "Unauthorized"}); //checks if user is logged in
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);//returns string/obj compares token to password, if token hasnt been created throw an error
    req.user = verified.user; //read the id from the itemRouter

    next();//exists out of auth middle wear and goes back to customer Router
  }catch(err){
    console.error(err);
    res.status(401).json({errorMessage: "Unauthorized"});
  }
}

module.exports = auth;