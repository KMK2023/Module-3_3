/**
 * 2. The following delayMsg function is intended to be used to delay printing a message until some time has passed. 
1.	a)  What order will the four tests below print in? Why? 
2.	b)  Rewrite delayMsg as an arrow function 
3.	c)  Add a fifth test which uses a large delay time (greater than 10 seconds) 
4.	d)  Use clearTimeout to prevent the fifth test from printing at all. 
function delayMsg(msg)
{
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
 */

// Order :
// 4: delay - None
// 3: Delayed by 0ms
// 2: Delayed by 20ms
// 1: Delayed by 100ms

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 12000, "#5: Delayed by 12 seconds");

// Clearing out- prevents the 5th test from printing
const timeoutId = setTimeout(delayMsg, 12000, "#5: Delayed by 12 seconds");
clearTimeout(timeoutId);
//Other delays
const delayMsg1 = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

const timeoutId1 = setTimeout(
  delayMsg,
  12000,
  "#5: This delay is calaulted by 12 seconds"
);
clearTimeout(timeoutId);
