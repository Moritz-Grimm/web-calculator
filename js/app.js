const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
const decimalPlaces = document.getElementById('decimal-places');

document.addEventListener('keydown', (event) => {
  if (!event.ctrlKey && !event.altKey && !event.metaKey) {
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.',','];

    if (event.key.includes(allowedKeys)) {
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
    if (event.key === "c") {
      clearDisplay();
    }
    if (event.key === "d") {
      backspace();
    }
    if (event.key === "r") {
      calculateResult();
    }
  }
})


document.getElementById('buttons').addEventListener('click', function (event) {
  const button = event.target.closest('button');

  if (!button) {
    return;
  }

  if (button.classList.contains('number')) {
    const number = button.getAttribute('data-number');
    display.value += number;
  } else if (button.classList.contains('operator')) {
    const operator = button.getAttribute('data-operator')
    display.value += operator;
  } else if (button.id === 'clear-button') {
    clearDisplay();
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
    let result = eval(display.value);
    let decimals = Number(decimalPlaces.value);
    console.log(decimals);
    if (result) {
      result = parseFloat(result.toFixed(decimals));
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
    console.error(`Error: ${error}`);
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function toggleWhitemode() {
  const element = document.documentElement;
  element.classList.toggle("light-mode");
}

function clearDisplay() {
  display.value = '';
}
