const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var dayName = getDateName(today.getDay());

  res.render("list", { dayName: dayName });
});

app.listen(port, function () {
  console.log("Server is listening on port " + port);
});

function getDateName(dayInt) {
  var output = "";

  switch (dayInt) {
    case 0:
      output = "Sunday";
      break;
    case 1:
      output = "Monday";
      break;
    case 2:
      output = "Tuesday";
      break;
    case 3:
      output = "Wednesday";
      break;
    case 4:
      output = "Thursday";
      break;
    case 5:
      output = "Friday";
      break;
    case 6:
      output = "Saturday";
      break;
    default:
      console.log("Error: current day is equal to` " + dayInt);
      break;
  }
  return output;
}
