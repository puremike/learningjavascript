"use strict";

//sets are alike arrays, but they return unique data. Used to remove duplicate values of an array
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);
console.log(new Set("Michaeli"));

console.log(orderSet.size); //we use size to check the size of the set
console.log(orderSet.has("Pizza")); //check if an element is available in the set
orderSet.add("Garlic Bread"); //add an element to the set
orderSet.delete("Risotto"); // delete an element in the set
console.log(orderSet);

for (const order of orderSet) console.log(order); //loop through a set

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)]; //converted the set to an array using the spread operator
console.log(staffUnique);
