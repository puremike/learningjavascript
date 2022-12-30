"use strict";

//continue and break statement doesn't work in the forEach method, because with forEach, you can't break out of the loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let movement of movements) {
  if (movement > 0) {
    console.log(`Client deposited ${movement}`);
  } else {
    console.log(`Client withdrew ${Math.abs(movement)}`);
  }
}

console.log(`...............OR................`);

for (const [keys, values] of movements.entries()) {
  if (values > 0) {
    console.log(`Movement ${keys + 1}: Client deposited ${values}`);
  } else {
    console.log(`Movement ${keys + 1}: Client deposited ${Math.abs(values)}`);
  }
}

console.log("\n..........FOREACH.............");

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`Client deposited ${movement}`);
  } else {
    console.log(`Client withdrew ${Math.abs(movement)}`);
  }
});

console.log(`.........OR (FOREACH)...........`);

movements.forEach(function (m, i) {
  if (m > 0) {
    console.log(`Movement ${i + 1}: Client deposited ${m}`);
  } else {
    console.log(`Movement ${i + 1}: Client deposited ${Math.abs(m)}`);
  }
});

console.log(`\n.......FOREACH ON MAPS AND SET.......`);

const currencies = new Map([
  ["USD", "United States Of America"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

// forEach in maps and sets takes 3 function argument: value, key, map
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

const nSet = new Set(["USD", "POUND", "USD", "POUND"]);
nSet.forEach(function (value, key, map) {
  console.log(`${value}`);
});
