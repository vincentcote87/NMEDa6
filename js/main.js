const boxOneText = '<h2>Is this green?!</h2>';
const boxTwoText = '<h2>Can you see me?</h2>';
const boxThreeText = '<h2>Watch me flip!</h2>';

$(document).on('keypress', (pressed) => {
  switch (pressed.key) {
    case '1': $('#item-one').toggleClass('green'); break;
    case '2': $('#item-two').css('display') == 'none' ? $('#item-two').fadeIn(1000) : $('#item-two').fadeOut(1000); break;
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
  $(this).html(boxThreeText);
});
