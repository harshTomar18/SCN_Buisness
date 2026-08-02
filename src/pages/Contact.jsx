import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact({ onEnquireClick }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const quickPrices = [
    { type: "2.5 BHK", size: "1,200 to 1,400 sq ft", price: "Rs 1.45 Crore onwards" },
    { type: "3 BHK", size: "1,600 to 1,950 sq ft", price: "Rs 2.12 Crore onwards" },
    { type: "4 BHK", size: "2,200 to 2,800 sq ft", price: "Rs 3.15 Crore onwards" }
  ];

  const enquirySteps = [
    { title: "Callback Support", desc: "A sales expert will call you back within a few hours to assist." },
    { title: "Media Sharing", desc: "You will receive the brochure and price list via WhatsApp or email." },
    { title: "Inventory Selection", desc: "We will share the unit availability sheet so you can choose a unit." },
    { title: "Site Tour", desc: "We can schedule a free guided physical tour or virtual tour of the site." },
    { title: "Documentation", desc: "Once a unit is finalized, submit KYC documents and deposit." },
    { title: "Allotment Letter", desc: "Your official allotment letter is issued within 24 hours of booking." }
  ];

  const faqs = [
    {
      q: "Where is Brigade Granada located?",
      a: "The project is situated on Whitefield–Hoskote Road in East Bengaluru, Karnataka, Pin Code 560067."
    },
    {
      q: "What types of apartments can I buy?",
      a: "Buyers can select from premium 2.5 BHK, 3 BHK, and 4 BHK Configurations."
    },
    {
      q: "What are the starting prices?",
      a: "Early prices start at Rs 1.45 Crore for 2.5 BHK, Rs 2.12 Crore for 3 BHK, and Rs 3.15 Crore for 4 BHK."
    },
    {
      q: "When is the official launch date?",
      a: "The official launch is scheduled for 5 December 2026."
    },
    {
      q: "What is the RERA status of the project?",
      a: "RERA registration is currently in progress and is expected to be finalized in 2026."
    },
    {
      q: "How do I get the project brochure?",
      a: "Fill out the contact enquiry form, and our system will instantly send a PDF brochure to your email or WhatsApp."
    },
    {
      q: "Can I see the master plan?",
      a: "Yes, submit the contact form, and we will email you the detailed layout master plan."
    },
    {
      q: "How do I book an apartment now?",
      a: "You can book by submitting an Expression of Interest (EOI) deposit, along with KYC documents."
    },
    {
      q: "What documents are needed for booking?",
      a: "You need basic KYC documents: photo ID proof, PAN card, and passport-size photos."
    },
    {
      q: "Do some units cost more than others?",
      a: "Yes, units facing the pool or parks (premium-facing) and units on higher levels (floor rise charges) carry an extra fee."
    },
    {
      q: "Can I see the project if I am not in Bangalore?",
      a: "Yes, we can conduct live video calls, send updates on WhatsApp, or provide a 360-degree virtual tour link."
    },
    {
      q: "How long does the booking process take?",
      a: "The entire allocation and documentation process takes less than 48 hours."
    }
  ];

  return (
    <div className="contact-page animate-fade-in">
      {/* Title Banner */}
      <section className="bradcam_area">
        <div className="container">
          <div className="bradcam_text">
            <h2>Contact</h2>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main_warpper py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Contact Header Card */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="contact-header">
                <h1 className="text-center fw-bold mb-4" style={{ fontSize: '28px' }}>
                  Brigade Granada Contact
                </h1>

                {/* Action Buttons */}
                <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
                  <button 
                    onClick={() => onEnquireClick('Download Brochure')} 
                    className="btn_main_brochure px-4 py-2"
                    style={{ minWidth: '160px' }}
                  >
                    <i className="fa fa-download me-1"></i> Brochure
                  </button>
                  <button 
                    onClick={() => onEnquireClick('Request Callback')} 
                    className="btn_main_brochure px-4 py-2"
                    style={{ minWidth: '160px' }}
                  >
                    <i className="fa fa-phone me-1"></i> Contact
                  </button>
                </div>

                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  Brigade Granada is a pre-launch luxury apartment project on Whitefield–Hoskote Road, East Bangalore. Buyers can connect with our sales team for pricing, floor plan details, unit availability, and booking support. Complete the enquiry form or utilize the contact details below. Our team replies within a few hours.
                </p>
              </div>

              {/* Contact Info and Address */}
              <div className="row g-4 mb-5 text-start">
                <div className="col-md-6">
                  <div className="p-4 border rounded bg-white shadow-sm h-100">
                    <h3 className="h5 fw-bold mb-3" style={{ color: '#28582d' }}>Get In Touch With Us</h3>
                    <p className="small text-muted mb-3">
                      Make a free site visit to Brigade Granada, with special assistance from our sales personnel, to obtain comprehensive in-depth information about the property.
                    </p>
                    <div className="lh-lg small text-muted">
                      <div>📍 <strong>Address:</strong> Whitefield–Hoskote Road, East Bengaluru, Karnataka, Pin Code: 560067</div>
                      <div>📞 <strong>Brigade Granada Contact Number:</strong> Support Helpline Active</div>
                      <div>⏰ <strong>Office Hours:</strong> Daily from 9:30 AM to 7:00 PM</div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 border rounded bg-white shadow-sm h-100">
                    <h3 className="h5 fw-bold mb-3" style={{ color: '#28582d' }}>Why Contact Us Directly?</h3>
                    <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>
                      You get the most accurate, up-to-date facts when you speak with our official team. Other websites often show old prices or incorrect availability. By coming straight to us, you get the correct details on open units, special early offers, and the exact price for the home you want. We are available to help every day. RERA registration is currently in progress.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Prices */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="quick-prices-section">
                <h2 className="fw-bold mb-3 h5 text-start" style={{ color: '#28582d' }}>Quick Price Reference</h2>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped text-center mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Unit Type</th>
                        <th>Size</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quickPrices.map((item, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold">{item.type}</td>
                          <td>{item.size}</td>
                          <td className="fw-bold text-success">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="small text-muted text-start mt-3 mb-0">
                  These are early prices. Costs might go up after the official launch on 5 December 2026. Get in touch today to grab your home at the current pre-launch price.
                </p>
              </div>

              {/* Booking and Allocations */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="booking-policy">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Booking & Unit Allocation Policy</h2>
                <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.7' }} className="mb-4">
                  Early booking is open now via Expression of Interest (EOI). To confirm your booking:
                </p>
                
                <div className="row g-3 small text-muted mb-4">
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded border h-100">
                      <div className="fw-bold text-dark mb-1">1. Booking Form</div>
                      <div>Fill out the basic booking application form with your sales advisor.</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded border h-100">
                      <div className="fw-bold text-dark mb-1">2. KYC Upload</div>
                      <div>Provide copies of your ID proof, PAN card, and passport photos.</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded border h-100">
                      <div className="fw-bold text-dark mb-1">3. Booking Deposit</div>
                      <div>Pay the initial booking EOI deposit. Your allocation is confirmed.</div>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.7' }} className="mb-0">
                  Once your payment is validated, the unit is officially allocated. You will receive your official allotment letter via WhatsApp and email within 24 hours. The letter records your tower number, floor, and flat number.
                </p>
              </div>

              {/* Enquiry Callback Steps */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="enquiry-flow">
                <h2 className="fw-bold mb-3 h5 text-center" style={{ color: '#28582d' }}>What Happens After You Submit an Enquiry?</h2>
                <div className="row g-3">
                  {enquirySteps.map((step, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="p-3 border rounded h-100">
                        <h4 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">Step {idx + 1}: {step.title}</h4>
                        <p className="small text-muted mb-0">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Inquiry Form */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="contact-form-section">
                <h2 className="fw-bold mb-3 h5 text-dark" style={{ color: '#28582d' }}>Submit Inquiry / Request Call</h2>
                <div className="p-3 bg-light rounded border mb-0">
                  {submitted ? (
                    <div className="alert alert-success border-0 py-4 text-center rounded-3 mb-0" role="alert">
                      <h4 className="alert-heading fw-bold mb-2">Thank you!</h4>
                      <p className="mb-0">Your contact enquiry has been received. Our sales manager will contact you shortly.</p>
                      <button onClick={() => setSubmitted(false)} className="btn btn-outline-success btn-sm mt-3 px-4 rounded-pill">
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label small fw-semibold text-secondary">Your Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          value={formData.name} 
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                          placeholder="Enter your name" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label small fw-semibold text-secondary">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          value={formData.email} 
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                          placeholder="Enter your email" 
                          required 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="phone" className="form-label small fw-semibold text-secondary">Phone Number</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          id="phone" 
                          value={formData.phone} 
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                          placeholder="+91 XXXXX XXXXX" 
                          required 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label small fw-semibold text-secondary">Message / Configuration Preference</label>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          rows="4" 
                          value={formData.message} 
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                          placeholder="Tell us what configuration or booking advice you need..." 
                          required 
                        ></textarea>
                      </div>
                      <div className="col-12 mt-3">
                        <button type="submit" className="btn btn_main w-100 py-2 border-0 bg-primary text-white text-uppercase tracking-wider fw-bold">
                          Submit Contact Inquiry
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* FAQs Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="contact-faqs">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '22px' }}>
                  Frequently Asked Questions (FAQs)
                </h2>

                <div className="accordion" id="contactFaqsAccordion">
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    const collapseId = `faqContCollapse${idx}`;
                    const headingId = `faqContHeading${idx}`;
                    return (
                      <div className="accordion-item" key={idx}>
                        <h2 className="accordion-header" id={headingId}>
                          <button 
                            className={`accordion-button ${isOpen ? '' : 'collapsed'}`} 
                            type="button" 
                            onClick={() => setActiveFaq(isOpen ? null : idx)}
                            aria-expanded={isOpen ? 'true' : 'false'}
                            aria-controls={collapseId}
                          >
                            {idx + 1}. {faq.q}
                          </button>
                        </h2>
                        {isOpen && (
                          <div id={collapseId} className="accordion-collapse show" aria-labelledby={headingId}>
                            <div className="accordion-body small text-muted" style={{ lineHeight: '1.6' }}>
                              {faq.a}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Home Link */}
              <div className="text-center my-4">
                <Link to="/" className="fw-bold text-decoration-none" style={{ color: '#c59d5f' }}>
                  Explore more: Brigade Granada Home →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

