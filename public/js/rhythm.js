/* Code modified from http://middleearmedia.com/timed-rhythms-with-web-audio-api-and-javascript/ */
console.log("...rhythm.js loaded");

var context;
var bufferLoader;

$(function() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("Web Audio API is not supported in this browser");
    }

    // Load the drum kit
    bufferLoader = new BufferLoader(
        context,
        [
        "/music/kick",
        "/music/snare",
        "/music/hihat",
        "/music/perc01",
        "/music/tamb",
        "/music/cymbal"
        ],
        bufferLoadCompleted
    );

    bufferLoader.load();
    getValue();
    playLoop();
    stopLoop();
    isSixteenths();
    isEighths();
    isQuarters();
    allCymbal();
    allTamb();
    allPerc();
    allHiHat();
    allSnare();
    allKick();
    clearAll();
}
);

function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(time);
}

function stopSound() {
  var source = context.createBufferSource();
  source.stop(context.currentTime);
}

// Play Loop
function myLoop(bufferList) {
    var kick = bufferList[0];
    var snare = bufferList[1];
    var hihat = bufferList[2];
    var perc = bufferList[3];
    var tamb = bufferList[4];
    var cymbal = bufferList[5];

if (play == true){
    var startTime = context.currentTime;
    var tempo = getTempo();
    var quarterNoteTime = 60 / tempo;

    playKick(kick, startTime, quarterNoteTime);
    playSnare(snare, startTime, quarterNoteTime);
    playHiHat(hihat, startTime, quarterNoteTime);
    playPerc(perc, startTime, quarterNoteTime);
    playTamb(tamb, startTime, quarterNoteTime);
    playCymbal(cymbal, startTime, quarterNoteTime);

}else {
  console.log("Already playing!");
}
}

function bufferLoadCompleted() {

}
