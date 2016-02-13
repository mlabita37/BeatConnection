console.log("locked and loaded");

window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

function process(data, gain, loop, speed, dist, delayTime) {
  gain = gain || 1; // Make the gain equal the gain parameter, if there is none make it a default value of 1
  loop = loop || false;
  speed = speed || 1;
  dist = dist || 0.8;
  delayTime = delayTime || 3.0;
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(data, function(buffer){
  source.buffer = buffer;


    // Playback
    source.playbackRate.value = speed;

    //  Loop
    source.loop = loop;

    // Gain
    var gainNode = context.createGain(); // Declare gain
    gainNode.gain.value = gain; // set the value of the gain node equal to the gain variable

    // Distortion
    var distortion = context.createWaveShaper();
    distortion.curve = makeDistortionCurve(400);
    distortion.oversample = '4x';

    // Delay
    var delayNode = context.createDelay(5.0);
    delayNode.delayTime.value = 3.0;

    delayNode.connect(gainNode);
    source.connect(gainNode); // Connect gain node to the sound source
    gainNode.connect(context.destination); // Connect gain node to "speakers"

    source.start(context.currentTime); // Schedules the start of the playback to the current time --> so that the sample plays immediately

  });
};

function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};


function loadKick(vol) {
  var request = new XMLHttpRequest();
  request.open("GET", "/music/kick", true); // Grab the audio sample from the server
  request.responseType = "arraybuffer"; // Converts it to audio data

  request.onload = function() {
    var data = request.response;
    process( data, kickGain(), kickLoop(), kickSpeed(), kickDist(), kickDelay()); // convert the sound to audio and pass in the amount of gain
  };
  request.send(); // Send the request
};

function kickGain(){ // Grabs the value of the input slider and sets it to a volume variable
  var vol = $('#kickGain').val();
  console.log(vol);
  $("#kickGain").on( "change input", function () {
      var value = $(this).val();
      $('#kickVol').text(value + " Vol");
   });
  return vol;
}


var loop = false;
function kickLoop(){
  $("#kickLoop").click(function(){
    loop = !loop;
    var color;
    if (loop == true){
    $('#kickLoop').css('background-color', 'mediumspringgreen');
    }else {
    $('#kickLoop').css('background-color', 'firebrick');
    }
    return loop;
  });
console.log("2nd loop: " + loop);
return loop;
};

function kickSpeed(){ // Grabs the value of the input slider and sets it to a volume variable
  var speed = $('#kickSpeed').val();
  console.log(speed);
  $("#kickSpeed").on( "change input", function () {
      var value = $(this).val();
      $('#kickRate').text(value);
   });
  return speed;
}

function kickDist(){ // Grabs the value of the input slider and sets it to a volume variable
  var dist = $('#kickDist').val();
  console.log(dist);
  $("#kickDist").on( "change input", function () {
      var value = $(this).val();
      $('#kickDistort').text(value);
   });
  return dist;
}

function kickDelay(){
  var delay = $('#kickDelay').val();
  console.log(delay);
  $("#kickDelay").on( "change input", function () {
      var value = $(this).val();
      $('#kickDel').text(value);
   });
  return delay;
}

function loadSnare(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/snare", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data);
  }
  request.send();
};


function loadHihat(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/hihat", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data, hiHatGain(), loop, hiHatSpeed());
  }
  request.send();
};

function hiHatGain(){ // Grabs the value of the input slider and sets it to a volume variable
  var vol = $('#hiHatGain').val();
  console.log(vol);
  $("#hiHatGain").on( "change input", function () {
      var value = $(this).val();
      console.log(value);
      $('#hiHatVol').text(value);
   });
  return vol;
}

//
// function hiHatLoop(){
//   $('#hiHatLoop').click(function(){
//     loop = !loop;
//     var color;
//     if (loop == true){
//     $('#hiHatLoop').css('background-color', 'mediumspringgreen');
//     }else {
//     $('#hiHatLoop').css('background-color', 'firebrick');
//     }
//     return loop;
//   });
// console.log("2nd loop: " + loop);
// return loop;
// };

function hiHatSpeed(){ // Grabs the value of the input slider and sets it to a volume variable
  var speed = $('#hiHatSpeed').val();
  console.log(speed);
  return speed;
}





// Play the kick on click
function playKick(){
  $('#kick').click(function(){
    loadKick();
    changePadColor('#kick', 'blueviolet', '#E5E4E2;');
  });
};

// Play the snare on click
function playSnare(){
  $('#snare').click(function(){
    loadSnare();
        changePadColor('#snare', 'lime', '#E5E4E2;');
  });
};

function playHihat(){
  $('#hi-hat').click(function(){
    loadHihat();
        changePadColor('#hi-hat', 'blue', '#E5E4E2;');
  });
};


// Trigger kick on spacebar
function spaceBarKick() {
$(window).keypress(function (e) {
  if (e.keyCode === 32) {
    e.preventDefault()
    loadKick();
    changePadColor('#kick', 'blueviolet', '#E5E4E2;');
  }
});
};

// Trigger snare on enter button
function enterSnare() {
$(window).keydown(function (e) {
  if (e.keyCode === 16) {
    e.preventDefault()
    loadSnare();
    changePadColor('#snare', 'lime', '#E5E4E2;');
  }
});
};

// Trigger hi-hat on shift button
function shiftHihat() {
$(window).keydown(function (e) {
  if (e.which === 13) {
    e.preventDefault();
    loadHihat();
    changePadColor('#hi-hat', 'blue', '#E5E4E2;');
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

function key(){
  $('#key2').click(function(){
    loadHihat();
    changePadColor('#key2', 'blue', '#E5E4E2;');
  })
};


$(function(){
playKick();
playSnare();
playHihat();
spaceBarKick();
enterSnare();
shiftHihat();
kickGain();
kickLoop();
kickSpeed();
hiHatGain();
key();
});
