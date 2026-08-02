import React, { useState } from 'react';

function EnquiryModal({ isOpen, onClose, title = 'Enquire Now' }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center animate-fade-in"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
    >
      <div 
        className="bg-white rounded-4 shadow-lg p-4 position-relative mx-3 animate-slide-down" 
        style={{ maxWidth: '440px', width: '100%' }}
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
          <h2 className="fw-bold mb-1" style={{ color: '#2563eb', fontSize: '24px' }}>
            Brigade Granada Hoskote
          </h2>
          <h3 className="fw-semibold text-secondary mb-3" style={{ fontSize: '18px' }}>
            Enquire Now
          </h3>

          {/* Quick Badges / Support Icons */}
          <div className="d-flex justify-content-around text-center py-2 border-top border-bottom my-3">
            <div>
              {/* Phone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#2563eb" className="d-block mx-auto mb-1">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1A17 17 0 0 1 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                <path d="M18 8.5a4 4 0 0 0-4-4v1.5a2.5 2.5 0 0 1 2.5 2.5H18z" />
              </svg>
              <span className="text-muted" style={{ fontSize: '11px', display: 'block', lineHeight: '1.2' }}>24/7 Support</span>
            </div>
            <div>
              {/* Building/Person Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#2563eb" className="d-block mx-auto mb-1">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
              <span className="text-muted" style={{ fontSize: '11px', display: 'block', lineHeight: '1.2' }}>Free Site Visit</span>
            </div>
            <div>
              {/* Unmatched Price Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#2563eb" className="d-block mx-auto mb-1">
                <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
              </svg>
              <span className="text-muted" style={{ fontSize: '11px', display: 'block', lineHeight: '1.2' }}>Unmatched Price</span>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="alert alert-success border-0 text-center py-4 rounded-3 mb-0" role="alert">
            <div className="fs-3 mb-2">✅</div>
            <h4 className="alert-heading fw-bold mb-2">Request Submitted!</h4>
            <p className="small mb-0 text-muted">Thank you. Our sales representative will connect with you on your mobile shortly.</p>
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

            {/* Mobile with Dropdown */}
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
                placeholder="Mobile"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            {/* Message */}
            <div>
              <textarea 
                className="form-control modal-underline-input" 
                rows="1" 
                style={{ resize: 'none' }}
                placeholder="Message" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Enquire Now Button */}
            <div className="mt-3">
              <button 
                type="submit" 
                className="btn w-100 py-3 border-0 rounded-3 text-white fw-bold" 
                style={{ backgroundColor: '#2563eb', fontSize: '16px', letterSpacing: '0.5px' }}
              >
                Enquire Now
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EnquiryModal;

