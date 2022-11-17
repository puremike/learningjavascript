"use strict";

const rest = new Map();

//we add to a map using the .set()
rest.set("name", "FAico Foods");
rest.set(1, "Lagos Nigeria");
rest
  .set(2, "Ibadan Nigeria")
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "we are closed");

// console.log(rest);
//to access a map, we use the get()
console.log(rest.get("name"));
console.log(rest.get(1));
console.log(rest.get(2));
console.log(rest.get("categories"));

const time = 12;
if (time >= rest.get("open") && time <= rest.get("close"))
  console.log(rest.get(true));
else console.log(rest.get(false));

//you can also use size(), has(), add(), delete(), and clear() method in map
console.log(rest.has("name"));
console.log(rest.size);

//we can use array as map keys
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));

// const myMap = new Map();
// myMap
//   .set("Name", "Michael Egbinola")
//   .set("Address", "Ibadan NG")
//   .set("Email", "michaelmarketing25@gmail.com")
//   .set("Phone Number", "08122324312")
//   .set("Occupation", "JavaScript Programmer");

// console.log(myMap);
// console.log(myMap.get("Name"));

//Map iteration
const question = new Map([
  ["Question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);

console.log(question);

console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}

//convert map to an array
const questionArray = [...question];
console.log(questionArray);
