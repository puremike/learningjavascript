"use strict";

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
};

const arr = [7, 8, 9];

//spread operator(...)
const newA = [1, 2, 3, ...arr];
console.log(newA);

//copy array using the spread operator
const newMenu = [...restaurant.mainMenu, "Gnoci"];
console.log(newMenu);

//Another Array
const changeArr = [12, 23, 44];
const changeArrCopy = [...changeArr];
changeArrCopy[0] = 24;
console.log(changeArrCopy);

//join 2 arrays using the spread operator
const menu = [...restaurant.starterMenu, ...newMenu];
console.log(menu);

//Iterables are arrays, strings, maps, sets, and NOT object
const str = "Michael";
console.log(...str, " ");

//using spread operators for parameters in a function
const ingredients = ["Spicy Chicken", "Cheese", "Boiled Egg"];
console.log(restaurant.orderPasta(...ingredients));

//spread operator can also be used on objects
const newRestaurant = {
  founded: 1952,
  ...restaurant,
  founder: "Michael Platini",
};

console.log(newRestaurant);

//use the spread operator to copy objects instead of using the Object.assign

const nigeriaHotSpots = {
  hot: "PortHarcout NG",
  hotter: "Ibadan NG",
  hottest: "Lagos NG",
};
const nigeriaHotSpotsCopy = { ...nigeriaHotSpots, country: "Nigeria" };
nigeriaHotSpotsCopy.hot = "FCT Abuja";
console.log(nigeriaHotSpots);
console.log(nigeriaHotSpotsCopy);

function sumNumbers(a, b, c) {
  return `Sum of numbers = ${a + b + c} `;
}

const number = [1, 2, 3, 4, 5];
console.log(sumNumbers(...number));
