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
    res.redirect("/route/dashboard");
  } else {
    res.send("Invalid Email or Password");
  }
});

// Dashboard Route
router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user });
  } else {
    res.send("Unauthorize User");
  }
});

// Logout User
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.send("Error");
    } else {
      res.render("base", { title: "Logout", logout: true });
    }
  });
});

module.exports = router;
