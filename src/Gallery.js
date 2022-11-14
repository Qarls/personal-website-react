import React from 'react'
import App from './app-external/App'

const Gallery = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'space-around'}}>
        <App />
        <p style={{color: 'azure', flex: '0 1 auto', textAlign: 'center', marginTop: '10vh'}}>
            More apps coming soon.<p>
            See more on my <a href='https://github.com/Qarls'>github</a>.</p>
        </p>
    </div>
  )
}

export default Gallery