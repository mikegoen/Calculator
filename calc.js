var inputTotal = [],
    newEntry = true;

$('.button').click(function () {
  var input = $(this).html();
  var display = $('#display-text').html();
  input = input.trim();

//first input
  if (+input >= 0 && newEntry == true) {
    $('#display-text').html('');
    $('#display-text').html(input);
    inputTotal.push(+input);
    newEntry = false;
  }
//second or greater input
  else if (+input >= 0) {
    $('#display-text').html(display + String(input));
    inputTotal.push(+input)
  }

  else {
    nonNumber(input, display);
  }
});

function nonNumber(input, display) {

  //carry over from previous calculation
  if (newEntry) {
    inputTotal.push(display);
    newEntry = false;
  }

  switch (input) {
    case 'C':
      $('#display-text').html('0');
      inputTotal = [];
      newEntry = true;
      break;

    case 'CE':
      $('#display-text').html(display.slice(0, display.length-1));
      inputTotal.pop();

      //return to zero if empty
      if ($('#display-text').html() == '') {
        $('#display-text').html('0');
        newEntry = true;
        }
      break;

    case '=':
      $('#display-text').html(eval( inputTotal.join('') ) );
      inputTotal = [];
      newEntry = true;
      break;

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

    case '.':
      inputTotal.push(input);
      $('#display-text').html(display + input);
      break;
    }
}
