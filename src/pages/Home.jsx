import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1181316-1181316-1024x684.jpg',
    title: 'Grow Your Business With Us',
    subtitle: 'Leading provider of staffing, IT solutions, HR training, and corporate management services.'
  },
  {
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-8730276-8730276-1024x684.jpg',
    title: '21+ Years of Industry Leadership',
    subtitle: 'Partnering with organizations from emerging startups to Fortune 5000 enterprises.'
  },
  {
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1024248-1024248-1024x683.jpg',
    title: 'Global Staffing & IT Excellence',
    subtitle: 'Delivering specialized US IT recruiters, general staffing, BPO, and real estate services.'
  }
];

const businessOverview = [
  {
    id: 1,
    slug: 'it-services',
    title: 'SCN Global IT Services',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1181316-1181316-1024x684.jpg',
    desc: 'Custom web apps, mobile solutions, cloud management, UI/UX design, and SEO services.'
  },
  {
    id: 2,
    slug: 'it-training',
    title: 'SCN Global IT Training Institute',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/annie-spratt-QckxruozjRg-unsplash-1-1024x683.jpg',
    desc: 'Job-oriented technical training in full-stack web development, SEO, and digital marketing.'
  },
  {
    id: 3,
    slug: 'personality-development',
    title: 'SCN Global Personality Training',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-15543214-15543214-1024x683.jpg',
    desc: 'Soft skills, corporate etiquette, public speaking, and confidence building for professionals.'
  },
  {
    id: 4,
    slug: 'hr-training',
    title: 'SCN Global HR Training Institute',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-8730276-8730276-1024x684.jpg',
    desc: 'End-to-end practical HR generalist training, payroll, and recruitment certification.'
  },
  {
    id: 5,
    slug: 'us-staffing',
    title: 'SCN Global U. S. Staffing',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1024248-1024248-1024x683.jpg',
    desc: 'Offshore recruitment solutions, US IT bench sales recruiters, W2/C2C placements.'
  },
  {
    id: 6,
    slug: 'payroll-management',
    title: 'SCN Global Payroll Management',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-6694543-6694543-1024x683.jpg',
    desc: 'Automated salary administration, tax compliance, PF/ESI filing, and statutory audits.'
  },
  {
    id: 7,
    slug: 'general-staffing',
    title: 'SCN Global General Staffing',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-5990042-5990042-1024x683.jpg',
    desc: 'Temporary, contractual, and permanent workforce deployment for diverse industries.'
  },
  {
    id: 8,
    slug: 'bpo-services',
    title: 'SCN Global BPO Services',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-7709224-7709224-1024x683.jpg',
    desc: '24/7 Voice and non-voice customer support, inbound/outbound sales, and live help desk.'
  },
  {
    id: 9,
    slug: 'real-estate',
    title: 'SCN Global Real Estate',
    image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-101808-101808-1024x683.jpg',
    desc: 'Corporate office space leasing, commercial property advisory, and asset management.'
  }
];

const testimonials = [
  {
    quote: "SCN Business Group helped streamline our HR and staffing needs with exceptional professionalism. Their team is responsive, reliable, and results-driven.",
    author: "Rohit Gupta",
    role: "VP Operations, Tech Enterprise"
  },
  {
    quote: "Their IT staffing and offshore team setup exceeded our expectations. The candidates were well-trained and ready to perform from Day 1.",
    author: "Priya Sharma",
    role: "HR Director, Global Solutions"
  },
  {
    quote: "SCN Global Payroll Management transformed our compliance and monthly salary process. Error-free and timely every single month.",
    author: "Amit Verma",
    role: "Founder & CEO, Retail Chain"
  }
];

const partnerLogos = [
  { name: 'IDT', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/IDT.png' },
  { name: 'Noble', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Noble-.png' },
  { name: 'CubeWeb', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/CubeWeb.png' },
  { name: 'Hurculas Structure', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Hurculas-structure.png' },
  { name: 'Tracking Africa System', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Tracking-Africa-System.png' },
  { name: 'DevWeb Solution', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/DevWev-solution.png' },
  { name: 'Khetan', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Khetan.png' },
  { name: 'SDK Travels', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/SDK-Travals.png' },
  { name: 'Waves', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Wveves.png' },
  { name: 'CW', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/CW.png' },
  { name: 'Tangent', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/tangent.png' },
  { name: 'Imperial Medicare', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/imparial-medicare.png' },
  { name: 'Sky Group', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Sky-Group.png' },
  { name: 'Markup Design', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/markup-design.png' },
  { name: 'Connect Infosoft', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Connect-Infosoft.png' },
  { name: 'Nazeer Food', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/nazeer-Food.png' },
  { name: 'Money Tick', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/monney-tick.png' },
  { name: 'InXpress', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/inxpress.png' },
  { name: 'Future Group', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Future-Group.png' },
  { name: 'JSR Global Network', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/JSR-dlobal-network.png' },
  { name: 'Filo', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Filo.png' },
  { name: 'MS Infotech', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/MS-Infotech.png' },
  { name: 'Dangal Games', src: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/Dangal-games.png' }
];

function Home({ onEnquireClick }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slider interval
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlideIndex];

  return (
    <div className="home-page animate-fade-in">
      {/* 3D Visual Hero Slider Section */}
      <div 
        className="hero-3d-section position-relative py-5 min-vh-75 d-flex align-items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ minHeight: '560px' }}
      >
        {/* Dynamic 3D Background Image */}
        <div 
          className="hero-3d-bg"
          style={{
            backgroundImage: `url(${activeSlide.image})`
          }}
        />

        <div className="container position-relative z-3 py-4 hero-3d-content">
          <div className="row align-items-center g-5">
            {/* Left Content Column */}
            <div className="col-lg-7 text-start">
              <span className="badge bg-primary text-white px-3 py-2 text-uppercase mb-3 rounded-pill shadow-lg d-inline-flex align-items-center gap-2" style={{ letterSpacing: '1.2px', fontSize: '12px' }}>
                <span className="spinner-grow spinner-grow-sm text-light" role="status"></span>
                SCN BUSINESS GROUP • EST. 2004
              </span>
              <h1 className="display-4 fw-extrabold text-white mb-3 lh-sm" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)', letterSpacing: '-0.5px' }}>
                {activeSlide.title}
              </h1>
              <p className="lead text-light opacity-90 mb-4 max-w-xl" style={{ fontSize: '18px', lineHeight: '1.7', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                {activeSlide.subtitle}
              </p>
              <div className="d-flex align-items-center gap-3 flex-wrap mb-4">
                <button 
                  type="button" 
                  className="btn btn-primary px-4 py-3 fw-bold rounded-3 shadow-lg hover-lift"
                  style={{ backgroundColor: 'var(--colorAccent)', border: 'none' }}
                  onClick={() => onEnquireClick && onEnquireClick('Get Instant Consultation')}
                >
                  <i className="fa fa-paper-plane me-2"></i> Get Started Now
                </button>
                <Link to="/our-business" className="btn btn-outline-light px-4 py-3 fw-bold rounded-3 backdrop-blur">
                  Explore Business Verticals <i className="fa fa-arrow-right ms-2"></i>
                </Link>
              </div>

              {/* Slider Slide Indicator Pills */}
              <div className="d-flex align-items-center gap-2 mt-3">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`hero-slide-indicator ${idx === currentSlideIndex ? 'active' : ''}`}
                    onClick={() => setCurrentSlideIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right 3D Visual Floating Card */}
            <div className="col-lg-5 text-center d-none d-lg-block hero-3d-card-wrapper">
              <div className="hero-3d-glass-card text-start text-white">
                <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-light border-opacity-25 pb-3">
                  <span className="badge bg-primary px-3 py-1 rounded-pill small fw-bold">Live Highlight</span>
                  <span className="text-white-50 small"><i className="fa fa-shield me-1 text-success"></i> ISO Verified</span>
                </div>
                <h3 className="h4 fw-bold text-white mb-2">21+ Years Industry Legacy</h3>
                <p className="text-light opacity-75 small mb-4">
                  Headquartered in Noida Sector 63, offering high-impact IT staffing, payroll, general staffing, and real estate services.
                </p>
                <div className="row g-2 text-center">
                  <div className="col-4">
                    <div className="p-2 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20">
                      <h4 className="h6 fw-bold mb-0 text-white">500+</h4>
                      <span className="small text-white-50" style={{ fontSize: '11px' }}>Clients</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20">
                      <h4 className="h6 fw-bold mb-0 text-white">10k+</h4>
                      <span className="small text-white-50" style={{ fontSize: '11px' }}>Placed</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20">
                      <h4 className="h6 fw-bold mb-0 text-white">9</h4>
                      <span className="small text-white-50" style={{ fontSize: '11px' }}>Verticals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Next/Prev Arrow Buttons */}
        <button 
          className="btn btn-link text-white position-absolute start-0 top-50 translate-middle-y ms-3 fs-3 border-0 shadow-none z-3 opacity-75 hover-opacity-100"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button 
          className="btn btn-link text-white position-absolute end-0 top-50 translate-middle-y me-3 fs-3 border-0 shadow-none z-3 opacity-75 hover-opacity-100"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>

      {/* Quick Statistics Banner */}
      <div className="py-4 text-white shadow-sm" style={{ backgroundColor: 'var(--colorPrimary)' }}>
        <div className="container">
          <div className="row text-center g-3">
            <div className="col-md-3 col-6">
              <h3 className="fw-bold mb-0 text-white">21+</h3>
              <p className="small mb-0 text-white-50">Years Legacy (Est. 2004)</p>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="fw-bold mb-0 text-white">500+</h3>
              <p className="small mb-0 text-white-50">Enterprise Clients</p>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="fw-bold mb-0 text-white">10,000+</h3>
              <p className="small mb-0 text-white-50">Successful Placements</p>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="fw-bold mb-0 text-white">9</h3>
              <p className="small mb-0 text-white-50">Specialized Verticals</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Company Teaser */}
      <div className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="pe-lg-3">
              <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>About SCN Business Group</span>
              <h2 className="display-6 fw-bold text-dark my-2">Your Trusted Partner in Workforce & Technology Excellence</h2>
              <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                SCN Business Group is a premier multi-level business company providing top-tier staffing solutions, IT services, HR training, personality development programs, payroll management, BPO operations, and real estate services.
              </p>
              <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                Headquartered in Noida Sector 63, our deep industry expertise empowers companies to build high-performing teams, optimize operational efficiency, and drive sustainable growth across India and international markets.
              </p>
              <div className="d-flex gap-3 mt-4">
                <Link to="/about-us" className="btn btn-primary px-4 py-2 fw-semibold rounded-3" style={{ backgroundColor: 'var(--colorPrimary)' }}>
                  Read Our Story
                </Link>
                <Link to="/as-employer" className="btn btn-outline-dark px-4 py-2 fw-semibold rounded-3">
                  For Employers
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rounded-4 overflow-hidden shadow-lg border">
              <img 
                src="https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-8730276-8730276-1024x684.jpg" 
                alt="SCN Corporate Team" 
                className="w-100 h-100 object-fit-cover"
                style={{ maxHeight: '380px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Business Verticals Grid ("WHAT WE DO") */}
      <div className="py-5 bg-light border-top border-bottom">
        <div className="container py-2">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="badge bg-primary px-3 py-2 text-uppercase mb-2" style={{ letterSpacing: '1px' }}>WHAT WE DO</span>
            <h2 className="display-6 fw-bold text-dark">Our Core Business Verticals</h2>
            <p className="text-secondary">Explore our specialized service divisions designed for enterprise scale.</p>
          </div>

          <div className="row g-4">
            {businessOverview.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="business-card attractive-card shadow-sm h-100 bg-white">
                  <div className="business-card-img-wrapper">
                    <Link to={`/our-business/${item.slug}`}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </Link>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="h5 fw-bold mb-2">
                      <Link to={`/our-business/${item.slug}`} className="text-dark text-decoration-none hover-primary">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                    <div className="d-flex gap-2 mt-auto">
                      <Link 
                        to={`/our-business/${item.slug}`} 
                        className="btn btn-primary btn-sm flex-grow-1 fw-semibold"
                        style={{ backgroundColor: 'var(--colorAccent)' }}
                      >
                        Explore Details <i className="fa fa-arrow-right ms-1"></i>
                      </Link>
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary btn-sm fw-semibold"
                        onClick={() => onEnquireClick && onEnquireClick(`Enquiry for ${item.title}`)}
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="py-5 bg-white">
        <div className="container py-3">
          <div className="text-center mb-5">
            <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>Client Satisfaction</span>
            <h2 className="display-6 fw-bold text-dark">What Our Customers Say</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {testimonials.map((t, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="attractive-card p-4 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <div className="text-warning mb-2">★★★★★</div>
                    <p className="text-dark fst-italic mb-0" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="pt-3 border-top">
                    <h6 className="fw-bold mb-0 text-dark">— {t.author}</h6>
                    <span className="small text-muted">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos Grid Section */}
      <div className="py-5 bg-light border-top">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark mb-2">Our Esteemed Clients & Partners</h3>
            <p className="text-secondary small">Trusted by industry-leading organizations across multiple domains.</p>
          </div>

          <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
            {partnerLogos.map((partner, index) => (
              <div className="col" key={index}>
                <div className="client-logo-item" title={partner.name}>
                  <img src={partner.src} alt={partner.name} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Contact Teaser */}
      <div className="text-white py-5" style={{ backgroundColor: 'var(--colorPrimary)' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-white mb-3">Ready to Grow Your Business with SCN?</h2>
          <p className="lead text-white-50 max-w-xl mx-auto mb-4" style={{ maxWidth: '600px' }}>
            Get in touch with our Client Helpdesk or visit our Corporate Head Office in Noida Sector 63.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button 
              type="button" 
              className="btn btn-light text-primary fw-bold px-4 py-3 rounded-3 shadow"
              onClick={() => onEnquireClick && onEnquireClick('Get Instant Consultation')}
            >
              Request Call Back
            </button>
            <Link to="/contact-us" className="btn btn-outline-light px-4 py-3 fw-bold rounded-3">
              Contact Helpdesk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
