const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

document.addEventListener('keydown', (event) => {
  if (/[0-9+\-*/.]/.test(event.key)) {
    event.preventDefault();
    display.value += event.key;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    calculateResult();
  }
  if (event.key === "Backspace") {
    event.preventDefault();
    backspace();
  }
})


document.getElementById('buttons').addEventListener('click', function(event) {
  const button = event.target.closest('button');

  if (button.classList.contains('number')) {
    const number = button.getAttribute('data-number');
    display.value += number;
  } else if (button.classList.contains('operator')) {
    const operator = button.getAttribute('data-operator')
    display.value += operator;
  } else if (button.id === 'clear-button') {
    display.value = '';
  } else if (button.id === 'delete-last') {
    backspace();
  } else if (button.id === 'dot-button') {
    display.value += button.getAttribute('data-value');
  } else if (button.id === 'result-button') {
    calculateResult();
  }
});

function calculateResult() {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = 'Error';
    console.error(`Error: ${error}`);
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}
