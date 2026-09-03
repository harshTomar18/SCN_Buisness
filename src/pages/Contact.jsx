import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page animate-fade-in">
      {/* Top Banner */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">Contact Us</h2>
                <ul className="breadcrumb mb-0">
                  <li><Link to="/">Home</Link></li>
                  <li className="text-white opacity-75">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Helpdesk Contacts Header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <span className="badge bg-primary px-3 py-2 text-uppercase mb-2">Client Help Desk</span>
          <h2 className="display-6 fw-bold text-dark mb-3">Get in Touch with SCN Business Group</h2>
          <p className="text-secondary">Have questions regarding staffing, IT services, HR training, or corporate partnerships? We are here to assist you.</p>
        </div>

        {/* Client Help Desk Team Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="p-4 rounded-4 bg-white shadow-sm border d-flex align-items-center gap-3">
              <div className="bg-primary text-white p-3 rounded-circle fs-3">
                <i className="fa fa-user-circle"></i>
              </div>
              <div>
                <span className="badge bg-light text-primary border mb-1">Help Desk Specialist</span>
                <h4 className="h5 fw-bold text-dark mb-1">Mr. Aryan Rastogi</h4>
                <p className="text-secondary small mb-1"><i className="fa fa-envelope text-primary me-2"></i> aryan@scnbusinessgroup.com</p>
                <p className="text-secondary small mb-0"><i className="fa fa-phone text-primary me-2"></i> +91 7982941427</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 rounded-4 bg-white shadow-sm border d-flex align-items-center gap-3">
              <div className="bg-primary text-white p-3 rounded-circle fs-3">
                <i className="fa fa-user-circle"></i>
              </div>
              <div>
                <span className="badge bg-light text-primary border mb-1">Client Relations Manager</span>
                <h4 className="h5 fw-bold text-dark mb-1">Mr. Aasif Ahmad</h4>
                <p className="text-secondary small mb-1"><i className="fa fa-envelope text-primary me-2"></i> info@scnbusinessgroup.com</p>
                <p className="text-secondary small mb-0"><i className="fa fa-phone text-primary me-2"></i> +91 9650068863</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form and Office Addresses */}
        <div className="row g-5">
          {/* Form */}
          <div className="col-lg-6">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border">
              <h3 className="fw-bold text-dark mb-3">Send Us a Message</h3>

              {submitted ? (
                <div className="alert alert-success p-4 rounded-3 text-center my-4">
                  <div className="fs-1 mb-2">✅</div>
                  <h4 className="fw-bold alert-heading">Message Sent!</h4>
                  <p className="small mb-0 text-muted">Thank you for contacting SCN Business Group. Our team will respond shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline-success btn-sm mt-3 px-4 rounded-pill">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div>
                    <label className="form-label small fw-semibold text-dark">Your Name *</label>
                    <input 
                      type="text" 
                      className="form-control py-2 shadow-none" 
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Email Address *</label>
                      <input 
                        type="email" 
                        className="form-control py-2 shadow-none" 
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Phone Number *</label>
                      <input 
                        type="tel" 
                        className="form-control py-2 shadow-none" 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-dark">Subject</label>
                    <input 
                      type="text" 
                      className="form-control py-2 shadow-none" 
                      placeholder="Service inquiry, partnership, training, etc."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-dark">Your Message *</label>
                    <textarea 
                      className="form-control shadow-none" 
                      rows="4" 
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary py-3 fw-bold rounded-3 mt-2 shadow-sm"
                    style={{ backgroundColor: 'var(--colorPrimary)' }}
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Office Locations */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4 h-100">
              {/* Head Office */}
              <div className="attractive-card p-4">
                <span className="badge bg-primary text-uppercase mb-2">Corporate Head Office</span>
                <h4 className="h5 fw-bold text-dark mb-2">Noida Sector 63</h4>
                <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
                  <i className="fa fa-map-marker text-primary me-2 fs-5"></i>
                  G 31, Sector 63 Rd, G Block, Sector 63, Noida, Chotpur, Uttar Pradesh 201301
                </p>
              </div>

              {/* Branch 1 */}
              <div className="attractive-card p-4">
                <span className="badge bg-secondary text-uppercase mb-2">Branch Office - Rohini</span>
                <h4 className="h5 fw-bold text-dark mb-2">Rohini Sector-3, Delhi</h4>
                <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
                  <i className="fa fa-map-marker text-secondary me-2 fs-5"></i>
                  Office No-111, 1st floor, Aggarwal City Square, Mangalam Place, Sector-3, Rohini, Delhi, 110085
                </p>
              </div>

              {/* Branch 2 */}
              <div className="attractive-card p-4">
                <span className="badge bg-secondary text-uppercase mb-2">Branch Office - Seemapuri</span>
                <h4 className="h5 fw-bold text-dark mb-2">Old Seemapuri, Delhi</h4>
                <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
                  <i className="fa fa-map-marker text-secondary me-2 fs-5"></i>
                  J-126, G/F Shop No. 1 Old Seemapuri NR Water Tank, Delhi-110095
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
