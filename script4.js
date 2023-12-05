/**
 * 
 * 4.	The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc. 
1.	a)  Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second. 
2.	b)  Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing 
3.	c)  Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping. 


 */

// a) Using setInterval:
function printFibonacci(limit) {
  let a = 1,
    b = 1,
    count = 0;

  const intervalId = setInterval(() => {
    console.log(a);

    const temp = a + b;
    a = b;
    b = temp;

    count++;

    if (limit && count >= limit) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Example: Print the first 5 numbers in the Fibonacci sequence
printFibonacci(5);

// b) Using nested setTimeout calls:

function printFibonacciTimeouts(limit) {
  let a = 1,
    b = 1,
    count = 0;

  function printNext() {
    console.log(a);

    const temp = a + b;
    a = b;
    b = temp;

    count++;

    if (limit && count < limit) {
      setTimeout(printNext, 1000);
    }
  }

  // Initial call
  printNext();
}

// Example: Print the first 5 numbers in the Fibonacci sequence
printFibonacciTimeouts(5);

// c) Extend to accept a limit argument:

// Using setInterval
printFibonacci(8);

// Using nested setTimeout calls
printFibonacciTimeouts(8);
