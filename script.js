$(document).ready(() => {

  // Create "current date" format
  const date = moment().format("dddd MM-DD-YYYY, ");
  console.log(date);

  //Display current date
  $("#currentDay").text(date);
  
  //Grab the data from localStorage
  if (localStorage.getItem("workday") != null) {
    var workday = JSON.parse(localStorage.getItem("workday"));

    console.log(workday);

    //Display localStorage data to frontend
    $("#input8").val(workday[0]);
    $("#input9").val(workday[1]);
    $("#input10").val(workday[2]);
    $("#input11").val(workday[3]);
    $("#input12").val(workday[4]);
    $("#input13").val(workday[5]);
    $("#input14").val(workday[6]);
    $("#input15").val(workday[7]);
    $("#input16").val(workday[8]);
    $("#input17").val(workday[9]);

  };
  //get the current time in a integer value of 1-24 to compare to timeblock
  const currentTime = moment().hour();
  console.log(currentTime);
  console.log(parseInt($("#8").attr("id")));
  
  //get the id attribute for each timeblock and stores it as integer
  var hour8 = parseInt($("#8").attr("id"));
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
  
  //add the design based on blocks relation to current time
  colorcord(workhours);
  function colorcord(timearr){
    for(i=0; i<timearr.length; i++){
      if (timearr[i] === currentTime){
        $("#"+ timearr[i].toString()).siblings(".input-group-text").addClass("present");
      } else if (timearr[i] < currentTime){
        $("#"+ timearr[i].toString()).siblings(".input-group-text").addClass("past");
      } else if (timearr[i] > currentTime){
        $("#"+ timearr[i].toString()).siblings(".input-group-text").addClass("future");
      };
    };
  };

  //Save each hour's "to-do" per save event
  $(".btn").click( function(){
    var input8 = $("#input8").val();
    var input9 = $("#input9").val();
    var input10 = $("#input10").val();
    var input11 = $("#input11").val();
    var input12 = $("#input12").val();
    var input13 = $("#input13").val();
    var input14 = $("#input14").val();
    var input15 = $("#input15").val();
    var input16 = $("#input16").val();
    var input17 = $("#input17").val();

    //store all each to-do var in obj
    var workday = [input8, input9, input10, input11, input12,
    input13, input14, input15, input16, input17];

    //save data to localStorage
    localStorage.setItem("workday", JSON.stringify(workday));
  });


});