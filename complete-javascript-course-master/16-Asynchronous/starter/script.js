'use strict';

const btn = document.querySelector('.btn-country');
const inputEl = document.querySelector('#input');
const countriesContainer = document.querySelector('.countries');
const btnReset = document.querySelector('#reset');
let html = '';

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, classNeighbour = '') {
  const [{ symbol, name }] = Object.values(data.currencies);
  const [langs] = Object.entries(data.languages);
  html = `
    <article class="country ${classNeighbour}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 100000
            ).toFixed(1)} M</p>
            <p class="country__row"><span>🗣️${langs[1]}</span></p>
            <p class="country__row"><span>💰(${symbol})${name}</span></p>
          </div>
        </article>
  `;
  // Insert in div element
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
/*
const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');

      //Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`❌${err}`);
      renderError(`❌[ERROR]❌ Something went wrong: ${err.message} `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData(inputEl.value);
});

btnReset.addEventListener('click', function () {
  location.reload();
});

///////////////////////////////////////
//Corrected URL API: https://countries-api-836d.onrender.com/countries/
// This is the one that worked : https://restcountries.com/v3.1/name/deutschland

const getCountryData = function (country, currency) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // CODE I CAME UP ON MY OWN TO GET: COUNTRIES' CURRENCY
    const [{ symbol, name }] = Object.values(data.currencies);
    // and  COUNTRIES' LANGUAGE DINAMICALLY
    const [langs] = Object.entries(data.languages);
    //

    const html = `
    <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 100000
            ).toFixed(1)} M</p>
            <p class="country__row"><span>🗣️${langs[1]}</span></p>
            <p class="country__row"><span>💰${name}</span></p>
          </div>
        </article>
  `;

    // Insert in div element
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('brazil');
getCountryData('portugal');
getCountryData('usa');
getCountryData('Italy');
getCountryData('france');
//

CODE I CAME UP ON MY OWN TO GET: COUNTRIES' CURRENCY and  COUNTRIES' LANGUAGE DINAMICALLY
const data = {
  currencies: {
    EUR: { curr: 'Real', symbol: 'R$' },
  },
};

const [{ curr, symbol }] = Object.values(data.currencies);
console.log(curr, symbol);

const data = {
  languages: { por: 'Portuguese' },
};

const [key] = Object.entries(data.languages);
console.log(key[1]);



const getCountryAndNeighbour = function (country) {
  // Ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (NEIGHBOUR of 1)
    const neighbour = data.borders?.[0]; // or could've been if(!neighbour) return;

    // Ajax call country 2 (NEIGHBOUR of 1)
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

const request = fetch(`https://restcountries.com/v3.1/name/portugal `);
console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('portugal');

//Same code, but this is more complete for study purposes
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'sadsad';
//       console.log(neighbour);
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`🌐❌${err}`);
//       //Displaying error for the user
//       renderError(`Something went wrong ❌[ERROR]❌ ${err.message} `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
*/

/*Challenge 1: I used nomination API because all the others are paid nwo
//ssa                             |  new york
//latitude: -12.970000267028809   | 40.7128
//longitude: -38.439998626708984  | -74.0060

const renderPreciseInformationWithNominatimApI = function (data) {
  const html = `
    <article class="country">
          <div class="country__data">
            <h1 class="country__name">Country🌍: ${data.address.country}</h1>
            <h3 class="country__name">State🏙️: ${data.address.state}</h3>
            <h4 class="country__region">District📌: ${data.address.city_district}</h4>
          </div>
        </article>
  `;
  // Insert in div element
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`(${response.status})Not valid coordinates`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      renderPreciseInformationWithNominatimApI(data);

      const { address } = data;

      if (!address.country) throw new Error(`Country does not exist`);
      console.log(`You are in the ${address.country}`);
    })
    .catch(err => {
      let errmsg = ``;

      errmsg = `Something went wrong: ${
        err.message === 'Failed to fetch' ? '💻--❌--🌐' : err.message
      }`;

      renderError(errmsg);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  whereAmI(40.7128, -74.006);
});

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});

console.log('Test end');

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening... 🔮');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WON💵💵');
    } else {
      reject(new Error('You lost, but keep trying'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('Waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('Waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('Waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('Waited for 4 seconds');
    return wait(1);
  });

Promise.resolve('abc').then(res => console.log(res));
Promise.reject(new Error('abc')).catch(res => console.error(res));


const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`(${response.status})Not valid coordinates`);

      return response.json();
    })
    .then(data => {
      console.log(data);

      const { address } = data;

      if (!address.country) throw new Error(`Country does not exist`);
      console.log(`You are in the ${address.city}, ${address.country}`);
    })
    .catch(err => {
      let errmsg = ``;
      errmsg = `Something went wrong: ${
        err.message === 'Failed to fetch' ? '💻--❌--🌐' : err.message
      }`;

      renderError(errmsg);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
whereAmI();

//Challenge 03

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector('.images');

const createImg2 = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      img.classList.add('images');
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
createImg2('img/img-1.jpg')
  .then(res => {
    currentImg = res;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImg2('img/img-2.jpg');
  })
  .then(res => {
    currentImg = res;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

// wait(2)
//   .then(() => {
//     console.log('Waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Waited for 3 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('Waited for 4 seconds');
//     return wait(1);
//   });


const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
//   console.log(res)
// );
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //Reverse Geocoding
//     const responseGeoCoding = await fetch(
//       `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
//     );
//     if (!responseGeoCoding.ok)
//       throw new Error(
//         `Location data fetch failed (${responseGeoCoding.status})`
//       );
//     const dataGeo = await responseGeoCoding.json();
//     console.log(dataGeo);

//     //Country Data
//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
//     );
//     if (!response.ok) throw new Error('Problem getting country');

//     const data = await response.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`💥🌍${err.name}: ${err.message}`);
//     renderError(`Something went wrong 💥 ${err.message}`);
//   }
// };
// whereAmI();
// whereAmI();
// whereAmI();
// console.log('FIRST');
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const responseGeoCoding = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    // Removed the redundant 429 check
    if (!responseGeoCoding.ok)
      throw new Error(
        `Location data fetch failed (${responseGeoCoding.status})`
      );

    const dataGeo = await responseGeoCoding.json();

    // Country Data
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    if (!response.ok)
      throw new Error(`Country data fetch failed (${response.status})`);

    const data = await response.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.address.country}, ${dataGeo.address.city}`;
  } catch (err) {
    console.error(`💥🌍${err.name}: ${err.message}`);

    renderError(`Something went wrong 💥 ${err.message}`);

    //Reject promise returned from async funtion
    throw err;
  }
};

// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2:${city}`))
//   .catch(err => console.log(`2: ${err.message}❌`))
//   .finally(() => console.log('3: Finished getting location'));

console.log('1: Will get location');
(async function () {
  try {
    const res = await whereAmI();
    console.log(`2:${res}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log(`3: finished getting location`);
})();

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([...data1.capital, ...data2.capital, ...data3.capital]);
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.flatMap(data => data[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('Brasil', 'Portugal', 'USA');


// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/brasil`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

(async function () {
  try {
    const response = await Promise.race([
      getJSON(`https://restcountries.com/v3.1/name/greece`),
      timeout(1),
    ]);
    console.log(response[0]);
  } catch (err) {
    console.error(err);
  }
})();

//Promise allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Reject'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

//Promise Any [ES2021]
Promise.any([
  Promise.resolve('1:Success'),
  Promise.reject('Reject'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));
*/
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector('.images');

const createImg2 = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      img.classList.add('images');
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
// let currentImg;
// createImg2('img/img-1.jpg')
//   .then(res => {
//     currentImg = res;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImg2('img/img-2.jpg');
//   })
//   .then(res => {
//     currentImg = res;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const loadNPause = async function () {
  try {
    //Load image 1
    let img = await createImg2('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    //Load image 2
    img = await createImg2('img/img-2.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    //Load image 1
    img = await createImg2('img/img-3.jpg');
    console.log('Image 1 loaded');
    await wait(2);
  } catch (error) {
    console.log(error);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImg2(img));
    console.log(imgs);

    const imgsEl = Promise.all(imgs);
    (await imgsEl).forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
