import React from 'react'
import './Page.css'

const mainText = 'KAROL STACHOWICZ'
const subText = 'FRONTEND DEVELOPER'
const Page = () => {
  return (
    <div className='start-page'>
        <div className='center-text'>
            <p className='main-text'>{mainText}</p>
            <p className='sub-text'>{subText}</p>
        </div>
    </div>
  )
}

export default Page