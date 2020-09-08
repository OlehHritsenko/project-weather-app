import refs from './refs.js';
import './fetchWeatherData.js';

import fiveDaysTemp from './fetchWeatherDataWeek.js';
import currentDaysTemp from './../template/fiveDays.hbs';

import forecastData from './fetchWeatherData.js';
import { dataBlokMarkup } from './data-block.js';

refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();
  const searchValue = e.currentTarget.elements.search.value;
  forecastData.getForecast(searchValue).then(city => {
    forecastData.request = searchValue;
    console.log(city);
    // dataBlokMarkup({ city });
    return city;
    // refs.bookmarkRef.insertAdjacentHTML('beforeend', `<li><button>${city.name}</button></li>`);
  });
});
    // const date = new Date(city.dt*1000);
    console.log(city);
  });
});

console.log(
  fiveDaysTemp.getForecast('london').then(data => {
    const array = data.list;
    const newArr = [];

    console.log(newArr);
  }),
);
