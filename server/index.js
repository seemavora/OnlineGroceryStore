const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`))
app.get("/test", (req, res) => {

  res.set("It works");
});