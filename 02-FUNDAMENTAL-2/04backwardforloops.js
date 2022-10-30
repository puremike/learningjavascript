const evenNumbers = [2, 4, 6, 8, 10];

//BACKWARD FOR LOOP
for (let i = evenNumbers.length; i >= 0; i--) {
  console.log(evenNumbers[i]);
}
console.log("\n");

//FORWARD FOR LOOP
// for (let p = 0; p < evenNumbers.length; p++) {
//   console.log(evenNumbers[p]);
// }

const dayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dailyExercise = [
  "Running",
  "Weightlifting",
  "Swimming",
  "Football",
  "Acrobatics",
];

for (let i = 0, j = 1; i < dayOfWeek.length && j <= 6; i++, j++) {
  console.log(`Exercise Day ${j}, ${dayOfWeek[i]}`);
  for (let n = 0; n < dailyExercise.length; n++) {
    console.log(`.......${dailyExercise[n]}`);
  }
}
