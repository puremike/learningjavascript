"use strick";

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const dolphinsScore = calcAverage(22, 22, 22).toFixed(2);
const koalasScore = calcAverage(50, 38, 78).toFixed(2);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins Wins. ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas Wins. ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`Nobody wins....`);
  }
};

console.log(checkWinner(dolphinsScore, koalasScore));
console.log(checkWinner(300, 160));

//A function to calculate the area of a triangle
const calcAreaOfTriangle = (base, height) => {
  return (base * height) / 2;
};
const result = calcAreaOfTriangle(4, 10).toFixed(2);
console.log(`The area of triangle : ${result}m2`);
// console.log(
//   "The area of triangle : " + calcAreaOfTriangle(4, 10).toFixed(2) + "m2"
// );
