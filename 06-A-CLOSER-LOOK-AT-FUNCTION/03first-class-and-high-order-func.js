//A higher order function receives another function as an argument that returns a new function, or both. This is only possible because of first-class functions.

//function that receives other function
// const greet = () => console.log("Hey Jones!");
// btnClose.addEventListener("click", greet); //the addEventListener function

//addEventListener - Higher-order Function
//greet - Call Back Function

//function that returns new function

//Higher-order Function
// function count() {
//   let counter = 0;
//   //Returned Function
//   return function () {
//     counter++;
//   };
// }

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//transformer - Higher-order function
//upperFirstWord and oneWord - callback function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is the best", oneWord);

console.log("\n");

const checkIfOddOrEven = function (n) {
  if (n % 2 === 0) return "EVEN number";
  else return "ODD number";
};

const outputNumberType = function (num, fn) {
  console.log(`Number ${num} is ${fn(num)}`);
  console.log(`Checked with ${fn.name} function`);
};

outputNumberType(9, checkIfOddOrEven);

//function returning a function
function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

greet("Hey")("Jonas");

//function returning a function using arrow function
const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};
greet2("Hello")("Michael");
