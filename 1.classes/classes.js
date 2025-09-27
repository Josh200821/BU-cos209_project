// classes.js
/*  
classes are used to encapsulate data and functions while creating objects
*/

//main class
export class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //fun for main class
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// subclass
export class Student extends Person {
  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }
  //fun for sub class
  introduce() {
    return `Hi, I'm ${this.getFullName()} ${this.course}.`;
  }
}