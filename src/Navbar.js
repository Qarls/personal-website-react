import React, {useState, useEffect } from 'react'
import Container from './Container';

const views = {
  start: 'start',
  about: 'about',
  gallery: 'gallery',
  contact: 'contact',
}

const LOCAL_STORAGE_KEY = 'page';


const Navbar = () => {

  function setInitialPage() {
    
    localStorage.setItem(LOCAL_STORAGE_KEY, view)
  }

  function setPage() {

    return localStorage.getItem(LOCAL_STORAGE_KEY)
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
    <div className='navbar' >
       <div className='bar'>
          <div className='logo'>Logo</div>
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