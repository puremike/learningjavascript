const getJSON = function (url, errorMsg = "Something went wrong!") {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`Country not available (${res.status})`);
    return res.json();
  });
};

//promise.race - means the first settled promise wins the race

//using IIFE to demonstrate promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/usa`),
    getJSON(`https://restcountries.com/v3.1/name/portugal`),
    getJSON(`https://restcountries.com/v3.1/name/nigeria`),
  ]);
  console.log(`Country that won the race is : ${res[0].name.common}`);
})();

//writing a timeout function (promise) to race with getJSON()
const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("Request took too long!!"));
    }, sec * 1000);
  });
};

//another IIFE async function to race the timeOut() and getJSON() promises
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
    timeOut(1),
  ]);
  console.log(res[0].name.common);
})();

//promise.allSettled - returns an array of all the settled promises

//promise.any returns the first resolved promise and ignored the other promises or failed promises.
