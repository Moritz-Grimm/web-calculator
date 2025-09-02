const display = document.getElementById("display");
const resultButton = document.getElementById('result-button');
const clearButton = document.getElementById('clear-button');
const deleteButton = document.getElementById('delete-last');
const buttons = document.querySelectorAll("#buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    display.value += value;
  });
});

resultButton.addEventListener("click", () => {
  let parsedValue = eval(display.value)
  let result = parsedValue;
  display.value = result;
});

clearButton.addEventListener("click", () => {
  display.value = null;
})

deleteButton.addEventListener("click", () => {
  display.value =  display.value.slice(0, -1);
})
