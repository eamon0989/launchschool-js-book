let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

console.log(myArray.filter(num => num % 2 === 0));

let myArrayNested = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArrayNested.length; i++) {
  for (let j = 0; j < myArrayNested[i].length; j++) {
    if (myArrayNested[i][j] % 2 === 0) {
      console.log(myArrayNested[i][j]);
    }
  }
}

myArrayNested.forEach(function(nestedArray) {
  nestedArray.forEach(function(element) {
    if (element % 2 === 0) {
      console.log(element);
    }
  })
})