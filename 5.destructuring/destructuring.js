/* destructuring.js 
Destructuring is a shorter and easier way to pull out values
 from objects or arrays and store them in variables.

 person takes the 'name' and 'job'
 values from the 'person' object and saves them as variables

 num takes the first two values from the
   'num' array and stores them in 'x' and 'y'.
*/
export function demoDestructure() {
  const person = { name: 'Josh', age: 19, job: 'Engineer' };
  const { name, job } = person; // object destructuring

  const num = [10, 20, 30];
  const [x, y] = num; // array destructuring

  return { name, job, x, y };
}