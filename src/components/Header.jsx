import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header({ onEnquireClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={`menu-backdrop ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      <header className="header appear appear--scale" style={{ '--d': '0.08s' }}>
        {/* Left - SCN Brand Logo */}
        <Link to="/" className="logo appear appear--scale" style={{ '--d': '0.08s' }} aria-label="SCN Business Group" onClick={closeMenu}>
          <img 
            src="https://scnbusinessgroup.com/wp-content/uploads/2025/08/SCN-GROUP-LOGO1.png" 
            alt="SCN Business Group Logo" 
            title="SCN Business Group Logo" 
            style={{ maxHeight: '38px', width: 'auto' }}
          />
        </Link>

        {/* Center - SCN Navigation Links (Liquid Metal Pills) */}
        <nav id="site-nav" className={menuOpen ? 'open' : ''} aria-label="Primary Navigation">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-pill appear appear--scale ${isActive ? 'active' : ''}`} 
            style={{ '--d': '0.12s' }}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about-us" 
            className={({ isActive }) => `nav-pill appear appear--soft ${isActive ? 'active' : ''}`} 
            style={{ '--d': '0.20s' }}
            onClick={closeMenu}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/our-business" 
            className={({ isActive }) => `nav-pill appear appear--scale ${isActive ? 'active' : ''}`} 
            style={{ '--d': '0.28s' }}
            onClick={closeMenu}
          >
            Our Business
          </NavLink>
          <NavLink 
            to="/as-employer" 
            className={({ isActive }) => `nav-pill appear appear--soft ${isActive ? 'active' : ''}`} 
            style={{ '--d': '0.36s' }}
            onClick={closeMenu}
          >
            As Employer
          </NavLink>
          <a 
            href="https://scnjobs.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-pill appear appear--scale" 
            style={{ '--d': '0.44s' }}
            onClick={closeMenu}
          >
            Apply for Jobs
          </a>
          <NavLink 
            to="/contact-us" 
            className={({ isActive }) => `nav-pill appear appear--soft ${isActive ? 'active' : ''}`} 
            style={{ '--d': '0.52s' }}
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Right - Header CTA */}
        <div className="header-right-actions">
          <button 
            type="button"
            className="btn btn-solid header-cta appear appear--scale" 
            style={{ '--d': '0.34s' }}
            onClick={() => onEnquireClick && onEnquireClick('Get Instant Consultation')}
          >
            <i className="fa fa-envelope-o me-1"></i> Enquire Now
          </button>

          {/* Mobile Burger Menu Button */}
          <button 
            type="button"
            className={`burger-btn ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
