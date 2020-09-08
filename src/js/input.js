import refs from './refs.js';
import './fetchWeatherData.js';
import fiveDaysTemp from './fetchWeatherDataWeek.js';
import currentDaysTemp from './../template/fiveDays.hbs';

import forecastData from './fetchWeatherData.js';

refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();
  const searchValue = e.currentTarget.elements.search.value;
  forecastData.getForecast(searchValue).then(city => {
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
