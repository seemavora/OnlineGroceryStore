const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
// sets up server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
<<<<<<< HEAD
=======
app.use(express.json()); // express allows you to read from json, if path is not specified
>>>>>>> 3de2d127a7f8037c659d45b5b92ac249fe4826c2

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3de2d127a7f8037c659d45b5b92ac249fe4826c2
// set up routes

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));


<<<<<<< HEAD
>>>>>>> Adds the Middleware
=======
>>>>>>> 3de2d127a7f8037c659d45b5b92ac249fe4826c2
