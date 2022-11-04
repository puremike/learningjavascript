//DeStructuring is breaking down bigger arrays into smaller  data structure like a variable.

"use strict";

const arr1 = [1, 2, 3];
const [a, b, c] = arr1;

console.log(a, b, c);

const restaurant = {
  name: "Classico Italino",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const [first, second, , third] = restaurant.categories; //Destructuring; jumps the third element in categories
let [first, second, third] = restaurant.categories;
console.log(first, second, third);

//switching variables
[first, second, third] = [third, second, first];
console.log(first, second, third);

//destructuring from a function parameters
const [start, main] = restaurant.order(2, 1);
// const [start, main, extra = "Cocacola"] = restaurant.order(2, 1); //extra has a default value
console.log(`${start} and ${main}`);

//nested arrays
const [i, [j, k, l]] = ["Swim", ["Learn", "Earn", "Build"]];
console.log(i, j, k, l);

//default values
const [w, t, n = 5] = [8, 9];
console.log(w, t, n);
