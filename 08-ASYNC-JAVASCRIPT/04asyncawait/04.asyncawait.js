"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
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
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

//CONSUMING PROMISE WITH ASYNC AWAIT
const whereAmI = async function () {
  //Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: long } = pos.coords;

    //reverse geocoding
    const resGeo = await fetch(
      `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${lat}%2C${long}`
    );

    if (!resGeo.ok) throw new Error("Problems handling location data");
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    //country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.CntryName}`
    );

    if (!res.ok) throw new Error("Problems getting country");
    const data = await res.json();
    console.log(data);

    btn.addEventListener("click", function () {
      renderCountry(data[0]);
    });
  } catch (err) {
    renderError(`${err.message}`);
  }
};

whereAmI();
