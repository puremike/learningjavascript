"use strict";

const peaceAir = {
  airline: "Peace Airline",
  iataCode: "PAM",
  bookings: [],
  book(name, flightNum) {
    console.log(
      `${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}`
    );
    peaceAir.bookings.push({ name, flight: `${this.airline}${flightNum}` });
  },
};
peaceAir.book("Michael Oluwatobi", 233);
peaceAir.book("Sammy Richly", 322);
console.log(peaceAir.bookings);

const bellAir = {
  airline: "BellAir Airline",
  iataCode: "BAA",
  bookings: [],
};

const bellBook = peaceAir.book;

//call method
bellBook.call(bellAir, "Sandra Bullock", 887);

//apply method
const flightData = ["Amber Smith", 856];
bellBook.apply(bellAir, flightData);

//USING BIND METHOD
//using binding in object helps us to create a new function by binding the previous function to the object.

const euroWings = {
  airline: "Euro Wings Airline",
  iataCode: "EW",
  bookings: [],
};

const euroWingsBook = peaceAir.book.bind(euroWings);
euroWingsBook("Jonas Swing", 234);
euroWingsBook("Mary Smith", 423);

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.29);
console.log(addVAT(100));
console.log(addVAT(23));

//function returning a function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.29);
console.log(addVAT2(100));
// console.log(addTaxRate(0.29)(200));
