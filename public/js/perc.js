console.log("...perc.js loaded");

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
        flashLights('perc'+(i+1));
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
          flashLights('perc'+(i+1));
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
          flashLights('perc'+(i+1));
        }
      };
    }

}
