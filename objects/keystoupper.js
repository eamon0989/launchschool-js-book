let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let array = Object.keys(obj);
let upperKeys = array.map((key) => key.toUpperCase());

// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i].toUpperCase();
// }

console.log(upperKeys, obj)
