//Asynchronous code is executed after a task that runs in the "background" finishes
//Asynchronous code is non-blocking
//Execution doesn't wait for an asynchronous task to finish it work
//Example of an asynchronous code is a "Timer with callback"

//AJAX - Stands for Asynchronous JavaScript and XML: allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.

//API - API stands for Application Programming Interface, piece of software that can be used by another piece of software, in order to allow applications to talk to each other. Examples of APIs - DOM API, Geolocation API, Own Class API, Online API

//A simple XMLHttpRequest for REST COUNTRIES API

const xml = new XMLHttpRequest();
xml.open("GET", "https://restcountries.com/v3.1/name/nigeria");
xml.send();

xml.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
});
