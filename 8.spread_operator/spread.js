// spread.js
/* lets you expand arrays by adding a previously declared array into a new array */

export function demoSpread() {
  const arr = [1, 2, 3, 4, 5];
  const arr1 = [...arr, 6, 7];
  return arr1; // [1, 2, 3, 4, 5, 6, 7]
}