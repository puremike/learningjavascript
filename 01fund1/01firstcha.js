"use strict";
//height and weight are in meters and kg units respectively
const markWeight = 90;
const markHeight = 1.5;
const johnWeight = 80;
const johnHeight = 2;

const getBMI = (weight, height) => {
  let result = weight / height ** 2;
  return result.toFixed(2);
};

console.log(
  `Data 1: Mark weight is ${markWeight}kg and he is ${markHeight}m tall.`
);
console.log(
  `Data 2: John weight is ${johnWeight}kg and he is ${johnHeight}m tall.`
);

const marksBMI = getBMI(markWeight, markHeight);
const johnsBMI = getBMI(johnWeight, johnHeight);

if (marksBMI > johnsBMI) {
  console.log(true);
} else {
  console.log(false);
}

console.log(`Marks BMI: ${marksBMI}kg/m2`);
console.log(`Johns BMI: ${johnsBMI}kg/m2`);

const age = 17;
//conditional (tenary operator)
const drink = age >= 18 ? "Wine" : "Water or Juice";
//if else statement
if (age >= 18) console.log("Wine");
else console.log("Water or Juice");
console.log(drink);

const dayOfWeek = "Tuesday";
// switch statement
switch (dayOfWeek) {
  case "Monday":
    console.log("Busy Day!");
    break;

  case "Tuesday":
    console.log("Haaa!");
    break;
}

const bill = 400;
// if else statement
if (bill >= 50 && bill <= 300) {
  const tip = (15 / 100) * bill;
  console.log(`Tip: ${tip}`);
} else if (bill > 300) {
  const tip = (20 / 100) * bill;
  console.log(`Tip: ${tip}`);
} else {
  console.log(`No need for a tip.`);
}

//conditional Itenary operators
const bill2 = 300;
const tip2 =
  bill2 >= 50 && bill2 <= 300 ? (15 / 100) * bill2 : (20 / 100) * bill2;
console.log(`Tip: ${tip2.toFixed(2)}`);
