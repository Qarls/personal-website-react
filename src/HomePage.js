import React from 'react'
import './HomePage.css'

const mainText = 'KAROL STACHOWICZ'
const subText = 'FRONTEND DEVELOPER'
const blackLetters = 'OPER'
const HomePage = () => {
  return (
    <div className='start-page'>
        <div className='center-text'>
            <p className='main-text'>{mainText}</p>
            <p className='sub-text'>{subText}</p>
        </div>
    </div>
  )
}

export default HomePage