console.log("...help.js loaded");

function toggleMenu(){
$('#help').on('click', function(){
  $('#help-modal').toggle();
});
}

$(function(){
  toggleMenu();
});
