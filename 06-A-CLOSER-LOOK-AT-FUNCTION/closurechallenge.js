"use strict";

let p;
//IIFE
(function () {
  const anchor = document.querySelector("#btn");
  anchor.classList.add("btn");

  p = function () {
    anchor.addEventListener("click", function () {
      anchor.className = "anchor-btn";
    });
  };
})();
p();

//OR
//Normal Function

// function changeColor() {
//   const anchor = document.querySelector("#btn");
//   anchor.classList.add("btn");

//   return function () {
//     anchor.addEventListener("click", function () {
//       anchor.className = "anchor-btn";
//     });
//   };
// }
// changeColor()();
