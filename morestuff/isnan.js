function isNotANumber(value) {
  if (typeof value !== 'number') {
    return false
  }
  if (value <= 0 || value >= 0) {
    return false;
  }
  return true;
}

console.log(isNotANumber(NaN))
console.log(isNotANumber(undefined))
console.log(isNotANumber(null))
console.log(isNotANumber('string'))
console.log(isNotANumber(true))
console.log(isNotANumber(1))
console.log(isNotANumber(-100))
console.log(isNotANumber(0))
