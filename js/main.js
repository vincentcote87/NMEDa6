const GREEN = 'rgb(0, 128, 0)';
const AQUAMARINE = 'rgb(127, 255, 212)';

let boxOneText = '<h2>Is this green?!</h2>';
let boxTwoText = '<h2>Can you see me?</h2>';

$(document).on('keypress', (pressed) => {
  switch (pressed.key) {
    case '1': updateColour(); break;
    case '2': fadeBox(); break;
    case '3': $('#item-three').css('transform', 'rotate(180deg)'); break;
  }
});

$('#item-one').click(function() {
  $(this).html(boxOneText);
});

$('#item-two').click(function() {
  $(this).html(boxTwoText);
});

$('#item-three').click(function() {
  $(this).html('<h2>Watch me flip!</h2>');
});

function updateColour() {
  $('#item-one').css('background-color', function() {
    let backColor = $(this).css('background-color');
    if (backColor === GREEN) {
      if ($(this).html() != "") {
        boxOneText = '<h2>Is this green?!</h2>';
        $(this).html(boxOneText);
      }
      return AQUAMARINE;
    } else {
      if ($(this).html() != "") {
        boxOneText = '<h2>Now that\'s green!</h2>';
        $(this).html(boxOneText);
      }
      return GREEN;
      }
  });
}

function fadeBox() {
  $('#item-two').css('display', function() {
    if ($(this).css('display') == 'none') {
      if ($(this).html() != "") {
        boxTwoText = '<h2>Can you see me?</h2>';
        $(this).html(boxTwoText);
      }
      return $(this).fadeIn(1000);
    } else {
      if ($(this).html() != "") {
        boxTwoText = '<h2>Noooooooo!!!!</h2>';
        $(this).html(boxTwoText);
      }
      return $(this).fadeOut(1000);
    }
  })
}
