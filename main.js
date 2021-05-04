const api = {
    key: "8e35b398d5c6d79843a19193cd617959",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.searchBox');
searchBox.addEventListener('keypress', citySearch);

window.addEventListener('load', () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let currLat = position.coords.latitude;
            let currLong = position.coords.longitude; 
            getCurrentPositionWeather(currLat, currLong);
        })
    }
    let date = document.querySelector('.location .date');
    date.textContent = todaysDate();
});

function getCurrentPositionWeather(lat, long) {
    fetch(`${api.baseurl}weather?lat=${lat}&lon=${long}&units=imperial&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }) .then(displayWeatherData);
}

function citySearch(hitEnter) {
    if (hitEnter.keyCode == 13) {
        getResults(searchBox.value);
    }
}

function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }) .then(displayWeatherData);
}

function displayWeatherData (weatherJSON) {
    //console.log(weatherJSON);
    let cityName = document.querySelector('.location .city');
    cityName.textContent = `${weatherJSON.name}`
    let currTemp = document.querySelector('.today .temp');
    currTemp.innerHTML = `${Math.floor(weatherJSON.main.temp)}<span>°F</span>`;
    let lowTemp = document.querySelector('.hi-low');
    lowTemp.textContent = `⬇ ${Math.floor(weatherJSON.main.temp_min)}°F / ⬆ ${Math.floor(weatherJSON.main.temp_max)}°F`;

    assembleOutfit(Math.floor(weatherJSON.main.temp));
}

function celsiusToFarenheight(celsius) {
    return (celsius*(9/5))+32; 
}

function between(aTemp, aMin, aMax) {
    if (aTemp >= aMin && aTemp < aMax)
        return true;
    else 
        return false; 
}

function todaysDate() {
    let date = new Date();
    let dd = String(date.getDate());
    let mm = String(date.getMonth() + 1);
    let yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;  
}

function getTopLayer(temperature) {
    let newTopLayer = new TopLayer(temperature);
    newTopLayer.setTopLayer();

    let outerLayer = document.querySelector('.outerLayer');
    outerLayer.textContent = newTopLayer.outerLayer;

    let middleLayer = document.querySelector('.middleLayer');
    middleLayer.textContent = newTopLayer.middleLayer;

    let innerLayer = document.querySelector('.innerLayer');
    innerLayer.textContent = newTopLayer.innerLayer;
}


function getBottomLayer(temperature) {
    let newBotLayer = new BottomLayer(temperature);
    newBotLayer.setBottomLayer();

    let legWear = document.querySelector('.legWear');
    legWear.textContent = newBotLayer.bottom;
}

function getFootwear(temperature) {
    let newSocksShoes = new SocksShoes(temperature); 
    newSocksShoes.setSocksShoes(); 

    let socks = document.querySelector('.socks');
    socks.textContent = newSocksShoes.socks;

    let shoes = document.querySelector('.shoes');
    shoes.textContent = newSocksShoes.shoes; 
}

function assembleOutfit(temperature) {
    getTopLayer(temperature);
    getBottomLayer(temperature);
    getFootwear(temperature);
}