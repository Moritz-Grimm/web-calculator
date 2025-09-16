const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
const decimalPlaces = document.getElementById('decimal-places');

document.addEventListener('keydown', (event) => {
  if (!event.ctrlKey && !event.altKey && !event.metaKey) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', ',', '(', ')'];
    
    if (allowedKeys.includes(event.key)) {
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

  if (!button) return;

  switch (true) {
    case button.classList.contains('number'):
      display.value += button.getAttribute('data-number')
      break;
    case button.classList.contains('operator'):
      display.value += button.getAttribute('data-operator');  
      break;
    case button.classList.contains('parenthese'):
      display.value += button.getAttribute('data-parenthese');
      break;
    case button.id === 'clear-button':
      clearDisplay();
      break;
    case button.id === 'backspace':
      backspace();
      break;
    case button.id === 'dot-button':
      display.value += button.getAttribute('data-value')
      break;
    case button.id === 'result-button':
      calculateResult();
      break;
  }
});

function calculateResult() {
  try {
    let result = eval(display.value);
    let decimals = Number(decimalPlaces.value);
    if (result) {
      display.classList.add('flash');
      setTimeout(() => display.classList.remove('flash'), 300);
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
