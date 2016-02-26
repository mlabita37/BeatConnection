console.log("...keys.js loaded");

function loadCMaj() {
  var request = new XMLHttpRequest();
  request.open("GET", "/music/c-maj", true); // Grab the audio sample from the server
  request.responseType = "arraybuffer"; // Converts it to audio data

  request.onload = function() {
    var data = request.response;
    process(data); // convert the sound to audio and pass in the kickDist of gain
  };
  request.send(); // Send the request
};

function keydownCMaj() {
$(window).keypress(function (e) {
  console.log("c major working");
  if (e.keyCode === 65) {
    e.preventDefault()
    loadCMaj();
  }
});
};

$(function(){
keydownCMaj();
});

// B major
function loadBMaj() {
  var request = new XMLHttpRequest();
  request.open("GET", "/music/b-maj", true); // Grab the audio sample from the server
  request.responseType = "arraybuffer"; // Converts it to audio data

  request.onload = function() {
    var data = request.response;
    process(data); // convert the sound to audio and pass in the kickDist of gain
  };
  request.send(); // Send the request
};

function keydownBMaj() {
$(window).keypress(function (e) {
  console.log('b major working');
  if (e.keyCode === 83) {
    e.preventDefault()
    loadBMaj();
  }
});
};

$(function(){
keydownBMaj();
});
