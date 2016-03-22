console.log("...tamb.js loaded");

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
            flashLights('tamb'+(i+1));
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
              flashLights('tamb'+(i+1));
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
              flashLights('tamb'+(i+1));
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

  $(function(){
  tVolUp();
  tVolDown();
  tDistUp();
  tDistDown();
  tVerbUp();
  tVerbDown();
  })
