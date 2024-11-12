import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <header className="header">
      <div className="logo">
        <span>Progress</span> | <span>Podio</span>
      </div>
      <nav className="nav">
        <Link to="/">Features</Link>
        <Link to="/">Solutions</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Resources</Link>
      </nav>
      <div className="auth-buttons">
        <button className="login" onClick={toggleLogin}>Log In</button>
        <button className="signup">Sign Up</button>
      </div>
      {showLogin && (
        <div className="login-modal">
          <h2>Log In</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Submit</button>
          </form>
          <button className="close-modal" onClick={toggleLogin}>Close</button>
        </div>
      )}
    </header>
  );
};

export default Header;
