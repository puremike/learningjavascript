"use strict";

const myName = "Michael"; //global scope

function first() {
  const age = 23; //function scope

  if (age >= 20) {
    const decade = 2; //block scope
    var millenial = true;
  }

  function second() {
    const job = "JavaScript Programmer";
    console.log(`${myName} is a ${age}-old ${job}`);

    function third() {
      const status = "SUCCESS";
      console.log(`${status}: ${myName} is a ${age}-old ${job} \n`);
    }

    third();
  }

  second();
}
first();

//A PROGRAM TO SUM THE VARS HOLDING AREA OF A TRIANGLE,LENGTH OF ARC, AND AREA OF A SQUARE TOGETHER

const knowStatus = "SUCCESS: ";

function calcAreaOfTriangle(base, height) {
  const areaOfTriangle = 0.5 * base * height;
  console.log(`Area of triangle = ${areaOfTriangle}m2`);

  function calcLengthOfArc(deg, rad) {
    const lengthOfArc = (deg * 2 * 3.142 * rad) / 360;
    console.log(`Length of Arc = ${lengthOfArc}m`);

    function calcAreaOfSquare(L) {
      const areaOfSquare = 4 * L;
      console.log(`Area of Square = ${areaOfSquare}m2`);

      function sumvaluesOfAllFunctions() {
        let sum = areaOfTriangle + lengthOfArc + areaOfSquare;
        sum = sum.toFixed(2);
        console.log(
          `${knowStatus}SUM of the values of all functions = ${sum} \n`
        );
      }
      sumvaluesOfAllFunctions();
    }
    calcAreaOfSquare(4);
  }
  calcLengthOfArc(60, 10);
}
calcAreaOfTriangle(4, 8);

///ANOTHER PROGRAM FOLLOWING SCOPING
const prgStatus = "SUCCESS: ";
const marketType = "marketplace";

function goodDeals(deals) {
  const goodDeals = deals;
  function badDeals(deals) {
    const badDeals = deals;
    function blackFridayDeals(deals) {
      const blackFriday = deals;
      function availableDeals() {
        if (badDeals > goodDeals) {
          console.log(
            `${prgStatus}There are ${badDeals} bad and ${blackFriday} black friday deals left in the ${marketType}`
          );
        } else if (goodDeals > badDeals) {
          console.log(
            `${prgStatus}There are ${goodDeals} good and ${blackFriday} black friday deals left in the ${marketType} \n`
          );
        }
      }
      availableDeals();
    }
    blackFridayDeals(11);
  }
  badDeals(2);
}
goodDeals(5);

function calcAge(currentYear, birthYear) {
  const age = currentYear - birthYear;
  console.log(`She's ${age}-years old`);
  function checkIfMillenial() {
    if (birthYear >= 1981 && age <= 1996) {
      console.log(`She is ${age}-old and a Millenial.`);
    } else {
      console.log(`She is ${age}-old and not a Millenial.`);
    }
  }
  checkIfMillenial();
}
calcAge(2022, 1988);
