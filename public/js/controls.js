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
    $(this).css('background-color', "#D1D0CE");
    $(this).val(0);
  }
  console.log($(this).val());
  });
};

// Play Loop
var interval;
function playLoop(){
  $('#playLoop').click(function(){
      if (play === 0){
      play += 1;
      var time = getTime();
      console.log(time);
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
  var time = bar * 60;
  time = time * 2000;
  console.log(time);
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
