console.log("...meter.js loaded");

// isSixteenths
var sixteenths = false;
function isSixteenths(){
  $('#sixteenths').click(function(){
    if (eighths === true || quarters === true){
      eighths = false;
      $('#eighths').css('background-color', 'deepskyblue');
      $('#quarters').css('background-color', 'deepskyblue');
    }
    sixteenths = !sixteenths;
    if (sixteenths == true){
      $('#sixteenths').css('background-color', 'lime');
    }else {
      $('#sixteenths').css('background-color', 'deepskyblue');
    }
  });
}

// isEighths
var eighths = false;
function isEighths(){
  $('#eighths').click(function(){
    if (sixteenths === true || quarters === true){
      sixteenths = false;
      quarters = false;
      $('#sixteenths').css('background-color', 'deepskyblue');
      $('#quarters').css('background-color', 'deepskyblue');
    }
    eighths = !eighths;
    console.log('eighths working');
    if (eighths == true){
      $('#eighths').css('background-color', 'lime');
    }else $('#eighths').css('background-color', 'deepskyblue');
  });
}

// isQuarters
var quarters = true;
function isQuarters(){
  $('#quarters').click(function(){
    if (sixteenths === true || eighths === true){
      sixteenths = false;
      eighths = false;
      $('#sixteenths').css('background-color', 'deepskyblue');
      $('#eighths').css('background-color', 'deepskyblue');
    }
    quarters = true;
    if (quarters == true){
      $('#quarters').css('background-color', 'lime');
    }else $('#quarters').css('background-color', 'deepskyblue');
  });
}
