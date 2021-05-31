let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);

console.log(`You are ${age} years old.`);
for (let i = 10; i < 50; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}
