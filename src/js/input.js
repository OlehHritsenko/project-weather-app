import refs from './refs.js';
import './fetchWeatherData.js';
import forecastData from './fetchWeatherData.js';
import forecastForFiveDays from './fetchWeatherDataWeek.js';
import dateBlock from './createDateBlock.js';

refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();
  const searchValue = e.currentTarget.elements.search.value;
  // forecastData.getForecast(searchValue).then(city => {
  //   forecastData.request = searchValue;
  //   dateBlock(city);
  //   });


});


forecastForFiveDays.getForecastFiveDays('london').then(forecast =>{
  console.log(forecast.list);
  const arr = forecast.list;
  const newArr = [];
  arr.forEach(el =>{
    const date = new Date(el.dt*1000).getDate();
    const month = new Date(el.dt*1000).getMonth();
    const year = new Date(el.dt*1000).getFullYear();
    const fullDate = `${date}${month}${year}`;
    
    
  })
});