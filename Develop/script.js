$(document).ready(() => {
  // const moment = require("moment");
  // Create "current date" format
  const date = moment().format("MM-DD-YYYY");
  console.log(date);
  $("#currentDay").text(date);
  
  $("#save8").click(function() {
    event.preventDefault();

    var todo = $("#input8").val();
    console.log(todo);
  });



//   $("#timeblock").append($("<div>").addClass("cardbody").text("Hi"));
//   .attr({id:"timeCard", class":"card-section"}));
  // eslint-disable-next-line no-unused-vars
  const workhours = 9;
  
//   displayTime() => {
//     for(i = 0; i<workhours; i++) {
//         $("#timeblock").append($());
//     };
// }
});