import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Skyscanner</div>
    <div className="navbar-links">
      <Link to="/">Flights</Link>
      <Link to="/hotels">Hotels</Link>
      <Link to="/car-hire">Car Hire</Link>
    </div>
  </nav>
);

export default Navbar;
