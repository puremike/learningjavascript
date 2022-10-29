"use strict";

//ONE GLOBAL EXECUTION CONTEXT HOLDS BOTH THE TOP LEVEL CODES AND ALL THE FUNCTIONS, BUT ONLY THE TOP LEVEL CODES IS EXECUTED IN THE GLOBAL EC
const myName = "Michael Oluwatobi"; //top-level code

//FIRST EC TO EXECUTES first() function
const first = () => {
  let x = 3;
  let y = second(7, 8);
  x = x * y;
  console.log(`y = ${y}`);
  return `x = ${x}`;
};

//SECOND EC TO EXECUTES second() function
function second(a, b) {
  var z = 2;
  return z;
}
const final = first(); //top-level code

console.log(final);
