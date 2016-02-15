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
    kickValue();
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

        console.log(kick1);


    // We'll start playing the rhythm 100 milliseconds from "now"
    var startTime = context.currentTime + 0.100;

    var tempo = getTempo(); // BPM (beats per minute)
    console.log(tempo);
    var quarterNoteTime = 60 / tempo;

    // Play the kick drum on beats 1, 2, 3, 4, 5, 6, 7, 8
    if (kick1 == 1){
      playSound(kick, startTime);
      flashYellow('kick1');
    }else{
      console.log('1: nothing');
    }
    if (kick2 == 1) {
    playSound(kick, startTime + quarterNoteTime);
    flashYellow('kick2');
    }else{
    console.log('2: nothing');
    }
    if(kick3 == 1){
    playSound(kick, startTime + 2*quarterNoteTime);
    flashYellow('kick3');
    }else{
    console.log("3: nothing");
    }
    playSound(kick, startTime + 3*quarterNoteTime);
    playSound(kick, startTime + 4*quarterNoteTime);
    playSound(kick, startTime + 5*quarterNoteTime);
    playSound(kick, startTime + 6*quarterNoteTime);
    playSound(kick, startTime + 7*quarterNoteTime);

    // Play the snare drum on beats 2, 4
    playSound(snare, startTime + quarterNoteTime);
    playSound(snare, startTime + 3*quarterNoteTime);
    playSound(snare, startTime + 5*quarterNoteTime);
    playSound(snare, startTime + 7*quarterNoteTime);

    // Play the hi-hat every 16th note.
    for (var i = 0; i < 32; ++i) {
        playSound(hihat, startTime + i*0.25*quarterNoteTime);
    }
}

function bufferLoadCompleted() {

}

function getTempo(){
  var tempo = $('#tempo').val();
  return tempo;
}

function kickValue(){
  $('button').click(function(){
    $(this).css('background-color', "limegreen");
    $(this).val(1);
    console.log($(this).val());
  });
};

function play1(){
  $('#play1').click(function(){
    myLoop(bufferLoader.bufferList);
  });
};

function flashYellow(drum){
  $('#' + drum).css('background-color', 'yellow');
  setTimeout(function(){
    $('#' + drum).css('background-color', 'limegreen');
  }, 750);
};
