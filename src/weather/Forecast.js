import React from 'react'

const Forecast = ({items, time, tempToCelsius, fontColor}) => {
const timeIntervals = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
const currentTime = timeIntervals.indexOf(time)

function hourlyDivs() {
  let divs = []
  let cursor = currentTime
  let times = timeIntervals[cursor] 
  for (let i = 0; i < 5; i++) {

    if (cursor >= timeIntervals.length - 1) {
        cursor = 0
    }
    cursor++;
    time = timeIntervals[cursor].slice(0, 2)    
    divs.push(<div key={i} className={`weather-item ${fontColor}`}>{time}</div>)
  }

  return divs
}

function hourlyTemps() {
    let temps = []
    let cursor = currentTime
    for (let i = 0; i < 5; i++) {
        if (cursor >= timeIntervals.length - 1) {
            cursor = 0
        }
        cursor++;
        temps.push(<div key={i} className='hourly-item'>{tempToCelsius(items[cursor].main.temp)}&#8451;</div>)
    }
    return temps
}

  return (
    <div className={`weather-item ${fontColor.current}`} id='forecast-container'>
        <div className={`weather-item ${fontColor.current}`} id='forecast-hourly'>
            {hourlyDivs()}
        </div>
        <div className={`weather-item ${fontColor.current}`} id='forecast-temps'>
            {hourlyTemps()}
        </div>
    </div>
  )
}

Forecast.defaultProps = {
    fontColor: 'light'
}


export default Forecast