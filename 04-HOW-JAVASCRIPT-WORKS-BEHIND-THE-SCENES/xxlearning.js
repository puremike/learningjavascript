const array1 = [1, 2, 3, "single", "multiple", 4, 5, "threaded"];
for (let i = 0; i < array1.length; i++) {
  if (typeof array1[i] === "number") continue;
  console.log(array1[i]);
}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, "single", "threaded", 9, 10];
for (let i = array2.length; i >= 0; i--) {
  if (typeof array2[i] !== "number") continue;
  console.log(array2[i]);
}
