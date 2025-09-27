// arrowFunctions.js
/* 
arrow functions provide a shorter syntax for writing functions instead of using the return function
*/
export const multiply = (a, b) => a * b;

// implicit return with single param
export const square = n => n * n;

// arrow used with array methods
export const evens = arr => arr.filter(x => x % 2 === 0);