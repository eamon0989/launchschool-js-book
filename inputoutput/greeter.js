let rlSync = require('readline-sync');

let name = rlSync.question('What is your name?\n');
let surname = rlSync.question('What is your surname?\n');
console.log(`Hello, ${name} ${surname}!`);