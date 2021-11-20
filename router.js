const express = require("express");
const router = express.Router();

const credential = {
  email: "admin@gmail.com",
  password: "admin123",
};

// Login User
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === credential.email && password === credential.password) {
    req.session.user = email;
    res.redirect("/dashboard");
  } else {
    res.send("Invalid Credentials");
  }
});

module.exports = router;
