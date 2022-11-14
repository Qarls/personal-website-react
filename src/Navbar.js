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
  
  



  const handleClick = (e) => {
    console.log(e.target.id)
    switch (e.target.id) {
      case 'start':
        setView(prevView => views.start)
        setInitialPage()
        break
      case 'about':
        setView(prevView => views.about)
        setInitialPage()
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
    <img id='logo' src={logo} alt='logo'></img>
    <div className='navbar' >
       <div className='bar'>
          <ul className='bar'>
          <li id='start' onClick={handleClick} onMouseOver={{}}>START</li>
          <li id='about' onClick={handleClick}>ABOUT</li>
          <li id='gallery' onClick={handleClick}>GALLERY</li>
          <li id='contact' onClick={handleClick}>CONTACT</li>
        </ul>
       </div>
    </div>
       <Container views={views} view={view} />
    </>
  )
}

export default Navbar