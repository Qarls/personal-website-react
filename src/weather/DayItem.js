import React from 'react'

const DayItem = ({weekday, minTemp, maxTemp}) => {
  return (
    <div className='day-item'>
      <div className='day-item-name'>{weekday}</div>
      <div className='day-item-temps'>
        <div className='day-item-min'>L: {minTemp}&#8451;</div>
        <div className='day-item-max'>H: {maxTemp}&#8451;</div>  
      </div>
    </div>
  )
}

export default DayItem