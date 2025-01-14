import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
        MAMLA<span className="brand-highlight">KARO</span>
        </a>

        {/* Menu Items */}
        <ul className="navbar-menu">
          <li className="navbar-item dropdown">
            <a href="#!" className="navbar-link"><b>Talk to a Lawyer</b></a>
          </li>
          <li className="navbar-item dropdown">
            <a href="#!" className="navbar-link">
              Property <span className="dropdown-icon">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#!">Property Disputes</a></li>
              <li><a href="#!">Real Estate Contracts</a></li>
            </ul>
          </li>
          <li className="navbar-item dropdown">
            <a href="#!" className="navbar-link">
              Documents <span className="dropdown-icon">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#!">Legal Documents</a></li>
              <li><a href="#!">Business Contracts</a></li>
            </ul>
          </li>
          <li className="navbar-item dropdown">
            <a href="#!" className="navbar-link">
              Business <span className="dropdown-icon">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#!">Business Formation</a></li>
              <li><a href="#!">Licenses</a></li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="#!" className="navbar-link">About Us</a>
          </li>
        </ul>

        {/* Search and Action Buttons */}
        <div className="navbar-actions">
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
          <a href="#!" className="login-button">Login</a>
          <a href="#!" className="lawyer-button">Lawyers click here</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
