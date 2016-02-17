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
  source.connect(context.destination);
  source.disconnect(context.destination);
}

// Plays Loop 1
function myLoop(bufferList) {
    var kick = bufferList[0];
    var snare = bufferList[1];
    var hihat = bufferList[2];
    var perc01 = bufferList[3];

    var kick1 = $('#kick1').val(),
        kick2 = $('#kick2').val(),
        kick3 = $('#kick3').val(),
        kick4 = $('#kick4').val(),
        kick5 = $('#kick5').val(),
        kick6 = $('#kick6').val(),
        kick7 = $('#kick7').val(),
        kick8 = $('#kick8').val(),
        kick9 = $('#kick9').val(),
        kick10 = $('#kick10').val(),
        kick11 = $('#kick11').val(),
        kick12 = $('#kick12').val(),
        kick13 = $('#kick13').val(),
        kick14 = $('#kick14').val(),
        kick15 = $('#kick15').val(),
        kick16 = $('#kick16').val(),
        snare1 = $('#snare1').val(),
        snare2 = $('#snare2').val(),
        snare3 = $('#snare3').val(),
        snare4 = $('#snare4').val(),
        snare5 = $('#snare5').val(),
        snare6 = $('#snare6').val(),
        snare7 = $('#snare7').val(),
        snare8 = $('#snare8').val(),
        snare9 = $('#snare9').val(),
        snare10 = $('#snare10').val(),
        snare11 = $('#snare11').val(),
        snare12 = $('#snare12').val(),
        snare13 = $('#snare13').val(),
        snare14 = $('#snare14').val(),
        snare15 = $('#snare15').val(),
        snare16 = $('#snare16').val(),
        hihat1 = $('#hihat1').val(),
        hihat2 = $('#hihat2').val(),
        hihat3 = $('#hihat3').val(),
        hihat4 = $('#hihat4').val(),
        hihat5 = $('#hihat5').val(),
        hihat6 = $('#hihat6').val(),
        hihat7 = $('#hihat7').val(),
        hihat8 = $('#hihat8').val(),
        hihat9 = $('#hihat9').val(),
        hihat10 = $('#hihat10').val(),
        hihat11 = $('#hihat11').val(),
        hihat12 = $('#hihat12').val(),
        hihat13 = $('#hihat13').val(),
        hihat14 = $('#hihat14').val(),
        hihat15 = $('#hihat15').val(),
        hihat16 = $('#hihat16').val(),
        perc1 = $('#perc1').val(),
        perc2 = $('#perc2').val(),
        perc3 = $('#perc3').val(),
        perc4 = $('#perc4').val(),
        perc5 = $('#perc5').val(),
        perc6 = $('#perc6').val(),
        perc7 = $('#perc7').val(),
        perc8 = $('#perc8').val();
        perc9 = $('#perc1').val(),
        perc10 = $('#perc2').val(),
        perc11 = $('#perc3').val(),
        perc12 = $('#perc4').val(),
        perc13 = $('#perc5').val(),
        perc14 = $('#perc6').val(),
        perc15 = $('#perc7').val(),
        perc16 = $('#perc8').val();




    // Start playing the rhythm 100 milliseconds from "now"
    var startTime = context.currentTime;

    var tempo = getTempo(); // BPM (beats per minute)
    console.log(tempo);
    var quarterNoteTime = 60 / tempo;

    // KICK
    if (sixteenths == true){
    var kickArray = [
      kick1, kick2, kick3, kick4, kick5, kick6, kick7, kick8,
      kick9, kick10, kick11, kick12, kick13, kick14, kick15, kick16,
      kick1, kick2, kick3, kick4, kick5, kick6, kick7, kick8,
      kick9, kick10, kick11, kick12, kick13, kick14, kick15, kick16,
      kick1, kick2, kick3, kick4, kick5, kick6, kick7, kick8,
      kick9, kick10, kick11, kick12, kick13, kick14, kick15, kick16,
      kick1, kick2, kick3, kick4, kick5, kick6, kick7, kick8,
      kick9, kick10, kick11, kick12, kick13, kick14, kick15, kick16
   ];

    for (var i=0; i < kickArray.length * 2; i++){
      if (kickArray[i] == 1 && kickArray[i].id == "kick1"){
        playSound(kick, startTime);
      }else if (kickArray[i] == 1){
        playSound(kick, startTime + i*0.25*quarterNoteTime);
        flashYellow('kick'+(i+1));
      }
    };
    }else{
      var kickArray = [
        kick1, kick2, kick3, kick4, kick5, kick6, kick7, kick8,
        kick9, kick10, kick11, kick12, kick13, kick14, kick15, kick16
      ];
      for (var i=0; i < kickArray.length; i++){
        if (kickArray[i] == 1 && kickArray[i].id == "kick1"){
          playSound(kick, startTime);
        }else if (kickArray[i] == 1){
          playSound(kick, startTime + i*quarterNoteTime);
          flashYellow('kick'+(i+1));
        }
      };
    }

    // SNARE
    if (sixteenths == true){
    var snareArray = [
    snare1, snare2, snare3, snare4, snare5, snare6, snare7, snare8,
    snare9, snare10, snare11, snare12, snare13, snare14, snare15, snare16,
    snare1, snare2, snare3, snare4, snare5, snare6, snare7, snare8,
    snare9, snare10, snare11, snare12, snare13, snare14, snare15, snare16,
    snare1, snare2, snare3, snare4, snare5, snare6, snare7, snare8,
    snare9, snare10, snare11, snare12, snare13, snare14, snare15, snare16,
    snare1, snare2, snare3, snare4, snare5, snare6, snare7, snare8,
    snare9, snare10, snare11, snare12, snare13, snare14, snare15, snare16
    ];

        for (var i=0; i < snareArray.length * 2; i++){
          if (snareArray[i] == 1 && snareArray[i].id == "snare1"){
            playSound(snare, startTime);
          }else if (snareArray[i] == 1){
            playSound(snare, startTime + i*0.25*quarterNoteTime);
            flashYellow('snare'+(i+1));
          }
        };
        }else{
          var snareArray = [
            snare1, snare2, snare3, snare4, snare5, snare6, snare7, snare8,
            snare9, snare10, snare11, snare12, snare13, snare14, snare15, snare16
          ];
          for (var i=0; i < snareArray.length; i++){
            if (snareArray[i] == 1 && snareArray[i].id == "snare1"){
              playSound(snare, startTime);
            }else if (snareArray[i] == 1){
              playSound(snare, startTime + i*quarterNoteTime);
              flashYellow('snare'+(i+1));
            }
          };
        }



    //HI-HAT
    if (sixteenths == true){
    var hiHatArray = [
      hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8,
      hihat9, hihat10, hihat11, hihat12, hihat13, hihat14, hihat15, hihat16,
      hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8,
      hihat9, hihat10, hihat11, hihat12, hihat13, hihat14, hihat15, hihat16,
      hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8,
      hihat9, hihat10, hihat11, hihat12, hihat13, hihat14, hihat15, hihat16,
      hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8,
      hihat9, hihat10, hihat11, hihat12, hihat13, hihat14, hihat15, hihat16
   ];

    for (var i=0; i < hiHatArray.length * 2; i++){
      if (hiHatArray[i] == 1 && hiHatArray[i].id == "hihat1"){
        playSound(hihat, startTime);
      }else if (hiHatArray[i] == 1){
        playSound(hihat, startTime + i*0.25*quarterNoteTime);
        flashYellow('hihat'+(i+1));
      }
    };
    }else{
      var hiHatArray = [
        hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8,
        hihat9, hihat10, hihat11, hihat12, hihat13, hihat14, hihat15, hihat16
      ];
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
    var percArray = [perc1, perc2, perc3, perc4, perc5, perc6, perc7, perc8, perc9, perc10, perc11, perc12, perc13, perc14, perc15, perc16];

    for (var i=0; i < percArray.length; i++){
      if (percArray[i] == 1 && percArray[i].id == "perc1"){
        playSound(hihat, startTime);
      }else if (percArray[i] == 1){
        playSound(perc01, startTime + i*quarterNoteTime);
        flashYellow('perc1-'+(i+1));
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
  $('.seq').click(function(){
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
      $('#sixteenths').css('background-color', 'cyan');
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
  time = time * 2000;
  console.log(time);
  return time;
}

function stopLoop(){
  $('#stopLoop').click(function(){
    console.log('Stop button working');
    clearInterval(interval);
  });
}

function allHiHat(){
  var bool = false;
  $('#allHiHat').click(function(){
    bool = !bool;
    var hihat = $('.hihat');
    if (bool == true){
    for(i=0; i < hihat.length; i++){
      $(hihat).val(1);
      $(hihat).css('background-color', 'limegreen');
    }
  }else {
    $(hihat).val(0);
    $(hihat).css('background-color', '#D1D0CE');
  }
});
}

function allSnare(){
  var bool = false;
  $('#allSnare').click(function(){
    bool = !bool;
    var snare = $('.snare');
    if (bool == true){
    for(i=0; i < snare.length; i++){
      $(snare).val(1);
      $(snare).css('background-color', 'limegreen');
    }
  }else {
    $(snare).val(0);
    $(snare).css('background-color', '#D1D0CE');
  }
});
}

function allKick(){
  var bool = false;
  $('#allKick').click(function(){
    bool = !bool;
    var kick = $('.kick');
    if (bool == true){
    for(i=0; i < kick.length; i++){
      $(kick).val(1);
      $(kick).css('background-color', 'limegreen');
    }
  }else {
    $(kick).val(0);
    $(kick).css('background-color', '#D1D0CE');
  }
});
}

function clearAll(){
  $('#clearAll').click(function(){
    var all = $('.seq');
      for (i=0; i<all.length; i++){
        $(all).val(0);
        $(all).css('background-color', '#D1D0CE');
      }
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
