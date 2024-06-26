import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary p-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{
          fontFamily: 'SBAggroB',
        }}>Japan Travel Guide</Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checklist">Checklist</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.google.com/travel/flights?hl=ko">Flight</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://triple.guide/">Schedule</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Regions
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/tokyo">Tokyo</Link></li>
                <li><Link className="dropdown-item" to="/osaka">Osaka</Link></li>
                <li><Link className="dropdown-item" to="/fukuoka">Fukuoka</Link></li>
                <li><Link className="dropdown-item" to="/yufuin">Yufuin</Link></li>
                <li><Link className="dropdown-item" to="/kyoto">Kyoto</Link></li>
                <li><Link className="dropdown-item" to="/kumamoto">Kumamoto</Link></li>
                <li><Link className="dropdown-item" to="/nagasaki">Nagasaki</Link></li>
                <li><Link className="dropdown-item" to="/saporo">Saporo</Link></li>
                <li><Link className="dropdown-item" to="/okinawa">Okinawa</Link></li>
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
