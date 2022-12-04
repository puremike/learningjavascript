// A function that disappears after it has been invoked once -- Immediately Invoked Function Expression

(function () {
  console.log(`Code will run once`);
})();

//doing it with arrow function
(() => console.log(`Code will never run again`))();

//IIFE to multiply two numbers
((a, b) => {
  const result = a * b;
  console.log(`Result = ${result}`);
})(10, 20);

//IIFE to sum two numbers
(function (a, b) {
  const addNum = a + b;
  console.log(`Sum = ${addNum}`);
})(100, 200);
