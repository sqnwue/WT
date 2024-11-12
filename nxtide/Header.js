import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ logoText, links, contactButton }) => {
  return (
    <header className="header">
      <div className="logo">
        <span>{logoText}</span>
      </div>
      <nav className="nav">
        {links.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="contact-button">
        <button>{contactButton}</button>
      </div>
    </header>
  );
};

export default Header;
