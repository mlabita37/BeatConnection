console.log("...rhythm.js loaded");

window.onload = init;

var context;
var bufferLoader;
var play = 0;

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
    console.log(tempo);
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

// isSixteenths
var sixteenths = false;
function isSixteenths(){
  $('#sixteenths').click(function(){
    if (eighths === true || quarters === true){
      eighths = false;
      $('#eighths').css('background-color', 'deepskyblue');
      $('#quarters').css('background-color', 'deepskyblue');
    }
    sixteenths = !sixteenths;
    if (sixteenths == true){
      $('#sixteenths').css('background-color', 'lime');
    }else {
      $('#sixteenths').css('background-color', 'deepskyblue');
    }
  });
}

// isEighths
var eighths = false;
function isEighths(){
  $('#eighths').click(function(){
    if (sixteenths === true || quarters === true){
      sixteenths = false;
      quarters = false;
      $('#sixteenths').css('background-color', 'deepskyblue');
      $('#quarters').css('background-color', 'deepskyblue');
    }
    eighths = !eighths;
    console.log('eighths working');
    if (eighths == true){
      $('#eighths').css('background-color', 'lime');
    }else $('#eighths').css('background-color', 'deepskyblue');
  });
}

var quarters = true;
function isQuarters(){
  $('#quarters').click(function(){
    if (sixteenths === true || eighths === true){
      sixteenths = false;
      eighths = false;
      $('#sixteenths').css('background-color', 'deepskyblue');
      $('#eighths').css('background-color', 'deepskyblue');
    }
    quarters = true;
    if (quarters == true){
      $('#quarters').css('background-color', 'lime');
    }else $('#quarters').css('background-color', 'deepskyblue');
  });
}

function flashLights(drum){
  console.log("flash is working");
  $('#' + drum).css('background-color', '#4D4DFF');
  setTimeout(function(){
    $('#' + drum).css('background-color', '#993CF3');
    setTimeout(function(){
      $('#' + drum).css('background-color', ' #FE0001');
      setTimeout(function(){
        $('#' + drum).css('background-color', ' #FFFF00');
        setTimeout(function(){
          $('#' + drum).css('background-color', 'cyan');
          setTimeout(function(){
            $('#' + drum).css('background-color', 'darkorange');
            setTimeout(function(){
              $('#' + drum).css('background-color', 'yellow');
              setTimeout(function(){
                $('#' + drum).css('background-color', 'limegreen');
                setTimeout(function(){
                  $('#' + drum).css('background-color', 'magenta');
                  setTimeout(function(){
                    $('#' + drum).css('background-color', 'tomato');
                    setTimeout(function(){
                      $('#' + drum).css('background-color', 'gold');
                      setTimeout(function(){
                        $('#' + drum).css('background-color', 'lightblue');
                        setTimeout(function(){
                          $('#' + drum).css('background-color', 'mediumspringgreen');
                          setTimeout(function(){
                            $('#' + drum).css('background-color', 'darkorange');
                            setTimeout(function(){
                              $('#' + drum).css('background-color', 'red');
                              setTimeout(function(){
                                $('#' + drum).css('background-color', 'limegreen');
                              }, 500);
                            }, 500);
                          }, 500);
                        }, 500);
                      }, 500);
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
};
