console.log('...controls.js loaded');

// Get the selected tempo
function getTempo(){
  var tempo = $('#tempo').val();
  return tempo;
}

// Find the value of each note
function getValue(){
  $('.seq').click(function(){
    var value = $(this).val();
    if (value == 0){
    $(this).css('background-color', "limegreen");
    $(this).val(1);
  }else{
    $(this).css('background-color', "white");
    $(this).val(0);
  }
  console.log($(this).val());
  });
};


// Play Loop
var play = 0;
var interval;
function playLoop(){
  $('#playLoop').click(function(){
      if (play === 0){
      play += 1;
      var time = getTime();
      myLoop(bufferLoader.bufferList);
      interval = setInterval(function(){
      myLoop(bufferLoader.bufferList);
    }, time);
  }else if (play === 1){
        console.log("Already playing!");
    }

});
};

// Calculate interval time based on tempo
function getTime(){
  var tempo = getTempo();
  var bar = 8/tempo;
  var time = bar * 60; // Mulitply bar by 60 seconds
  time = time * 2000;
  return time;
}

// Stop loop
function stopLoop(){
  $('#stopLoop').click(function(){
    play = 0;
    console.log('Stop button working');
    clearInterval(interval);
    // stopSound();
  });
}

//---------- SELECT ALL OPERATIONS ----------//

// Highlight all 16 cymbal notes
function allCymbal(){
  var bool = false;
  $('#allCymbal').click(function(){
    console.log("Cymbal working");
    bool = !bool;
    var cymbal = $('.cymbal');
    if (bool == true){
    for(i=0; i < cymbal.length; i++){
      $(cymbal).val(1);
      $(cymbal).css('background-color', 'limegreen');
      $('#allCymbal').css('color', 'limegreen');
    }
  }else {
    $(cymbal).val(0);
    $(cymbal).css('background-color', 'white');
    $('#allCymbal').css('color', 'darkorange');
  }
});
}

// Highlight all 16 tamborine notes
function allTamb(){
  var bool = false;
  $('#allTamb').click(function(){
    bool = !bool;
    var tamb = $('.tamb');
    if (bool == true){
    for(i=0; i < tamb.length; i++){
      $(tamb).val(1);
      $(tamb).css('background-color', 'limegreen');
      $('#allTamb').css('color', 'limegreen');
    }
  }else {
    $(tamb).val(0);
    $(tamb).css('background-color', 'white');
    $('#allTamb').css('color', 'darkorange');
  }
});
}

// Highlight all 16 percussion notes
function allPerc(){
  var bool = false;
  $('#allPerc').click(function(){
    console.log("All perc working");
    bool = !bool;
    var perc = $('.perc');
    if (bool == true){
    for(i=0; i < perc.length; i++){
      $(perc).val(1);
      $(perc).css('background-color', 'limegreen');
      $('#allPerc').css('color', 'limegreen');
    }
  }else {
    $(perc).val(0);
    $(perc).css('background-color', 'white');
    $('#allPerc').css('color', 'darkorange');
  }
});
}

// Select all 16 hi-hat notes
function allHiHat(){
  var bool = false;
  $('#allHiHat').click(function(){
    bool = !bool;
    var hihat = $('.hihat');
    if (bool == true){
    for(i=0; i < hihat.length; i++){
      $(hihat).val(1);
      $(hihat).css('background-color', 'limegreen');
      $('#allHiHat').css('color', 'limegreen');
    }
  }else {
    $(hihat).val(0);
    $(hihat).css('background-color', 'white');
    $('#allHiHat').css('color', 'darkorange');
  }
});
}

// Select all 16 snare notes
function allSnare(){
  var bool = false;
  $('#allSnare').click(function(){
    bool = !bool;
    var snare = $('.snare');
    if (bool == true){
    for(i=0; i < snare.length; i++){
      $(snare).val(1);
      $(snare).css('background-color', 'limegreen');
      $('#allSnare').css('color', 'limegreen');
    }
  }else {
    $(snare).val(0);
    $(snare).css('background-color', 'white');
    $('#allSnare').css('color', 'darkorange');
  }
});
}

// Select all 16 kick notes
function allKick(){
  var bool = false;
  $('#allKick').click(function(){
    bool = !bool;
    var kick = $('.kick');
    if (bool == true){
    for(i=0; i < kick.length; i++){
      $(kick).val(1);
      $(kick).css('background-color', 'limegreen');
      $('#allKick').css('color', 'limegreen');
    }
  }else {
    $(kick).val(0);
    $(kick).css('background-color', 'white');
    $('#allKick').css('color', 'darkorange');
  }
});
}

// Clear all notes
function clearAll(){
  $('#clearAll').click(function(){
    $(this).css('background-color', 'lime');
    setTimeout(function(){
      console.log("timeout working");
      $('#clearAll').css('background-color', 'deepskyblue');
    }, 250);
    var all = $('.seq');
      for (i=0; i<all.length; i++){
        $(all).val(0);
        $(all).css('background-color', 'white');
      }
  });
}

//---------- METER OPERATIONS ----------//

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
      $('#sixteenths').css('background-color', 'slateblue');
    }else {
      $('#sixteenths').css('background-color', 'deepskyblue');
    }
  });
}

// isEighths
var eighths = true;
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
      $('#eighths').css('background-color', 'slateblue');
    }else $('#eighths').css('background-color', 'deepskyblue');
  });
}

// isQuarters
var quarters = false;
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
      $('#quarters').css('background-color', 'slateblue');
    }else $('#quarters').css('background-color', 'deepskyblue');
  });
}
