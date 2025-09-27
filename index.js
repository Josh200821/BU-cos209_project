// index.mjs - imports and runs the small demos

import { Person, Student } from './1.classes/classes.js';
import { multiply, square, evens as evensFromArrow } from './2.arrow_functions/arrowFunctions.js';
import { demoVars } from './3.variables/variables.js';
import { demoArrayMethods } from './4.array_methods/arrayMethods.js';  
import { demoDestructure } from './5.destructuring/destructuring.js';
import { checkEven } from './7.ternary_operator/ternary.js';
import { demoSpread } from './8.spread_operator/spread.js';
import { PI, areaOfCircle } from './6.modules/modulesA.js';

console.log('--- Classes ---');
const s = new Student('Ogbedo', 'Joshua', 'Software Engineering');
console.log(s.introduce());

console.log('\n--- Arrow Functions ---');
console.log('multiply(4,5)=', multiply(4,5));
console.log('square(6)=', square(6));
console.log('evens from arrow on [1..6]=', evensFromArrow([1,2,3,4,5,6]));

console.log('\n--- Variables ---');
console.log(demoVars());

console.log('\n--- Array Methods ---');
console.log(demoArrayMethods());

console.log('\n--- Destructuring ---');
console.log(demoDestructure());

console.log('\n--- Ternary ---');
console.log('checkEven(7)=', checkEven(7));
console.log('checkEven(8)=', checkEven(8));

console.log('\n--- Spread ---');
console.log(demoSpread());

console.log('\n--- Modules ---');
console.log('PI from modulesA=', PI);
console.log('areaOfCircle(2)=', areaOfCircle(2));