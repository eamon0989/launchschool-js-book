let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

console.log(objToCopy['foo']);
console.log(objToCopy['bar']);
console.log(objToCopy['qux']);


function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      console.log(sourceObject[key])
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

// function copyObj(object, array ) {
//   if (!array) {
//     return Object.assign({}, object);
//   } else {
//     let entries = Object.entries(object);
//     // console.log(entries);
//     let addToObject = [];
//     entries.forEach(function(item) {
//       array.forEach(function(element) {
//         // console.log(item, element)
//         if (item.includes(element)) {
//           addToObject.push(item);
//         }
//       })
//     })
//     let object1 = {}
//     for (let i = 0; i < addToObject.length; i++) {
//       object1[i] = addToObject[i];
//     }
//     return object1;
//   }
// }

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }