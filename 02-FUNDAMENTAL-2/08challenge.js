// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print. 770C in 1 days 210C in 2 days ... 230C in 3 days

"use strict";

const temperatures = [17, 21, 23];

function printForecast(temps) {
  const degreeSymbol = "℃";
  for (let j = 0, i = 1; j, i <= temps.length; j++, i++) {
    console.log(`${temps[j]}${degreeSymbol} in ${i}days`);
  }
}

console.log(printForecast(temperatures));
