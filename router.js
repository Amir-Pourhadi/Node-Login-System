const express = require("express");
const router = express.Router();

const credential = {
  email: "admin",
  password: "admin123",
};

// Login User
router.post("/login", (req, res) => {
  if (req.body.email === credential.email && req.body.password === credential.password) {
    req.session.user = req.body.email;
    // res.redirect("/dashboard");
    res.end("Login Success");
  } else {
    res.send("Invalid Credentials");
  }
});

module.exports = router;