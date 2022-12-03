"use strict";

//a function to check a string
function isString(string) {
  //   if (Object.prototype.toString.call(string) === "[object String]")
  //     console.log(true);
  if (typeof string === "string") console.log(true);
  else console.log(false);
}

isString("Mike");
isString(1, 2, 3);
isString("A");

console.log(`\n`);

//function to check if string is blanked
function isBlank(string) {
  //   if (string === "") console.log(true);
  if (string.length === 0) console.log(true);
  else console.log(false);
}
isBlank("");
isBlank("A");
isBlank(" ");

//function to truncate string
function truncateString(string, n) {
  const slicedString = string.slice(0, n);
  console.log(slicedString);
}

truncateString("Van Persie", 4);
truncateString("Michaeli", 7);

//function to abbrevate a string
function abbrevString(string) {
  const [firstString, secondString] = string.trim().split(" ");
  const sliceSecondString = secondString
    .slice(0, 2)
    .replace(secondString[1], ".");
  const abbrevStrings = [firstString, sliceSecondString].join(" ");
  console.log(abbrevStrings);
}

abbrevString("Robbin Van");
abbrevString("Michael Egbinola");
