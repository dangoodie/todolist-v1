module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate () { 
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    return day;
 }

 function getDay() {
   let options = {
     weekday: "long",
   };
   let today = new Date();
   let day = today.toLocaleDateString("en-US", options);
   return day;
 }