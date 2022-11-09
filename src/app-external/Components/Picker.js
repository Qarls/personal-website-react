import React, {useState, } from 'react'
import Letter from './Letter'
import Counter from './Counter'
import './Picker.css'
let intervalId;
let elementIndex = 0;


const Picker = ({style, elementArray, arrayLen}) => {
  console.log(elementArray)
  const [usedElements, updateUsedElements] = useState([])
  const [speed, setSpeed] = useState(199)
  const [isRunning, toggleRunning] = useState(true);
  const [currentElement, setCurrentElement] = useState(() => {
    return 0
  });  
  


  function handleChange(event) {
    setSpeed(event.target.value)
  }

  function checkAvailable(index) {
    if (!index) return true;
    return false;
  }

  const nextLetter = () => {
    
    if (elementIndex >= arrayLen - 1) {
      elementIndex = 0 
    }
    elementIndex++
    if (checkAvailable(elementArray[elementIndex].used)) {
      setCurrentElement(elementIndex)
      return elementIndex
    }
    else {
      nextLetter();
    }
  }

  function handleRunClick() {
    toggleRunning(!isRunning)
    if (isRunning) {
      intervalId = setInterval(nextLetter, speed)    
    }
    else {
      fetch(currentElement) 
        .then(clearInterval(intervalId))
      if (checkAvailable(elementIndex.text)) {
        updateUsedElements(prevElements => [...prevElements, elementArray[elementIndex].text])
        elementArray[elementIndex].used = true;
        console.log(usedElements)
      }
  }
  }

  return (
    <div style={style}>
      <button onClick={handleRunClick} className={isRunning ? 'startbutton' : 'stopbutton'}>{isRunning ? 'Start' : 'Stop'}</button>
      <Letter currentElement={currentElement - 1} elementArray={elementArray} />
      <label htmlFor='speed'>Speed: </label>
      <input type='number' id='speed' onChange={handleChange} placeholder='199'></input>
      <p className='used-letters'>{usedElements}</p>
      <div className='counter'>Elements remaining: <Counter usedElements={usedElements} arrayLen={arrayLen}/></div>
    </div>
  )
}

export default Picker