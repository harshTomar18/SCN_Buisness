import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="main_header">
      <div className="container">
        <div className="hdr_main d-flex justify-content-between align-items-center flex-wrap">
          {/* Brand Logo */}
          <div className="logo_main">
            <Link to="/">
              <img 
                src="https://www.thebrigadegranada.in/images/brigade-group/icons/brigade-granada-logo.webp" 
                alt="Brigade Granada" 
                title="Brigade Granada Logo" 
                className="main_logo"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="main_menu">
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/location" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Location
                </NavLink>
              </li>
              <li>
                <NavLink to="/master-plan" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Master Plan
                </NavLink>
              </li>
              <li>
                <NavLink to="/floor-plan" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Floor Plan
                </NavLink>
              </li>
              <li>
                <NavLink to="/price" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Price
                </NavLink>
              </li>
              <li>
                <NavLink to="/amenities" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Amenities
                </NavLink>
              </li>
              <li>
                <NavLink to="/specification" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Specifications
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Contact
                </NavLink>
              </li>
            </ul>
            
            {/* Quick Consultation button */}
            <Link to="/contact" className="Book_Consultation btn_main" title="Brigade Granada Enquiry">
              <i className="fa fa-envelope-o me-1"></i> Enquire Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
