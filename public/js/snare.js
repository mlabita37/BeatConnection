console.log("...snare.js loaded");

  function loadSnare(){
  var request = new XMLHttpRequest();
  request.open("GET", "/music/snare", true);
  request.responseType = "arraybuffer";

  request.onload = function(){
    var data = request.response;
    process(data, snareGain(), snareLoop(), snareSpeed(), snareDist(), snareDelay());
  }
  request.send();
};

function snareGain(){ // Grabs the value of the input slider and sets it to a volume variable
  var vol = $('#snareGain').val();
  console.log("snareVol: " + vol);
  $("#snareGain").on( "change input", function () {
      var value = $(this).val();
      $('#snareVol').text(value + " Vol");
   });
  return vol;
}

function snareLoop(){
  $("#snareLoop").click(function(){
    loop = !loop;
    var color;
    if (loop == true){
    $('#snareLoop').css('background-color', 'mediumspringgreen');
    }else {
    $('#snareLoop').css('background-color', 'firebrick');
    }
    return loop;
  });
return loop;
};

function snareSpeed(){ // Grabs the value of the input slider and sets it to a volume variable
  var speed = $('#snareSpeed').val();
  console.log("snareRate: " + speed);
  $("#snareSpeed").on( "change input", function () {
      var value = $(this).val();
      $('#snareRate').text(value);
   });
  return speed;
}


function snareDist(){ // Grabs the value of the input slider and sets it to a volume variable
  var dist = $('#snareDist').val();
  console.log("snareDist: " + dist);
  $("#snareDist").on( "change input", function () {
      var value = $(this).val();
      $('#snareDistort').text(value);
   });
  return dist;
}

function snareDelay(){
  var delay = $('#snareDelay').val();
  console.log("snareDelay: " + delay);
  $("#snareDelay").on( "change input", function () {
      var value = $(this).val();
      $("#snareDelVal").text(value + " Del");
   });
  return delay;
}

// Play the snare on click
function playSnare(){
  $('#snare').click(function(){
    loadSnare();
        changePadColor('#snare', 'lime', '#E5E4E2;');
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


$(function(){
playSnare();
enterSnare();
snareSpeed();
snareDist();
snareDelay();
});
