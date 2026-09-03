import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="main_header">
      <div className="container">
        <div className="hdr_main d-flex justify-content-between align-items-center flex-wrap">
          {/* Brand Logo */}
          <div className="logo_main py-2">
            <Link to="/">
              <img 
                src="https://scnbusinessgroup.com/wp-content/uploads/2025/08/SCN-GROUP-LOGO1.png" 
                alt="SCN Business Group Logo" 
                title="SCN Business Group Logo" 
                className="main_logo"
                style={{ maxHeight: '48px', width: 'auto' }}
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
                <NavLink to="/about-us" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-business" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Our Business
                </NavLink>
              </li>
              <li>
                <NavLink to="/as-employer" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  As Employer
                </NavLink>
              </li>
              <li>
                <NavLink to="/as-employee" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  As Employee
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'menu-active' : ''}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            
            {/* Quick Consultation button */}
            <Link to="/contact-us" className="Book_Consultation btn_main" title="SCN Business Group Enquiry">
              <i className="fa fa-envelope-o me-1"></i> Enquire Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
