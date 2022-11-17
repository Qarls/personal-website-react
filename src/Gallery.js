import React, {useState} from 'react'
import App from './app-external/App'
import Weathercontainer from './weather/Weathercontainer'

const APPS = {
  app: <App />,
  weather: <Weathercontainer />,
  

}
const Gallery = () => {
  const [app, setApp] = useState(APPS.app)

const prevApp = () => {
  if (app === APPS.app) {
    setApp(APPS.weather)
  }
  else if (app === APPS.weather) {
    setApp(APPS.app)
  }
}
const nextApp = () => {
  if (app === APPS.app) {
    setApp(APPS.weather)
  }
  else if (app === APPS.weather) {
    setApp(APPS.app)
  }
}

  

  return (
    <div className='gallery'>
      <div className='gallery-container'>
          {app}
      </div>
      <div  className='gallery-buttons' style={{flex: 0, display: 'flex',}}>
          <button className='nav' onClick={prevApp}>{'<'}</button>
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