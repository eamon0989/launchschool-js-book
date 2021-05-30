// my original function

// function stringToUpper(string) {
//   if (string.length > 10) {
//     return string.toUpperCase();
//   } else {
//     return string;
//   }
// }

// alternative using ternary operator

function stringToUpper(string) {
  return string.length > 10 ? string.toUpperCase() : string;
}

console.log(stringToUpper('goodbye'));
console.log(stringToUpper('goodbye neighbor'));
console.log(stringToUpper('this string has 29 characters'));
console.log(stringToUpper("Sue Smith"));     // => Sue Smith
console.log(stringToUpper("Sue Robertson")); // => SUE ROBERTSON
console.log(stringToUpper("Joe Thomas"));    // => Joe Thomas
console.log(stringToUpper("Joe Stevens"));   // => JOE STEVENS
