console.log('...hi-hat.js loaded');

function playHiHat(hihat, startTime, quarterNoteTime){
  var hihat1 = $('#hihat1').val(),
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
      hihat16 = $('#hihat16').val();

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
      flashLights('hihat'+(i+1));
    }
  };
  }else if(eighths == true){
  var hiHatArray = [
    hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8,
    hihat9, hihat10, hihat11, hihat12, hihat13, hihat14, hihat15, hihat16,
    hihat1, hihat2, hihat3, hihat4, hihat5, hihat6, hihat7, hihat8,
    hihat9, hihat10, hihat11, hihat12, hihat13, hihat14, hihat15, hihat16
  ];
  for (var i=0; i < hiHatArray.length; i++){
    if (hiHatArray[i] == 1 && hiHatArray[i].id == "hihat1"){
      playSound(hihat, startTime);
    }else if (hiHatArray[i] == 1){
      playSound(hihat, startTime + i*0.5*quarterNoteTime);
      flashLights('hihat'+(i+1));
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
        flashLights('hihat'+(i+1));
      }
    };
  }

}

// Volume level
  var hVol = 5;
  function hVolUp(){
  $('#hVolUp').on('click', function(){
    if (hVol < 10){
  		hVol++;
      console.log(hVol);
  		$('#hVol').text("\xa0\xa0Vol: " + hVol);
    }
  });
  }

  function hVolDown(){
  $('#hVolDown').on('click', function(){
    if (hVol > 0){
  	  hVol--;
      hVol = hVol.toFixed();
  		$('#hVol').text("\xa0\xa0Vol: " + hVol);
      console.log(hVol);
    }
  });
  }

// Distortion level
var hDist = 0;
  function hDistUp(){
  $('#hDistUp').on('click', function(){
  	if (hDist < 10){
  		hDist++;
  		$('#hDist').text("\xa0Dist: " + hDist);
    }
  });
  }

  function hDistDown(){
  $('#hDistDown').on('click', function(){
  	if (hDist > 0){
  		hDist--;hDist
  		$('#hDist').text("\xa0Dist: " + hDist);
    }
  });
  }

// Reverb level
var hVerb = 0;
  function hVerbUp(){
  $('#hVerbUp').on('click', function(){
  	if (hVerb < 10){
  		hVerb++;
  		$('#hVerb').text("Verb: " + hVerb);
    }
  });
  }

  function hVerbDown(){
  $('#hVerbDown').on('click', function(){
  	if (hVerb > 0){
  		hVerb--;
  		$('#hVerb').text("Verb: " + hVerb);
    }
  });
  }

  $(function(){
  hVolUp();
  hVolDown();
  hDistUp();
  hDistDown();
  hVerbUp();
  hVerbDown();
  })
