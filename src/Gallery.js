import React, {useState, useEffect} from 'react'
import App from './app-external/App'
import Weathercontainer from './weather/Weathercontainer'


const APPS = [
  <App />,
  <Weathercontainer />,
]

const CURRENT_APP_KEY = 'currentApp';

const Gallery = () => {


const getCurrentApp = () => {
  
  return sessionStorage.setItem(CURRENT_APP_KEY, app)
}

const getApp = () => {
  if (sessionStorage.getItem(CURRENT_APP_KEY) === null) {
    return 0;
  }
  return sessionStorage.getItem(CURRENT_APP_KEY)
} 

const [app, setApp] = useState(getApp);




useEffect(() => {
  getCurrentApp()
}, [app])

const nextApp = () => {
  if (app === APPS.length - 1) {
    setApp(0)
  } else {
    setApp(app + 1)
  }
}

  return (
    <div className='gallery'>
      <div className='gallery-container'>
          {APPS[app]}
      </div>
      <div  className='gallery-buttons' style={{flex: 0, display: 'flex',}}>
          <button className='nav' onClick={nextApp}>{'<'}</button>
          <button className='nav' onClick={nextApp}>{'>'}</button>
      </div>
        <p className='gallery-footer' >
              More apps coming soon.<p>
              See more on my <a href='https://github.com/Qarls'>github</a>.</p>
        </p>
    </div>
  )
}

export default Gallery