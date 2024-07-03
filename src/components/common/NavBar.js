import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css';

const NavBar = () => {
    console.log("NavBar component is rendering"); // Debugging log
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Fusion Fitness</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#catalog">Catalog</a></li> {/* Assuming catalog is part of HomePage */}
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/socials">Socials</Link></li>
        <li className="navbar-login"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
