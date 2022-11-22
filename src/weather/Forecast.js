import React from 'react'


//function to return 5 divs with class name 'hourly-item'

const Forecast = ({items, time, tempToCelsius}) => {
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
    divs.push(<div key={i} className='hourly-item'>{time}</div>)
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
    <div className='forecast' id='forecast-container'>
        <div className='forecast' id='forecast-hourly'>
            {hourlyDivs()}
            

        </div>
        <div className='forecast' id='forecast-temps'>
            {hourlyTemps()}
        </div>
    </div>
  )
}

export default Forecast