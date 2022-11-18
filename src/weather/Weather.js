import React, {useState, useEffect} from 'react'
import brokenCloudsBg from '../res/brokenclouds.jpg';


const apiTest = require('../res/keys.json');
const apiKeyTest = apiTest[0].openweathermap;

const apiLink = `https://api.openweathermap.org/data/2.5/forecast?q=Warsaw&appid=${apiKeyTest}`
const Weather = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(apiLink)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setCity(result.city);
          setItems(result.list);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const tempToCelsius = (temp) => {
    return Math.round(temp - 273.15);
  }

  const setBackgroundImage = () => {
    switch (items[0].weather[0].description) {
      case 'Clear':
        return 'clearSky.jpg';
      case 'broken clouds':
        return brokenCloudsBg;
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
    <div className='weather' style={{backgroundImage: {setBackgroundImage}}}>
      <p>{items[0].dt_txt}</p>
      <p>{city.name}, {city.country}</p>
      <p>{items[0].weather[0].description}</p>
      <p>{tempToCelsius(items[0].main.temp)}&#8451;</p>
    </div>
  )
}

    }
    
export default Weather