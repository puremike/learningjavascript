"use strict";

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return (15 / 100) * bill;
  } else if (bill > 300) {
    return (20 / 100) * bill;
  } else {
    return (5 / 100) * bill;
  }
};

//doing it by calling the functions in the array
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//doing it using for loops
const tips2 = [];
const total2 = [];

for (let i = 0; i < bills.length; i++) {
  // console.log(bills.length);
  tips2[i] = calcTip(bills[i]);
  total2[i] = tips2[i] + bills[i];
}

console.log(tips2);
console.log(total2);
