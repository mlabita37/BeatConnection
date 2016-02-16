window.onload = init;

var context;
var bufferLoader;

function init() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("Web Audio API is not supported in this browser");
    }

    // Start loading the drum kit.
    bufferLoader = new BufferLoader(
        context,
        [
        "/music/kick",
        "/music/snare",
        "/music/hihat",
        "/music/perc01"
        ],
        bufferLoadCompleted
    );

    bufferLoader.load();
    getValue();
    playLoop();
    stopLoop();
    isSixteenths();
}

function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(time);
}

function stopSound(buffer, time) {
  var source = context.createBufferSource();
  source.connect(context.destination);
  source.stop(time);
}

// Plays Loop 1
function myLoop(bufferList) {
    var kick = bufferList[0];
    var snare = bufferList[1];
    var hihat = bufferList[2];
    var perc01 = bufferList[3];

    var kick1 = $('#kick1').val();
        kick2 = $('#kick2').val();
        kick3 = $('#kick3').val();
        kick4 = $('#kick4').val();
        kick5 = $('#kick5').val();
        kick6 = $('#kick6').val();
        kick7 = $('#kick7').val();
        kick8 = $('#kick8').val();
        snare1 = $('#snare1').val();
        snare2 = $('#snare2').val();
        snare3 = $('#snare3').val();
        snare4 = $('#snare4').val();
        snare5 = $('#snare5').val();
        snare6 = $('#snare6').val();
        snare7 = $('#snare7').val();
        snare8 = $('#snare8').val();
        hihat1 = $('#hihat1').val();
        hihat2 = $('#hihat2').val();
        hihat3 = $('#hihat3').val();
        hihat4 = $('#hihat4').val();
        hihat5 = $('#hihat5').val();
        hihat6 = $('#hihat6').val();
        hihat7 = $('#hihat7').val();
        hihat8 = $('#hihat8').val();
        perc0101 = $('#perc01-1').val();
        perc0102 = $('#perc01-2').val();
        perc0103 = $('#perc01-3').val();
        perc0104 = $('#perc01-4').val();
        perc0105 = $('#perc01-5').val();
        perc0106 = $('#perc01-6').val();
        perc0107 = $('#perc01-7').val();
        perc0108 = $('#perc01-8').val();




    // Start playing the rhythm 100 milliseconds from "now"
    var startTime = context.currentTime + 0.100;

    var tempo = getTempo(); // BPM (beats per minute)
    console.log(tempo);
    var quarterNoteTime = 60 / tempo;

    // Kick
    var kickArray = [kick1, kick2, kick3, kick4, kick5, kick6, kick7, kick8];

    for (var i=0; i < kickArray.length; i++){
      if (kickArray[i] == 1 && kickArray[i].id == "kick1"){
        playSound(kick, startTime);
      }else if (kickArray[i] == 1){
        playSound(kick, startTime + i*quarterNoteTime);
        flashYellow('kick'+(i+1));
      }
    }

    // Snare
    var snareArray = [snare1, snare2, snare3, snare4, snare5, snare6, snare7, snare8];

    for (var i=0; i < snareArray.length; i++){
      if (snareArray[i] == 1 && snareArray[i].id == "snare1"){
        playSound(snare, startTime);
      }else if (snareArray[i] == 1){
        playSound(snare, startTime + i*quarterNoteTime);
        flashYellow('snare'+(i+1));
      }
    }

    //Hi-hat
    if (sixteenths == true){
    var hiHatArray = [hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8, hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8, hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8, hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8];

    for (var i=0; i < hiHatArray.length * 2; i++){
      if (hiHatArray[i] == 1 && hiHatArray[i].id == "hihat1"){
        playSound(hihat, startTime);
      }else if (hiHatArray[i] == 1){
        playSound(hihat, startTime + i*0.25*quarterNoteTime);
        flashYellow('hihat'+(i+1));
      }
    };
    }else{
    var hiHatArray = [hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8];
    for (var i=0; i < hiHatArray.length; i++){
      if (hiHatArray[i] == 1 && hiHatArray[i].id == "hihat1"){
        playSound(hihat, startTime);
      }else if (hiHatArray[i] == 1){
        playSound(hihat, startTime + i*quarterNoteTime);
        flashYellow('hihat'+(i+1));
      }
    };
    }

    //  Play the hi-hat every 16th note.
    // for (var i = 0; i < 32; ++i) {
    //     playSound(hihat, startTime + i*0.25*quarterNoteTime);
    // }


    // Perc01
    var perc01Array = [perc0101, perc0102, perc0103, perc0104, perc0105, perc0106, perc0107, perc0108];

    for (var i=0; i < perc01Array.length; i++){
      if (perc01Array[i] == 1 && perc01Array[i].id == "perc01-1"){
        playSound(hihat, startTime);
      }else if (perc01Array[i] == 1){
        playSound(perc01, startTime + i*quarterNoteTime);
        flashYellow('perc01-'+(i+1));
      }
    }

}

function bufferLoadCompleted() {

}

function getTempo(){
  var tempo = $('#tempo').val();
  return tempo;
}

function getValue(){
  $('button').click(function(){
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

var sixteenths = false;
function isSixteenths(){
  $('#sixteenths').click(function(){
    sixteenths = !sixteenths;
    if (sixteenths == true){
      $('#sixteenths').css('background-color', 'limegreen');
    }else $('#sixteenths').css('background-color', 'white');
  });
}

var interval;
function playLoop(){
  $('#playLoop').click(function(){
    var time = getTime();
    console.log(time);
    myLoop(bufferLoader.bufferList);
    interval = setInterval(function(){
    myLoop(bufferLoader.bufferList);
  }, time);
  });
};

function getTime(){
  var tempo = getTempo();
  var bar = 8/tempo;
  var time = bar * 60;
  time = time * 1000;
  console.log(time);
  return time;
}

function stopLoop(){
  $('#stopLoop').click(function(){
    console.log('Stop button working');
    clearInterval(interval);
  });
}

function flashYellow(drum){
  console.log("flash is working");
  $('#' + drum).css('background-color', '#4D4DFF');
  setTimeout(function(){
    $('#' + drum).css('background-color', '#993CF3');
    setTimeout(function(){
      $('#' + drum).css('background-color', ' #FE0001');
      setTimeout(function(){
        $('#' + drum).css('background-color', ' #FFFF00');
        setTimeout(function(){
          $('#' + drum).css('background-color', 'limegreen');
        }, 500);
      }, 500);
    }, 500);
  }, 500);
};
