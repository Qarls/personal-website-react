import React from 'react'
import App from './app-external/App'

function Container() {
  return (
    <>
      <div className='container'>
        <button className='nav'>1</button>
        <App />     
        <button className='nav'>2</button>

      </div>
    </>
  )
}

export default Container