const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
// require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());

// We link the router files to make our route easily....
app.use(require('./router/auth'));

const PORT = process.env.PORT;

//middleware
// const middleware = (req, res, next) =>{
//     console.log("This is middleware")
//     next();
// }

// middleware();

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});

app.get("/signup", (req, res) => {
  res.send("Welcome to Registration Page");
});

app.get("/signin", (req, res) => {
  res.send("Welcome Login page");
});

app.listen(PORT, () => {
  console.log(`app listening on port no http://localhost:${PORT}`);
});
