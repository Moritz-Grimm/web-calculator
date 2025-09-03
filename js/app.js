document.getElementById('buttons').addEventListener('click', function (event) {
  const button = event.target.closest('button');
  const display = document.getElementById('display');


  if (button.classList.contains('number')) {
    const number = button.getAttribute('data-number');
    display.value += number;
  } else if (button.classList.contains('operator')) {
    const operator = button.getAttribute('data-operator')
    display.value += operator;
  } else if (button.id === 'clear-button') {
    display.value = '';
  } else if (button.id === 'delete-last') {
    display.value = display.value.slice(0, -1);
  } else if (button.id === 'dot-button') {
    display.value += button.getAttribute('data-value');
  } else if (button.id === 'result-button') {
    try {
      display.value = eval(display.value)
    } catch (error) {
      display.value = 'Error';
      console.error(`Error: ${error}`);
    }
  }
})
