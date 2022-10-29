"use strict";

//PROBLEM1 : CALCULATE THE DIFFERENCE BETWEEN THE HIGHEST AND SMALLEST ELEMENT IN AN ARRAY

//Step 1: Declare a function to calculate the amplitude
//declare max and min variables to hold temps[0]
//Step 2: Write a for loop to loop through the array
//Step3: Write a 1f statement to check if the data type of typeof of the array
//Step4: Write two ifs to check max and min values

const temperatures = [1, -3, 4, -5, "error", 7, 10, 8, 14, 23, -11];

function calcAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];

  debugger;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(`Max = ${max} and Min = ${min}`);
  return `Amplitude (Max - Min) = ${max - min}`;
}

console.log(calcAmplitude(temperatures));

//PROBLEM 2: A FUNCTION THAT TAKES TWO ARRAYS
const firstTemps = [2, -5, 7, -9, 11, 18, 20, -17];
const secondTemps = [5, -17, 11, 13, -8, 12, -12, 5];

function calcAmplitude2(temps1, temps2) {
  //use the concat() method to merge two arrays together
  let temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(`Max = ${max} and Min = ${min}`);
  return `Amplitude (Max - Min) = ${max - min}`;
}

console.log(calcAmplitude2(firstTemps, secondTemps));
