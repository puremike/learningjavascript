"use strict";

//default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = numPassenger * 100
) {
  //ES% way of doing default parameters
  //   numPassenger ||= 1;
  //   price ||= 200;
  const booking = { flightNum, numPassenger, price };
  console.log(booking);
  bookings.push(booking);
};
createBooking("JBN12FR");
createBooking("JJHSC12", 12, undefined);
