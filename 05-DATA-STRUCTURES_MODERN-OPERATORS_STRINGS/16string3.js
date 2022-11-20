"use strict";

//split() and join() method

console.log("a+very+nice+string".split("+"));
console.log("Michael Oluwatobi".split(" "));

//destructuring and split method
const [firstName, lastName] = "Michael Oluwatobi".split(" ");
console.log(firstName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// function to capitalize name in a sentence
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("michael oluwatobi");

//padding
const message = "Go to gate 23";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Michael".padStart(20, "+").padEnd(30, "+"));

//function masked
const maskedCreditCard = function (number) {
  const str = number + ""; //String(number)
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskedCreditCard(22132434345562));
console.log(maskedCreditCard(44235256754354));

//repeat() method
const message2 = "Bad weather...All Departures Delayed....";
console.log(message2.repeat(5));

const waitingPlane = function (n) {
  console.log(`There are ${n} planes --- ${"✈️".repeat(n)}`);
};
waitingPlane(7);
waitingPlane(5);
waitingPlane(3);
