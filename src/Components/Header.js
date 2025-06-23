import React from 'react';
import '../styles/Header.css';
import icon from '../assets/images/icon.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='announcement'>
        <span>🚀 Builders Console Log: The best place for indie hackers & makers</span>
      </div>
      <div className='header-bar'>
        <div className='logo-icon'>
          <img src={icon} alt='logo' className='icon-img'/>
          <span className='logo-text'>buildersconsolelog</span>
        </div>
        <nav className='header-nav'>
          <a href='#features' className='nav-link'>Features</a>
          <a href='#newsletter' className='nav-link'>Newsletter</a>
          <a href='#' className='nav-link nav-cta'>Get Started</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
