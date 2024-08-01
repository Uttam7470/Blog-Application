import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <h2> Blog Application</h2>
      </div>
      <nav className="header-bottom">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create Post</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
