function calcAverage() {
  return function meanSum(...numbers) {
    let sum = 0;
    let mean = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
      mean = sum / numbers.length;
    }
    console.log(`The sum of all the numbers = ${sum}`);
    console.log(`The mean of all the numbers = ${mean}`);
  };
}

const number = [2, 6, 4, 1, 7, 4, 9, 0, 10, 4, 8, 9, 2, 3];
calcAverage()(...number);
