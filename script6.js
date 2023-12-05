/**\
 * 
 * 6.	Use the Function prototype to add a new delay(ms) function to all functions, which can 
be used to delay the call to that function by ms milliseconds. 
function multiply(a, b) {
    console.log( a * b );
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

a)  Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters 
b)  Use apply to improve your solution so that delayed functions can take any number of parameters 
c)  Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works. 
 */


// a) Use the example multiply function and the delay prototype:

Function.prototype.delay = function (ms) {
    const originalFunction = this;

    return function (...args) {
        setTimeout(() => {
            originalFunction.apply(this, args);
        }, ms);
    };
};

function multiply(a, b) {
    console.log(a * b);
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// b) Use apply to allow delayed functions to take any number of parameters:

Function.prototype.delay = function (ms) {
    const originalFunction = this;

    return function (...args) {
        setTimeout(() => {
            originalFunction.apply(this, args);
        }, ms);
    };
};

function multiply(a, b) {
    console.log(a * b);
}

function sum(...numbers) {
    console.log(numbers.reduce((acc, num) => acc + num, 0));
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
sum.delay(1000)(1, 2, 3, 4); // prints 10 after 1000 milliseconds

// c) Modify multiply to take 4 parameters and test the delay prototype:

Function.prototype.delay = function (ms) {
    const originalFunction = this;

    return function (...args) {
        setTimeout(() => {
            originalFunction.apply(this, args);
        }, ms);
    };
};

function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}

multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds
