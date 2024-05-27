import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Japan Travel Guide</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tokyo">Tokyo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/osaka">Osaka</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fukuoka">Fukuoka</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
