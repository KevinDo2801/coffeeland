import React from 'react';
import './Header.css';
import icon from '../assets/images/icon.png';

const Header = () => {
  return (
    <header>
      <div className="announcement">
        We're excited to share that <em>_cafe_ AI's</em> investment, Bumpups, has secured funding from Google! 🌲
      </div>
      <div className="header-bar">
        <div className="logo-icon">
          <img src={icon} alt="logo" className="icon-img" />
        </div>
        <div className="header-buttons">
          <button className="btn-outline">Content Catalog</button>
          <button className="btn-filled">Take This Website</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
