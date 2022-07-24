const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var today = new Date();
  var dayName = today.toLocaleDateString("en-US", options);

  res.render("list", {
    dayName: dayName,
    items: items,
  });
});

app.post("/", function (req, res) {
  var item = req.body.item;
  items.push(item);
  res.redirect("/");
});

app.listen(port, function () {
  console.log("Server is listening on port " + port);
});
