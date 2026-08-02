import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-4 text-center mt-auto" style={{ backgroundColor: 'var(--colorFooter)' }}>
      <div className="container">
        <p className="mb-2 text-white">
          &copy; {new Date().getFullYear()} Brigade Granada. All rights reserved.
        </p>
        <p className="small mb-2 text-white-50 max-w-2xl mx-auto px-3" style={{ fontSize: '12px' }}>
          <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute a legal offer or binding contract. Real estate details, including pricing and availability, are subject to change without prior notice. Images used are artistic impressions intended for representational purposes only. As an authorized marketing partner, we are committed to providing accurate project updates.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Link to="/contact" className="text-white-50 text-decoration-none small hover-white">Privacy Policy</Link>
          <span className="text-white-50">|</span>
          <Link to="/contact" className="text-white-50 text-decoration-none small hover-white">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
