import React from 'react';
import { Link } from 'react-router-dom';

const coreValues = [
  {
    title: 'Honesty',
    desc: 'Operating with full transparency and truthful communication across all transactions.',
    icon: '🤝',
    image: '/images/core_honesty.jpg'
  },
  {
    title: 'Integrity',
    desc: 'Upholding strict ethical standards and maintaining client & candidate confidentiality.',
    icon: '🛡️',
    image: '/images/core_integrity.jpg'
  },
  {
    title: 'Accountability',
    desc: 'Taking full ownership of project outcomes and service commitments.',
    icon: '⚖️',
    image: '/images/core_accountability.jpg'
  },
  {
    title: 'Respect',
    desc: 'Fostering inclusive workplaces, valuing diversity, and appreciating every individual.',
    icon: '🌟',
    image: '/images/core_respect.jpg'
  },
  {
    title: 'Dedication',
    desc: 'Unwavering commitment to client goals and candidate career progression.',
    icon: '🎯',
    image: '/images/core_dedication.jpg'
  },
  {
    title: 'Operational Excellence',
    desc: 'Relentless pursuit of quality, efficiency, and zero-defect execution.',
    icon: '🚀',
    image: '/images/core_excellence.jpg'
  },
  {
    title: 'Client Focus',
    desc: 'Designing customized solutions aligned precisely with enterprise strategy.',
    icon: '💼',
    image: '/images/core_client_focus.jpg'
  }
];

const faqs = [
  {
    q: 'When was SCN Business Group established?',
    a: 'SCN Business Group was established in 2004 and has been delivering corporate staffing, HR training, IT, and payroll solutions for over 21 years.'
  },
  {
    q: 'Where is the corporate head office located?',
    a: 'Our corporate head office is located at H-25, Ground Floor Office No G- 9 Sector 63, Noida, Uttar Pradesh 201301. We also operate branch offices in Rohini and Seemapuri, Delhi.'
  },
  {
    q: 'What business verticals does SCN operate in?',
    a: 'SCN operates 9 specialized verticals: IT Services, IT Training, Personality Development, HR Training, US Staffing, Payroll Management, General Staffing, BPO Services, and Real Estate Advisory.'
  },
  {
    q: 'How can employers submit hiring requirements?',
    a: 'Employers can navigate to our "As Employer" page or contact our Client Helpdesk (Mr. Jatin Chandel +91 9650068863 / info@scnbusinessgroup.com) to submit talent requirements.'
  }
];

function About({ onEnquireClick }) {
  return (
    <div className="about-page animate-fade-in">
      {/* Top Banner */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">About Us</h2>
                <ul className="breadcrumb mb-0">
                  <li><Link to="/">Home</Link></li>
                  <li className="text-white opacity-75">About Us</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <button 
                type="button" 
                className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill shadow-sm"
                onClick={() => onEnquireClick && onEnquireClick('Corporate Consultation')}
              >
                <i className="fa fa-phone me-2"></i> Contact Corporate HQ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Story & Heritage Section */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge bg-primary px-3 py-2 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
              Established in 2004
            </span>
            <h2 className="display-6 fw-bold text-dark mb-4">Building High-Performing Teams & Empowering Growth</h2>
            <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '16px' }}>
              Established in 2004, <strong>SCN Business Group</strong> has positioned itself as a leading provider of staffing, payroll, IT, and training solutions in India. Headquartered in Noida Sector 63—the company leverages its strategic location to offer high-impact human resource services to businesses nationwide.
            </p>
            <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '16px' }}>
              With a dedicated focus on workforce solutions, SCN Business Group has evolved into a trusted partner for companies seeking reliable, scalable, and efficient staffing models. Our operations span IT staffing, general staffing, industrial placements, payroll processing, and specialized US staffing.
            </p>
            <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '16px' }}>
              What truly sets SCN Business Group apart is its holistic perspective on human capital. By bridging the gap between people and purpose, SCN not only supports business growth but also uplifts individual careers and communities.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="stat-box text-center">
                  <h3 className="display-5 fw-bold gradient-text mb-1">21+</h3>
                  <p className="text-secondary small mb-0 fw-semibold">Years of Industry Legacy</p>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-box text-center">
                  <h3 className="display-5 fw-bold gradient-text mb-1">500+</h3>
                  <p className="text-secondary small mb-0 fw-semibold">Corporate Partners</p>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-box text-center">
                  <h3 className="display-5 fw-bold gradient-text mb-1">10k+</h3>
                  <p className="text-secondary small mb-0 fw-semibold">Candidates Placed</p>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-box text-center">
                  <h3 className="display-5 fw-bold gradient-text mb-1">3</h3>
                  <p className="text-secondary small mb-0 fw-semibold">Corporate Offices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-light py-5 border-top border-bottom">
        <div className="container py-2">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="attractive-card p-4 p-md-5">
                <div className="card-icon-badge mb-3">
                  <i className="fa fa-bullseye"></i>
                </div>
                <h3 className="fw-bold text-dark mb-3">Our Mission</h3>
                <p className="text-secondary mb-0" style={{ lineHeight: '1.7' }}>
                  To bridge talent with opportunity by offering exceptional recruitment, training, payroll, and IT services that drive sustainable growth for organizations and meaningful career advancement for individuals.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="attractive-card p-4 p-md-5">
                <div className="card-icon-badge mb-3">
                  <i className="fa fa-eye"></i>
                </div>
                <h3 className="fw-bold text-dark mb-3">Our Vision</h3>
                <p className="text-secondary mb-0" style={{ lineHeight: '1.7' }}>
                  To be India's most trusted multi-level corporate services provider, recognized for operational excellence, innovation in workforce deployment, and unwavering client commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container py-5">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge bg-primary px-3 py-2 text-uppercase mb-2" style={{ letterSpacing: '1px' }}>Our Guiding Principles</span>
          <h2 className="display-6 fw-bold text-dark">SCN Core Values</h2>
        </div>

        <div className="row g-4">
          {coreValues.map((v, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="attractive-card h-100 shadow-sm border-0 d-flex flex-column">
                <div className="business-card-img-wrapper" style={{ height: '190px' }}>
                  <img src={v.image} alt={v.title} loading="lazy" />
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="fs-5">{v.icon}</span>
                    <h4 className="h5 fw-bold text-dark mb-0">{v.title}</h4>
                  </div>
                  <p className="text-secondary small mb-0 flex-grow-1" style={{ lineHeight: '1.65' }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-light py-5 border-top">
        <div className="container py-2">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="badge bg-primary px-3 py-2 text-uppercase mb-2">FAQs</span>
            <h2 className="display-6 fw-bold text-dark">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto" style={{ maxWidth: '800px' }}>
            <div className="accordion" id="scnFaqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button 
                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#collapse${index}`} 
                      aria-expanded={index === 0 ? 'true' : 'false'} 
                      aria-controls={`collapse${index}`}
                    >
                      {faq.q}
                    </button>
                  </h2>
                  <div 
                    id={`collapse${index}`} 
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                    aria-labelledby={`heading${index}`} 
                    data-bs-parent="#scnFaqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
