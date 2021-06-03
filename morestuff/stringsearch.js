// Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

// function allMatches(array, string) {
//   let results = [];
//   for (let i = 0; i < array.length; i++) {
//     if (string.test(words[i])) {
//     // if (words[i].match(string)) { //this also works
//       results.push(array[i]);
//     }
//   }
//   return results;
// }

//shorter version
function allMatches(array, string) {
  return array.filter((word) => string.test(word));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']