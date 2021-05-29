function multiply(num1, num2) {
  return num1 * num2;
}

function getNumbers(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let num1 = getNumbers('Input number 1\n');
let num2 = getNumbers('Input number 2\n');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);