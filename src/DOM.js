const content = document.querySelector('.content');

function createCurrentWeather (data) {
    // i will make a function that creates the content 
    // also i will maybe do something like the image slide show to have 
    // multiple locations that you can see the weather
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
    const weatherNext24HoursList = document.createElement('ul');
    for (let i=0; i<data.weather.hourlyWeatherNext24Hours.length; i++) {
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
        listItemHour.textContent = data.weather.hourlyWeatherNext24Hours[i].time;
        listItemIcon.src = 'https:'+data.weather.hourlyWeatherNext24Hours[i].condition;
        listItemTemp.innerHTML = data.weather.hourlyWeatherNext24Hours[i].temperature + '&#176;';
        weatherNext24HoursList.appendChild(listItem);
    }
    weatherNext24HoursElement.appendChild(weatherNext24HoursList);
    content.appendChild(weatherNext24HoursElement);
}

function createWeatherForecast (data) {
    const weatherForecastElement = document.createElement('div');
    weatherForecastElement.setAttribute('class','weather-forecast');
    content.appendChild(weatherForecastElement);

    // function showDayForecast(event){
    //     content.innerHTML ='';
    //     const weather24HoursElement = document.createElement('div');
    //     weather24HoursElement.setAttribute('class','weather-24-hours');
    //     const weather24HoursList = document.createElement('ul');
    //     for (let i=0; i<data.forecast[this.id].hourlyWeather.length; i++) {
    //         let listItem = document.createElement('li');
    //         let listItemDiv = document.createElement('div');
    //         listItemDiv.setAttribute('class','hourly-weather');
    //         let listItemHour = document.createElement('p');
    //         let listItemIcon = document.createElement('img');
    //         listItemIcon.setAttribute('src','');
    //         listItemIcon.setAttribute('alt','');
    //         let listItemTemp = document.createElement('p');
    //         listItem.appendChild(listItemDiv);
    //         listItemDiv.append(listItemHour,listItemIcon,listItemTemp);
    //         listItemHour.textContent = data.forecast[this.id].hourlyWeather[i].time;
    //         listItemIcon.src = 'https:'+data.forecast[this.id].hourlyWeather[i].condition;
    //         listItemTemp.innerHTML =data.forecast[this.id].hourlyWeather[i].temperature + '&#176;';
    //         weather24HoursList.appendChild(listItem);
    //     }
    //     weather24HoursElement.appendChild(weather24HoursList);
    //     content.appendChild(weather24HoursElement);
    // }
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

        // weatherForecastDay.addEventListener('click',showDayForecast);
    }
}





export default function createContent (data) {
    createCurrentWeather(data);
    createNext24HoursWeather(data);
    createWeatherForecast (data)
}