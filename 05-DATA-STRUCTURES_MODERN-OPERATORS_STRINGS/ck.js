const newA = [2, 3, 4];
//first destructure
const [a, b, c, d = 5] = newA;
console.log(a, b, c, d);

//nested destructuring
const newB = [6, 7, 8, ["Six", "Seven", "Eight"]];
const [f, g, h, [fS, gS, hS]] = newB;
console.log(f, fS);

const personalData = {
  firstName: "Mike",
  lastName: "Egbinola",
  age: 23,
  location: "Ibadan NG",
};

const { firstName, age, lastName: surName } = personalData;
console.log(firstName, age, surName);

//spread operator

const newC = [1, 2, 3, 7];
const [nA, , nB, nC] = [...newC];
console.log(nA, nB, nC);

//copy an array with spread
const newCCopy = [...newC, ...newB, "20, 21, 25, 28"]; //copy and added more element in the array
console.log(newCCopy);

const food = {
  potentialClients: [
    "Mike",
    "Jonas",
    "Oluwatobi",
    "Smith",
    "Olaniyi",
    "Esther",
    "Ayomide",
  ],
  apetizers: ["Orange", "Apple", "Watermelon", "Pawpaw"],
  breakFastMenu: [
    "Tea and Bread",
    "Fried Eggs and Bread",
    "Noodles and Fried Eggs",
    "Hot Coffee",
  ],
  lunchMenu: [
    "Eba and Egusi Soup",
    "Semolina & Egusi Soup",
    "Pounded Yam & Efo Riro",
  ],
  dinnerMenu: ["Yam and Fried Eggs", "Beans", "Fried rice", "Jollof Rice"],
  orderMenuArr: function (
    ptIndex,
    aptIndex,
    breakIndex,
    lunchIndex,
    dinnerIndex
  ) {
    console.log(
      `Hello ${this.potentialClients[ptIndex]}, today you will be served with ${this.apetizers[aptIndex]} as appetizer, ${this.breakFastMenu[breakIndex]} as breakfast, ${this.lunchMenu[lunchIndex]} as lunch, and ${this.dinnerMenu[dinnerIndex]} as dinner.`
    );
  },
  orderMenuObj: function ({ breakIndexObj, lunchIndexObj, address, time }) {
    console.log(
      `Your ${this.breakFastMenu[breakIndexObj]} and ${this.lunchMenu[lunchIndexObj]} will be delivered to ${address} exactly ${time} today.`
    );
  },
};

//destructuring an object
const { apetizers: myAppetizer, breakFastMenu, lunchMenu, dinnerMenu } = food;
console.log(myAppetizer, breakFastMenu, lunchMenu, dinnerMenu);

const foodMenuIndexes = [2, 2, 3, 1, 1];
food.orderMenuArr(...foodMenuIndexes);

//copy an object
const foodCopy = { ...food, time: "00:00", location: "Leventis, Ibadan" };
console.log(foodCopy);

foodCopy.orderMenuObj({
  breakIndexObj: 3,
  lunchIndexObj: 2,
  time: "22:00",
  address: "Elewure, Sango, Ibadan",
});

//function that multiplies numbers

function multiplyNumbers(...numbers) {
  let baseNumber = 1;
  for (let i = 0; i <= numbers.length; i++) {
    if (typeof numbers[i] !== "number") continue;
    baseNumber *= numbers[i];
  }
  console.log(`Multiplication of numbers = ${baseNumber}\n`);
}

const listOfNumbers = [2, "err", 3, "exec", 4];
multiplyNumbers(...listOfNumbers);

const week = ["Monday", "Tuesday", "Saturday", "Sunday"];

const [weekDays1, weekDays2, ...weekend] = week;
console.log(weekend);
