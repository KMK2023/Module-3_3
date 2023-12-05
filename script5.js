// /**
//  * 5.	The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
// description() {
//    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
// };
// car.description(); //works
// setTimeout(car.description, 200); //fails

// a)  Fix the setTimeout call by wrapping the call to car.description() inside a function
// b)  Change the year for the car by creating a clone of the original and overriding it
// c)  Does the delayed description() call use the original values or the new values from
// b)? Why?
// d)  Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function
// e)  Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)

//  */

// // a) Fix the setTimeout call by wrapping the call to car.description() inside a function:

// setTimeout(function () {
//   car.description();
// }, 200);

// // b) Change the year for the car by creating a clone and overriding it:

// let newCar = Object.assign({}, car, { year: 2022 });

// //c) Does the delayed description() call use the original values or the new values from b)?

// // d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function:
// car.description = car.description.bind(car);

// // Now, you can use the method in setTimeout without a wrapper function
// setTimeout(car.description, 200);

// //e) Change another property of the car by creating a clone and test setTimeout with the bound method:

// let anotherNewCar = Object.assign({}, car, { make: "Tesla" });

// // Change another property and test with the bound method
// setTimeout(anotherNewCar.description, 200);
