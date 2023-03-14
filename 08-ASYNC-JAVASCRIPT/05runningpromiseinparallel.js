const getJSON = function (url, errorMsg = "Something went wrong!") {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`Country not available (${res.status})`);
    return res.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const data1 = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const data2 = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const data3 = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1[0].capital, data2[0].capital, data3[0].capital]);

    //running promises in parallel using a promise.all() combinator
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map((data) => data[0].capital));
  } catch (err) {
    console.error(new Error(err.message));
  }
};

get3Countries("Tanzania", "France", "Belgium");
