import refs from './refs.js';
import './fetchWeatherData.js';
import forecastData from './fetchWeatherData.js';
import forecastForFiveDays from './fetchWeatherDataWeek.js';
import dateBlock from './createDateBlock.js';
import { groupByDate } from './groupByDateFunction.js';
import oneDayTemplate from './oneDayTemplate';

//Блок з датою, світанком та заходом сонця

refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();
  const searchValue = e.currentTarget.elements.search.value;
  oneDayTemplate(searchValue);
  // forecastData.getForecast(searchValue).then(city => {
  //   forecastData.request = searchValue;
  //   dateBlock(city);
  //   });
});

// Блок з прогнозом погоди на 5 днів

forecastForFiveDays.getForecastFiveDays('london').then(forecast => {
  const arrData = forecast.list;
  const newArr = groupByDate(arrData);
  newArr.length = 5;
  console.log(newArr);

  newArr.map(el => {
    let value;
    for (value of el) {
      Object.values(...newArr[0])[1];
    }

    const dateOfFiveDays = {
      day: new Date(value.dt * 1000).toLocaleString('en', { weekday: 'long' }),
      date: new Date(value.dt * 1000).getDate(),
      weather: value.weather[0].icon,
      minTemperature: value.main.temp_min,
      maxTemperature: value.main.temp_max,
      forecast: [
        {
          time: new Date(value.dt * 1000).getTime(),
          // weather: string,
          // pressure: num,
          // humidity: num,
          // wind: num
        },
      ],
    };
    console.table(dateOfFiveDays);
    console.table(dateOfFiveDays.forecast);

    // console.log(values);
    // console.log(minTempArr.push(values));
  });
});
