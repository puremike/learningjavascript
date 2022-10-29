"use strict";

//function declaration
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitChoices = function (apple, orange) {
  const applePieces = cutPieces(apple);
  const orangePieces = cutPieces(orange);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
};

console.log(fruitChoices(3, 5));

// const cutPieces = (fruit) => {
//   return fruit * 4;
// };
// const apple = 3;
// const orange = 5;

// //invoking the function
// const applePieces = cutPieces(apple);
// const orangePieces = cutPieces(orange);

// console.log(`Juice with ${applePieces} apples and ${orangePieces} oranges`);

//function expression: code can't be called before function definition. You must call your code after the function definition
//arrow function
const returnName = (name) => {
  return name;
};

const returnFullNames = (first, last) => {
  //function calling function
  const firstName = returnName(first);
  const lastName = returnName(last);

  const printFullName = `My name is ${firstName} ${lastName}.`;
  return printFullName;
};
console.log(returnFullNames("Michael", "Oluwatobi"));

//function declaration: code can be called before defining a function
console.log(myFullName("Samuel", "John"));

function myName(name) {
  return name;
}

function myFullName(first, last) {
  //function calling functions
  const firstN = myName(first);
  const lastN = myName(last);

  const printName = `My name is ${firstN} ${lastN}.`;
  return printName;
}

//arrow function && function expression
const yearDifference = (myYear) => {
  return 2022 - myYear;
};
console.log(yearDifference(2013));

//calculate retirement age
const calAge = (birthYeah) => {
  return 2022 - birthYeah;
};

const yearUntilRetirement = (birthYeah, firstName) => {
  const personAge = calAge(birthYeah);
  const retirementAge = 65 - personAge;
  if (retirementAge > 0) {
    return `${firstName} must retire in ${retirementAge} years because of his draining health`;
  } else {
    return -1;
  }
};
console.log(yearUntilRetirement(1960, "John"));
