const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let today = new Date();
  let dayName = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: dayName, items: items });
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

app.post("/work", function (req, res) {
  let item = req.body.item;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(port, function () {
  console.log("Server is listening on port " + port);
});
