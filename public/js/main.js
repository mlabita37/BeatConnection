console.log("locked and loaded");

//
window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

var gainSlider = document.querySelector('.gain');

function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(context.currentTime);
  });
};

function loadKick() {
  var request = new XMLHttpRequest(); // Angular $http or Jquery Ajax
  request.open("GET", "/music/kick", true); //
  request.responseType = "arraybuffer";

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

function loadSnare(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/snare", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var Data = request.response;
    process(Data);
  }
  request.send();
};

function loadHihat(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/hihat", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var Data = request.response;
    process(Data);
  }
  request.send();
};

// Play the kick on click
function playKick(){
  $('#kick').click(function(){
    loadKick();
    changePadColor('#kick', 'blueviolet', 'indigo');
  });
};

// Play the snare on click
function playSnare(){
  $('#snare').click(function(){
    loadSnare();
        changePadColor('#snare', 'lime', 'forestgreen');
  });
};

function playHihat(){
  $('#hi-hat').click(function(){
    loadHihat();
        changePadColor('#hi-hat', 'blue', 'darkblue');
  });
};


// Trigger kick on spacebar
function spaceBarKick() {
$(window).keypress(function (e) {
  if (e.keyCode === 32) {
    e.preventDefault()
    loadKick();
    changePadColor('#kick', 'blueviolet', 'indigo');
  }
});
};

// Trigger snare on enter button
function enterSnare() {
$(window).keypress(function (e) {
  if (e.keyCode === 13) {
    e.preventDefault()
    loadSnare();
    changePadColor('#snare', 'lime', 'forestgreen');
  }
});
};

// Trigger hi-hat on shift button
function shiftHihat() {
$(window).keypress(function (e) {
  if (e.which === 16) {
    e.preventDefault()
    loadHihat();
    changePadColor('#hi-hat', 'blue', 'darkblue');
  }
});
};

// Change the color of the pads on an event
function changePadColor(pad, lightup, origcolor){
  $(pad).css('background-color', lightup);
  setTimeout(function(){
    $(pad).css('background-color', origcolor);
  }, 250);
};


$(function(){
playKick();
playSnare();
playHihat();
spaceBarKick();
enterSnare();
shiftHihat();
});
