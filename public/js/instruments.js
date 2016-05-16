console.log("...instruments.js loaded");

//---------- Kick ----------//
function playKick(kick, startTime, quarterNoteTime){

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
      kick16 = $('#kick16').val();

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
        // flashLights('kick'+(i+1));
      }
    };
    }else if(eighths == true){
      var kickArray = [
        kick1, kick2, kick3, kick4, kick5, kick6, kick7, kick8,
        kick9, kick10, kick11, kick12, kick13, kick14, kick15, kick16,
        kick1, kick2, kick3, kick4, kick5, kick6, kick7, kick8,
        kick9, kick10, kick11, kick12, kick13, kick14, kick15, kick16
      ];
      for (var i=0; i < kickArray.length; i++){
        if (kickArray[i] == 1 && kickArray[i].id == "kick1"){
          playSound(kick, startTime);
        }else if (kickArray[i] == 1){
          playSound(kick, startTime + i*0.5*quarterNoteTime);
          // flashLights('kick'+(i+1), startTime + i*0.5*quarterNoteTime);
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
          // flashLights('kick'+(i+1), startTime + i*quarterNoteTime);
        }
      };
    }
  };

// Volume level
  var kVol = 5;
  function kVolUp(){
  $('#kVolUp').on('click', function(){
    if (kVol < 10){
  		kVol++;
      console.log(kVol);
  		$('#kVol').text("\xa0\xa0Vol: " + kVol);
    }
  });
  }

  function kVolDown(){
  $('#kVolDown').on('click', function(){
    if (kVol > 0){
  	  kVol--;
      kVol = kVol.toFixed();
  		$('#kVol').text("\xa0\xa0Vol: " + kVol);
      console.log(kVol);
    }
  });
  }

// Distortion level
var kDist = 0;
  function kDistUp(){
  $('#kDistUp').on('click', function(){
  	if (kDist < 10){
  		kDist++;
  		$('#kDist').text("\xa0Dist: " + kDist);
    }
  });
  }

  function kDistDown(){
  $('#kDistDown').on('click', function(){
  	if (kDist > 0){
  		kDist--;kDist
  		$('#kDist').text("\xa0Dist: " + kDist);
    }
  });
  }

// Reverb level
var kVerb = 0;
  function kVerbUp(){
  $('#kVerbUp').on('click', function(){
  	if (kVerb < 10){
  		kVerb++;
  		$('#kVerb').text("Verb: " + kVerb);
    }
  });
  }

  function kVerbDown(){
  $('#kVerbDown').on('click', function(){
  	if (kVerb > 0){
  		kVerb--;
  		$('#kVerb').text("Verb: " + kVerb);
    }
  });
  }

//---------- Snare ----------//
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


//---------- HiHat ---------//
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


//---------- Percussion ----------//
function playPerc(perc, startTime, quarterNoteTime){

perc1 = $('#perc1').val(),
perc2 = $('#perc2').val(),
perc3 = $('#perc3').val(),
perc4 = $('#perc4').val(),
perc5 = $('#perc5').val(),
perc6 = $('#perc6').val(),
perc7 = $('#perc7').val(),
perc8 = $('#perc8').val();
perc9 = $('#perc9').val(),
perc10 = $('#perc10').val(),
perc11 = $('#perc11').val(),
perc12 = $('#perc12').val(),
perc13 = $('#perc13').val(),
perc14 = $('#perc14').val(),
perc15 = $('#perc15').val(),
perc16 = $('#perc16').val();

// PERCUSSION
if (sixteenths == true){
var percArray = [
perc1, perc2, perc3, perc4, perc5, perc6, perc7, perc8,
perc9, perc10, perc11, perc12, perc13, perc14, perc15, perc16,
perc1, perc2, perc3, perc4, perc5, perc6, perc7, perc8,
perc9, perc10, perc11, perc12, perc13, perc14, perc15, perc16,
perc1, perc2, perc3, perc4, perc5, perc6, perc7, perc8,
perc9, perc10, perc11, perc12, perc13, perc14, perc15, perc16,
perc1, perc2, perc3, perc4, perc5, perc6, perc7, perc8,
perc9, perc10, perc11, perc12, perc13, perc14, perc15, perc16
];

    for (var i=0; i < percArray.length * 2; i++){
      if (percArray[i] == 1 && percArray[i].id == "perc1"){
        playSound(perc, startTime);
      }else if (percArray[i] == 1){
        playSound(perc, startTime + i*0.25*quarterNoteTime);
      }
    };
    }else if(eighths == true){
      var percArray = [
        perc1, perc2, perc3, perc4, perc5, perc6, perc7, perc8,
        perc9, perc10, perc11, perc12, perc13, perc14, perc15, perc16,
        perc1, perc2, perc3, perc4, perc5, perc6, perc7, perc8,
        perc9, perc10, perc11, perc12, perc13, perc14, perc15, perc16
      ];
      for (var i=0; i < percArray.length; i++){
        if (percArray[i] == 1 && percArray[i].id == "perc1"){
          playSound(perc, startTime);
        }else if (percArray[i] == 1){
          playSound(perc, startTime + i*0.5*quarterNoteTime);
        }
      };
    }else{
      var percArray = [
        perc1, perc2, perc3, perc4, perc5, perc6, perc7, perc8,
        perc9, perc10, perc11, perc12, perc13, perc14, perc15, perc16
      ];
      for (var i=0; i < percArray.length; i++){
        if (percArray[i] == 1 && percArray[i].id == "perc1"){
          playSound(perc, startTime);
        }else if (percArray[i] == 1){
          playSound(perc, startTime + i*quarterNoteTime);
        }
      };
    }

}

  // Volume level
  var pVol = 5;
  function pVolUp(){
  $('#pVolUp').on('click', function(){
    if (pVol < 10){
  		pVol++;
      console.log(pVol);
  		$('#pVol').text("\xa0\xa0Vol: " + pVol);
    }
  });
  }

  function pVolDown(){
  $('#pVolDown').on('click', function(){
    if (pVol > 0){
  	  pVol--;
      pVol = pVol.toFixed();
  		$('#pVol').text("\xa0\xa0Vol: " + pVol);
      console.log(pVol);
    }
  });
  }

  // Distortion level
  var pDist = 0;
  function pDistUp(){
  $('#pDistUp').on('click', function(){
  	if (pDist < 10){
  		pDist++;
  		$('#pDist').text("\xa0Dist: " + pDist);
    }
  });
  }

  function pDistDown(){
  $('#pDistDown').on('click', function(){
  	if (pDist > 0){
  		pDist--;pDist
  		$('#pDist').text("\xa0Dist: " + pDist);
    }
  });
  }

  // Reverb level
  var pVerb = 0;
  function pVerbUp(){
  $('#pVerbUp').on('click', function(){
  	if (pVerb < 10){
  		pVerb++;
  		$('#pVerb').text("Verb: " + pVerb);
    }
  });
  }

  function pVerbDown(){
  $('#pVerbDown').on('click', function(){
  	if (pVerb > 0){
  		pVerb--;
  		$('#pVerb').text("Verb: " + pVerb);
    }
  });
  }

//---------- Tamborine ----------//
function playTamb(tamb, startTime, quarterNoteTime){

    tamb1 = $('#tamb1').val(),
    tamb2 = $('#tamb2').val(),
    tamb3 = $('#tamb3').val(),
    tamb4 = $('#tamb4').val(),
    tamb5 = $('#tamb5').val(),
    tamb6 = $('#tamb6').val(),
    tamb7 = $('#tamb7').val(),
    tamb8 = $('#tamb8').val(),
    tamb9 = $('#tamb9').val(),
    tamb10 = $('#tamb10').val(),
    tamb11 = $('#tamb11').val(),
    tamb12 = $('#tamb12').val(),
    tamb13 = $('#tamb13').val(),
    tamb14 = $('#tamb14').val(),
    tamb15 = $('#tamb15').val(),
    tamb16 = $('#tamb16').val();


    if (sixteenths == true){
    var tambArray = [
    tamb1, tamb2, tamb3, tamb4, tamb5, tamb6, tamb7, tamb8,
    tamb9, tamb10, tamb11, tamb12, tamb13, tamb14, tamb15, tamb16,
    tamb1, tamb2, tamb3, tamb4, tamb5, tamb6, tamb7, tamb8,
    tamb9, tamb10, tamb11, tamb12, tamb13, tamb14, tamb15, tamb16,
    tamb1, tamb2, tamb3, tamb4, tamb5, tamb6, tamb7, tamb8,
    tamb9, tamb10, tamb11, tamb12, tamb13, tamb14, tamb15, tamb16,
    tamb1, tamb2, tamb3, tamb4, tamb5, tamb6, tamb7, tamb8,
    tamb9, tamb10, tamb11, tamb12, tamb13, tamb14, tamb15, tamb16
    ];

        for (var i=0; i < tambArray.length * 2; i++){
          if (tambArray[i] == 1 && tambArray[i].id == "tamb1"){
            playSound(tamb, startTime);
          }else if (tambArray[i] == 1){
            playSound(tamb, startTime + i*0.25*quarterNoteTime);
          }
        };
        }else if(eighths == true){
          var tambArray = [
            tamb1, tamb2, tamb3, tamb4, tamb5, tamb6, tamb7, tamb8,
            tamb9, tamb10, tamb11, tamb12, tamb13, tamb14, tamb15, tamb16,
            tamb1, tamb2, tamb3, tamb4, tamb5, tamb6, tamb7, tamb8,
            tamb9, tamb10, tamb11, tamb12, tamb13, tamb14, tamb15, tamb16
          ];
          for (var i=0; i < tambArray.length; i++){
            if (tambArray[i] == 1 && tambArray[i].id == "tamb1"){
              playSound(tamb, startTime);
            }else if (tambArray[i] == 1){
              playSound(tamb, startTime + i*0.5*quarterNoteTime);
            }
          };
        }else{
          var tambArray = [
            tamb1, tamb2, tamb3, tamb4, tamb5, tamb6, tamb7, tamb8,
            tamb9, tamb10, tamb11, tamb12, tamb13, tamb14, tamb15, tamb16
          ];
          for (var i=0; i < tambArray.length; i++){
            if (tambArray[i] == 1 && tambArray[i].id == "tamb1"){
              playSound(tamb, startTime);
            }else if (tambArray[i] == 1){
              playSound(tamb, startTime + i*quarterNoteTime);
            }
          };
        }

}

// Volume level
var tVol = 5;
function tVolUp(){
$('#tVolUp').on('click', function(){
  if (tVol < 10){
		tVol++;
    console.log(tVol);
		$('#tVol').text("\xa0\xa0Vol: " + tVol);
  }
});
}

function tVolDown(){
$('#tVolDown').on('click', function(){
  if (tVol > 0){
	  tVol--;
    tVol = tVol.toFixed();
		$('#tVol').text("\xa0\xa0Vol: " + tVol);
    console.log(tVol);
  }
});
}

// Distortion level
var tDist = 0;
function tDistUp(){
$('#tDistUp').on('click', function(){
	if (tDist < 10){
		tDist++;
		$('#tDist').text("\xa0Dist: " + tDist);
  }
});
}

function tDistDown(){
$('#tDistDown').on('click', function(){
	if (tDist > 0){
		tDist--;tDist
		$('#tDist').text("\xa0Dist: " + tDist);
  }
});
}

// Reverb level
var tVerb = 0;
function tVerbUp(){
$('#tVerbUp').on('click', function(){
	if (tVerb < 10){
		tVerb++;
		$('#tVerb').text("Verb: " + tVerb);
  }
});
}

function tVerbDown(){
$('#tVerbDown').on('click', function(){
	if (tVerb > 0){
		tVerb--;
		$('#tVerb').text("Verb: " + tVerb);
  }
});
}

//---------- Cymbal ----------//
function playCymbal(cymbal, startTime, quarterNoteTime){

  cymbal1 = $('#cymbal1').val(),
  cymbal2 = $('#cymbal2').val(),
  cymbal3 = $('#cymbal3').val(),
  cymbal4 = $('#cymbal4').val(),
  cymbal5 = $('#cymbal5').val(),
  cymbal6 = $('#cymbal6').val(),
  cymbal7 = $('#cymbal7').val(),
  cymbal8 = $('#cymbal8').val(),
  cymbal9 = $('#cymbal9').val(),
  cymbal10 = $('#cymbal10').val(),
  cymbal11 = $('#cymbal11').val(),
  cymbal12 = $('#cymbal12').val(),
  cymbal13 = $('#cymbal13').val(),
  cymbal14 = $('#cymbal14').val(),
  cymbal15 = $('#cymbal15').val(),
  cymbal16 = $('#cymbal16').val();


  if (sixteenths == true){
  var cymbalArray = [
  cymbal1, cymbal2, cymbal3, cymbal4, cymbal5, cymbal6, cymbal7, cymbal8,
  cymbal9, cymbal10, cymbal11, cymbal12, cymbal13, cymbal14, cymbal15, cymbal16,
  cymbal1, cymbal2, cymbal3, cymbal4, cymbal5, cymbal6, cymbal7, cymbal8,
  cymbal9, cymbal10, cymbal11, cymbal12, cymbal13, cymbal14, cymbal15, cymbal16,
  cymbal1, cymbal2, cymbal3, cymbal4, cymbal5, cymbal6, cymbal7, cymbal8,
  cymbal9, cymbal10, cymbal11, cymbal12, cymbal13, cymbal14, cymbal15, cymbal16,
  cymbal1, cymbal2, cymbal3, cymbal4, cymbal5, cymbal6, cymbal7, cymbal8,
  cymbal9, cymbal10, cymbal11, cymbal12, cymbal13, cymbal14, cymbal15, cymbal16
  ];

      for (var i=0; i < cymbalArray.length * 2; i++){
        if (cymbalArray[i] == 1 && cymbalArray[i].id == "cymbal1"){
          playSound(cymbal, startTime);
        }else if (cymbalArray[i] == 1){
          playSound(cymbal, startTime + i*0.25*quarterNoteTime);
        }
      };

      }else if(eighths == true){
        var cymbalArray = [
          cymbal1, cymbal2, cymbal3, cymbal4, cymbal5, cymbal6, cymbal7, cymbal8,
          cymbal9, cymbal10, cymbal11, cymbal12, cymbal13, cymbal14, cymbal15, cymbal16,
          cymbal1, cymbal2, cymbal3, cymbal4, cymbal5, cymbal6, cymbal7, cymbal8,
          cymbal9, cymbal10, cymbal11, cymbal12, cymbal13, cymbal14, cymbal15, cymbal16
        ];
        for (var i=0; i < cymbalArray.length; i++){
          if (cymbalArray[i] == 1 && cymbalArray[i].id == "cymbal1"){
            playSound(cymbal, startTime);
          }else if (cymbalArray[i] == 1){
            playSound(cymbal, startTime + i*0.5*quarterNoteTime);
          }
        };

      }else{
        var cymbalArray = [
          cymbal1, cymbal2, cymbal3, cymbal4, cymbal5, cymbal6, cymbal7, cymbal8,
          cymbal9, cymbal10, cymbal11, cymbal12, cymbal13, cymbal14, cymbal15, cymbal16
        ];
        for (var i=0; i < cymbalArray.length; i++){
          if (cymbalArray[i] == 1 && cymbalArray[i].id == "cymbal1"){
            playSound(cymbal, startTime);
          }else if (cymbalArray[i] == 1){
            playSound(cymbal, startTime + i*quarterNoteTime);
          }
        };
      }

}

// Volume level
  var cVol = 5;
  function cVolUp(){
  $('#cVolUp').on('click', function(){
    if (cVol < 10){
  		cVol++;
      console.log(cVol);
  		$('#cVol').text("\xa0\xa0Vol: " + cVol);
    }
  });
  }

  function cVolDown(){
  $('#cVolDown').on('click', function(){
    if (cVol > 0){
  	  cVol--;
      cVol = cVol.toFixed();
  		$('#cVol').text("\xa0\xa0Vol: " + cVol);
      console.log(cVol);
    }
  });
  }

// Distortion level
var cDist = 0;
  function cDistUp(){
  $('#cDistUp').on('click', function(){
  	if (cDist < 10){
  		cDist++;
  		$('#cDist').text("\xa0Dist: " + cDist);
    }
  });
  }

  function cDistDown(){
  $('#cDistDown').on('click', function(){
  	if (cDist > 0){
  		cDist--;cDist
  		$('#cDist').text("\xa0Dist: " + cDist);
    }
  });
  }

// Reverb level
var cVerb = 0;
  function cVerbUp(){
  $('#cVerbUp').on('click', function(){
  	if (cVerb < 10){
  		cVerb++;
  		$('#cVerb').text("Verb: " + cVerb);
    }
  });
  }

  function cVerbDown(){
  $('#cVerbDown').on('click', function(){
  	if (cVerb > 0){
  		cVerb--;
  		$('#cVerb').text("Verb: " + cVerb);
    }
  });
  }


    $(function(){
    kVolUp();
    kVolDown();
    kDistUp();
    kDistDown();
    kVerbUp();
    kVerbDown();
    sVolUp();
    sVolDown();
    sDistUp();
    sDistDown();
    sVerbUp();
    sVerbDown();
    hVolUp();
    hVolDown();
    hDistUp();
    hDistDown();
    hVerbUp();
    hVerbDown();
    pVolUp();
    pVolDown();
    pDistUp();
    pDistDown();
    pVerbUp();
    pVerbDown();
    tVolUp();
    tVolDown();
    tDistUp();
    tDistDown();
    tVerbUp();
    tVerbDown();
    cVolUp();
    cVolDown();
    cDistUp();
    cDistDown();
    cVerbUp();
    cVerbDown();
    })
