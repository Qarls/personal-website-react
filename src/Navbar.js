import React, {useState, useEffect } from 'react'
import Container from './Container';
import logo from './res/8541742_circle_icon.png'

const views = {
  start: 'start',
  about: 'about',
  gallery: 'gallery',
  contact: 'contact',
}

const LOCAL_STORAGE_KEY = 'page';


const Navbar = () => {

  function setInitialPage() {
    
    sessionStorage.setItem(LOCAL_STORAGE_KEY, view)
  }

  function setPage() {

    return sessionStorage.getItem(LOCAL_STORAGE_KEY)
  }
  let currentPage = localStorage.getItem(LOCAL_STORAGE_KEY)
  const [view, setView] = useState(setPage);

  useEffect(() => {
    setInitialPage()
  
  }, [view])

  const handleMouseOver = (e) => {
    e.target.style.textShadow = '1px 1px 1px #ffffff'

  }

  const handleMouseOut = (e) => {
    e.target.style.textShadow = 'none'
  }

  const handleClick = (e) => {
    switch (e.target.id) {
      case 'start':
        setView(prevView => views.start)
        break
      case 'logo':
        setView(prevView => views.start)
        break
      case 'about':
        setView(prevView => views.about)
        break
      case 'gallery':
        setView(prevView => views.gallery)
        break
      case 'contact':
        setView(prevView => views.contact)
        break
      default:
        setView(prevView => views.start)
        break
    }
  }

  return (
    <> 
    <img id='logo' src={logo} alt='logo' onClick={handleClick}></img>
    <div className='navbar' >
       <div className='bar'>
          <ul className='bar'>
          <li id='start' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>START</li>
          <li id='about' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>ABOUT</li>
          <li id='gallery' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>GALLERY</li>
          <li id='contact' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>CONTACT</li>
        </ul>
       </div>
    </div>
       <Container views={views} view={view} />
    </>
  )
}

export default Navbar