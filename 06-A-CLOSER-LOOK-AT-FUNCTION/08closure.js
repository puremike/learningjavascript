"use strict";

//A closure is not a feature that will explicitly use
//A function has access to the variable environment (VE) of the execution context in which it was created even after that execution context is gone.
//Closure: VE attached to the function, exactly as it was at the time and place the function was created

//A CLOSURE gives a function access to all the variables of it parent function, even after that parent function has returned. The functions keeps a reference to its outer scope chain throughout time.

//A CLOSURE makes sure that a function doesn't loose connection to variables that existed at the function's birthplace

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++; //Execution Context
    console.log(`${passengerCount} passengers`);
  };
};

//Global Execution Context
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

//More examples of CLOSURE
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 989;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//Re-assign by function h
h();
f();

let toPper;
const upper = function (name) {
  toPper = function () {
    console.log(`${name}`.toUpperCase());
  };
};
upper("michael egbinola");
toPper();

//timer

// setTimeout(() => {
//   console.log(`MICHAEL`);
// }, 2000);

// setTimeout(function delayName(name = "michael oluwatobi") {
//   console.log(`${name}`.toUpperCase());
// }, 2000);
