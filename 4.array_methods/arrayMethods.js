// arrayMethods.js
/* 
built in functions in js to make use of arrrays easier
*/

export function demoArrayMethods() {
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

// Keeps only even numbers using filter()
const evens = numbers.filter(num => num % 2 === 0);

// Adds all numbers together using reduce()
const total = numbers.reduce((sum, num) => sum + num, 0);


console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Even numbers:", evens);
console.log("Total sum:", total);

}