import React from 'react'
import App from './app-external/App'
import Page from './Page';
import './Container.css' 

//this component will contain the contents of the currently displayed page
function Container({ views, view }) {


  function viewController() {
    if (view === views.start) {
      return Page();
    }
    else if (view === views.gallery) {
      return App()
    }
    

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