const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// JSON Parser
app.use(express.json({ extended: false }));

// Render ejs views
app.set("view engine", "ejs");

// home route
app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
