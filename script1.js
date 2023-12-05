/**
 * 1. makeCounter below is a decorator function which creates and returns a function that increments a counter. 
1.	a)  Create a second counter counter2 using the makeCounter function and test to see if 
it remains independent to counter1 
2.	b)  Modify makeCounter so that it takes an argument startFrom specifying where the 
counter starts from (instead of always starting from 0) 
3.	c)  Modify makeCounter to take another argument incrementBy, which specifies how 
much each call to counter() should increase the counter value by. 
function makeCounter() {
    let currentCount = 0;
    return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
} 
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2
 */

let counter2 = makeCounter();
// 1
counter2();
// 2
counter2();
// counter2 starts from 1 and increments independently from counter1

function makeCounter(startFrom) {
  let currentCount = startFrom || 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
// counter3 starts from 5
let counter3 = makeCounter(5);
counter3(); // 6
counter3(); // 7

function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom || 0;
  let increment = incrementBy || 1;
  return function () {
    currentCount += increment;
    console.log(currentCount);
    return currentCount;
  };
}
// counter4 starts from 10 and increments by 2
let counter4 = makeCounter(10, 2);
counter4(); // 12
counter4(); // 14
