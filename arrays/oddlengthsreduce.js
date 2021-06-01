let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (currentValue.length % 2 !== 0) {
      accumulator.push(currentValue.length);
    }            
    return accumulator;
  }, []);
}