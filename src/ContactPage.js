import React from 'react'
import iconfb from './res/social-iconsfb.png'
import iconin from './res/social-iconsin.png'
import icongh from './res/social-iconsgh.png'
import iconmail from './res/social-iconsmail.png'


const ContactPage = () => {
  function clipboard() {
    navigator.clipboard.writeText('kstachowicz@icloud.com')
    alert('Copied to clipboard!')
  }
  return (
    <p id='contact'>
      <span id='contact-me' style={{color: 'azure', marginTop: '20vh'}}><h3>Reach me on: </h3></span>
      <a href='https://www.facebook.com/kstachowicz'><img className='social' src={iconfb} alt='facebook'></img></a>
      <a href='www.linkedin.com/in/karol-stachowicz-82427a242'><img className='social' src={iconin} alt='facebook'></img></a>
      <a href='https://github.com/Qarls'><img className='social' src={icongh} alt='facebook'></img></a>
      <a id='mail' href=''><img onClick={clipboard} className='social' src={iconmail} alt='facebook' ></img></a>
    </p>
  )
}

export default ContactPage