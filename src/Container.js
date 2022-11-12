import React from 'react'
import App from './app-external/App'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import './Container.css' 

//this component will contain the contents of the currently displayed page
function Container({ views, view }) {


  function viewController() {
    if (view === views.start) {
      return HomePage();
    }
    else if (view === views.gallery) {
      return App();
    }
    else if (view === views.about) {
      return AboutPage();
    }
    else if (view === views.contact) {
      return ContactPage();
    }
    else return HomePage();
  }

  return (
    <>
      <div className='container'>
        <button className={(view === views.gallery) ? 'nav' : 'hidden'} >1</button>
        <>{viewController()}</>
        <button className={(view === views.gallery) ? 'nav' : 'hidden'} >2</button>

      </div>
    </>
  )
}

export default Container