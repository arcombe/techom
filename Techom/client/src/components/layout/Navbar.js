import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Techom
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="menu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
