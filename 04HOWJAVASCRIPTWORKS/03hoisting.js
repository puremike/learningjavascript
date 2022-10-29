"use strict";
//VARIABLES

console.log(name); //output: undefined

var name = "Mike"; //var is hoisted and will output undefined. Also, variables declared with var will create properties in the window object

//let and const will return reference errors because let and const are not hoisted
let age = 24;
const job = "Coder";

//FUNCTIONS

console.log(`Sum of 2 numbers = ${addTwoNumbers(20, 55)}`); // We were able to log and call this function because function declaration are hoisted

// console.log(`Multiply three numbers = ${multiplyThreeNumbers(20, 10, 3)}`); // we were not ABLE to call this function because FUNCTION EXPRESSION AND ARROW are not hoisted
// console.log(`Average of 3 numbers = ${calcAverage(45, 76, 89)}`);

//arrow function to multiply three numbers: You can only call this function after it has been initialized
const multiplyThreeNumbers = (a, b, c) => {
  return a * b * c;
};
console.log(`Multiply 3 numbers = ${multiplyThreeNumbers(20, 10, 3)}`);

//function expression to average three number: You can only call this function after it has been initialized
const calcAverage = function (a, b, c) {
  return (a + b + c) / 3;
};
console.log(`Average of 3 numbers = ${calcAverage(45, 76, 89)}`);

//function declaration to add two numbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
