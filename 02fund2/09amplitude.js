const firstTemps = [-1, 2, 6, -8, 11, -4, "err", 10, 12, -8];
const secondTemps = [3, 5, 23, -7, 11, 6, 9, "default", -2, 18];

function calcAmplitude(array1, array2) {
  let temps = array1.concat(array2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(`Max = ${max}, Min = ${min}`);
  console.log(`Amplitude: Max - Min`);
  console.log(`Amplitude = ${max - min}`);
}

console.log(calcAmplitude(firstTemps, secondTemps));

// const secondTemps = [3, 5, 23, -10, 11, 6, 9, "default", -2, 18];

// const calcAmplitude = (temps) => {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }

//   console.log(`Max = ${max}, Min = ${min}`);
//   console.log(`Amplitude = ${max - min}`);
// };

// console.log(calcAmplitude(secondTemps));
