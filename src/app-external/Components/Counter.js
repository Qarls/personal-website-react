import React from 'react'

const Counter = ({usedElements, arrayLen}) => {
  const calcLength = () => {
    //subtracting 2 here bc of empty string at index 0
    return arrayLen - usedElements.length - 2;

  }
  return (
    <>
    <span>{calcLength()}</span>
    <p className='bottom-text'>Reload the page to reset</p>
    </>
  )
}

export default Counter