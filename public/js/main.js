console.log("locked and loaded");
​
window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();
​
function process(data, gain) {
  gain = gain || 1; // Make the gain equal the gain parameter, if there is none make it a default value of 1
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(data, function(buffer){
    source.buffer = buffer;
​
    var gainNode = context.createGain(); // Declare gain
    gainNode.gain.value = gain; // set the value of the gain node equal to the gain variable
    source.connect(gainNode); // Connect gain node to the sound source
​
    gainNode.connect(context.destination); // Connect gain node to "speakers"
    source.start(context.currentTime); // Schedules the start of the playback to the current time --> so that the sample plays immediately
  });
};
​
function loadKick(vol) {
  var request = new XMLHttpRequest();
  request.open("GET", "/music/kick", true); // Grab the audio sample from the server
  request.responseType = "arraybuffer"; // Converts it to audio data
​
  request.onload = function() {
    var data = request.response;
    process(data, kickGain()); // convert the sound to audio and pass in the amount of gain
  };
  request.send(); // Send the request
};
​
function kickGain(){ // Grabs the value of the input slider and sets it to a volume variable
  var vol = $('#kickGain').val();
  console.log(vol);
  return vol;
}
​
​
function loadSnare(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/snare", true);
  request.responseType = "arraybuffer";
​
  request.onload = function(){
    var Data = request.response;
    process(Data);
  }
  request.send();
};
​
function loadHihat(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/hihat", true);
  request.responseType = "arraybuffer";
​
  request.onload = function(){
    var Data = request.response;
    process(Data);
  }
  request.send();
};
​
// Play the kick on click
function playKick(){
  $('#kick').click(function(){
    loadKick();
    changePadColor('#kick', 'blueviolet', 'indigo');
  });
};
​
// Play the snare on click
function playSnare(){
  $('#snare').click(function(){
    loadSnare();
        changePadColor('#snare', 'lime', 'forestgreen');
  });
};
​
function playHihat(){
  $('#hi-hat').click(function(){
    loadHihat();
        changePadColor('#hi-hat', 'blue', 'darkblue');
  });
};
​
​
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
​
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
​
// Trigger hi-hat on shift button
function shiftHihat() {
$(window).keydown(function (e) {
  if (e.which === 16) {
    e.preventDefault()
    loadHihat();
    changePadColor('#hi-hat', 'blue', 'darkblue');
  }
});
};
​
// Change the color of the pads on an event
function changePadColor(pad, lightup, origcolor){
  $(pad).css('background-color', lightup);
  setTimeout(function(){
    $(pad).css('background-color', origcolor);
  }, 250);
};
​
​
$(function(){
playKick();
playSnare();
playHihat();
spaceBarKick();
enterSnare();
shiftHihat();
kickGain();
});
