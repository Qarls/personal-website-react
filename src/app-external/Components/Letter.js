import React, {} from 'react'
import './Letter.css';

const Letter = ({elementArray, currentElement}) => {
function displayElement() {
  try {
    return elementArray[currentElement+1].text
  }
  catch {
    return elementArray[0].text
  }
}
return( 
    <p className='main-display'>{displayElement()}</p>
  )
}

export default Letter