"use strict";

const personalData = {
  firstName: "Michael",
  lastName: "Egbinola",
  hobbies: [
    "Swimming",
    "Dancing",
    "Self-learning",
    "Researching",
    "Public Speaking",
  ],
  emailAddress: "michaelmarketing25@gmail.com",
};
console.log(personalData);
console.log(personalData.hobbies);
console.log(personalData.hobbies[2]);

const nameKey = "Name";
console.log(personalData["first" + nameKey]); //expression using the bracket notation

//add to your object using the dot notation
personalData.age = 23;
personalData.occupation = "FrontEnd Developer";
personalData.location = "Ibadan NG";
personalData.friends = ["Jonas", "Ezekiel", "Samson"];

console.log(personalData);

//template literal
console.log(
  `${personalData.firstName} has ${personalData.friends.length} friends and his best friend is called ${personalData.friends[0]}`
);

//string concatenation
console.log(
  personalData.firstName +
    " has " +
    personalData.friends.length +
    " friends and his best friend is called " +
    personalData.friends[0]
);
