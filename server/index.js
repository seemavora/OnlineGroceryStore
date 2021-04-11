const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); //reads env file and creates process.env environment var

//setting up the server
const app = express();
const PORT = process.env.PORT || 5000; // the process.env will be used during deployement
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json()); //applies the router for all requests that are not explicitly specified

//conection to mongoDB
mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  });

//set up routes
app.use("/auth", require("./routers/userRouter")); // app.use lets you run functions at certain paths
// line above creates middleware