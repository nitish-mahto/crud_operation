const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Done!");
  })
  .catch((err) => {
    console.log("Error : " + err.message);
  });
