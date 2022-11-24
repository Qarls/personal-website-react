import React from 'react'
import DayItem from './DayItem'

const Day = ({items, date, timeProp, tempToCelsius, fontColor}) => {

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const today = new Date(date)
const dayOfWeek = today.getDay()
const [temps, setTemps] = React.useState(getTemps)

//this function returns the start index of the next day
function findNextDay() {
    return (24 - timeProp) / 3
}

function getTemps () {
    let temps = []
    let days = []
    let cursor = findNextDay()
    for (let n =0; n < 5; n++) {
        for (let i = 0; i < 8; i++) {
            temps.push(items[cursor + i*n].main.temp)

        }
            days.push(temps)
            temps = []
    }
    return days
}
//this returns DayItem components for the next 5 days
//this should be refactored to use a map function

function makeItems () {
    let dayItems = []
    for (let i = 0; i < 5; i++) {
        dayItems.push(<DayItem key={i} weekday={days[(dayOfWeek + i) % 7]} minTemp={tempToCelsius(Math.min(...temps[i]))} maxTemp={tempToCelsius(Math.max(...temps[i]))} fontColor={fontColor.current}/>)
    }
    return dayItems
}

  return (
    <div className='daily-forecast'>
        {makeItems()}
    </div>
  )
}

export default Day