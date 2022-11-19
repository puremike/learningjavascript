"use strict";

const airline = "TAP Air Portugal";
//change the case of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//function
function capitalizeFirstLetter(name) {
  const passengerLower = name.toLowerCase();
  // const passengerCorrect =
  //   passengerLower.slice(0, 1).toUpperCase() + passengerLower.slice(1);
  const passengerCorrect = name[0].toUpperCase() + passengerLower.slice(1);
  console.log(`${name} : ${passengerCorrect}`);
}
capitalizeFirstLetter("jonAs");
capitalizeFirstLetter("mikE");
capitalizeFirstLetter("OlUWAtoBI");

//comparing emails
//trim() removes whitespace or enters on strings

const email = "hello@mike.io";
const loginEmail = " Hello@Mike.Io \n";

const normalizedEmail = loginEmail.toLowerCase().trim();

if (email === normalizedEmail) console.log(true);
else console.log(false);

//replace with the replace() method
const priceGB = "288,97£";
const priceUS = priceGB.replace(",", ".").replace("£", "$");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate")); //regular expression

//booleans
const plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("A3"));
console.log(plane.endsWith("neo"));

//practice exercise
//when working with string, it's advisable to always convert to lowerCase before comparing or etc.
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife"))
    console.log(`You are NOT allowed on board!`);
  else console.log(`Welcome aboard!`);
};
checkBaggage("I have a laptop, some food and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

//check if a number is a perfect square
// function isSquared(n) {
//   n < 0;
//   if (Math.sqrt(n) % 1 == 0) console.log(`${n} is a perfect square`);
//   else console.log(`${n} is not a perfect square`);
// }
// isSquared(20);
// isSquared(100);
// isSquared(0);

// function isSquaredCopy(n) {
//   n < 0;
//   if (Number.isInteger(Math.sqrt(n))) console.log(true);
//   else console.log(false);
// }
// isSquaredCopy(1000);
// isSquaredCopy(144);
// isSquaredCopy(121);
