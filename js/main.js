const boxOneText = '<h2>Is this green?!</h2>';
const boxTwoText = '<h2>Can you see me?</h2>';
const boxThreeText = '<h2>Watch me flip!</h2>';

$(document).on('keypress', (pressed) => {
  switch (pressed.key) {
  case '1': $('#item-one').toggleClass('green'); break;
  case '2': $('#item-two').css('display') == 'none' ?
    $('#item-two').fadeIn(1000) : $('#item-two').fadeOut(1000);
    break;
  case '3': $('#item-three').css('transform', 'rotate(180deg)'); break;
  }
});

$(document).on('click', function(target) {
  let id = target.target.id;
  switch (id) {
  case "item-one": $('#' + id).html(boxOneText); break;
  case "item-two": $('#' + id).html(boxTwoText); break;
  case "item-three": $('#' + id).html(boxThreeText); break;
  }
})