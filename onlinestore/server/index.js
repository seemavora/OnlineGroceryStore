const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
// sets up server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
app.use(express.json()); // express allows you to read from json, if path is not specified

// use the script to check if your server has been setup
// app.get("/test", (req, res) => {

//   res.send("hello");
// });


//connect to mongoDB
mongoose.connect(process.env.MDB_CONNECT,{
  useNewUrlParser: true,
  useUnifiedTopology:true,
}, (err) => {
  if(err) return console.error(err);
  console.log("Connected to MongoDB");
});

// set up routes

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));


