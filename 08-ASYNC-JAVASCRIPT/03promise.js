//code outside of any callbacks will log first due to event loop
// console.log("Test start");
// setTimeout(() => console.log("O sec timer"), 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));

// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log("Test end");

//building a promise
//creating an executer function asynchronously (using the setTimeOut callback function)
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery Draw is Already Happening........");
  setTimeout(() => {
    if (Math.random >= 0.5) {
      resolve("You WIN💰💰");
    } else reject(new Error("You LOST💩💩"));
  }, 1400);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//promisifying is simply converting an asynchronous promise behavior to promise-based

//promisifying setTimeout
const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("I waited 1 sec");
    return wait(1);
  })
  .then(() => {
    console.log("I waited 2 secs");
    return wait(2);
  })
  .then(() => {
    console.log("I waited 3 secs");
    return wait(3);
  })
  .then(() => {
    console.log("I waited 4 secs");
    return wait(4);
  });
