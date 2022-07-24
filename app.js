const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    var options = { 
        weekday: "long", 
        day: "numeric", 
        month: "long"
    }
  var today = new Date();
  var dayName = today.toLocaleDateString("en-US", options);

  res.render("list", { dayName: dayName });
});

app.post("/", function(req) {
    var newListItem = req.body.newListItem;
    console.log(newListItem); 
})

app.listen(port, function () {
  console.log("Server is listening on port " + port);
});