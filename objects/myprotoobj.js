let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
//console.log(myObj.foo)

myObj.qux = 3;

//console.log(myObj.qux)

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key); // only loops over own keys (not inherited)
});

for (let key in myObj) {
  console.log(key); // loops over all including inherited
}
