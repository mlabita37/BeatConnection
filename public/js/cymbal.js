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

// CYMBAL
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
        flashLights('cymbal'+(i+1));
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
          flashLights('cymbal'+(i+1));
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
          flashLights('cymbal'+(i+1));
        }
      };
    }
  }
