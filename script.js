const numberButton = document.querySelectorAll("[data-number]");
const preScreen = document.querySelector("[data-previous-screen]");
const curScreen = document.querySelector("[data-current-screen]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear-all]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");

let currentNumber = "";
let previousNumber = "";
let operation = "";
let result;

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    currentNumber += button.innerText.toString();
    curScreen.innerText = currentNumber;
  });
});

clearButton.addEventListener("click", () => {
  currentNumber = "";
  previousNumber = "";
  curScreen.innerText = currentNumber;
  preScreen.innerText = previousNumber;
});

deleteButton.addEventListener("click", () => {
  currentNumber = currentNumber.slice(0, -1);
  curScreen.innerText = currentNumber;
});

operationButton.forEach((button) => {
  button.addEventListener("click", () => {
    previousNumber = currentNumber;
    operation = button.innerText.toString();
    preScreen.innerText = previousNumber + " " + button.innerText.toString();
    currentNumber = "";
    curScreen.innerText = "";
  });
});

equalButton.addEventListener("click", () => {
  switch (operation) {
    case "+":
      result = Number(previousNumber) + Number(currentNumber);
      break;
    case "*":
      result = Number(previousNumber) * Number(currentNumber);
      break;
    case "-":
      result = Number(previousNumber) - Number(currentNumber);
      break;
    case "÷":
      result = Number(previousNumber) / Number(currentNumber);
      break;
    default:
      break;
  }
  operation = "";
  preScreen.innerText = "";
  currentNumber = result.toString();
  curScreen.innerText = result;
});
