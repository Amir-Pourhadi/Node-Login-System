const express = require("express");
const path = require("path");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

// Run express
const app = express();

// Define port
const port = process.env.PORT || 3000;

// JSON Parser
app.use(express.json({ extended: false }));

// Serve static assets
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Render ejs views
app.set("view engine", "ejs");

// Session
app.use(session({ secret: uuidv4(), resave: false, saveUninitialized: true }));

// Routes
app.use("/route", require("./router"));

// home route
app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

// Listen on port
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
