import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Japan Travel Guide</Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Prepare</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">etc</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Regions
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/tokyo">Tokyo</Link></li>
                <li><Link className="dropdown-item" to="/osaka">Osaka</Link></li>
                <li><Link className="dropdown-item" to="/fukuoka">Fukuoka</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/* 
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
*/

export default Header;
