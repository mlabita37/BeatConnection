console.log("...help.js loaded");

function toggleMenu(){
$('#help').on('click', function(){
  $('#help-modal').toggle();
});
}

function closeSignup(){
$(".close.help").on("click", function() {
  console.log("close help is working!");
  $("#help-modal").toggle();
  $("#title").css('color', 'white');
});
}

$(function(){
  toggleMenu();
});
