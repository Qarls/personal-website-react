import React from 'react'

const DayItem = ({weekday, minTemp, maxTemp}) => {
  return (
    <div>{weekday} Min:{minTemp} Max:{maxTemp}</div>
  )
}

export default DayItem