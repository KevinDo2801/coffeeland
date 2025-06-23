import React from'react'
import'../styles/Footer.css'

const Footer=()=>{
  return(
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-links'>
          <a href='#features' className='footer-link'>Features</a>
          <a href='#newsletter' className='footer-link'>Newsletter</a>
          <a href='#' className='footer-link'>Contact</a>
        </div>
        <div className='footer-copy'>
          © {new Date().getFullYear()} Builders Console Log. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer 