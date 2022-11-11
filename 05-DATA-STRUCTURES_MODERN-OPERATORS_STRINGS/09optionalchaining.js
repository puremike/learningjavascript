"use strict";

const animalName = {
  dog: { name: "Dinah", gender: "Female" },
  cat: { name: "Precious", gender: "Female" },
};

const [dogName, dogGender] = [animalName.dog?.name, animalName.dog?.gender];
const [catName, catGender] = [animalName.cat?.name, animalName.cat?.gender];
const [monkeyName, monkeyGender] = [
  animalName.monkey?.name ?? "Monkey name doesn't exist in the data\n",
  animalName.monkey?.gender ?? "Monkey gender doesn't exist in the data",
];
console.log(`FOR DOG\nName: ${dogName}, Gender : ${dogGender}`);
console.log(`FOR CAT\nName: ${catName}, Gender : ${catGender}`);
console.log(monkeyName, monkeyGender);

const pData = {
  name: "Michael",
  currentYear: 2022,
  returnAge(birthYear) {
    return this.currentYear - birthYear;
  },
};

pData.age = pData.returnAge?.(1997) ?? "Age doesn't exist";
// pData.age = pData.returnAge2?.(1997) ?? "Age doesn't exist";
console.log(pData);
