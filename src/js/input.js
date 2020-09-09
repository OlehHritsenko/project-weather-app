import refs from './refs.js';
import './fetchWeatherData.js';
import forecastData from './fetchWeatherData.js';
import forecastForFiveDays from './fetchWeatherDataWeek.js';
import dateBlock from './createDateBlock.js';
import {groupByDate} from './groupByDateFunction.js';

refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();
  const searchValue = e.currentTarget.elements.search.value;
  // forecastData.getForecast(searchValue).then(city => {
  //   forecastData.request = searchValue;
  //   dateBlock(city);
  //   });


});


forecastForFiveDays.getForecastFiveDays('london').then(forecast =>{
  // console.log(forecast.list);
  const arrData = forecast.list;
const newArr = groupByDate(arrData);
console.log(newArr);
// const values = Object.values(...newArr[0])[1].temp_min;
// console.log(values);
newArr.map(el => {
  console.log(el);
 
  const values = Object.values(...newArr[0])[1].temp_min;
  let minTempArr = [];
  // console.log(values);
// console.log(minTempArr.push(values));
});


// console.log(newArr);
// newArr.forEach(element => {
//   const minTemp = element;
//   console.log(minTemp);
//   const array = [];

//   // function arrayMin(arr) {
//   //   return arr.reduce(function (p, v) {
//   //     return ( p < v ? p : v );
//   //   });
//   // }  
// });
});