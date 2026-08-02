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
          <div className="logo_main">
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="https://www.thebrigadegranada.in/images/brigade-group/icons/brigade-granada-logo.webp" 
                alt="Brigade Granada" 
                title="Brigade Granada Logo" 
                className="main_logo"
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
            <button 
              type="button" 
              className="btn-outline-custom ms-4" 
              onClick={() => onEnquireClick('Get Instant Call Back')}
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
                  <Link to="/location" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Location</Link>
                </li>
                <li>
                  <Link to="/master-plan" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Master Plan</Link>
                </li>
                <li>
                  <Link to="/floor-plan" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Floor Plan</Link>
                </li>
                <li>
                  <Link to="/price" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Price</Link>
                </li>
                <li>
                  <Link to="/amenities" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Amenities</Link>
                </li>
                <li>
                  <Link to="/specification" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Specifications</Link>
                </li>
                <li>
                  <Link to="/gallery" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Gallery</Link>
                </li>
                <li>
                  <Link to="/contact" className="d-block py-2 text-dark text-decoration-none fw-semibold" onClick={closeMobileMenu}>Contact</Link>
                </li>
                <li className="mt-2">
                  <button 
                    type="button" 
                    className="btn btn-primary w-100 py-2 border-0 bg-primary text-white text-uppercase tracking-wider fw-bold rounded-pill"
                    onClick={() => { closeMobileMenu(); onEnquireClick('Get Instant Call Back'); }}
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
