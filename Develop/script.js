// using moment.js to display current date
$("#currentDay").text(moment().format("MMMM Do YYYY,"))


var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// function for saving schedule to localStorage
$(".saveBtn").on("click", function() {
    
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    
    localStorage.setItem(time,value);
});

// function to show color timeblocks based on current time
function updateHour() {
  
    
  var currentHour = moment().hours();

  // loop over time blocks
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    // updating color based on time 
    if (blockHour < currentHour) {
     $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } 
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } 
     else{
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

updateHour();


// getting from local storage
$("9.description").val(localStorage.getItem("9")); 
$("10.description").val(localStorage.getItem("10")); 
$("11.description").val(localStorage.getItem("11")); 
$("12.description").val(localStorage.getItem("12"));
$("13.description").val(localStorage.getItem("13"));
$("14.description").val(localStorage.getItem("14"));
$("15.description").val(localStorage.getItem("15"));
$("16.description").val(localStorage.getItem("16"));
$("17.description").val(localStorage.getItem("17"));


