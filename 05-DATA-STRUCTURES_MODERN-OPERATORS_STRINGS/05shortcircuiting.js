"use strict";

//use ANY data type, return ANY data type, short-circuiting
//most times, will return truthy values

console.log("----OR----\n"); //OR- one of the value must be true. Returns the first truthy value or any TRUTHY value if all the values are FALSY in the statement

console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

console.log("---AND---\n"); //AND- all the values must be true. Return the first FALSY value or any FALSY value
console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "Jonas");
console.log(0 && "" && false && true && "Jonas"); //0 -falsy; "" = falsy; false = falsy; true = truthy; "Jonas" = truthy. So 0 is the first falsy value
console.log("\n");

console.log("NULL COALESCING OPERATOR ??");
//works with nullish values: undefined and null
console.log(undefined ?? null);

//EXAMPLE WITH OBJECTS

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = { name: "La Piazza", owner: "Giovanni Ross" };

//OR assignment operator, ||=
rest1.numGuests ||= 10;
console.log(rest1);

rest2.numGuests ||= 10; //rest2.numGuest is basically undefined in the object, so it will return the next truthy value
console.log(rest2);

//Nullish Assignment Operator
// rest1.numGuests ??= 10;
// console.log(rest1);

// rest2.numGuests ??= 10; //
// console.log(rest2);

//AND assignment operator
// rest1.numGuests &&= 10;
// console.log(rest1);

// rest2.numGuests &&= 10; //
// console.log(rest2);
