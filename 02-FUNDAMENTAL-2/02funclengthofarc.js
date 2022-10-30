"use strict";

const parametersForLengthOfArc = {
  deg: 30,
  pie: 3.142,
  rad: 10,
  calcLengthOfArc: function () {
    const result = ((this.deg * 2 * this.pie * this.rad) / 360).toFixed(3);
    return `The length of the Arc using a degree ${this.deg}deg and a radius ${this.rad}m is ${result}m`;
  },
};
console.log(parametersForLengthOfArc.calcLengthOfArc());
