function isSquared(a) {
  if (a < 0) return false;
  //   Number.isInteger(Math.sqrt(a)) checks if the result of Math.sqrt is an integer and not float
  else if (Number.isInteger(Math.sqrt(a))) {
    return `${a} is a perfect square`;
  } else return `${a} is not a perfect square`;
}

console.log(isSquared(0));

function anotherWay(n) {
  if (n < 0) return true;
  else if (Math.sqrt(n) % 1 == 0) {
    return true;
  } else return false;
}

console.log(anotherWay(81));
