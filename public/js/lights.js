console.log("...lights.js loaded");

function flashLights(drum){
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
