let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkNumber(array, element) {
  return array.includes(element);
}

console.log(checkNumber(numbers1, 3), checkNumber(numbers2, 3), checkNumber(numbers3, 3))