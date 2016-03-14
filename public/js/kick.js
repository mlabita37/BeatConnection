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

  var i = 0;

  function volumeUp(){
  $('#kVolUp').on('click', function(){
  	if (i < 10){
  		i++;
  		$('#kVol').text("\xa0\xa0Vol: " + i);
    }
  });
  }

  function volumeDown(){
  $('#kVolDown').on('click', function(){
    console.log('click working');
    console.log(i);
  	if (i > 0){
  		i--;
  		$('#kVol').text("\xa0\xa0Vol: " + i);
    }
  });
  }

  function distUp(){
  $('#kDistUp').on('click', function(){
  	if (i < 10){
  		i++;
  		$('#kDist').text("\xa0Dist: " + i);
    }
  });
  }

  function distDown(){
  $('#kDistDown').on('click', function(){
    console.log('click working');
    console.log(i);
  	if (i > 0){
  		i--;
  		$('#kDist').text("\xa0Dist: " + i);
    }
  });
  }

  function verbUp(){
  $('#kVerbUp').on('click', function(){
  	if (i < 10){
  		i++;
  		$('#kVerb').text("Verb: " + i);
    }
  });
  }

  function verbDown(){
  $('#kVerbDown').on('click', function(){
    console.log('click working');
    console.log(i);
  	if (i > 0){
  		i--;
  		$('#kVerb').text("Verb: " + i);
    }
  });
  }

  $(function(){
  volumeUp();
  volumeDown();
  distUp();
  distDown();
  verbUp();
  verbDown();
  })
