const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    display.value += value;
  });
});
