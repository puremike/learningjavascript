"use strict";

const myNames = ["Michael", "Opeyemmi", "Oladapo", "Scophee", "Oluwatobi"];

console.log(myNames);
console.log(myNames[4]);
console.log(myNames.length);
console.log(myNames[myNames.length - 2]);

const hobbies = new Array(
  "Singing",
  "Football",
  "Self-learning",
  "Researching",
  "Learning"
);

console.log(hobbies[3]);
hobbies[2] = "Dancing"; //an array is mutable
console.log(hobbies);

//display ages
const calcAge = (birthYear) => {
  return 2022 - birthYear;
};

const years = new Array(1963, 1973, 1999, 2001, 2004, 2008);

const age = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
  calcAge(years[4]),
  calcAge(years[years.length - 1]),
];
console.log(age);

//using for loop
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages[i] = calcAge(years[i]);
}
console.log(ages);

const familyNames = [
  "Olatunde",
  "Victoria",
  "Abimbola",
  "Oluwadamilola",
  "Ayomide",
  "Michael",
];

//Array Methods
//ADD ELEMENTS TO THE ARRAY

//push and unshift method
familyNames.push("Scophee"); //adds an element to the end of the array
console.log(familyNames);

familyNames.unshift("Egbinola"); //adds an element to the beginning of the array
console.log(familyNames);

//REMOVE AN ELEMENTS FROM THE ARRAY
// pop() and shift() methods
familyNames.pop(); // removes an element from the end of the array
console.log(familyNames);

familyNames.shift(); //removes an element from the beginning of the array
console.log(familyNames);

//indexOf checks for the presence of an element in the array and returns it position
console.log(familyNames.indexOf("Victoria"));
console.log(familyNames.indexOf("John"));

if (familyNames.indexOf("Victoria") == 1) {
  console.log(true);
} else {
  console.log(false);
}

//includes checks for the presence of an element in an array and output true  (if present) or false (if absent)
console.log(familyNames.includes("Victoria"));
console.log(familyNames.includes("John"));

if (familyNames.includes("Samantha")) {
  console.log(`Samantha is part of our family`);
} else {
  console.log(`Samantha is not part of the family`);
}

const fortune500Company = ["Amazon", "PayPal", "Facebook", "Microsoft"];
fortune500Company.sort((a, b, c) => {
  return a.localeCompare(c);
});
console.log(fortune500Company);
