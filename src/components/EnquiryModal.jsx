import React, { useState } from 'react';

function EnquiryModal({ isOpen, onClose, title = 'Get Instant Consultation' }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'General Enquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: 'General Enquiry', message: '' });
    }, 2000);
  };

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center animate-fade-in"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
    >
      <div 
        className="bg-white rounded-4 shadow-lg p-4 position-relative mx-3 animate-slide-down" 
        style={{ maxWidth: '460px', width: '100%' }}
      >
        {/* Close Button */}
        <button 
          type="button" 
          className="btn-close position-absolute top-0 end-0 m-3" 
          aria-label="Close"
          onClick={onClose}
          style={{ cursor: 'pointer' }}
        ></button>

        {/* Title & Subtitle */}
        <div className="text-center mb-4 mt-2">
          <img 
            src="https://scnbusinessgroup.com/wp-content/uploads/2025/08/SCN-GROUP-LOGO1.png" 
            alt="SCN Business Group Logo" 
            className="mb-2" 
            style={{ maxHeight: '42px' }} 
          />
          <h2 className="fw-bold mb-1" style={{ color: 'var(--colorPrimary)', fontSize: '22px' }}>
            SCN Business Group
          </h2>
          <h3 className="fw-semibold text-secondary mb-3" style={{ fontSize: '15px' }}>
            {title}
          </h3>

          {/* Quick Badges / Support Icons */}
          <div className="d-flex justify-content-around text-center py-2 border-top border-bottom my-3">
            <div>
              <i className="fa fa-headphones fs-4 text-primary d-block mb-1"></i>
              <span className="text-muted" style={{ fontSize: '11px', display: 'block', lineHeight: '1.2' }}>24/7 Support</span>
            </div>
            <div>
              <i className="fa fa-briefcase fs-4 text-primary d-block mb-1"></i>
              <span className="text-muted" style={{ fontSize: '11px', display: 'block', lineHeight: '1.2' }}>Staffing & IT</span>
            </div>
            <div>
              <i className="fa fa-certificate fs-4 text-primary d-block mb-1"></i>
              <span className="text-muted" style={{ fontSize: '11px', display: 'block', lineHeight: '1.2' }}>21+ Yrs Legacy</span>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="alert alert-success border-0 text-center py-4 rounded-3 mb-0" role="alert">
            <div className="fs-3 mb-2">✅</div>
            <h4 className="alert-heading fw-bold mb-2">Request Submitted!</h4>
            <p className="small mb-0 text-muted">Thank you. Our representative will connect with you shortly.</p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="btn btn-primary btn-sm mt-3 px-4 rounded-pill">
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            {/* Full Name */}
            <div>
              <input 
                type="text" 
                className="form-control modal-underline-input" 
                placeholder="Full Name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
              />
            </div>
            
            {/* Email ID */}
            <div>
              <input 
                type="email" 
                className="form-control modal-underline-input" 
                placeholder="Email ID" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
              />
            </div>

            {/* Mobile with Country Code */}
            <div className="d-flex align-items-center gap-2 border-bottom pb-1">
              <select className="border-0 bg-transparent text-dark small py-2" style={{ outline: 'none', cursor: 'pointer', minWidth: '95px', fontSize: '15px' }}>
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                <option value="+971">UAE (+971)</option>
                <option value="+44">UK (+44)</option>
              </select>
              <div style={{ width: '1px', height: '20px', backgroundColor: '#ccc' }}></div>
              <input 
                type="tel" 
                className="form-control border-0 bg-transparent py-1 shadow-none" 
                style={{ outline: 'none', fontSize: '15px' }}
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            {/* Service Selection */}
            <div>
              <select 
                className="form-select border-0 border-bottom rounded-0 shadow-none text-muted"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="General Enquiry">Select Service / Vertical</option>
                <option value="IT Services">SCN Global IT Services</option>
                <option value="IT Training">SCN Global IT Training Institute</option>
                <option value="HR Training">SCN Global HR Training Institute</option>
                <option value="Personality Training">Personality Development Training</option>
                <option value="US Staffing">SCN Global U.S. Staffing</option>
                <option value="Payroll Management">SCN Global Payroll Management</option>
                <option value="General Staffing">SCN Global General Staffing</option>
                <option value="BPO Services">SCN Global BPO Services</option>
                <option value="Real Estate">SCN Global Real Estate</option>
                <option value="Employer Hiring">As Employer / Hiring Partner</option>
                <option value="Employee Career">As Employee / Job Seeker</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <textarea 
                className="form-control modal-underline-input" 
                rows="2" 
                style={{ resize: 'none' }}
                placeholder="How can we help you?" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-2">
              <button 
                type="submit" 
                className="btn w-100 py-3 border-0 rounded-3 text-white fw-bold" 
                style={{ backgroundColor: 'var(--colorPrimary)', fontSize: '16px', letterSpacing: '0.5px' }}
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EnquiryModal;

