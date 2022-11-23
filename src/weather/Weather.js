import React, {useState, useEffect, useRef} from 'react'
import brokenCloudsBg from '../res/brokenclouds.jpg';
import overcastCloudsBg from '../res/overcastClouds.jpg';
import Forecast from './Forecast';
import Day from './Day';
import clear from '../res/clear.jpg';
import rain from '../res/rain.jpg';
import snow from '../res/snow.jpg';

const apiTest = require('../res/keys.json');
const apiKeyTest = apiTest[0].openweathermap;

const apiLink = `https://api.openweathermap.org/data/2.5/forecast?q=Warsaw&appid=${apiKeyTest}`
const Weather = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState('');
  const [items, setItems] = useState([]);
  const [time, setTimeString] = useState('');
  const [timeProp, setTimeProp] = useState('');
  const [date, setDateString] = useState('');
  const fontColor = useRef('light');

  useEffect(() => {
    fetch(apiLink)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setCity(result.city);
          setItems(result.list);
          setTimeString(result.list[0].dt_txt.slice(11, 16));
          setTimeProp(result.list[0].dt_txt.slice(11, 13));
          console.log(timeProp);

          console.log(time)
          setDateString(result.list[0].dt_txt.slice(0, 10));

        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []) // empty array as second argument means that this effect will run only once

  const tempToCelsius = (temp) => {
    return Math.round(temp - 273.15);
  }

//TODO: add all images
  const setBackgroundImage = () => { 
    switch (items[0].weather[0].description) {
      case 'clear':
        fontColor.current = 'dark';
        return clear;
      case 'broken clouds':
        fontColor.current = 'dark';
        return brokenCloudsBg;
      case 'overcast clouds':
        fontColor.current = 'dark';
        return overcastCloudsBg;
      case 'rain' || 'light rain' || 'drizzle':
        fontColor.current = 'light';
        return rain;
      case 'snow' || 'light snow':
        fontColor.current = 'light';
        return snow;
      case 'Thunderstorm':
        return 'thunderstorm.jpg';
      case 'Drizzle':
        return 'drizzle.jpg';
      case 'Mist':
        return 'mist.jpg';
      case 'Fog':
        return 'fog.jpg';
      default:
        return brokenCloudsBg;
    }}

//this is a function to test image size and position
const setBackgroundImageTest = () => {
  return snow;
}
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  }
    else {
      return (
//CHECK IF NOT PASSING THE TEST FUNCTION BEFORE PUSHING TO PRODUCTION
    <div className='weather' style={{backgroundImage: `url(${setBackgroundImage()})`, backgroundSize: '200%', backgroundRepeat: 'no-repeat'}}>
      <p className={`weather-item ${fontColor.current}`} id='datetime-txt'>{date} {time}</p>
      <p className={`weather-item ${fontColor.current}`}>{city.name}, {city.country}</p>
      <p className={`weather-item ${fontColor.current}`}>{items[0].weather[0].description}</p>
      <p className={`weather-item ${fontColor.current}`}>{tempToCelsius(items[0].main.temp)}&#8451;</p>
      <Forecast items={items} time={time} tempToCelsius={tempToCelsius} fontColor={fontColor}/>
      <Day items={items} date={date} timeProp={timeProp} tempToCelsius={tempToCelsius} fontColor={fontColor}/>
    </div>
  )
}

    }
    
export default Weather