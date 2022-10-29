"use strict";

//LOOPING FORWARD

for (let i = 1; i <= 10; i++) {
  console.log(`Hello 🙌 ${i}`);
}

//loop through an array using the for of
const hobbies = [
  "Swimming",
  "Football",
  "Research",
  "Self-learning",
  "Public Speaking",
  "Coding",
];

//using for of
for (let hobby of hobbies) {
  console.log(`I love ${hobby}`);
}

//using for loop
for (let i = 0; i <= hobbies.length; i++) {
  console.log(hobbies[i]);
}

function calcAge(birthYear) {
  return 2022 - birthYear;
}
const year = [1963, 1973, 1999, 2001, 2003, 2008];
let ages = [];
for (let i = 0; i < year.length; i++) {
  ages[i] = calcAge(year[i]);
}
console.log(ages);

const personalData = [
  "Michael",
  23,
  "michaelmarketing25@gmail.com",
  "password",
];
for (let i = 0; i <= personalData.length; i++) {
  if (typeof personalData[i] !== "string") continue;
  console.log(personalData[i]);
}

// let sum = 0;
// const addNumbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// for (let i = 1; i <= addNumbers.length; i++) {
//   sum += i;
// }

// console.log(sum);

// for in loop for object looping
const pData = {
  name: "Michael",
  age: 23,
  emailAddress: "michaelmarketing25@gmail.com",
  password: "S@#XXAYY&XCS1",
};

//using for in loop
for (let data in pData) {
  console.log(pData[data]);
}

const number = [1, 2, 3, "numb1", 4, 5, 6, 7, "numb2", 8, 9, "numb3", 10];

let result = " ";

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 !== 0 && number[i] !== "string") continue;
  console.log(number[i]);

  // if (typeof number[i] === "string") break;
  // console.log(number[i]);
}
