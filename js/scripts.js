
// business logic
function add(number1, number2) {
  const sum = number1 + number2;
  return sum;
}

// user interface logic
//adding
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The result for adding the two numbers is: " + add(number1, number2));

// subtracting

function subtract(number1, number2) {
  return number1 - number2;
}

window.alert("The result of subtracting is " + subtract(number1, number2));

//multiplying

function multiply(number1, number2) {
  return number1 * number2;
}
window.alert("The result of multiplying the two numbers is " + multiply(number1, number2));

//dividing

function divide(number1, number2) {
  return number1 / number2;
}
window.alert("The result of dividing the two numbers is " + divide(number1, number2));
