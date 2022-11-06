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
  //your function parameters must be an object if you're trying to destructure one
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `You have order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, and your order will be delivered to ${address} at ${time}.\n`
    );
  },
};

//destructuring an object from a function
restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 1,
  time: "20:45",
  address: "Via Angelo Tavanti 23, Firenze, Italy",
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//rename the variable
const {
  name: restaurantName,
  openingHours: restaurantTime,
  categories: tags,
} = restaurant;

console.log(restaurantName, restaurantTime, tags);

// it's advisable to set default for destructuring objects, because data is gotten mostly from end-users input
//renaming the variable and making it an array
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
console.log(`Before Mutation, a = ${a} and b = ${b}`);
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(`After Mutation, a = ${a} and b = ${b}`);

//nested objects
// const { fri :{open, close} } = openingHours;
const { fri } = openingHours;
console.log(fri);
