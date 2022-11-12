import React, {useState} from 'react'
import Container from './Container';

const views = {
  start: 'start',
  about: 'about',
  gallery: 'gallery',
  contact: 'contact',
}

const Navbar = () => {
  const [view, setView] = useState(views.start);

  const handleClick = (e) => {
    console.log(e.target.id)
    switch (e.target.id) {
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
    <div className='navbar'>
       <div className='bar'>
          <div className='logo'>Logo</div>
          <ul className='bar'>
          <li id='about' onClick={handleClick}>ABOUT</li>
          <li id='gallery' onClick={handleClick}>GALLERY</li>
          <li id='contact' onClick={handleClick}>CONTACT ME</li>
        </ul>
       </div>
    </div>
       <Container views={views} view={view} />
    </>
  )
}

export default Navbar