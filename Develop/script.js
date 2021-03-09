$(document).ready(() => {

  // Create "current date" format
  const date = moment().format("dddd MM-DD-YYYY, ");
  console.log(date);

  //Display current date
  $("#currentDay").text(date);
  
  //Grab the data from localStorage
  var workday = JSON.parse(localStorage.getItem("workday"));
  console.log(workday);

  //Display localStorage data to frontend
  $("#input8").attr("placeholder", workday[0]);
  $("#input9").attr("placeholder", workday[1]);
  $("#input10").attr("placeholder", workday[2]);
  $("#input11").attr("placeholder", workday[3]);
  $("#input12").attr("placeholder", workday[4]);
  $("#input13").attr("placeholder", workday[5]);
  $("#input14").attr("placeholder", workday[6]);
  $("#input15").attr("placeholder", workday[7]);
  $("#input16").attr("placeholder", workday[8]);
  $("#input17").attr("placeholder", workday[9]);

  const currentTime = moment().hour();
  console.log(currentTime);
  console.log(parseInt($("#2").attr("id")));

  var hour8 = parseInt($("#3").attr("id"));
  var hour9 = parseInt($("#9").attr("id"));
  var hour10 = parseInt($("#10").attr("id"));
  var hour11 = parseInt($("#11").attr("id"));
  var hour12 = parseInt($("#12").attr("id"));
  var hour13 = parseInt($("#13").attr("id"));
  var hour14 = parseInt($("#14").attr("id"));
  var hour15 = parseInt($("#15").attr("id"));
  var hour16 = parseInt($("#16").attr("id"));
  var hour17 = parseInt($("#17").attr("id"));

  var workhours = [hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

  for(i=0; i<workhours.length(); i++){
    if (i == currentTime){
      
    }
  }
  // function colorcord(timearr){
  //   for (i=0; i<workday; i++) {
  //     if (timearr[i].val().isSame(date, "hour")){
  //       timearr[i].addClass("present");
  //     // } else if ()
  //     };
  //   };
  // };

  //Save each hour's "to-do" per save event
  $(".btn").click( function(){
    var input8 = $("#input8").val();
    var input9 = $("#input9").val();
    var input10 = $("#input10").val();
    var input11 = $("#input11").val();
    var input12 = $("#input12").val();
    var input13 = $("#input1").val();
    var input14 = $("#input14").val();
    var input15 = $("#input15").val();
    var input16 = $("#input4").val();
    var input17 = $("#input5").val();

    //store all each to-do var in obj
    var workday = [input8, input9, input10, input11, input12,
    input13, input4, input15, input16, input17];

    //save data to localStorage
    localStorage.setItem("workday", JSON.stringify(workday));
  });


});