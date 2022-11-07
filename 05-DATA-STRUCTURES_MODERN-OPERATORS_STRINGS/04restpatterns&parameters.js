"use strict";

//Rest operator is to pack elements into arrays It's used in places where variables is separated by coma and not where values is separated by comma

const restaurant = {
  name: "Classico Italino",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//REST: could be use on both sides of the assignment
//There can only be one REST in any destructuring assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const firArr = [12, 23, 34];
const [d, e, ...fiArr] = [67, 68, ...firArr];
console.log(d, e, fiArr);

//destructuring with the rest pattern
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

//using REST in destructuring objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//FUNCTIONS: using the REST patterns in functions
const sumNumbers = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`Sum = ${sum}`);
};

console.log(sumNumbers(2, 3, 6, 8, 10, 19));

const x = [2, 5, 8, 9, 3];
console.log(sumNumbers(...x));

const multiplyNumbers = function (...numbers) {
  let mul = 1;
  for (let i = 0; i < numbers.length; i++) {
    mul *= numbers[i];
  }
  console.log(`Multiplication Of Numbers = ${mul}`);
};
const f = [2, 3, 19];
console.log(multiplyNumbers(...f));

//calling the orderPizza function here
console.log(restaurant.orderPizza("Mushrooms", "Onions", "Olives", "Spinach"));
