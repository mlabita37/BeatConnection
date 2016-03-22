console.log('...snare.js loaded');

function playSnare(snare, startTime, quarterNoteTime){

  var snare1 = $('#snare1').val(),
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
      snare16 = $('#snare16').val();


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
            flashLights('snare'+(i+1));
          }
        };
        }else if(eighths == true){
          var snareArray = [
            snare1, snare2, snare3, snare4, snare5, snare6, snare7, snare8,
            snare9, snare10, snare11, snare12, snare13, snare14, snare15, snare16,
            snare1, snare2, snare3, snare4, snare5, snare6, snare7, snare8,
            snare9, snare10, snare11, snare12, snare13, snare14, snare15, snare16
          ];
          for (var i=0; i < snareArray.length; i++){
            if (snareArray[i] == 1 && snareArray[i].id == "snare1"){
              playSound(snare, startTime);
            }else if (snareArray[i] == 1){
              playSound(snare, startTime + i*0.5*quarterNoteTime);
              flashLights('snare'+(i+1));
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
              flashLights('snare'+(i+1));
            }
          };
        }

}

// Volume level
  var sVol = 5;
  function sVolUp(){
  $('#sVolUp').on('click', function(){
    if (sVol < 10){
  		sVol++;
      console.log(sVol);
  		$('#sVol').text("\xa0\xa0Vol: " + sVol);
    }
  });
  }

  function sVolDown(){
  $('#sVolDown').on('click', function(){
    if (sVol > 0){
  	  sVol--;
  		$('#sVol').text("\xa0\xa0Vol: " + sVol);
      console.log(sVol);
    }
  });
  }

// Distortion level
var sDist = 0;
  function sDistUp(){
  $('#sDistUp').on('click', function(){
  	if (sDist < 10){
  		sDist++;
  		$('#sDist').text("\xa0Dist: " + sDist);
    }
  });
  }

  function sDistDown(){
  $('#sDistDown').on('click', function(){
  	if (sDist > 0){
  		sDist--;sDist
  		$('#sDist').text("\xa0Dist: " + sDist);
    }
  });
  }

// Reverb level
var sVerb = 0;
  function sVerbUp(){
  $('#sVerbUp').on('click', function(){
  	if (sVerb < 10){
  		sVerb++;
  		$('#sVerb').text("Verb: " + sVerb);
    }
  });
  }

  function sVerbDown(){
  $('#sVerbDown').on('click', function(){
  	if (sVerb > 0){
  		sVerb--;
  		$('#sVerb').text("Verb: " + sVerb);
    }
  });
  }

  $(function(){
  sVolUp();
  sVolDown();
  sDistUp();
  sDistDown();
  sVerbUp();
  sVerbDown();
  })
