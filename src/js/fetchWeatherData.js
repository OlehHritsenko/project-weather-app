export default {
  keyApi: '4155ac6d3fb539e9f841172aed94674f',
  searchRequest: '',

  getForecast(request) {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const params = `?q=${request}&appid=${this.keyApi}`;
    const metric = `&units=metric`;
    return fetch(baseUrl + params + metric)
      .then(resp => resp.json())
      .then(data => data)
      .catch(err => err);
  },

  // get request() {
  //   return this.searchRequest;
  // },

  // set request(value) {
  //   return (this.searchRequest = value);
  // },
};
