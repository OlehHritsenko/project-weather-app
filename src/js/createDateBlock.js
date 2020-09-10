import refs from './refs.js';
export default function dateBlock(city) {

    const date = ('0' + new Date(city.dt*1000).getUTCDate()).slice(-2);
    const day = new Date(city.dt*1000).toLocaleString('en', {weekday: 'short'});
    const month = new Date(city.dt*1000).toLocaleString('en', {month: 'long'});
    const hours = ('0' + new Date(city.dt*1000).getUTCHours()).slice(-2);
    const minutes = ('0' + new Date(city.dt*1000).getUTCMinutes()).slice(-2);
    const seconds = ('0' + new Date(city.dt*1000).getUTCSeconds()).slice(-2);
    const sunriseHours = ('0' + new Date(city.sys.sunrise).getUTCHours()).slice(-2);
    const sunriseMinutes = ('0' + new Date(city.sys.sunrise).getUTCMinutes()).slice(-2);
    const sunsetHours = ('0' + new Date(city.sys.sunset).getUTCHours()).slice(-2);
    const sunsetMinutes = ('0' + new Date(city.sys.sunset).getUTCMinutes()).slice(-2); 
    console.log(city);
    refs.dataBlockRef.innerHTML = `<p class="data__day">${day} ${date}</p>

    <div class="data__wrapper">
        <div class="data__day--month">
            <span class="month">${month}</span>
            <span class="time">${hours}:${minutes}:${seconds}</span>
        </div>
        <div class="data__sun">
            <div class="sunrise">
                <img src="../img/sunrise.png" alt="sunrise" class="sunrise__icon">
                <span class="sunrise__time">${sunriseHours}:${sunriseMinutes}</span>
            </div>
            <div class="sunset">
                <img src="" alt="sunset" class="sunset__icon">
                <span class="sunset__time">${sunsetHours}:${sunsetMinutes}</span>
            </div>
        </div>
    </div>`;
}
