"use strict";

//Primitives: Number, String, Boolean, Undefined, Null, Symbol, Bigint
//Objects: Object Literal, Arrays, Functions, many more

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//Source of confusion
//Primitive values are stored in the call stack, while the reference or object values are stored in the heap
//me and friend points to the same object in the memory heap.
const me = {
  name: "Jonas",
  age: 40,
};

const friend = me;
friend.age = 27;

console.log(me, friend);

//Copy Object with object.assign
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

console.log(jessica);

//Let now copy jessica into another object
// const jessicaCopied = Object.assign({}, jessica); //copy jessica into an empty jessicaCopied object. Object.assign creates a shallow copy of an object
const jessicaCopied = Object.assign({ copied: true }, jessica);
jessicaCopied.lastName = "Manson";
console.log(`Before Marriage: `, jessica);
console.log(`After Marriage: `, jessicaCopied);
