const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

// JSON Parser
app.use(express.json({ extended: false }));

// Serve static assets
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Render ejs views
app.set("view engine", "ejs");

// home route
app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
