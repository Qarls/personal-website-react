import React from 'react'
import App from './app-external/App'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import './Container.css' 
import bg from './bg2.jpg'


const bgImage = "url('bg2.jpg')"

//this component will contain the contents of the currently displayed page
function Container({ views, view }) {


  function setImageBg() {
    document.getElementById('main').style.backgroundColor = null
    document.getElementById('main').style.backgroundImage = `url(${bg})`
  }

  function setColorBg() {
    document.getElementById('main').style.backgroundImage = null
    document.getElementById('main').style.backgroundColor = '#000000'

  }
  function viewController() {
    if (view === views.start) {
      setImageBg();
      return HomePage();
    }
    else if (view === views.gallery) {
      setColorBg();
      return App();
    }
    else if (view === views.about) {
      setColorBg();

      return AboutPage();
    }
    else if (view === views.contact) {
      setColorBg();
      return ContactPage();
    }
    else {
      setImageBg();
      return HomePage();
    }
  }

  return (
    <>
      <div className='container' >
        <button className={(view === views.gallery) ? 'nav' : 'hidden'} >1</button>
        <>{viewController()}</>
        <button className={(view === views.gallery) ? 'nav' : 'hidden'} >2</button>

      </div>
    </>
  )
}

export default Container