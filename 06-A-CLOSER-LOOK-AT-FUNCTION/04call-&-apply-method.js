"use strict";

const arik = {
  airline: "ArikAir",
  iataCode: "AR",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

arik.book(233, "Michael Egbinola");
arik.book(146, "Jonas Cenan");
console.log(arik.bookings);

const peaceAir = {
  airline: "PeaceAir",
  iataCode: "PA",
  bookings: [],
};

//call method
const peaceBook = arik.book;
peaceBook.call(peaceAir, 768, "Mike Oluwatobi");

//apply method
const flightData = [546, "Mary Cooper"];
peaceBook.apply(peaceAir, flightData);
// peaceBook.call(peaceAir, ...flightData);
console.log(peaceAir.bookings);

const bell = {
  airline: "BellAir",
  iataCode: "BELL",
  bookings: [],
};

bell.book = arik.book;
bell.book(780, "Ezekiel Dalton");
console.log(bell.bookings);
