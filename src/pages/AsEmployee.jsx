import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AsEmployee({ onEnquireClick }) {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', qualification: '', experience: '', resume: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="as-employee-page animate-fade-in">
      {/* Top Banner / Breadcrumb */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">As Employee / Job Seeker</h2>
                <ul className="breadcrumb mb-0">
                  <li><Link to="/">Home</Link></li>
                  <li className="text-white opacity-75">As Employee</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <button 
                type="button" 
                className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill shadow-sm"
                onClick={() => onEnquireClick && onEnquireClick('Job Seeker Registration')}
              >
                <i className="fa fa-file-text-o me-2"></i> Submit Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Employee Helpdesk */}
      <div className="container py-5">
        <div className="row g-4 align-items-stretch">
          {/* Left Column: Career & Training Guidance */}
          <div className="col-lg-6">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100">
              <span className="badge bg-success px-3 py-2 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
                Career Opportunities
              </span>
              <h2 className="fw-bold text-dark mb-3">Accelerate Your Career with SCN</h2>
              <p className="text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                Whether you are a fresh graduate seeking your first job or an experienced professional aiming for career advancement, SCN Business Group connects you with leading employers in IT, BPO, HR, Banking, and Corporate sectors across India & Global markets.
              </p>

              {/* Employee Helpdesk Box */}
              <div className="bg-light p-4 rounded-3 border-start border-4 border-success mb-4">
                <h5 className="fw-bold text-dark mb-3"><i className="fa fa-id-badge text-success me-2"></i> Employee & Jobseeker Helpdesk</h5>
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-success text-white p-2 rounded-circle">
                    <i className="fa fa-user-circle fs-5"></i>
                  </div>
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Mr. Aryan Rastogi</p>
                    <p className="mb-0 text-muted small">Talent Acquisition Lead</p>
                    <p className="mb-0 text-dark small"><i className="fa fa-envelope text-success me-1"></i> <a href="mailto:hr@scnbusinessgroup.com" className="text-decoration-none text-success font-weight-bold">hr@scnbusinessgroup.com</a></p>
                    <p className="mb-0 text-dark small"><i className="fa fa-phone text-success me-1"></i> <a href="tel:+917982941427" className="text-decoration-none text-success font-weight-bold">+91-7982941427</a></p>
                  </div>
                </div>
              </div>

              <h5 className="fw-bold text-dark mb-3">Available Training & Placement Tracks:</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="attractive-card p-3">
                    <h6 className="fw-bold text-dark mb-1">💻 IT & Web Development</h6>
                    <p className="text-muted small mb-0">React, Node, Python, UI/UX, SEO, Full Stack</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="attractive-card p-3">
                    <h6 className="fw-bold text-dark mb-1">👔 HR Management</h6>
                    <p className="text-muted small mb-0">Talent Sourcing, Payroll, Statutory Compliance</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="attractive-card p-3">
                    <h6 className="fw-bold text-dark mb-1">🌐 US Staffing & Recruiting</h6>
                    <p className="text-muted small mb-0">US IT Recruiter training & job placement</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="attractive-card p-3">
                    <h6 className="fw-bold text-dark mb-1">🎧 BPO & Voice Care</h6>
                    <p className="text-muted small mb-0">Inbound / Outbound Customer Support jobs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Candidate Application Form */}
          <div className="col-lg-6">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100">
              <h3 className="fw-bold text-dark mb-2">Register & Upload Resume</h3>
              <p className="text-muted small mb-4">Submit your details to get indexed in our candidate database for upcoming hiring drives.</p>

              {submitted ? (
                <div className="alert alert-success p-4 rounded-3 text-center my-4">
                  <div className="fs-1 mb-2">🎓</div>
                  <h4 className="fw-bold alert-heading">Application Submitted!</h4>
                  <p className="small mb-0 text-muted">Thank you. Mr. Aryan Rastogi and the SCN HR Team will review your profile and reach out.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline-success btn-sm mt-3 px-4 rounded-pill">
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div>
                    <label className="form-label small fw-semibold text-dark">Full Name *</label>
                    <input 
                      type="text" 
                      className="form-control py-2 shadow-none" 
                      placeholder="Enter your full name" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                      <label className="form-label small fw-semibold text-dark">Mobile Number *</label>
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

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Highest Qualification</label>
                      <select 
                        className="form-select py-2 shadow-none text-muted"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      >
                        <option value="">Select Qualification</option>
                        <option value="Graduate (B.Tech/BCA/BBA/B.Com)">Graduate (B.Tech / BCA / BBA / B.Com)</option>
                        <option value="Post Graduate (M.Tech/MCA/MBA)">Post Graduate (M.Tech / MCA / MBA)</option>
                        <option value="Diploma">Diploma / Certification</option>
                        <option value="12th Pass">10+2 / Intermediate</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">Experience Level</label>
                      <select 
                        className="form-select py-2 shadow-none text-muted"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      >
                        <option value="">Select Experience</option>
                        <option value="Fresher">Fresher (0 Years)</option>
                        <option value="1-3 Years">1 - 3 Years</option>
                        <option value="3-5 Years">3 - 5 Years</option>
                        <option value="5+ Years">5+ Years Senior</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-dark">Paste Resume Text / Key Skills Summary *</label>
                    <textarea 
                      className="form-control shadow-none" 
                      rows="3" 
                      placeholder="Summary of skills, past experience, tech stack, or job preferences..."
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-success py-3 fw-bold rounded-3 mt-2 shadow-sm"
                  >
                    Submit Job Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsEmployee;
