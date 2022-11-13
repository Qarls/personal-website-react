import React from 'react'
import image from './res/IMG_4848.JPEG'

const AboutPage = () => {
  return (
    <div id='about-page'>
      <img src={image}></img>
      <div id='about-me'>
      <p>My name is <b><span style={{color: '#811111'}}>Karol Stachowicz</span></b> and I'm a self-taught developer. 
      I currently specialize in creating web applications using React, however the most important skill I've 
      learned during my two-year programming journey is not really a particular framework or language, but the ability to learn
      and solve problems on my own. </p> <p>My passion for anything computer did not, however, start just a few years back.
      It's been there for as long as I can remember. I wrote my first program when I was 13 years old, but it took quite some time, 
      including six years of medical university, for me to pick up programming as a career. </p><p>Before committing to front-end development I've been learning Python, some basics of C++ as well
      as Linux, which I also picked up as a hobby.</p>
      </div>
      <div id='hr'>
       <hr />
       </div>
      <div id='my-skills'>

        <p id='skills'>MY SKILLS:
        <ul className='skills'>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Linux</li>
          <li>Bash</li>
          <li>Python</li>
          <li>C++ basics</li>
        </ul>
        </p>
        <p id='learning'>I'M CURRENTLY LEARNING:
          <ul className='skills'>
            <li>Bootstrap</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </p>
        <p id='courses'>I'VE COMPLETED:
        <ul className='courses'>
          <li>The Odin Project</li>
          <li>Harvard CS50 online course</li>
        </ul>
        </p>
      </div>
      
      
    </div>
  )
}

export default AboutPage