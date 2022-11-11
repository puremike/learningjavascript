const newObj = {
  name: "Michael",
  phone: "07035339134",
  email: "michaelmarketing25@gmail.com",
};

//for in loop to loop through objects
for (let obj in newObj) {
  //   console.log(newObj[obj]); //return the values of the object keys
  console.log(`${obj}: ${newObj[obj]}`); //return both the object keys and values
}

console.log("\n");

//using the Object.keys and Object.values to output objects keys and values
const newObj2 = {
  name: "Michael",
  phone: "07035339134",
  email: "michaelmarketing25@gmail.com",
};

//Object.keys output the object keys
for (let obj2 of Object.keys(newObj2)) {
  console.log(obj2);
}

//Object.values output the object keys values
for (let obj3 of Object.values(newObj2)) {
  console.log(obj3);
}
//Object.entries output both the object keys and values
for (let obj4 of Object.entries(newObj2)) {
  console.log(obj4);
}
