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
        flashLights('kick'+(i+1));
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
          flashLights('kick'+(i+1), startTime + i*0.5*quarterNoteTime);
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
          flashLights('kick'+(i+1), startTime + i*quarterNoteTime);
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

  $(function(){
  kVolUp();
  kVolDown();
  kDistUp();
  kDistDown();
  kVerbUp();
  kVerbDown();
  })
