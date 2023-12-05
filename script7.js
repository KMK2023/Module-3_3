/**
 * 
 * 7.	In JavaScript, the toString method is used to convert an object to a string representation. By default, when an object is converted to a String, it returns a string that looks something like [object Object].
However, we can define our own toString methods for custom objects to provide a more meaningful string representation. 
a)  Define a custom toString method for the Person object that will format and print their details 
b)  Test your method by creating 2 different people using the below constructor function and printing them 
c)  Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
d) Add a custom toString for Student objects that formats and prints their details. Test with 2 students. 
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
} 
const person1 = new Person('James Brown', 73, 'male')
console.log('person1: '+person1) //prints person1: [object Object]

*/

// a) Define a custom toString method for the Person object:

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  // Custom toString method
  this.toString = function () {
    return `Person: { Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender} }`;
  };
}
// b) Test your method by creating 2 different people:
const person1 = new Person("Farah", 60, "male");
const person2 = new Person("Bindu", 42, "female");

console.log(person1.toString()); // prints Person: { Name: Farah, Age: 60, Gender: male }
console.log(person2.toString()); // prints Person: { Name: BIndu, Age: 42, Gender: female }

//c) Create a new constructor function Student that inherits from Person:

function Student(name, age, gender, cohort) {
  // Inherit properties from Person using call
  Person.call(this, name, age, gender);

  // Additional property for Student
  this.cohort = cohort;
}

//d) Add a custom toString for Student objects:

function Student(name, age, gender, cohort) {
  // Inherit properties from Person using call
  Person.call(this, name, age, gender);

  // Additional property for Student
  this.cohort = cohort;

  // Custom toString method for Student
  this.toString = function () {
    return `Student: { Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort} }`;
  };
}

const student1 = new Student("William", 12, "male", "2000");
const student2 = new Student("Amsaru", 14, "female", "2012");

console.log(student1.toString()); // prints Student: { Name: William, Age: 12, Gender: male, Cohort: 2000 }
console.log(student2.toString()); // prints Student: { Name: Amasaru, Age: 14, Gender: female, Cohort: 2012 }
