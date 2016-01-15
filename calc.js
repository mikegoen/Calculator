var inputTotal = [];

$('.button').click(function () {
  var input = $(this).html();
  var display = $('#display-text').html();
  var newInput = true;
  input = input.trim();

  if (input == 'C') { //clear
    $('#display-text').html('0');
    inputTotal = [];
  } else if (input == 'CE') {
    $('#display-text').html(display.slice(0, display.length-1));
    inputTotal.pop();
    if ($('#display-text').html() == '') $('#display-text').html('0')
  } else if (+input >= 0 && display == '0') { //first input
    $('#display-text').html('');
    $('#display-text').html(input);
    inputTotal.push(+input);
  } else if (+input >= 0) {           //second or greater input
    $('#display-text').html(display + String(input));
    inputTotal.push(+input)
  } else if (input == '=') {
    $('#display-text').html(eval( inputTotal.join('') ) );
    inputTotal = [];
  } else {
    parseOperator(input, display);
  }
});

function parseOperator(input, display) {
  switch (input) {
    case '+':
      inputTotal.push(input);
      $('#display-text').html(display + input);
      break;
    case '-':
      inputTotal.push(input);
      $('#display-text').html(display + input);
      break;
    case 'x':
      inputTotal.push('*');
      $('#display-text').html(display + 'x');
      break;
    case '/':
      inputTotal.push(input);
      $('#display-text').html(display + input);
      break;
    case '&#8730':
      $('#display-text').html(Math.sqrt(display));
    }
}
