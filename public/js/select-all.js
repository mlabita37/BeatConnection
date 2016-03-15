console.log('...select-all.js loaded');

// Highlight all 16 cymbal notes
function allCymbal(){
  var bool = false;
  $('#allCymbal').click(function(){
    console.log("Cymbal working");
    bool = !bool;
    var cymbal = $('.cymbal');
    if (bool == true){
    for(i=0; i < cymbal.length; i++){
      $(cymbal).val(1);
      $(cymbal).css('background-color', 'limegreen');
      $('#allCymbal').css('color', 'limegreen');
    }
  }else {
    $(cymbal).val(0);
    $(cymbal).css('background-color', 'white');
    $('#allCymbal').css('color', 'darkorange');
  }
});
}

// Highlight all 16 tamborine notes
function allTamb(){
  var bool = false;
  $('#allTamb').click(function(){
    bool = !bool;
    var tamb = $('.tamb');
    if (bool == true){
    for(i=0; i < tamb.length; i++){
      $(tamb).val(1);
      $(tamb).css('background-color', 'limegreen');
      $('#allTamb').css('color', 'limegreen');
    }
  }else {
    $(tamb).val(0);
    $(tamb).css('background-color', 'white');
    $('#allTamb').css('color', 'darkorange');
  }
});
}

// Highlight all 16 percussion notes
function allPerc(){
  var bool = false;
  $('#allPerc').click(function(){
    console.log("All perc working");
    bool = !bool;
    var perc = $('.perc');
    if (bool == true){
    for(i=0; i < perc.length; i++){
      $(perc).val(1);
      $(perc).css('background-color', 'limegreen');
      $('#allPerc').css('color', 'limegreen');
    }
  }else {
    $(perc).val(0);
    $(perc).css('background-color', 'white');
    $('#allPerc').css('color', 'darkorange');
  }
});
}

// Select all 16 hi-hat notes
function allHiHat(){
  var bool = false;
  $('#allHiHat').click(function(){
    bool = !bool;
    var hihat = $('.hihat');
    if (bool == true){
    for(i=0; i < hihat.length; i++){
      $(hihat).val(1);
      $(hihat).css('background-color', 'limegreen');
      $('#allHiHat').css('color', 'limegreen');
    }
  }else {
    $(hihat).val(0);
    $(hihat).css('background-color', 'white');
    $('#allHiHat').css('color', 'darkorange');
  }
});
}

// Select all 16 snare notes
function allSnare(){
  var bool = false;
  $('#allSnare').click(function(){
    bool = !bool;
    var snare = $('.snare');
    if (bool == true){
    for(i=0; i < snare.length; i++){
      $(snare).val(1);
      $(snare).css('background-color', 'limegreen');
      $('#allSnare').css('color', 'limegreen');
    }
  }else {
    $(snare).val(0);
    $(snare).css('background-color', 'white');
    $('#allSnare').css('color', 'darkorange');
  }
});
}

// Select all 16 kick notes
function allKick(){
  var bool = false;
  $('#allKick').click(function(){
    bool = !bool;
    var kick = $('.kick');
    if (bool == true){
    for(i=0; i < kick.length; i++){
      $(kick).val(1);
      $(kick).css('background-color', 'limegreen');
      $('#allKick').css('color', 'limegreen');
    }
  }else {
    $(kick).val(0);
    $(kick).css('background-color', 'white');
    $('#allKick').css('color', 'darkorange');
  }
});
}

// Clear all notes
function clearAll(){
  $('#clearAll').click(function(){
    $(this).css('background-color', 'lime');
    setTimeout(function(){
      console.log("timeout working");
      $('#clearAll').css('background-color', 'deepskyblue');
    }, 250);
    var all = $('.seq');
      for (i=0; i<all.length; i++){
        $(all).val(0);
        $(all).css('background-color', 'white');
      }
  });
}
