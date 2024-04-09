import './style.css'
import createContent from './DOM';
let currentWeatherData;
const APIKEY = '809b75e4736549f1bb7181217240504';
const searchButton = document.querySelector('#search'); 
const content = document.querySelector('.content');
const loadingAnimation = document.createElement('div');
loadingAnimation.setAttribute('class','load');


searchButton.addEventListener('click',GetWeatherData);

async function GetWeatherData(event){
    event.preventDefault();
    content.innerHTML = '';
    content.appendChild(loadingAnimation);
    const location = document.querySelector('input').value;
    document.querySelector('input').value='';
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${location}&days=3`,{mode: 'cors'});
        if (response.status=== 200){
            const weatherData = await response.json();
            currentWeatherData = filterData(weatherData);
            content.innerHTML = '';
            content.classList.remove('error');
            createContent(currentWeatherData);
        } else {
            throw new Error(response.status);
        }
    } catch (error)
    {

        content.innerHTML = '';
        content.classList.add('error');
        console.log(error);
    }
};

function filterData(data){
    const beaufort = [1,5,11,19,29,39,49,61,74,88,102,117,134];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let  windScale=0;
    for (let i = 0; i<beaufort.length;i++){
        if (data.current.wind_kph<=beaufort[i]){
            windScale = i;
            break;
        } else {windScale = 13}       
    }

    let hourlyWeather = {0:[],1:[],2:[]};
    let hourlyWeatherNext24Hours = [];
    let currentTime =+(data.location.localtime).slice(-5,-3);
    for (let day = 0; day<3; day++){
        for (let hour = 0; hour<24; hour++){
            if (currentTime<=hour && day===0){
                hourlyWeatherNext24Hours.push({
                    time: data.forecast.forecastday[0].hour[hour].time.slice(-5),
                    condition: data.forecast.forecastday[0].hour[hour].condition.icon,
                    temperature: data.forecast.forecastday[0].hour[hour].temp_c,
                });
            } else if (currentTime>=hour && day===1 && hourlyWeatherNext24Hours.length<24){
                hourlyWeatherNext24Hours.push({
                    time: data.forecast.forecastday[0].hour[hour].time.slice(-5),
                    condition: data.forecast.forecastday[0].hour[hour].condition.icon,
                    temperature: data.forecast.forecastday[0].hour[hour].temp_c,
                });
            }
            hourlyWeather[day].push({
                time: data.forecast.forecastday[0].hour[hour].time.slice(-5),
                condition: data.forecast.forecastday[0].hour[hour].condition.icon,
                temperature: data.forecast.forecastday[0].hour[hour].temp_c,
            });
        }
    }
    

    return {
        location:
        {
            name: data.location.name,
            region: data.location.region, 
            country: data.location.country, 
            timezone: data.location.tz_id,
            localtime: data.location.localtime
        },
        weather:{
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
            wind_direction: data.current.wind_dir,
            wind_beaufort: windScale,
            hourlyWeatherNext24Hours,
        },
        forecast: {
            day1: {
                day:'Today',
                min_temp:data.forecast.forecastday[0].day.mintemp_c,
                max_temp:data.forecast.forecastday[0].day.maxtemp_c,
                condition:data.forecast.forecastday[0].day.condition.icon,
                hourlyWeather:hourlyWeather[0],

            },
            day2: {
                day:weekday[new Date(data.forecast.forecastday[1].date).getUTCDay()],
                min_temp:data.forecast.forecastday[1].day.mintemp_c,
                max_temp:data.forecast.forecastday[1].day.maxtemp_c,
                condition:data.forecast.forecastday[1].day.condition.icon,
                hourlyWeather:hourlyWeather[1],

            },
            day3: {
                day:weekday[new Date(data.forecast.forecastday[2].date).getUTCDay()],
                min_temp:data.forecast.forecastday[2].day.mintemp_c,
                max_temp:data.forecast.forecastday[2].day.maxtemp_c,
                condition:data.forecast.forecastday[2].day.condition.icon,
                hourlyWeather:hourlyWeather[2],

            },
        }
    }
}

