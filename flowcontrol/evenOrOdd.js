function evenOrOdd(int) {
  //if ((typeof int) === 'number') { // my code, works just as well, wanted to try using isInteger
  if (Number.isInteger(int)) {
    console.log(int % 2 === 0 ? 'even' : 'odd');
  } else {
    console.log('Error, not a number')
  }
  
}
evenOrOdd(0);
evenOrOdd(1);
evenOrOdd(33);
evenOrOdd(132);
evenOrOdd('string');
evenOrOdd(132.53);

