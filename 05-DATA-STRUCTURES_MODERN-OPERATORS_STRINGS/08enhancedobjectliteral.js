"use strict";

const hobbies = {
  hobbies: ["Swimming", "Researching", "Self-study", "Eating", "Sleeping"],
};

const personalData = {
  name: "Michael",
  occupation: "Full Stack Web Developer",
  hobbies: ["Swimming", "Researching", "Self-study", "Eating", "Sleeping"],
  language: "Yoruba",
  state: "Oyo State",
  country: "Nigeria",
  //enhanced template literal
  hobbies,
  returnAge(birthYear) {
    return 2022 - birthYear;
  },
};

personalData.age = personalData.returnAge(1962);
console.log(personalData.age);
console.log(personalData);
