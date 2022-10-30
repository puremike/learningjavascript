"use strict";

//ARROW FUNCTION DOESN'T HAVE HIS this KEYWORD BUT CAN USE THE this KEYWORD OF THE PARENT SCOPE

console.log(this); //will return Window()

//FUNCTION EXPRESSION
const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //using this inside of a regular function in strict mode will return an undefined value
};
calAge(1991);

//ARROW FUNCTION
const calcAgeArrow = (birthYear) => {
  console.log(this); //will return Window(). It will point to the this keyword in the global scope
  console.log(2022 - birthYear);
};
calcAgeArrow(1999);

//OBJECT
const Mike = {
  lastName: "Egbinola",
  currentYear: 2022,
  birthYeah: 1970,
  age: function () {
    console.log(this); //using this keyword here will return the entire object
    return `${this.currentYear - this.birthYeah} years`;
  },
};

console.log(Mike.age(Mike.currentYear, Mike.birthYeah));

//ARGUMENT KEYWORD - exist in only regular functions (function expressions and function declaration), but not arrow function.
//Solution 1
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(`Sum = ${addExpr(2, 5)}`);

//Solution 2: With arrow functions can't use the argument keyword
// const addExpr2 = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addExpr2(4, 8);
