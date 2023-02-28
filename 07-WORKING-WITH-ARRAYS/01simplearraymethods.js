"use strict";

const currencies = new Map([
  ["USD", "United States Of America"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);
console.log(currencies);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ["a", "b", "c", "d", "e"];
//SLICE METHOD for array
console.log("SLICE METHOD");
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

//shallow copy of an array
console.log(arr.slice());

//SPLICE METHOD - mutates the original array. take out the part which you've spliced from the array.
console.log("SPLICE METHOD");
console.log(arr.splice(2));
console.log(arr);

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["k", "j", "i", "h", "g", "f"];

//REVERSE METHOD - also mutates the original array. It reverses the array from the right to left
console.log("REVERSE METHOD");
console.log(arr2.reverse());
console.log(arr2);

//CONCAT METHOD
console.log("CONCAT METHOD");
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2); //another way

//JOIN METHOD
console.log("JOIN METHOD");
console.log(letters.join(" + "));

const arr3 = ["k", "l", "m", "n"];

//using the at method
console.log("AT METHOD");
console.log(arr3.at(3));

// function orderName(name) {
//   const fullName = name.toLowerCase();
//   const [lastName, firstName, middleName] = fullName.split(" ");
//   const sliceLastName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1);
//   const sliceFirstName =
//     firstName.slice(0, 1).toUpperCase() + firstName.slice(1);
//   const sliceMiddleName = middleName.slice(0, 1).toUpperCase() + ".";
//   console.log(
//     `My full name is ${sliceLastName} ${sliceFirstName} ${sliceMiddleName}`
//   );
// }
// orderName("egbINOla MichAEl OLUWaTObi");

const flags = {
  alt: "Nigerian Flag, White",
  png: "Nigerian Flag, Green and White",
  currencies: {
    name: "Nigerian Naira",
    symbol: "NGN",
  },
};
console.log(flags.currencies.name);
