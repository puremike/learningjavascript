'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
   <img class="country__img" src="${data.flags?.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name?.common || data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} M people</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages?.eng ||
        data.languages?.por ||
        data.languages?.spa ||
        data.languages?.fra ||
        data.languages?.jpn ||
        data.languages?.ara ||
        data.languages?.[0]?.name
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies?.NGN?.name ||
        data.currencies?.CAD?.name ||
        data.currencies?.USD?.name ||
        data.currencies?.EUR?.name ||
        data.currencies?.JPY?.name ||
        data.currencies?.AED?.name ||
        data.currencies?.GBP?.name ||
        data.currencies?.[0]?.name
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// function getCountryData(country_name) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country_name}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `<article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.subregion}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${
//               data.languages.eng.name
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies.NGN.name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }

// getCountryData('nigeria');

//PROMISES AND FETCH API
//A PROMISE is an object that is used as a placeholder for the future result of an asynchronous operation. It's a container for an asynchronous delivered value, or a container for a future value.

//By using PROMISES, we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results. Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell.

//CONSUME A PROMISE

const getCountryData = function (country) {
  //country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCountry(data[0]);

      //country 2
      const neighbour = data[0].borders?.[0]; //optional chaining
      console.log(neighbour);

      if (!neighbour) return;

      //fetching data for country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      renderCountry(data, 'neighbour');
    });
};

getCountryData('nigeria');

//CHAINING PROMISES
