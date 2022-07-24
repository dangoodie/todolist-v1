const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const port = 3000;
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let day = date.getDay();
  res.render("list", { listTitle: day, items: items });
});

app.post("/", function (req, res) {
  let item = req.body.item;
  
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", items: workItems });
});

app.get("/about", function (req, res){
    res.render("about");
}) 

app.listen(port, function () {
  console.log("Server is listening on port " + port);
});
