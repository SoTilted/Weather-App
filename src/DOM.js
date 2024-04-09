const content = document.querySelector('.content');

function createCurrentWeather (data) {
    const weatherNowElement= document.createElement('div');
    weatherNowElement.setAttribute('class','weather-now');
    const weatherNowLocation = document.createElement('h3');
    const weatherNowTemperature = document.createElement('h1');
    const weatherNowCondition = document.createElement('h3');
    content.appendChild(weatherNowElement);
    weatherNowElement.append(weatherNowLocation,weatherNowTemperature,weatherNowCondition);
    weatherNowLocation.textContent = data.location.name;
    weatherNowTemperature.innerHTML = data.weather.temperature + '&#176;';
    weatherNowCondition.textContent = data.weather.condition;
}


function createNext24HoursWeather (data) {
    const weatherNext24HoursElement = document.createElement('div');
    weatherNext24HoursElement.setAttribute('class','weather-next-24-hours');
    const weatherNext24HoursList = createList(data.weather.hourlyWeatherNext24Hours);
    weatherNext24HoursElement.appendChild(weatherNext24HoursList);
    content.appendChild(weatherNext24HoursElement);
}

function createWeatherForecast (data) {
    const weatherForecastElement = document.createElement('div');
    weatherForecastElement.setAttribute('class','weather-forecast');
    content.appendChild(weatherForecastElement);


    for (let i=0; i<3; i++){
        let weatherForecastDay = document.createElement('div');
        weatherForecastDay.setAttribute('id',`day${i+1}`);
        let weatherForecastDayName = document.createElement('p');
        let weatherForecastDayMinTemp = document.createElement('p');
        let weatherForecastDayIcon = document.createElement('img');
        weatherForecastDayIcon.setAttribute('src','');
        weatherForecastDayIcon.setAttribute('alt','');
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class','wrapper');
        wrapper.appendChild(weatherForecastDayIcon)
        let weatherForecastDayMaxTemp = document.createElement('p');
        weatherForecastDay.append(weatherForecastDayName,weatherForecastDayMinTemp,wrapper,weatherForecastDayMaxTemp);
        weatherForecastDayName.textContent = data.forecast[`day${i+1}`].day;
        weatherForecastDayMinTemp.innerHTML = data.forecast[`day${i+1}`].min_temp + '&#176;';
        weatherForecastDayIcon.src = 'https:'+ data.forecast[`day${i+1}`].condition;
        weatherForecastDayMaxTemp.innerHTML = data.forecast[`day${i+1}`].max_temp + '&#176;';
        weatherForecastElement.appendChild(weatherForecastDay);

        weatherForecastDay.addEventListener('click',showForecast);
    }
    function showForecast(){
        const topElement = document.createElement('div');
        topElement.setAttribute('class','top-element');
        const topElementGoBackButton = document.createElement('button');
        topElementGoBackButton.setAttribute('id','go-back');
        const topElementDay = document.createElement('h1');
        topElement.append(topElementGoBackButton,topElementDay);
        topElementDay.textContent = data.forecast[this.id].day;

        const weather24HoursList = createList(data.forecast[this.id].hourlyWeather);
        const weather24Hours = document.createElement('div');
        weather24Hours.setAttribute('class','weather-24-hours');
        weather24Hours.appendChild(weather24HoursList);
        content.innerHTML = '';
        content.append(topElement,weather24Hours);
        topElementGoBackButton.addEventListener('click',()=>{
            content.innerHTML = '';
            createContent(data);
        });
    }
}



function createList(weatherForecast){
    const list = document.createElement('ul');
    for (let i=0; i<weatherForecast.length; i++) {
        let listItem = document.createElement('li');
        let listItemDiv = document.createElement('div');
        listItemDiv.setAttribute('class','hourly-weather');
        let listItemHour = document.createElement('p');
        let listItemIcon = document.createElement('img');
        listItemIcon.setAttribute('src','');
        listItemIcon.setAttribute('alt','');
        let listItemTemp = document.createElement('p');
        listItem.appendChild(listItemDiv);
        listItemDiv.append(listItemHour,listItemIcon,listItemTemp);
        listItemHour.textContent = weatherForecast[i].time;
        listItemIcon.src = 'https:'+weatherForecast[i].condition;
        listItemTemp.innerHTML = weatherForecast[i].temperature + '&#176;';
        list.appendChild(listItem);
    }
    return list
}




export default function createContent (data) {
    createCurrentWeather(data);
    createNext24HoursWeather(data);
    createWeatherForecast (data)
}