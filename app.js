const path = require("path");
const express = require("express");

app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", "./public");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

module.exports = app;
