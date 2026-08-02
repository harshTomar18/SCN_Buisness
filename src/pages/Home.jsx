import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home({ onEnquireClick }) {
  const [activeTab, setActiveTab] = useState('2.5bhk');
  const [currentSlide, setCurrentSlide] = useState(0);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(7);
  const [loanTenure, setLoanTenure] = useState(10);
  const [emi, setEmi] = useState(580.54);

  const calculateEMI = (e) => {
    if (e) e.preventDefault();
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(loanTenure) * 12;

    if (P && r && n) {
      const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue.toFixed(2));
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const slides = [
    { src: 'https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada.webp', title: 'Brigade Granada Overview' },
    { src: 'https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada-entrance-view.webp', title: 'Grand Entrance Gateway' },
    { src: 'https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada-night-view.webp', title: 'Beautiful Night View' },
    { src: 'https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada-swimmimg-pool-view.webp', title: 'Luxury Swimming Pool' },
    { src: 'https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada-tower-view.webp', title: 'Iconic G+24 Floor Towers' },
  ];

  const highlights = [
    { icon: 'https://www.thebrigadegranada.in/images/icons/project-type.svg', label: 'Project Type', value: 'Apartment' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/price.svg', label: 'Starting Price', value: 'On Request' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/total-units.svg', label: 'Total Units', value: 'On Request' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/unit-sizes.svg', label: 'Unit Sizes', value: '1,200 sq. ft. to 2,800 sq. ft.' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/project-status.svg', label: 'Project Status', value: 'Pre Launch' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/land-area.svg', label: 'Land Area', value: '20 Acres' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/floors.svg', label: 'No of Floors', value: 'On Request' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/possession.svg', label: 'Possession Time', value: '2030 onwards' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/builder.svg', label: 'Builder', value: 'Brigade Group' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/unit-type.svg', label: 'Unit Type', value: '2.5, 3 & 4 BHK' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/towers.svg', label: 'No of Towers', value: 'On Request' },
    { icon: 'https://www.thebrigadegranada.in/images/icons/rera.svg', label: 'Rera No', value: 'On Request' },
  ];

  const scrollAmenities = [
    { name: 'Kids Play Area', icon: '🧸' },
    { name: 'Sports Facility', icon: '🏃' },
    { name: 'Swimming Pool', icon: '🏊' },
    { name: 'Maintenance Staff', icon: '🛠️' },
    { name: 'Waste Disposal', icon: '🗑️' },
    { name: 'Car Parking', icon: '🚗' },
    { name: 'Power Back-up', icon: '🔌' },
    { name: 'Water Storage', icon: '🚰' },
    { name: 'Lifts', icon: '🛗' },
    { name: 'Wi-fi connectivity', icon: '📶' },
  ];

  const faqs = [
    {
      question: "What is Brigade Granada?",
      answer: "Brigade Granada is a luxury residential gated community township on Whitefield–Hoskote Road, Sannatammanahalli, East Bangalore, offering premium 2.5, 3, and 4 BHK apartments with 35+ top-class amenities."
    },
    {
      question: "Where is Brigade Granada located?",
      answer: "The project is situated on Whitefield–Hoskote Road in East Bangalore, close to major IT and business hubs like ITPL, KR Puram, and Budigere Cross. The location offers seamless access to Whitefield, Old Madras Road, and Outer Ring Road."
    },
    {
      question: "Who is the developer of Brigade Granada?",
      answer: "Brigade Group, one of India’s most trusted real estate developers, is the builder of Brigade Granada. The company is known for quality, transparency, and on-time delivery across its residential and commercial projects."
    },
    {
      question: "What is the total area of the Brigade Granada project?",
      answer: "The project covers 20 acres of land, featuring 80% open space and 73% floor plan efficiency, ensuring more usable space and better light and ventilation."
    },
    {
      question: "What types of apartments are available in Brigade Granada?",
      answer: "Brigade Granada offers 2.5 BHK, 3 BHK, and 4 BHK premium apartments, each with smart features, modern interiors, and sustainable design for comfortable and luxurious living."
    },
    {
      question: "What are the key amenities in Brigade Granada?",
      answer: "The project includes a grand clubhouse, swimming pool, gym, spa, jogging track, indoor sports area, kids’ play zone, multipurpose hall, and landscaped gardens. It also includes smart home features and eco-friendly infrastructure."
    },
    {
      question: "What is the launch and possession timeline for Brigade Granada?",
      answer: "The official launch is planned for December 2025, with possession scheduled for 2030. Construction will follow a phased schedule ensuring quality and timely completion."
    },
    {
      question: "Is Brigade Granada RERA-approved?",
      answer: "The RERA registration for Brigade Granada has been applied for with KRERA. The project also holds approvals from BDA and BBMP for land and development compliance."
    },
    {
      question: "What are the payment plan options for Brigade Granada?",
      answer: "Buyers can choose from flexible payment plans, including milestone-based plans. Leading banks such as HDFC, SBI, ICICI, and Axis Bank provide home loan approvals for this project."
    },
    {
      question: "Why should one invest in Brigade Granada?",
      answer: "Brigade Granada offers an ideal mix of location advantage, design excellence, and developer credibility. Its proximity to IT hubs, metro connectivity, and growing infrastructure makes it one of the most promising investment opportunities in East Bangalore."
    }
  ];

  const blogPosts = [
    {
      id: 1,
      url: "/amenities/health-and-wellness-exploring-the-clubhouse-and-sports-zone-at-granada.html",
      title: "Health and Wellness: Exploring the Clubhouse and Sports Zone at Brigade Granada",
      image: "https://www.thebrigadegranada.in/images/brigade-group/health-and-wellness-exploring-the-clubhouse-and-sports-zone-at-granada.webp"
    },
    {
      id: 2,
      url: "/amenities/smart-home-features-technology-integration-in-brigade-granada-apartments.html",
      title: "Smart Home Features: Technology Integration in Brigade Granada Apartments",
      image: "https://www.thebrigadegranada.in/images/brigade-group/smart-home-features-technology-integration-in-brigade-granada-apartments.webp"
    },
    {
      id: 3,
      url: "/amenities/sustainability-at-its-best-green-initiatives-at-brigade-granada.html",
      title: "Sustainability at Its Best: Green Initiatives at Brigade Granada",
      image: "https://www.thebrigadegranada.in/images/brigade-group/sustainability-at-its-best-green-initiatives-at-brigade-granada.webp"
    },
    {
      id: 4,
      url: "/amenities/the-senior-citizen-perspective-why-brigade-granada-is-safe-and-accessible.html",
      title: "The Visitor's/Owner's Perspective: Why Brigade Granada is Safe and Accessible",
      image: "https://www.thebrigadegranada.in/images/brigade-group/the-senior-citizen-perspective-why-brigade-granada-is-safe-and-accessible.webp"
    },
    {
      id: 5,
      url: "/bangalore/a-new-landmark-of-luxury-living-in-east-bangalore.html",
      title: "A New Landmark of Luxury Living in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/f2f478adbdb14842ba06b15a6b99d8be.png"
    },
    {
      id: 6,
      url: "/bangalore/brigade-granada-luxury-living-east-bangalore.html",
      title: "A Fresh Standard for Luxury Living in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/17dde3a07aee4ba1a52c4dd0d1f531ae.png"
    },
    {
      id: 7,
      url: "/bangalore/brigade-granada-prelaunch-apartments-bangalore-2026.html",
      title: "Modern Living at Brigade Granada",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/fa857cbbcb584edf8e5f13283815953d.png"
    },
    {
      id: 8,
      url: "/bangalore/exclusive-high-rise-living-east-bangalore.html",
      title: "Exclusive High-Rise Living in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/453be11abc434f9287aafbb60adebbb0.png"
    },
    {
      id: 9,
      url: "/bangalore/new-era-luxury-living-east-bangalore.html",
      title: "A New Era of Luxury Living in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/76aa72d4d58346ae9d08cfdbdac58308.png"
    },
    {
      id: 10,
      url: "/bangalore/pre-launch-apartment-bangalore-brigade-granada.html",
      title: "A New Landmark for Living in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/3ece7700567c4fbfbc096904e66369ac.png"
    },
    {
      id: 11,
      url: "/east-bangalore/best-apartment-east-bangalore.html",
      title: "Best Apartment in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/d361f02d130845319705efbad848c6fc.png"
    },
    {
      id: 12,
      url: "/east-bangalore/best-township-sannatammanahalli-brigade-granada.html",
      title: "A New Era of Luxury Living in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/9963c43e161d40f5aaf61d89e22c24ae.png"
    },
    {
      id: 13,
      url: "/east-bangalore/brigade-granada-new-launch-east-bangalore-2026.html",
      title: "A New Standard for Gated Communities in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/1adce99583c94dc2956a27d274a340d2.png"
    },
    {
      id: 14,
      url: "/east-bangalore/brigade-granada-prelaunch-east-bangalore.html",
      title: "A New Landmark of Luxury in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/dab3f47d96ad4f599d9355a266a5d956.png"
    },
    {
      id: 15,
      url: "/east-bangalore/elite-residential-living-east-bangalore.html",
      title: "Elite Standard of Living in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/7db100b929dd49d7a4349593490fd773.png"
    },
    {
      id: 16,
      url: "/east-bangalore/exclusive-high-rise-living-east-bangalore.html",
      title: "Exclusive High-Rise Living in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/c7dcf2f475d6453f822b9d5b7b036fc1.png"
    },
    {
      id: 17,
      url: "/east-bangalore/is-it-better-to-buy-a-3-bhk-or-4-bhk-at-brigade-granada-for-investment.html",
      title: "Is it Better to Buy a 3 BHK or 4 BHK at Brigade Granada for Investment?",
      image: "https://www.thebrigadegranada.in/images/brigade-group/is-it-better-to-buy-a-3-bhk-or-4-bhk-at-brigade-granada-for-investment.webp"
    },
    {
      id: 18,
      url: "/east-bangalore/new-launch-apartment-east-bangalore.html",
      title: "New Launch Apartment in East Bangalore",
      image: "https://storage.googleapis.com/wordpressgpt-rag/rag_indexesbrand_assets/hifi-wp/site_0905c870-8bfb-4871-a485-6666aa6759da/generated_images/de4a985a72804a589dacfaf83100687c.png"
    }
  ];


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="home-page animate-fade-in">
      {/* Banner / Swiper Mockup */}
      <section className="banner_slider position-relative text-center">
        <div className="imagelist position-relative">
          <img 
            src={slides[currentSlide].src} 
            alt={slides[currentSlide].title} 
            className="img-fluid"
            style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'cover' }}
          />
          
          {/* Indicator dots inside image */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2" style={{ zIndex: 10 }}>
            {slides.map((_, idx) => (
              <span 
                key={idx}
                className="rounded-circle cursor-pointer"
                style={{ 
                  width: '12px', 
                  height: '12px', 
                  backgroundColor: currentSlide === idx ? '#fff' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentSlide(idx)}
              ></span>
            ))}
          </div>

          {/* Slide Navigation Buttons */}
          <button 
            className="btn btn-dark position-absolute start-0 top-50 translate-middle-y ms-3 p-2 rounded-circle"
            style={{ opacity: 0.5, zIndex: 3, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          >
            &#10094;
          </button>
          <button 
            className="btn btn-dark position-absolute end-0 top-50 translate-middle-y me-3 p-2 rounded-circle"
            style={{ opacity: 0.5, zIndex: 3, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Section Scroll Navigation Bar */}
      <section className="bg-light py-2 shadow-sm border-bottom sticky-top d-none d-md-block" style={{ top: '68px', zIndex: 900 }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
            <button onClick={() => scrollToSection('about-section')} className="btn btn-link text-decoration-none text-dark small fw-bold d-flex flex-column align-items-center gap-1">
              <span className="fs-5">🏢</span> About
            </button>
            <button onClick={() => scrollToSection('road-section')} className="btn btn-link text-decoration-none text-dark small fw-bold d-flex flex-column align-items-center gap-1">
              <span className="fs-5">📍</span> Whitefield-Hoskote Road
            </button>
            <button onClick={() => scrollToSection('bangalore-section')} className="btn btn-link text-decoration-none text-dark small fw-bold d-flex flex-column align-items-center gap-1">
              <span className="fs-5">🗺️</span> Bangalore
            </button>
            <button onClick={() => scrollToSection('apartments-section')} className="btn btn-link text-decoration-none text-dark small fw-bold d-flex flex-column align-items-center gap-1">
              <span className="fs-5">🏙️</span> Apartments
            </button>
            <button onClick={() => scrollToSection('reviews-section')} className="btn btn-link text-decoration-none text-dark small fw-bold d-flex flex-column align-items-center gap-1">
              <span className="fs-5">⭐</span> Reviews
            </button>
            <button onClick={() => scrollToSection('amenities-features-section')} className="btn btn-link text-decoration-none text-dark small fw-bold d-flex flex-column align-items-center gap-1">
              <span className="fs-5">🏊</span> Amenities
            </button>
            <button onClick={() => scrollToSection('developer-section')} className="btn btn-link text-decoration-none text-dark small fw-bold d-flex flex-column align-items-center gap-1">
              <span className="fs-5">👷</span> Brigade Group
            </button>
            <button onClick={() => scrollToSection('faqs-section')} className="btn btn-link text-decoration-none text-dark small fw-bold d-flex flex-column align-items-center gap-1">
              <span className="fs-5">❓</span> FAQS
            </button>
            <button onClick={() => scrollToSection('blog-section')} className="btn btn-link text-decoration-none text-dark small fw-bold d-flex flex-column align-items-center gap-1">
              <span className="fs-5">📝</span> Blog
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="main_warpper py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">

              {/* Top About Section - Image-less (Screenshot 1 of first batch) */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="about-section">
                <h1 className="text-center fw-bold mt-2 mb-4" style={{ fontSize: '32px' }}>About Brigade Granada</h1>
                
                {/* Download Actions */}
                <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
                  <button 
                    onClick={() => onEnquireClick('Download Brochure')} 
                    className="btn-outline-custom py-2 px-4"
                  >
                    <i className="fa fa-download"></i> Download Brochure
                  </button>
                  <button 
                    onClick={() => onEnquireClick('Download Cost Sheet')} 
                    className="btn-outline-custom py-2 px-4"
                  >
                    <i className="fa fa-tag"></i> Download Cost Sheet
                  </button>
                </div>

                <div className="mb-4 text-start" style={{ fontSize: '15px', color: '#333' }}>
                  <p>
                    <Link to="/" className="text-primary fw-bold text-decoration-none">Brigade Granada</Link> is an ultra-luxury integrated township project by the <a href="https://www.brigadegroup.com/" target="_blank" rel="nofollow" className="text-primary fw-bold text-decoration-none">Brigade Group</a> on Whitefield–Hoskote Road, East <a href="https://en.wikipedia.org/wiki/Bengaluru" target="_blank" rel="nofollow" className="text-primary fw-bold text-decoration-none">Bangalore</a>. Spanning a massive <strong>20.19-acres</strong> land parcel, this mixed-use development features <strong>14 high-rise</strong> towers with <strong>24 floors (3B+G+24)</strong>, offering approximately 2,000 premium <strong>2.5, 3, and 4 BHK</strong> apartments. Prices start from ₹1.45 Crore, with the project currently in its pre-launch phase as of <strong>February 2026</strong>. Apartments range from <strong>1,200 to 2,800 sq. ft.</strong>, integrated with a retail high street and premium office spaces.
                  </p>
                  <p>
                    The project ensures 80% open space, creating a balanced lifestyle between nature and modern comforts. The official launch is scheduled for December 2025, and possession is planned for 2030. The Brigade Granada project location is on Whitefield–Hoskote Road, Sannatammanahalli, Bangalore, Karnataka – 560067. This rapidly growing corridor in East Bangalore connects directly to Whitefield, KR Puram, Budigere Cross, and Old Madras Road. The site enjoys smooth connectivity to ITPL, Hoodi, and Kadugodi, key employment hubs in the region. The area also has top schools, reputed hospitals, shopping malls, and entertainment centers. It offers easy access to the upcoming <a href="https://english.bmrc.co.in/about-us/" target="_blank" rel="nofollow" className="text-primary fw-bold text-decoration-none">Metro</a> Phase 2 line and Peripheral Ring Road, making it one of the most desirable residential zones in East Bangalore.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Key Facts:</h3>
                  <ul>
                    <li>Project Type: Luxury Residential Apartments by Brigade Group</li>
                    <li>Landmark: Near Whitefield–Hoskote Main Road</li>
                    <li>Development Stage: Premium Residential Pre-Launch</li>
                    <li>Size: 20 Acres</li>
                    <li>Project Status: Upcoming</li>
                    <li>Segment: Luxury</li>
                    <li>Unit Types: 2.5, 3 & 4 BHK Apartments</li>
                    <li>RERA: Applied (under process)</li>
                  </ul>

                  <p className="mt-3">
                    Brigade Granada sets a new standard for luxury living in East Bangalore. The project features 80% open space, vast landscaped gardens, and sustainable green designs. Every apartment offers smart home features, premium finishes, and optimal ventilation. It combines aesthetics with functionality, reflecting Brigade Group’s focus on comfort, design, and urban sophistication. The enclave is designed for a modern lifestyle with world-class amenities and eco-friendly planning.
                  </p>

                  <p>
                    The Whitefield–Hoskote Road stretch has emerged as one of East Bangalore’s fastest-developing residential corridors. The area’s growth is powered by the IT expansion in Whitefield and rapid infrastructure upgrades like the Metro line and Peripheral Ring Road. Brigade Granada, part of this thriving zone, is set for launch in December 2025. The apartments feature spacious layouts, smart automation, and sustainable designs. Expected configurations are:
                  </p>
                  <ul>
                    <li>2.5 BHK – Approx. 1,200 to 1,400 sq. ft.</li>
                    <li>3 BHK – Approx. 1,600 to 1,950 sq. ft.</li>
                    <li>4 BHK – Approx. 2,200 to 2,800 sq. ft.</li>
                  </ul>

                  <p>
                    Brigade Granada offers luxury homes in one of Bangalore’s most promising growth corridors. With its location advantage, brand trust, and efficient design, it stands out as a top pre-launch investment in East Bangalore. The project offers high potential for capital appreciation and premium lifestyle value, making it ideal for both investors and end-users.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Project Dates:</h3>
                  <ul>
                    <li>Pre-Launch Date: November 2025 (Tentative)</li>
                    <li>Launch Date: December 2025</li>
                    <li>Completion Time: Within 4 years (from launch)</li>
                    <li>Possession Date: 2030</li>
                  </ul>

                  <h3 className="h6 fw-bold mt-4 mb-2">RERA</h3>
                  <p>
                    The <a href="https://rera.karnataka.gov.in/aboutUs" target="_blank" rel="nofollow" className="text-primary fw-bold text-decoration-none">RERA</a> registration for Brigade Granada is currently under process. The registration number will be issued once the project obtains statutory approvals from BDA, BBMP, and other concerned authorities. The approvals ensure transparency and compliance with state norms before commencement of construction.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Reviews</h3>
                  <p>
                    Early interest in Brigade Granada has been highly positive among real estate experts and potential buyers in Bangalore. The project is recognized for its efficient layouts, open space ratio, and strategic location. Experts highlight Brigade Group’s strong brand reputation, premium construction quality, and customer trust. It is rated among the most awaited residential launches in East Bangalore for 2025.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Brochure</h3>
                  <p>
                    The Brigade Granada Brochure offers a complete project overview. It includes detailed floor plans, master layout, amenities, and design highlights. It also provides insights into location benefits, specifications, and lifestyle features. Interested buyers can download the official brochure PDF from the project’s website after the launch announcement for complete details.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">EOI (Expression of Interest)</h3>
                  <p>
                    The Brigade Granada EOI program begins in November 2025, before the official launch. Buyers registering during this phase enjoy priority booking and exclusive pre-launch pricing benefits. The process is simple — customers can submit their details and preferred configurations online. No online payment is required during EOI registration. A post-dated cheque in the name of Brigade Group can be submitted as an expression of interest. Allotment priority is given to those who register early, ensuring access to launch price benefits and preferred unit selection.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Payment Plan</h3>
                  <p className="mb-2">Simple 20:20:60 Payment Plan</p>
                  <ul>
                    <li>20% on Booking</li>
                    <li>20% on Superstructure Completion</li>
                    <li>60% on Possession</li>
                  </ul>
                  <p>
                    This flexible milestone-based plan allows convenient payment scheduling for buyers during the project timeline.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Latest Update – November 2025</h3>
                  <p>
                    Brigade Group continues to be one of India’s most reliable real estate developers, known for its innovation, design, and timely delivery. The company maintains a strong presence across Bangalore, Chennai, Hyderabad, and Mysuru. With projects like Brigade Granada, the group aims to strengthen its luxury housing portfolio and expand its footprint in East Bangalore’s fast-growing real estate market.
                  </p>

                  {/* Unique Features (Replicated from Screenshot 1) */}
                  <h3 className="h6 fw-bold mt-4 mb-2">Unique Features of Brigade Granada</h3>
                  <ul>
                    <li>Sprawled across 20 acres of beautifully landscaped surroundings</li>
                    <li>Designed with 80% open space for better light and air circulation</li>
                    <li>Offers efficient 73% floor plan layouts for maximum space utilization</li>
                    <li>Equipped with smart home features in every apartment</li>
                    <li>Planned for premium high-rise towers with elegant modern design</li>
                    <li>Includes top-class amenities such as:
                      <ul className="ps-3 mt-1">
                        <li>Clubhouse with multiple recreation zones</li>
                        <li>Swimming pool and gymnasium</li>
                        <li>Indoor games area</li>
                        <li>Jogging track and landscaped gardens</li>
                        <li>Children's play zone and senior citizen court</li>
                      </ul>
                    </li>
                    <li>Strategically located near major hubs of Whitefield, ITPL, and KR Puram</li>
                    <li>Excellent connectivity through Old Madras Road and upcoming Metro Phase 2</li>
                  </ul>

                  {/* Why Invest block (Replicated from Screenshot 2) */}
                  <h3 className="h6 fw-bold mt-4 mb-2">Why Invest in Brigade Granada?</h3>
                  <p>
                    Brigade Granada is developed by Brigade Group, a trusted name known for quality, transparency, and timely delivery. The project is located on Whitefield–Hoskote Road, one of East Bangalore's fastest-developing zones. It connects easily to ITPL, KR Puram, and the Outer Ring Road, offering smooth access to major employment centers.
                  </p>
                  <p>
                    The enclave features smart, sustainable homes built for modern families. Every apartment blends thoughtful design with green surroundings. The neighborhood has top schools, healthcare centers, and malls nearby, ensuring complete daily convenience.
                  </p>
                  <p>
                    With attractive pre-launch pricing, efficient layouts, and strong connectivity, Brigade Granada offers high investment potential and long-term value appreciation. It stands out as an ideal choice for both investors and homebuyers seeking premium living in a future-ready urban community.
                  </p>
                  <p>
                    Set in the dynamic East Bangalore corridor, Brigade Granada offers the perfect mix of comfort, connectivity, and contemporary lifestyle. It represents a future-focused residential community that defines sustainable and luxurious urban living.
                  </p>
                </div>
              </div>

              {/* Project Highlights Grid */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="highlights-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Project Highlights
                </h2>
                <div className="highlights-grid">
                  {highlights.map((item, idx) => (
                    <div className="highlight-card" key={idx}>
                      <div className="highlight-icon-wrapper">
                        <img src={item.icon} alt={item.label} className="highlight-icon" />
                      </div>
                      <div className="highlight-details">
                        <span className="highlight-label">{item.label}</span>
                        <span className="highlight-value">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Master & Floor Plans Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="master-floor-plans">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Master & Floor Plans
                </h2>
                
                <h3 className="h6 fw-bold mb-3 text-start">Master Plan</h3>
                <div className="row justify-content-center mb-5">
                  <div className="col-md-8 text-center">
                    <div className="floor_plan_Sec p-2 border mb-3 position-relative">
                      <img 
                        src="https://www.thebrigadegranada.in/images/plans/brigade-granada-master-plan.webp" 
                        alt="Brigade Granada Master Plan" 
                        className="img-fluid"
                      />
                      <button 
                        onClick={() => onEnquireClick('Download Master Plan')} 
                        className="btn btn-primary btn_master position-absolute top-50 start-50 translate-middle border-0"
                        style={{ zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <i className="fa fa-download"></i> Master Plan
                      </button>
                    </div>
                  </div>
                </div>

                <h3 className="h6 fw-bold mb-3 text-start">Floor Plan</h3>
                {/* Tabs */}
                <div className="tab mb-3">
                  <button className={activeTab === '2.5bhk' ? 'active' : ''} onClick={() => setActiveTab('2.5bhk')}>2.5 BHK</button>
                  <button className={activeTab === '3bhk' ? 'active' : ''} onClick={() => setActiveTab('3bhk')}>3 BHK</button>
                  <button className={activeTab === '4bhk' ? 'active' : ''} onClick={() => setActiveTab('4bhk')}>4 BHK</button>
                </div>

                {/* Tab content */}
                {activeTab === '2.5bhk' && (
                  <div className="tabcontent text-center animate-fade-in">
                    <div className="floor_plan_Sec p-2 border mb-3 d-inline-block position-relative" style={{ maxWidth: '480px' }}>
                      <img src="https://www.thebrigadegranada.in/images/plans/2.5-bhk-floor-plan.webp" alt="2.5 BHK Floor Plan" className="img-fluid" />
                      <button 
                        onClick={() => onEnquireClick('Download 2.5 BHK Floor Plan')}
                        className="btn btn-primary btn_master position-absolute top-50 start-50 translate-middle border-0"
                        style={{ zIndex: 10 }}
                      >
                        <i className="fa fa-download"></i> Floor Plan
                      </button>
                    </div>
                    <table className="back-onew">
                      <tbody>
                        <tr>
                          <td><button onClick={() => onEnquireClick('Download 2.5 BHK Floor Plan')} className="btn btn-link text-white text-decoration-none fw-semibold p-0">2.5 BHK Floor Plan</button></td>
                          <td><button onClick={() => onEnquireClick('Request 2.5 BHK Price')} className="btn btn-link text-white text-decoration-none fw-semibold p-0"><i className="fa fa-rupee"></i> Request Price</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === '3bhk' && (
                  <div className="tabcontent text-center animate-fade-in">
                    <div className="floor_plan_Sec p-2 border mb-3 d-inline-block position-relative" style={{ maxWidth: '480px' }}>
                      <img src="https://www.thebrigadegranada.in/images/plans/3-bhk-floor-plan.webp" alt="3 BHK Floor Plan" className="img-fluid" />
                      <button 
                        onClick={() => onEnquireClick('Download 3 BHK Floor Plan')}
                        className="btn btn-primary btn_master position-absolute top-50 start-50 translate-middle border-0"
                        style={{ zIndex: 10 }}
                      >
                        <i className="fa fa-download"></i> Floor Plan
                      </button>
                    </div>
                    <table className="back-onew">
                      <tbody>
                        <tr>
                          <td><button onClick={() => onEnquireClick('Download 3 BHK Floor Plan')} className="btn btn-link text-white text-decoration-none fw-semibold p-0">3 BHK Floor Plan</button></td>
                          <td><button onClick={() => onEnquireClick('Request 3 BHK Price')} className="btn btn-link text-white text-decoration-none fw-semibold p-0"><i className="fa fa-rupee"></i> Request Price</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === '4bhk' && (
                  <div className="tabcontent text-center animate-fade-in">
                    <div className="floor_plan_Sec p-2 border mb-3 d-inline-block position-relative" style={{ maxWidth: '480px' }}>
                      <img src="https://www.thebrigadegranada.in/images/plans/4-bhk-floor-plan.webp" alt="4 BHK Floor Plan" className="img-fluid" />
                      <button 
                        onClick={() => onEnquireClick('Download 4 BHK Floor Plan')}
                        className="btn btn-primary btn_master position-absolute top-50 start-50 translate-middle border-0"
                        style={{ zIndex: 10 }}
                      >
                        <i className="fa fa-download"></i> Floor Plan
                      </button>
                    </div>
                    <table className="back-onew">
                      <tbody>
                        <tr>
                          <td><button onClick={() => onEnquireClick('Download 4 BHK Floor Plan')} className="btn btn-link text-white text-decoration-none fw-semibold p-0">4 BHK Floor Plan</button></td>
                          <td><button onClick={() => onEnquireClick('Request 4 BHK Price')} className="btn btn-link text-white text-decoration-none fw-semibold p-0"><i className="fa fa-rupee"></i> Request Price</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

              </div>

              {/* Price & Payment Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="price-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Price & Payment
                </h2>
                
                <div className="row align-items-center g-4">
                  {/* Table area */}
                  <div className="col-lg-7">
                    <table className="table table-bordered text-center mb-0">
                      <thead>
                        <tr>
                          <th>Unit Type</th>
                          <th>Size Range (sq. ft.)</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2.5 BHK</td>
                          <td>1200 – 1400 Sq.Ft</td>
                          <td>
                            <button onClick={() => onEnquireClick('Request 2.5 BHK Cost Breakup')} className="btn btn-link p-0 fw-bold text-decoration-none">On Request</button>
                          </td>
                        </tr>
                        <tr>
                          <td>3 BHK Premium</td>
                          <td>1600 – 1950 Sq.Ft</td>
                          <td>
                            <button onClick={() => onEnquireClick('Request 3 BHK Premium Cost Breakup')} className="btn btn-link p-0 fw-bold text-decoration-none">On Request</button>
                          </td>
                        </tr>
                        <tr>
                          <td>3 BHK Luxe</td>
                          <td>2,200 – 2,800 Sq.Ft</td>
                          <td>
                            <button onClick={() => onEnquireClick('Request 3 BHK Luxe Cost Breakup')} className="btn btn-link p-0 fw-bold text-decoration-none">On Request</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Floor plan card area */}
                  <div className="col-lg-5">
                    <div className="border rounded bg-white shadow-sm overflow-hidden text-center position-relative p-3">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="font-serif italic text-muted" style={{ fontSize: '18px', fontFamily: 'serif' }}>Unit Plans</span>
                        <span className="fw-bold" style={{ color: '#193375' }}>2.5 BHK Floor Plan</span>
                      </div>
                      <img 
                        src="https://www.thebrigadegranada.in/images/plans/2.5-bhk-floor-plan.webp" 
                        alt="2.5 BHK Unit Plan" 
                        className="img-fluid mb-3"
                        style={{ maxHeight: '180px', objectFit: 'contain' }}
                      />
                      <button 
                        onClick={() => onEnquireClick('Download Complete Costing Details')}
                        className="btn btn-primary w-100 py-2 border-0 bg-primary text-white d-flex align-items-center justify-content-center gap-2"
                        style={{ borderRadius: '4px', fontWeight: '600' }}
                      >
                        <i className="fa fa-download"></i> Complete Costing
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* EMI Calculator Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="emi-calculator-section">
                <div className="row g-4 align-items-center">
                  
                  {/* Left Form column */}
                  <div className="col-md-5">
                    <div className="bg-white p-4 border rounded shadow-sm">
                      <h3 className="h5 fw-bold text-center mb-4" style={{ fontSize: '20px' }}>EMI Calculator</h3>
                      
                      <form onSubmit={calculateEMI}>
                        <div className="mb-3">
                          <label className="form-label small fw-semibold text-secondary mb-1">Loan Amount (₹):</label>
                          <input 
                            type="number" 
                            className="form-control" 
                            value={loanAmount} 
                            onChange={(e) => setLoanAmount(e.target.value)} 
                            required 
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label small fw-semibold text-secondary mb-1">Annual Interest Rate (%):</label>
                          <input 
                            type="number" 
                            step="0.01"
                            className="form-control" 
                            value={interestRate} 
                            onChange={(e) => setInterestRate(e.target.value)} 
                            required 
                          />
                        </div>

                        <div className="mb-4">
                          <label className="form-label small fw-semibold text-secondary mb-1">Loan Tenure (years):</label>
                          <input 
                            type="number" 
                            className="form-control" 
                            value={loanTenure} 
                            onChange={(e) => setLoanTenure(e.target.value)} 
                            required 
                          />
                        </div>

                        <button 
                          type="submit" 
                          className="btn text-white w-100 py-2 fw-bold"
                          style={{ backgroundColor: '#28582d', borderRadius: '4px' }}
                        >
                          Calculate EMI
                        </button>
                      </form>

                      {/* Display results */}
                      <div className="text-center mt-4 border-top pt-3">
                        <div className="h4 fw-bold text-dark mb-1">Your EMI: ₹{emi}</div>
                        <span className="small text-muted">Loan Tenure: {loanTenure} years</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Description column */}
                  <div className="col-md-7">
                    <div className="ps-md-3">
                      <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.7' }}>
                        Easily estimate your monthly home loan payments for this Prestige Whitefield–Hoskote Road new launch housing project by Brigade Group, Brigade Granada in Bengaluru, using our EMI Calculator. Just enter your loan amount, annual interest rate, and loan tenure to plan your budget.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Location & Connectivity Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="location-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Location & Connectivity
                </h2>

                <h3 className="h6 fw-bold mb-3 text-start">Location</h3>
                
                {/* Map display */}
                <div className="row justify-content-center mb-4">
                  <div className="col-md-8 text-center position-relative">
                    <div className="floor_plan_Sec p-2 border mb-3">
                      <img 
                        src="https://www.thebrigadegranada.in/images/plans/brigade-granada-master-plan.webp" 
                        alt="Brigade Granada Location Map" 
                        className="img-fluid"
                        onError={(e) => { e.target.src = "https://www.thebrigadegranada.in/images/plans/brigade-granada-master-plan.webp"; }}
                      />
                      <button 
                        onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=13.019101,77.762164', '_blank')} 
                        className="btn btn-primary btn_master position-absolute top-50 start-50 translate-middle border-0"
                        style={{ zIndex: 10 }}
                      >
                        <i className="fa fa-map me-2"></i>Get GPS Location
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=13.019101,77.762164', '_blank')} 
                      className="btn btn-primary w-100 py-2 border-0 bg-primary text-white d-flex align-items-center justify-content-center gap-2 mb-3"
                      style={{ borderRadius: '4px', fontWeight: '600' }}
                    >
                      <i className="fa fa-map me-2"></i>Get GPS Location
                    </button>
                  </div>
                </div>

                <div className="text-start">
                  <p style={{ fontSize: '15px', color: '#333' }}>
                    The main entrance of Brigade Granada is on Whitefield–Hoskote Road, Sannatammanahalli, one of the most sought-after addresses in East Bangalore. The project location offers excellent connectivity to major IT hubs such as ITPL, Whitefield, and KR Puram. It is also close to key lifestyle and business destinations in the eastern corridor.
                  </p>
                  <p style={{ fontSize: '15px', color: '#333' }}>
                    The upcoming Metro Phase 2 line along with Peripheral Ring Road enhances access and travel convenience. The location connects smoothly to Old Madras Road (NH75), providing easy connectivity to other parts of the city.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Key Location Highlights:</h3>
                  <ul style={{ fontSize: '15px', color: '#333' }} className="lh-lg">
                    <li>• Strategically located on Whitefield–Hoskote Main Road, near ITPL and Whitefield.</li>
                    <li>• Just 10 minutes from Budigere Cross and Old Madras Road junction.</li>
                    <li>• Quick access to KR Puram, Kadugodi, and Whitefield Metro Station.</li>
                    <li>• Easy drive to Kempegowda International Airport via Hoskote–Airport Road.</li>
                    <li>• Surrounded by top schools such as Delhi Public School, VIBGYOR High, and Orchids International School.</li>
                    <li>• Close to reputed hospitals like Manipal Hospital Whitefield, Columbia Asia, and Vydehi Hospital.</li>
                    <li>• Near leading shopping and entertainment hubs such as Forum Shantiniketan Mall, Phoenix Marketcity, and Inorbit Mall.</li>
                    <li>• Located within a vibrant urban belt with cafes, supermarkets, and coworking spaces nearby.</li>
                    <li>• Seamlessly connected to Whitefield, KR Puram, and Old Madras Road through wide arterial roads.</li>
                    <li>• One of East Bangalore's fastest-growing investment corridors with strong infrastructure growth.</li>
                  </ul>
                </div>
              </div>

              {/* Whitefield-Hoskote Road Layout Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="road-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Whitefield–Hoskote Road
                </h2>

                <div className="text-center mb-4">
                  <img 
                    src="https://www.thebrigadegranada.in/images/locations/whitefield-hoskote-road.webp" 
                    alt="Whitefield Hoskote Road Highway Board" 
                    className="img-fluid rounded border shadow-sm"
                    style={{ maxHeight: '380px', width: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div className="text-start" style={{ fontSize: '15px', color: '#333' }}>
                  <p>
                    Brigade Granada is a premium upcoming residential project by Brigade Group. It is located on Whitefield–Hoskote Road, one of the most promising zones in East Bangalore. The area is surrounded by major IT parks, industrial clusters, and expanding residential neighborhoods. It is designed for professionals and families seeking urban comfort and high connectivity. The development combines convenience, greenery, and a modern lifestyle in one of Bangalore's most active growth zones.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Advantages of Buying an Apartment in Whitefield–Hoskote Road</h3>
                  <ul>
                    <li>Close to major IT hubs such as ITPL, EPIP Zone, and Brigade Tech Park.</li>
                    <li>Excellent connectivity to KR Puram, Whitefield, and Old Madras Road.</li>
                    <li>Proximity to Kempegowda International Airport, around 35 minutes via Hoskote–Airport Road.</li>
                    <li>Metro Phase 2 expansion to improve public transport and reduce travel time.</li>
                    <li>Near top-rated schools, medical centers, malls, and business zones.</li>
                    <li>Offers a peaceful & green environment away from city congestion.</li>
                    <li>High demand for rentals and long-term appreciation potential.</li>
                    <li>Ideal for both end-users and investors seeking future-ready developments.</li>
                  </ul>

                  <h3 className="h6 fw-bold mt-4 mb-2">5 Best Projects by Brigade in East Bangalore</h3>
                  <ol className="lh-lg">
                    <li><strong>Brigade Utopia</strong> – Integrated township with residential and commercial spaces in Varthur.</li>
                    <li><strong>Brigade Woods</strong> – Premium apartments near ITPL, surrounded by greenery.</li>
                    <li><strong>Brigade Exotica</strong> – Luxury high-rise residences on Old Madras Road.</li>
                    <li><strong>Brigade Buena Vista</strong> – Smartly designed apartments near Budigere Cross.</li>
                    <li><strong>Brigade Lakefront</strong> – Lakeside luxury community close to Whitefield.</li>
                  </ol>

                  <h3 className="h6 fw-bold mt-4 mb-2">About Whitefield–Hoskote Road</h3>
                  <p>
                    Whitefield-Hoskote Road is one of the most dynamic and fast-growing corridors in East Bangalore. It falls under the jurisdiction of BBMP and forms a key link between KR Puram and Hoskote Industrial Area. The region has transformed from a quiet suburb into a bustling real estate hotspot. This growth is driven by its proximity to ITPL, EPIP Zone, and major road upgrades such as the Peripheral Ring Road and Metro Phase 2 extension.
                  </p>
                  <p>
                    The stretch from KR Puram to Hoskote connects major residential, commercial, and logistics zones. It offers smooth access to both the city center and the airport. The area also benefits from new infrastructure projects like road widening, sewage systems, and flyover construction, ensuring better connectivity and comfort for residents.
                  </p>
                  <p>
                    Brigade Granada, with its location advantage and brand value, stands out as a top investment choice in East Bangalore. It combines connectivity, comfort, and long-term appreciation, making it one of the most anticipated luxury developments in the region.
                  </p>
                </div>
              </div>

              {/* About Section with Gated Community Rendering Image */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="about-render-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  About Brigade Granada
                </h2>

                <div className="text-center mb-4">
                  <img 
                    src="https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada.webp" 
                    alt="Brigade Granada Gated Community Overview" 
                    className="img-fluid rounded border shadow-sm"
                    style={{ maxHeight: '420px', width: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div className="text-start" style={{ fontSize: '15px', color: '#333' }}>
                  <p>
                    Brigade Granada on Whitefield–Hoskote Road, Sannatammanahalli, is a premium gated community in East Bangalore. The project is developed by Brigade Group, one of the most reputed names in Indian real estate. It is set to launch in December 2025 and offers luxury apartments at an attractive pre-launch price. The development spans 20 acres of prime land with 80% open space and efficient layouts.
                  </p>
                </div>
              </div>

              {/* Bangalore Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="bangalore-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Bangalore
                </h2>

                <div className="text-center mb-4 position-relative">
                  <img 
                    src="https://www.thebrigadegranada.in/images/locations/bangalore.webp" 
                    alt="Bangalore Skyline banner" 
                    className="img-fluid rounded border shadow-sm"
                    style={{ maxHeight: '380px', width: '100%', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-50 start-50 translate-middle text-white fw-bold display-4 tracking-wider" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
                    BANGALORE
                  </div>
                </div>

                <div className="text-start" style={{ fontSize: '15px', color: '#333' }}>
                  <p>
                    Bangalore continues to be one of India’s strongest real estate markets. East Bangalore, in particular, stands out as a fast-growing investment zone. The area’s expanding infrastructure and proximity to major tech corridors drive steady housing demand. With leading IT parks and seamless connectivity, it attracts both professionals and investors seeking high returns and stable growth.
                  </p>
                  <p>
                    Brigade Granada is among the most awaited luxury developments in East Bangalore. It is crafted by Brigade Group, one of India’s most reputed real estate brands. The enclave stands on Whitefield–Hoskote Road, a rapidly developing micro-market close to ITPL and Whitefield. The project connects major business and residential hubs such as KR Puram, Budigere Cross, and Whitefield. The homes are thoughtfully designed for modern living with comfort, efficiency, and smart features.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Best Brigade Projects in Bangalore</h3>
                  <ol className="lh-lg">
                    <li><strong>Brigade Citadel</strong> – Premium residential community in Moti Nagar, offering spacious apartments with world-class amenities.</li>
                    <li><strong>Brigade Eldorado</strong> – Mega township near Aerospace Park, North Bangalore, designed for modern urban living.</li>
                    <li><strong>Brigade Valencia</strong> – Spanish-themed lifestyle enclave in Electronic City, featuring elegant high-rise homes.</li>
                    <li><strong>Brigade Calista</strong> – Upcoming luxury apartment project near Budigere Cross with lush open spaces and modern design.</li>
                    <li><strong>Brigade Oasis</strong> – Premium plotted development in Devanahalli offering green landscapes and investment-ready sites.</li>
                  </ol>

                  <p className="mt-3">
                    Brigade Granada, with its prime location, smart design, and trusted brand name, is set to become a signature residential address in East Bangalore. It offers the perfect balance of connectivity, greenery, and lifestyle. The project caters to both end-users and long-term investors.
                  </p>
                </div>
              </div>

              {/* Apartments Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="apartments-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Apartments
                </h2>

                <div className="text-center mb-4">
                  <img 
                    src="https://www.thebrigadegranada.in/images/brigade-group/apartments.webp" 
                    alt="Brigade Granada Apartments Rendering" 
                    className="img-fluid rounded border shadow-sm"
                    style={{ maxHeight: '380px', width: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div className="text-start" style={{ fontSize: '15px', color: '#333' }}>
                  <p>
                    An apartment is a modern urban home within a larger gated community. It offers comfort, privacy, and shared amenities within a secure environment. Many homebuyers prefer apartments for their convenience, lifestyle, and maintenance-free living. Reputed builders now design apartments with advanced layouts, sustainable features, and world-class finishes.
                  </p>
                  <p>
                    Brigade Granada in Whitefield–Hoskote Road presents elegant 2.5, 3, and 4 BHK apartments. Each home is designed with 73% efficiency, ensuring maximum usable space. The project spans 20 acres, offering 80% open space with landscaped greens and recreational zones. Every apartment features smart home technology, good ventilation, and high-quality finishes.
                  </p>
                  <p>
                    The homes are ideal for modern families and professionals seeking a peaceful yet connected lifestyle. Prices are set to be competitive in the pre-launch phase, offering excellent value for the segment. Brigade Granada represents a perfect mix of design, sustainability, and community living.
                  </p>
                  <p>
                    East Bangalore’s growth as an IT and residential hub continues to drive demand for quality apartments. The Brigade Granada apartments meet this need by blending thoughtful architecture with green surroundings. At the official launch, buyers can experience the Brigade Granada Model Apartment on-site. The model homes showcase the actual layout, interiors, and lifestyle, helping buyers visualize their ideal home before investing.
                  </p>
                </div>
              </div>

              {/* Approvals & Legal Status Section (Screenshot 1 of latest batch) */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="approvals-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Approvals & Legal Status
                </h2>

                <div className="text-center mb-4">
                  <img 
                    src="https://www.thebrigadegranada.in/images/plans/approvals.webp" 
                    alt="Approvals & Legal Land Agreement" 
                    className="img-fluid rounded border shadow-sm"
                    style={{ maxHeight: '360px', width: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div className="text-start" style={{ fontSize: '15px', color: '#333' }}>
                  <h3 className="h6 fw-bold mt-4 mb-2">Land Approval</h3>
                  <p>
                    Brigade Granada secures the required E-Khata land approval from the Bangalore Development Authority (BDA) and the Bruhat Bengaluru Mahanagara Palike (BBMP). The land follows all city zoning and development norms. This ensures that the project meets every regulation and maintains full legal compliance for construction and planning.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Legal Status of the Property</h3>
                  <p>
                    The property holds a clear and marketable title verified by legal experts. All ownership and land records are thoroughly checked. The RERA registration for Brigade Granada has been applied for with the Karnataka Real Estate Regulatory Authority (KRERA). Once approved, it confirms that the project aligns with all statutory and safety requirements.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Bank Approvals</h3>
                  <p>
                    The project obtains home loan approvals from top financial institutions, including HDFC Bank, ICICI Bank, SBI, and Axis Bank. Buyers get easy access to flexible financing plans with competitive interest rates. These partnerships ensure smooth and secure transactions for every homebuyer.
                  </p>

                  {/* Legal Documentation details */}
                  <h3 className="h6 fw-bold mt-4 mb-2">Legal Documentation</h3>
                  <p>
                    Key legal documents include the Mother Deed, Sale Deed, Agreement to Sell, Building Plan Approval, Khata Certificate, Possession Certificate, Occupancy Certificate, Encumbrance Certificate, and RERA Certificate. These documents ensure transparency, accountability, and rightful ownership for all property buyers.
                  </p>
                  <ul>
                    <li>Mother Deed</li>
                    <li>Sale Deed</li>
                    <li>Agreement to Sell</li>
                    <li>Building Plan Approval</li>
                    <li>Khata Certificate</li>
                    <li>Possession Certificate</li>
                    <li>Occupancy Certificate</li>
                    <li>Encumbrance Certificate</li>
                    <li>RERA Certificate</li>
                  </ul>

                  <h3 className="h6 fw-bold mt-4 mb-2">Land Survey</h3>
                  <p>
                    The land survey and property verification for Brigade Granada began in October 2025, ahead of its launch phase. Buyers can review land records and participate through the official verification form. This step ensures clarity on ownership, plot dimensions, and development boundaries.
                  </p>

                  <h3 className="h6 fw-bold mt-4 mb-2">Home Loan Approval</h3>
                  <p>
                    Brigade Granada is pre-approved by major banks such as SBI, HDFC, ICICI, and Axis Bank. These financial tie-ups make it convenient for homebuyers to secure quick loan processing and enjoy a stress-free purchase experience.
                  </p>
                </div>
              </div>

              {/* Taxes & Standards Section (Screenshot 2 of latest batch) */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="taxes-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Taxes & Standards
                </h2>

                <div className="text-center mb-4">
                  <img 
                    src="https://www.thebrigadegranada.in/images/plans/taxes.webp" 
                    alt="Taxes & Standards" 
                    className="img-fluid rounded border shadow-sm"
                    style={{ maxHeight: '360px', width: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div className="text-start" style={{ fontSize: '15px', color: '#333' }}>
                  <p>
                    Purchasing an apartment at Brigade Granada involves a few essential taxes and statutory charges.
                  </p>
                  <ul>
                    <li><strong>GST:</strong> 5% applies to non-affordable housing and 1% for affordable segments. This applies to all homes with possession after 2030.</li>
                    <li><strong>Stamp Duty:</strong> Around 5.6% of the property value in Bengaluru for homes priced above ₹45 lakhs. This includes cess and surcharge.</li>
                    <li><strong>Registration Charges:</strong> 1% of the total sale value, payable during registration.</li>
                    <li><strong>Property Tax:</strong> Annual BBMP or BDA property tax, based on property size, zone, and usage.</li>
                  </ul>
                  <p className="mt-3">
                    The project holds RERA and BBMP approvals, ensuring full transparency and buyer protection. These approvals confirm that Brigade Granada follows all city planning, environmental, and construction norms. The development stands as a safe, compliant, and high-quality investment opportunity in East Bangalore.
                  </p>
                </div>
              </div>

              {/* Reviews & Investment Section (Screenshot 3 of latest batch) */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="reviews-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Reviews & Investment
                </h2>

                <div className="text-start" style={{ fontSize: '15px', color: '#333' }}>
                  <h3 className="h5 fw-bold mb-3">Reviews</h3>
                  <h4 className="h6 fw-bold text-primary mb-2">Customer Reviews</h4>
                  <p>
                    Early buyers appreciate Brigade Granada for its elegant design, green landscapes, and spacious homes. Wide balconies offer good natural light and cross ventilation. Residents have a peaceful environment, surrounded by luxury open areas and thoughtfully designed leisure zones. The location on Whitefield–Hoskote Road is also highly rated for its connectivity to ITPL, KR Puram, and Budigere Cross.
                  </p>
                  <p>
                    Open lawns, jogging paths, and relaxation areas add to the community's charm. The clubhouse and fitness center stand out for their design and amenities. Homebuyers find the project ideal for family living, with schools, hospitals, and tech hubs located nearby.
                  </p>

                  <h4 className="h6 fw-bold text-primary mb-2">Expert Reviews</h4>
                  <p>
                    Property experts rank Brigade Granada among the most promising luxury developments in East Bangalore. The location along Whitefield–Hoskote Road connects the project to key IT corridors and the upcoming Metro Phase 2 line. Homes feature smart layouts, premium fittings, and sustainable materials.
                  </p>
                  <p>
                    The master plan ensures over 80% open space, giving residents access to landscaped gardens, play areas, and calm surroundings. Amenities include a swimming pool, grand clubhouse, gym, spa, indoor games zone, jogging tracks, and multipurpose courts. The combination of trusted brand value, prime location, and strong connectivity makes Brigade Granada a standout investment choice. The project offers an ideal balance of lifestyle, comfort, and long-term appreciation in East Bangalore's growing residential corridor.
                  </p>

                  <h3 className="h5 fw-bold mt-5 mb-3">Investment Potential</h3>
                  <p>
                    Brigade Granada is located on Whitefield–Hoskote Road, one of East Bangalore's fastest-growing real estate corridors. The area offers excellent investment potential due to its proximity to major tech and commercial hubs. It is close to Whitefield, ITPL, KR Puram, and Budigere Cross, ensuring strong demand and consistent property appreciation.
                  </p>
                  <p>
                    East Bangalore continues to expand rapidly. The upcoming Metro Phase 2, Peripheral Ring Road, and new IT SEZs increase its attractiveness even further. Property prices and rental yields in this corridor are expected to see steady growth due to rising employment opportunities and infrastructure upgrades.
                  </p>
                  <p>
                    Brigade Group backs the project with its trusted reputation and proven delivery record. The developer is known for transparency, innovation, and architectural excellence. The layouts at Brigade Granada are spacious, functional, and eco-friendly. Every home offers a blend of comfort, luxury, and convenience.
                  </p>
                </div>
              </div>

              {/* Amenities & Features Section (Screenshot 4 of latest batch) */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="amenities-features-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Amenities & Features
                </h2>
                
                <h3 className="h6 fw-bold mb-3 text-start">Amenities</h3>
                <div className="row g-3 justify-content-center text-center">
                  {scrollAmenities.map((item, idx) => (
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={idx} onClick={() => onEnquireClick(`Enquire about ${item.name}`)} style={{ cursor: 'pointer' }}>
                      <div className="p-3 bg-light border rounded h-100 d-flex flex-column align-items-center justify-content-center">
                        <span className="fs-3 mb-2">{item.icon}</span>
                        <span className="small fw-semibold text-secondary">{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brigade Group Section (Screenshot 4 & 5 of latest batch) */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="developer-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Brigade Group
                </h2>

                <div className="text-center mb-4">
                  <img 
                    src="https://www.thebrigadegranada.in/images/brigade-group/brigade-group.webp" 
                    alt="Brigade Group Head Office" 
                    className="img-fluid rounded border shadow-sm"
                    style={{ maxHeight: '380px', width: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div className="text-start" style={{ fontSize: '15px', color: '#333' }}>
                  <p>
                    Brigade Group is one of India’s most respected real estate developers. Founded in 1986, the company has redefined modern living with projects that emphasize quality, design, and sustainability. It has a varied portfolio of residential, commercial, hospitality, and retail developments across major Indian cities.
                  </p>
                  <p>
                    The company is known for its on-time delivery, transparent processes, and customer-first philosophy. Its developments are designed to offer long-term value and superior living standards. Investing in a Brigade project such as Brigade Granada means choosing trust, excellence, and enduring value in Bangalore’s dynamic property market.
                  </p>
                </div>
              </div>

              {/* Frequently Asked Questions Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="faqs-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '24px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
                  Frequently Asked Questions
                </h2>

                <div className="accordion" id="homeFaqsAccordion">
                  {faqs.map((faq, index) => {
                    const collapseId = `faqCollapse${index}`;
                    const headingId = `faqHeading${index}`;
                    return (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={headingId}>
                          <button 
                            className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#${collapseId}`} 
                            aria-expanded={index === 0 ? 'true' : 'false'} 
                            aria-controls={collapseId}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div 
                          id={collapseId} 
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                          aria-labelledby={headingId} 
                          data-bs-parent="#homeFaqsAccordion"
                        >
                          <div className="accordion-body">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Blog Section */}
              <div className="border rounded p-4 mb-4 bg-white shadow-sm" id="blog-section">
                <h2 className="text-center fw-bold mb-2" style={{ fontSize: '24px' }}>
                  Blog
                </h2>
                <p className="text-center text-muted mb-4 small">
                  Explore all updates, guides, location advantages and expert insights on Brigade Granada.
                </p>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {blogPosts.map((blog) => (
                    <div className="col" key={blog.id}>
                      <div 
                        className="card h-100 border rounded shadow-sm hover-shadow transition-all cursor-pointer"
                        style={{ overflow: 'hidden' }}
                        onClick={() => onEnquireClick(`Read Blog: ${blog.title}`)}
                      >
                        <div className="position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                          <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-100 h-100 object-fit-cover transition-transform duration-300 hover-zoom"
                            style={{ objectFit: 'cover' }}
                            onError={(e) => {
                              e.target.src = 'https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada.webp';
                            }}
                          />
                        </div>
                        <div className="card-body p-3 d-flex flex-column justify-content-between">
                          <h3 
                            className="card-title h6 fw-bold mb-3 text-start" 
                            style={{ 
                              color: '#28582d', 
                              lineHeight: '1.4', 
                              fontSize: '14px',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              minHeight: '58px'
                            }}
                          >
                            {blog.title}
                          </h3>
                          <div className="text-start">
                            <span 
                              className="text-decoration-none fw-bold small" 
                              style={{ color: '#c59d5f', fontSize: '12px' }}
                            >
                              Read Full Article →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
