$(document).ready(() => {
  // const moment = require("moment");
  // Create "current date" format
  const date = moment().format("MM-DD-YYYY");
  console.log(date);
  $("#currentDay").text(date);
  
  // 
  // var todo = [];
  // var workhours = 9;
  // $(".save-btn").click(function(){
  //   for(i = 0; i < workhours; i++) {
  //     todo.append($(this).val());
  //   console.log(todo); 
  //   }
  // })
  $(".btn").click( function(){
    var input8 = $("#input8").val();
    var input9 = $("#input9").val();
    var input10 = $("#input10").val();
    var input11 = $("#input11").val();
    var input12 = $("#input12").val();
    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    var input3 = $("#input3").val();
    var input4 = $("#input4").val();
    var input5 = $("#input5").val();

    var workday = [input8, input9, input10, input11, input12,
    input1, input2, input3, input4, input5];

    localStorage.setItem("workday", JSON.stringify(workday));
  })

  console.log(localStorage);



//   $("#timeblock").append($("<div>").addClass("cardbody").text("Hi"));
//   .attr({id:"timeCard", class":"card-section"}));
  // eslint-disable-next-line no-unused-vars
  
//   displayTime() => {
//     for(i = 0; i<workhours; i++) {
//         $("#timeblock").append($());
//     };
// }
});