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
        "/music/hihat"
        ],
        bufferLoadCompleted
    );

    bufferLoader.load();
    getValue();
    play1();
}

function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(time);
}

// Plays Rhythm 1
function myLoop(bufferList) {
    var kick = bufferList[0];
    var snare = bufferList[1];
    var hihat = bufferList[2];

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

        console.log(kick1);


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
        flashYellow('kick'+(i+1));
      }else if (kickArray[i] == 1){
        playSound(kick, startTime + i*quarterNoteTime);
      }
    }

    // Snare
    var snareArray = [snare1, snare2, snare3, snare4, snare5, snare6, snare7, snare8];

    for (var i=0; i < snareArray.length; i++){
      if (snareArray[i] == 1 && snareArray[i].id == "snare1"){
        playSound(snare, startTime);
      }else if (snareArray[i] == 1){
        playSound(snare, startTime + i*quarterNoteTime);
      }
    }

    // Hi-hat
    var hiHatArray = [hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8];

    for (var i=0; i < hiHatArray.length; i++){
      if (hiHatArray[i] == 1 && hiHatArray[i].id == "hihat1"){
        playSound(hihat, startTime);
      }else if (hiHatArray[i] == 1){
        playSound(hihat, startTime + i*quarterNoteTime);
      }
    }

    // Play the hi-hat every 16th note.
    // for (var i = 0; i < 32; ++i) {
    //     playSound(hihat, startTime + i*0.25*quarterNoteTime);
    // }
}

function bufferLoadCompleted() {

}

function getTempo(){
  var tempo = $('#tempo').val();
  return tempo;
}

function getValue(){
  $('button').click(function(){
    value = $(this).val();
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

function play1(){
  $('#play1').click(function(){
    myLoop(bufferLoader.bufferList);
  });
};

function flashYellow(drum){
  console.log("flash is working");
  $('#' + drum).css('background-color', 'yellow');
  setTimeout(function(){
    $('#' + drum).css('background-color', 'blue');
  }, 750);
};
