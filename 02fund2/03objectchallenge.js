const mark = {
  fullName: "Mark Millers",
  mass: 78,
  height: 1.69,
  calcBMI: (mass, height) => {
    const bmiValue = (mass / height ** 2).toFixed(2);
    return `Marks weight is ${bmiValue}kg and is ${mark.height}m tall`;
  },
};

console.log(mark.calcBMI(mark.mass, mark.height));

//using this keyword
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmiValue = (this.mass / this.height ** 2).toFixed(2);
    return `Johns weight is ${this.bmiValue}kg and is ${this.height}m tall`;
  },
};

//we don't have to pass any argument because this keyword has been used.
console.log(john.calcBMI());
