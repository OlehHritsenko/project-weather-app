import refs from './refs.js';
import './fetchWeatherData.js';

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
