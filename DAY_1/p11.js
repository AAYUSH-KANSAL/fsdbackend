 const { sum, difference } = require('./p10');

const num1 = 10;
const num2 = 20;

const total = sum(num1, num2); // Output: 30
const diff = difference(num1, num2); // Output: -10

console.log(`The sum of ${num1} and ${num2} is ${total}`);
console.log(`The difference between ${num1} and ${num2} is ${diff}`);