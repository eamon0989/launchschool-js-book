// function isNegativeZero(num) {
//   if (1 / num === -Infinity) {
//     return true
//   } 
//   return false;
// }

function isNegativeZero(num) {
  return 1 / num === -Infinity;
}

//this can be more performant
// function isNegativeZero(value) {
//   return (value === 0) && (1 / value === -Infinity);
// }

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(1));
console.log(isNegativeZero(-1));
console.log(isNegativeZero(NaN));
