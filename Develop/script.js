const moment = require("moment");

// Create "current date" format
const date = moment().format("MM-DD-YYYY");
console.log(date);

$("#currentDate").text(date);
