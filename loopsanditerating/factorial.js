function factorial(num){
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  
  return factorial;
}


console.log(factorial(8));
console.log(factorial(7));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));