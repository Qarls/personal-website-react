import React, {useState, useEffect} from 'react'
import brokenCloudsBg from '../res/brokenclouds.jpg';
import overcastCloudsBg from '../res/overcastClouds.jpg';
import Forecast from './Forecast';


const apiTest = require('../res/keys.json');
const apiKeyTest = apiTest[0].openweathermap;

const apiLink = `https://api.openweathermap.org/data/2.5/forecast?q=Warsaw&appid=${apiKeyTest}`
const Weather = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState('');
  const [items, setItems] = useState([]);
  const [time, setTimeString] = useState('');
  const [date, setDateString] = useState('');

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
//TODO
  const setBackgroundImage = () => { 
    switch (items[0].weather[0].description) {
      case 'Clear':
        return 'clearSky.jpg';
      case 'broken clouds':
        return brokenCloudsBg;
      case 'overcast clouds':
        return overcastCloudsBg;
      case 'Rain':
        return 'rain.jpg';
      case 'Snow':
        return 'snow.jpg';
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



  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  }
    else {
      return (
    <div className='weather' style={{backgroundImage: `url(${setBackgroundImage()})`, backgroundSize: 'contain'}}>
      <p className='weather-item' id='datetime-txt'>{date} {time}</p>
      <p className='weather-item'>{city.name}, {city.country}</p>
      <p className='weather-item'>{items[0].weather[0].description}</p>
      <p className='weather-item'>{tempToCelsius(items[0].main.temp)}&#8451;</p>
      <Forecast items={items} time={time} tempToCelsius={tempToCelsius}/>
    </div>
  )
}

    }
    
export default Weather