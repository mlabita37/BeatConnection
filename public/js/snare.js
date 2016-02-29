console.log('...snare.js loaded');

function playSnare(snare, startTime, quarterNoteTime){

  snare = snare;
  startTime = startTime;
  quarterNoteTime = quarterNoteTime;

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
