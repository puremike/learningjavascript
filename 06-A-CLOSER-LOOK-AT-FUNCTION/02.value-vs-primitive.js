"use strict";

//primitive are immutable. We can’t do any operations to change their values. primitive values are entities of the types undefined , null , boolean , number , string and symbol. Primitive values are passed by value. They’re assigned to variables and passed into functions by copying their value and then doing those operations.

//when you pass a value to an object inside of function, it creates a copy of that object and changes the object outside the function to the new value.

const flight = "LH234";
const jonas = {
  name: "Jonas Michael",
  passport: 22334255245,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 22334255245) console.log("Checked In");
  else console.log("Wrong Passport");
  console.log(flightNum);
};

checkIn(flight, jonas);
console.log(flight, jonas);

///function
const newPassport = function (people) {
  people.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas.passport);

//
