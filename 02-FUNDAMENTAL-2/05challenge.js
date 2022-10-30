const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTIp(bills) {
  if (bills >= 50 && bills <= 300) {
    return (15 / 100) * bills;
  } else if (bills > 300) {
    return (20 / 100) * bills;
  } else {
    return (10 / 100) * bills;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTIp(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log(`TIPS AND TOTALS`);
console.log(tips, totals);

let sum = 0;
for (j = 0; j < totals.length; j++) {
  sum += totals[j];
}

sum = sum.toFixed(2);
const average = (sum / totals.length).toFixed(2);

console.log(`Sum of totals: ${sum}`);
console.log(`Average of totals: ${average}`);

// const numArray = new Array(1, 10, 34, 23, 65, 7, 12, 45, 12, 19, 26);
// let sum = 0;
// for (let i = 0; i < numArray.length; i++) {
//   sum += numArray[i];
// }

// //backward loop
// for (let p = numArray.length - 1; p >= 0; p--) console.log(numArray[p]);

// //sum of numArray
// console.log(`Sum of the array = ${sum}`);
