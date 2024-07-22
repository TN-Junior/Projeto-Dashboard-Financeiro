// src/components/Header/Header.jsx

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <a href="#">Solutions</a>
        <a href="#">Resources</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <button className="sign-in">Sign in</button>
        <button className="register">Register</button>
      </nav>
    </header>
  );
};

export default Header;
