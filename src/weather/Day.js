import React from 'react'
import DayItem from './DayItem'

const Day = ({items, date, timeProp, tempToCelsius, fontColor}) => {

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const today = new Date(date)
const dayOfWeek = today.getDay()
const [temps, setTemps] = React.useState(getTemps)



//(24 - time) / 3

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

function makeItems () {
    let dayItems = []
    for (let i = 0; i < 5; i++) {
        dayItems.push(<DayItem key={i} weekday={days[(dayOfWeek + i) % 7]} minTemp={tempToCelsius(Math.min(...temps[i]))} maxTemp={tempToCelsius(Math.max(...temps[i]))} fontColor={fontColor}/>)
    }
    return dayItems
}


const dayDivs = () => {
    let divs = []
    let cursor = dayOfWeek
    for (let i = 0; i < 5; i++) {
        if (cursor >= days.length - 1) {
            cursor = 0
            divs.push(<div key={days[cursor]} className={`weather-item ${fontColor}`}>{days[cursor]}</div>)
        }
        cursor++;
        divs.push(<div key={days[cursor]} className={`weather-item ${fontColor}`}>{days[cursor]}</div>)
    }
    console.log(items)
    console.log(date)
    console.log(timeProp)
    getTemps()
    console.log(getTemps())
    return divs
}

  return (
    <div>
        {makeItems()}
    </div>
  )
}

export default Day