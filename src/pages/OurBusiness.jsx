import React from 'react';
import { Link } from 'react-router-dom';

const businessVerticals = [
  {
    id: 1,
    slug: 'it-services',
    title: 'SCN Global IT Services',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1181316-1181316-1024x684.jpg',
    alt: 'SCN Global IT Services',
    tagline: 'End-to-End Enterprise Technology Solutions & Software Services',
    description: 'We deliver cutting-edge IT services including Web Development, Mobile Applications, UI/UX Design, SEO, Digital Marketing, and Cloud Infrastructure management to empower business digital transformation.'
  },
  {
    id: 2,
    slug: 'it-training',
    title: 'SCN Global IT Training Institute',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/annie-spratt-QckxruozjRg-unsplash-1-1024x683.jpg',
    alt: 'SCN Global IT Training Institute',
    tagline: 'Skill Development & Technical Training Programs',
    description: 'Empowering students and working professionals with job-ready tech skills in Full Stack Web Development, UI/UX Design, SEO, Graphic Design, and modern software engineering.'
  },
  {
    id: 3,
    slug: 'personality-development',
    title: 'SCN Global Personality Development Training',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-15543214-15543214-1024x683.jpg',
    alt: 'SCN Global Personality Development Training',
    tagline: 'Professional Growth & Soft Skills Mentorship',
    description: 'Comprehensive soft skills training covering effective communication, corporate etiquette, leadership development, interview preparation, and confidence building for workplace success.'
  },
  {
    id: 4,
    slug: 'hr-training',
    title: 'SCN Global HR Training Institute',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-8730276-8730276-1024x684.jpg',
    alt: 'SCN Global HR Training Institute',
    tagline: 'Practical Human Resource Management Certification',
    description: 'In-depth HR operational training on talent acquisition, payroll processing, statutory compliance, employee engagement, labor laws, and HR generalist functions.'
  },
  {
    id: 5,
    slug: 'us-staffing',
    title: 'SCN Global U. S. Staffing',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1024248-1024248-1024x683.jpg',
    alt: 'SCN Global U. S. Staffing',
    tagline: 'Offshore & Cross-Border Talent Recruitment for US Clients',
    description: 'Specialized US staffing solutions providing US IT recruiters, Bench Sales recruiters, W2/C2C placement services, and technical talent acquisition for North American enterprises.'
  },
  {
    id: 6,
    slug: 'payroll-management',
    title: 'SCN Global Payroll Management',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-6694543-6694543-1024x683.jpg',
    alt: 'SCN Global Payroll Management',
    tagline: 'Automated & Compliant Workforce Payroll Processing',
    description: 'Streamlined salary administration, PF/ESI tax compliance, attendance integration, reimbursement management, and audit-proof payroll outsourcing.'
  },
  {
    id: 7,
    slug: 'general-staffing',
    title: 'SCN Global General Staffing',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-5990042-5990042-1024x683.jpg',
    alt: 'SCN Global General Staffing',
    tagline: 'Temporary, Flexible & Permanent Workforce Deployment',
    description: 'Comprehensive general staffing across administrative, industrial, retail, and corporate operations tailored to meet seasonal and long-term organizational demands.'
  },
  {
    id: 8,
    slug: 'bpo-services',
    title: 'SCN Global BPO Services',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-7709224-7709224-1024x683.jpg',
    alt: 'SCN Global BPO Services',
    tagline: 'Inbound, Outbound & Non-Voice Customer Care Operations',
    description: '24/7 customer support center operations, tele-calling, back-office data processing, live chat support, and client relationship handling.'
  },
  {
    id: 9,
    slug: 'real-estate',
    title: 'SCN Global Real Estate',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-101808-101808-1024x683.jpg',
    alt: 'SCN Global Real Estate',
    tagline: 'Commercial & Corporate Property Advisory Services',
    description: 'Strategic commercial space leasing, corporate office setup advisory, real estate investments, and asset management tailored for enterprise growth.'
  }
];

function OurBusiness({ onEnquireClick }) {
  return (
    <div className="our-business-page animate-fade-in">
      {/* Top Banner / Breadcrumb Area */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">Our Businesses</h2>
                <ul className="breadcrumb mb-0">
                  <li><Link to="/">Home</Link></li>
                  <li className="text-white opacity-75">Our Business</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <button 
                type="button" 
                className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill shadow-sm"
                onClick={() => onEnquireClick && onEnquireClick('Business Consultation')}
              >
                <i className="fa fa-phone me-2"></i> Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Business Verticals Grid */}
      <div className="main_warpper py-5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-5">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
              <span className="text-muted fs-4">—</span>
              <h2 className="text-uppercase fw-bold text-dark mb-0" style={{ letterSpacing: '3px', fontSize: '24px' }}>
                Our Business
              </h2>
              <span className="text-muted fs-4">—</span>
            </div>
            <p className="lead text-secondary mt-2" style={{ fontSize: '16px' }}>
              Discover how our specialized business units deliver end-to-end workforce, IT, training, payroll, and infrastructure solutions.
            </p>
          </div>

          <div className="row g-4">
            {businessVerticals.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="business-card attractive-card h-100 shadow-sm border-0">
                  <div className="business-card-img-wrapper">
                    <Link to={`/our-business/${item.slug}`}>
                      <img 
                        src={item.image} 
                        alt={item.alt} 
                        loading="lazy" 
                      />
                    </Link>
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-dark text-white px-2 py-1 small rounded-pill opacity-75">
                        Vertical #{item.id}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="h5 fw-bold mb-2">
                      <Link to={`/our-business/${item.slug}`} className="text-dark text-decoration-underline hover-primary">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-primary fw-semibold small mb-3">{item.tagline}</p>
                    <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                      {item.description}
                    </p>
                    <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center flex-wrap gap-2">
                      <Link 
                        to={`/our-business/${item.slug}`} 
                        className="btn btn-primary btn-sm rounded-2 fw-semibold px-3"
                        style={{ backgroundColor: 'var(--colorAccent)' }}
                      >
                        Explore Details <i className="fa fa-arrow-right ms-1"></i>
                      </Link>
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary btn-sm rounded-2 fw-semibold"
                        onClick={() => onEnquireClick && onEnquireClick(`Enquiry for ${item.title}`)}
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-light py-5 border-top">
        <div className="container text-center py-3">
          <h3 className="fw-bold text-dark mb-3">Looking for Customized Corporate Solutions?</h3>
          <p className="text-secondary max-w-2xl mx-auto mb-4" style={{ maxWidth: '650px' }}>
            Partner with SCN Business Group today to elevate your business operations with our end-to-end staffing, IT, and HR management services.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button 
              type="button" 
              className="btn btn-primary px-4 py-2 rounded-3 fw-bold"
              style={{ backgroundColor: 'var(--colorAccent)' }}
              onClick={() => onEnquireClick && onEnquireClick('Get Instant Consultation')}
            >
              Contact Sales Team
            </button>
            <Link to="/contact-us" className="btn btn-outline-dark px-4 py-2 rounded-3 fw-bold">
              Visit Branch Office
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBusiness;
