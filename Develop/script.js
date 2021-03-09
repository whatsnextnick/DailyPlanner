$(document).ready(() => {

  // Create "current date" format
  const date = moment().format("MM-DD-YYYY");
  console.log(date);

  //Display current date
  $("#currentDay").text(date);
  
  //Grab the data from localStorage
  var workday = JSON.parse(localStorage.getItem("workday"));
  console.log(workday);

  //Display localStorage data to 
  $("#input8").attr("placeholder", workday[0]);
  $("#input9").attr("placeholder", workday[1]);
  $("#input10").attr("placeholder", workday[2]);
  $("#input11").attr("placeholder", workday[3]);
  $("#input12").attr("placeholder", workday[4]);
  $("#input1").attr("placeholder", workday[5]);
  $("#input2").attr("placeholder", workday[6]);
  $("#input3").attr("placeholder", workday[7]);
  $("#input4").attr("placeholder", workday[8]);
  $("#input5").attr("placeholder", workday[9]);
  function colorcord(timevar){
    for (i=0; i<workday; i++) {
      if (timevar[i].val() == time){
        i.addClass("present")
      else if 
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
    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    var input3 = $("#input3").val();
    var input4 = $("#input4").val();
    var input5 = $("#input5").val();

    //store all each to-do var in obj
    var workday = [input8, input9, input10, input11, input12,
    input1, input2, input3, input4, input5];

    //save data to localStorage
    localStorage.setItem("workday", JSON.stringify(workday));
  });


});