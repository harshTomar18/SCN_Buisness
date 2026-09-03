import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header({ onEnquireClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="main_header">
      <div className="container">
        <div className="hdr_main d-flex justify-content-between align-items-center position-relative flex-wrap">
          {/* Brand Logo */}
          <div className="logo_main py-2">
            <Link to="/" onClick={closeMobileMenu} className="d-flex align-items-center gap-2 text-decoration-none">
              <img 
                src="https://scnbusinessgroup.com/wp-content/uploads/2025/08/SCN-GROUP-LOGO1.png" 
                alt="SCN Business Group Logo" 
                title="SCN Business Group Logo" 
                className="main_logo"
                style={{ maxHeight: '48px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="main_menu d-none d-lg-flex align-items-center">
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
            <button 
              type="button" 
              className="btn-outline-custom ms-4" 
              onClick={() => onEnquireClick('Get Instant Consultation')}
              style={{
                border: '1px solid var(--colorPrimary)',
                color: 'var(--colorPrimary)',
                padding: '7px 18px',
                borderRadius: '6px',
                backgroundColor: 'transparent',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fa fa-envelope-o me-1"></i> Enquire Now
            </button>
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button 
            className="navbar-toggler border-0 d-lg-none p-2 bg-transparent" 
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            style={{ fontSize: '24px', color: 'var(--colorPrimary)' }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Mobile Collapsible Navigation Menu */}
          {mobileMenuOpen && (
            <div 
              className="position-absolute w-100 start-0 bg-white shadow-lg p-3 d-lg-none animate-slide-down"
              style={{ top: '100%', zIndex: 1000, borderBottom: '3px solid var(--colorPrimary)' }}
            >
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-center">
                <li>
                  <Link to="/" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/about-us" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>About Us</Link>
                </li>
                <li>
                  <Link to="/our-business" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Our Business</Link>
                </li>
                <li>
                  <Link to="/as-employer" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>As Employer</Link>
                </li>
                <li>
                  <Link to="/as-employee" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>As Employee</Link>
                </li>
                <li>
                  <Link to="/contact-us" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Contact Us</Link>
                </li>
                <li className="mt-2">
                  <button 
                    type="button" 
                    className="btn w-100 py-2 border-0 text-white text-uppercase tracking-wider fw-bold rounded-3"
                    style={{ backgroundColor: 'var(--colorPrimary)' }}
                    onClick={() => { closeMobileMenu(); onEnquireClick('Get Instant Consultation'); }}
                  >
                    Enquire Now
                  </button>
                </li>
              </ul>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}

export default Header;
