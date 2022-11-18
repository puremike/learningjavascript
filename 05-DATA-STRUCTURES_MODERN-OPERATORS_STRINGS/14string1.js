const airline = "TAP Air Portugal";
const plane = "A320";

//get the position of the string using indexes
console.log(plane[0], plane[1], plane[2], plane[3]);
console.log("B230"[2]);
console.log("B230".length);

//get the length of a string
console.log(airline.length);

//return the position of a string and last position of a string
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal")); // it's case sensitive

//slice method I will slice the string from a starting index to an ending index if available
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(8, 12));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

//slicing from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//function to check seat

const checkMiddleSeat = function (seat) {
  const checkSeat = seat.slice(-1);
  if (checkSeat === "B" || checkSeat === "E")
    console.log(`You got the middle seat!`);
  else console.log("You're a lucky!");
};

checkMiddleSeat("B2E");
checkMiddleSeat("32R");
checkMiddleSeat("E32B");
