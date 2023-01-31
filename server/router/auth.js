const express = require("express");
const router = express.Router();

// route.get('/', (req, res) => {
//     res.send("Hello, world!");
// });

require("../db/conn");
const User = require("../model/UserSchema");

router.get("/", (req, res) => {
  res.send("Home Page of auth.js");
});

/* Promises */

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Please enter all required fields " });
//   }

//   User.findOne({ email: email }).then((userExits) => {
//     if (userExits) {
//       return res.status(422).json({ error: "User already Exists " });
//     }

//     const user = new User({ name, email, phone, work, password, cpassword });
//     // res.json(user);
//     user
//       .save()
//       .then(() => {
//         res
//           .status(200)
//           .json({ message: "User saved successfully" })
//           .catch((err) => {
//             res.status(500).json({ error_Inserting: err });
//           });
//       })
//       .catch((err) => {
//         console.log("error_CatchBlock : " + err);
//       });
//   });
// });

/* Async-await */

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please enter all required fields " });
  }

  try {
    const userExits = await User.findOne({ email: email });

    if (userExits) {
      return res.status(422).json({ error: "User already exists" });
    }

    // const user = new User({ name, email, phone, work, password, cpassword });
    const user = new User({ name, email, phone, work, password, cpassword });

    const userRegister = await user.save();
    res.status(201).json({ message: "User register successfully" });

    // if (userRegister) {
    //   res.status(201).json({ message: "User register successfully" });
    // } else {
    //   res.status(500).json({ error: "Failed to registered" });
    // }
  } catch (error) {
    console.log("Error Async: " + error);
  }
});

module.exports = router;
