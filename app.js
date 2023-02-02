const path = require("path");
const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo-list-php",
});

app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", "./public");

app.get("/", (req, res) => {
  connection.query("SELECT * FROM todos", (error, results) => {
    if (error) {
      console.log(error);
    }
    res.render("index.ejs", { todos: results });
  });
});

app.post("/create", (req, res) => {
  const todo = req.body.todo;
  console.log(todo);
  connection.query(
    "INSERT INTO todos (todo) VALUES (?)",
    [todo],
    (error, results) => {
      if (error) {
        console.log(error);
      }
      res.redirect("/");
    }
  );
});

module.exports = app;
