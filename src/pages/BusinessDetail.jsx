import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const verticalsData = {
  'it-services': {
    title: 'SCN Global IT Services',
    subtitle: 'Innovative Solutions for Growth & Digital Transformation',
    heroImage: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1181316-1181316-1024x684.jpg',
    
    heroHeadline: 'Innovative Solutions for Growth',
    heroIntro: 'At SCN Business Group, we are committed to empowering people by creating inclusive and sustainable workspaces. By blending human-first design with the power of top brains, we foster collaboration and increase engagement across all roles. Our tailored, persona-driven environments enhance productivity, promote well-being, and support a healthy work-life balance. These dynamic spaces fuel innovation and creativity—placing individuals at the centre of progress.',
    
    numberedServices: [
      {
        num: '01',
        title: 'Web Development',
        tagline: 'Elevate your brand with our custom web design and development solutions.',
        description: 'We craft visually impactful, user-centric websites tailored to your specific business goals. Enhance your digital presence with a site that not only impresses but also fosters engagement and drives sustainable growth. Let’s create your digital masterpiece together.',
        image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1181271-1181271-1024x684.jpg'
      },
      {
        num: '02',
        title: 'Digital Marketing',
        tagline: 'Accelerate your brand’s growth with our results-driven digital marketing solutions.',
        description: 'We design data-backed strategies to increase visibility, boost engagement, and drive conversions across all digital platforms. From SEO and social media to paid campaigns and content marketing, we tailor every approach to your unique business goals. Let’s amplify your online impact and grow your digital footprint with precision.',
        image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-95916-95916-1024x683.jpg'
      },
      {
        num: '03',
        title: 'Android & Mobile App Development',
        tagline: 'Empower your business with high-performance native Android & iOS mobile applications.',
        description: 'We deliver innovative, scalable, and secure Android and cross-platform mobile apps designed to streamline operations, enhance customer engagement, and future-proof your enterprise. From native Android development (Kotlin/Java) and Flutter apps to UI/UX design, cloud API integration, and Play Store deployment, our solutions turn your mobile vision into reality.',
        image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-7793726-7793726-1024x683.jpg'
      }
    ],

    coreEmpowermentStatement: 'At SCN Business Group, we empower businesses with cutting-edge digital solutions. Our expert team delivers high-performance Web Development, results-driven Digital Marketing, strategic SEO, native Android App Development, and impactful UI/UX & Graphic Design services. Whether you’re building your online presence or optimising for growth, we provide tailored solutions that turn ideas into digital success.',

    workplaceEvolutionTitle: 'Cutting-Edge Solutions for Workplace Evolution',
    workplaceEvolutionServices: [
      {
        icon: '📱',
        title: 'Android & Mobile Solutions',
        tagline: 'Custom Android apps, Play Store deployment, and mobile API integration.',
        description: 'Our mobile engineering team builds responsive, feature-rich Android applications with intuitive interfaces, real-time sync, secure authentication, and high performance across all mobile devices.',
        image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-7709224-7709224-1024x683.jpg'
      },
      {
        icon: '🔌',
        title: 'Network Engineering',
        tagline: 'Build a reliable, high-performance digital foundation with our Network Engineering services.',
        description: 'We design, implement, and manage secure and scalable network infrastructures that support your business operations. From LAN/WAN optimisation to cloud connectivity and network security, our expert engineers ensure uninterrupted performance, enhanced data flow, and future-ready architecture tailored to your enterprise needs.',
        image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-442150-442150-1024x683.jpg'
      },
      {
        icon: '💻',
        title: 'IT Development Solution',
        tagline: 'Drive innovation with our comprehensive IT Development Solutions.',
        description: 'We deliver end-to-end software and application development services tailored to your unique business objectives. Whether it’s building custom platforms, modernising legacy systems, or integrating cutting-edge technologies, our expert team ensures scalable, secure, and high-performing solutions that accelerate your digital growth.',
        image: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1181271-1181271-1024x684.jpg'
      }
    ],

    differentiators: [
      {
        icon: '🏆',
        title: 'Proven Expertise & Industry Experience',
        desc: 'Our skilled team brings years of industry expertise to deliver top-tier web & mobile solutions customised to your specific needs.'
      },
      {
        icon: '🎯',
        title: 'Tailored Solutions to Fit Your Needs',
        desc: 'We craft targeted, scalable designs aligned with your business objectives to ensure maximum impact and engagement.'
      },
      {
        icon: '🛡️',
        title: 'Dedicated Support You Can Rely On',
        desc: 'Our focus is on customer satisfaction, offering continuous support and maintenance to help your business grow online'
      }
    ]
  },

  'it-training': {
    title: 'SCN Global IT Training Institute',
    subtitle: 'Skill Development & Job-Oriented Technical Training Programs',
    heroImage: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/annie-spratt-QckxruozjRg-unsplash-1-1024x683.jpg',
    heroHeadline: 'Job-Oriented Technical Training',
    heroIntro: 'SCN Global IT Training Institute is dedicated to empowering students, fresh graduates, and working professionals with job-ready technical skills. Our practical, project-based curriculum is led by industry veterans to bridge the gap between academic education and corporate technology demands.',
    numberedServices: [
      {
        num: '01',
        title: 'Full-Stack Web & Android Development',
        tagline: 'Master modern web & mobile technologies through hands-on development.',
        description: 'Comprehensive training in React.js, Android (Kotlin/Java), Node.js, Express, MongoDB, Python, HTML5, CSS3, and Git workflows with live client projects.'
      },
      {
        num: '02',
        title: 'UI/UX & Graphic Design',
        tagline: 'Design intuitive interfaces and compelling digital assets.',
        description: 'Hands-on training in Figma, Adobe XD, Photoshop, Illustrator, user research, wireframing, and interactive prototyping.'
      },
      {
        num: '03',
        title: 'Digital Marketing Masterclass',
        tagline: 'Master SEO, PPC, and Social Media campaigns.',
        description: 'In-depth learning of Google Analytics, Technical SEO, Google Ads, Social Media Marketing, and Content Strategy.'
      }
    ],
    coreEmpowermentStatement: 'At SCN Global IT Training Institute, we transform students into high-performing tech professionals with 100% practical exposure and placement support.',
    workplaceEvolutionTitle: 'Specialized Skill Modules',
    workplaceEvolutionServices: [
      {
        icon: '📱',
        title: 'Android & Mobile App Training',
        tagline: 'Build native Android apps from scratch.',
        description: 'Learn Kotlin, Android SDK, Jetpack Compose, REST APIs, Room database, and Google Play Store publishing.'
      },
      {
        icon: '🔍',
        title: 'SEO & Search Analytics',
        tagline: 'Master search engine algorithms.',
        description: 'Learn keyword research, technical site audits, backlink strategies, and conversion rate optimization.'
      },
      {
        icon: '🧪',
        title: 'Software Testing & QA',
        tagline: 'Ensure software quality and zero defects.',
        description: 'Manual and automated testing using Selenium, Postman, JIRA, and TestNG.'
      }
    ],
    differentiators: [
      { icon: '💻', title: '100% Practical Projects', desc: 'Work on real corporate web & Android projects under senior software engineering mentors.' },
      { icon: '🤝', title: 'Placement Assistance', desc: 'Mock interviews, resume building, and direct referrals across SCN partner network.' },
      { icon: '📜', title: 'Recognized Certification', desc: 'Receive ISO-compliant course completion certificates valued by employers.' }
    ]
  },

  'personality-development': {
    title: 'SCN Global Personality Development Training',
    subtitle: 'Professional Growth, Soft Skills & Leadership Mentorship',
    heroImage: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-15543214-15543214-1024x683.jpg',
    heroHeadline: 'Transform Your Executive Presence',
    heroIntro: 'Our Personality Development Training program is designed to enhance personal transformation and career growth. We empower individuals with essential soft skills, corporate etiquette, fluent communication, and confidence needed to excel in competitive corporate environments.',
    numberedServices: [
      {
        num: '01',
        title: 'Corporate Communication',
        tagline: 'Master effective verbal and non-verbal expression.',
        description: 'Learn active listening, persuasive speaking, body language awareness, and clear corporate email writing.'
      },
      {
        num: '02',
        title: 'Executive Etiquette',
        tagline: 'Develop professional workplace behavior and presence.',
        description: 'Master business meeting etiquette, dress codes, personal branding, and cross-cultural communication.'
      },
      {
        num: '03',
        title: 'Leadership & Mindset',
        tagline: 'Build confidence, decision-making, and team leadership.',
        description: 'Develop emotional intelligence, conflict resolution strategies, stage confidence, and team motivation tactics.'
      }
    ],
    coreEmpowermentStatement: 'SCN Personality Development equips professionals with the confidence, articulation, and charisma required to lead teams and succeed in global interviews.',
    workplaceEvolutionTitle: 'Core Skill Development Tracks',
    workplaceEvolutionServices: [
      { icon: '🎙️', title: 'Public Speaking & Stage Presence', tagline: 'Overcome stage fear.', description: 'Interactive speeches, group discussions, and voice modulation exercises.' },
      { icon: '💼', title: 'Interview & Resume Pitching', tagline: 'Acing executive interviews.', description: 'Mock interview rounds, HR question handling, and elevator pitch crafting.' },
      { icon: '🤝', title: 'Team Dynamics & Emotional Intelligence', tagline: 'Building strong workplace relationships.', description: 'Empathy training, active listening, and collaborative problem-solving.' }
    ],
    differentiators: [
      { icon: '🌟', title: 'Interactive Role Play', desc: 'Practice real-life corporate scenarios with experienced mentors.' },
      { icon: '📈', title: 'Personalized Feedback', desc: 'One-on-one evaluations to identify strengths and speech improvements.' },
      { icon: '🎓', title: 'Corporate Alignment', desc: 'Curriculum designed in consultation with HR leaders across India.' }
    ]
  },

  'hr-training': {
    title: 'SCN Global HR Training Institute',
    subtitle: 'Practical Human Resource Management & Payroll Certification',
    heroImage: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-8730276-8730276-1024x684.jpg',
    heroHeadline: 'Practical HR Generalist & Payroll Mastery',
    heroIntro: 'The SCN Global HR Training Institute offers practical, hands-on HR training designed to transform candidates into job-ready HR Generalists and Specialists. Our training covers real-world payroll calculation, statutory compliance, talent acquisition, labor laws, and HR portal operations.',
    numberedServices: [
      { num: '01', title: 'Practical Payroll & Tax', tagline: 'End-to-end monthly salary administration.', description: 'Compute gross-to-net salary, attendance, CTC breakdowns, TDS deductions, and Form 16 issuance.' },
      { num: '02', title: 'Statutory Compliance (PF/ESI)', tagline: 'Master regulatory portal filings.', description: 'Generate PF ECR challans, ESI monthly contributions, Professional Tax, and Labor Welfare Fund returns.' },
      { num: '03', title: 'Talent Acquisition & Sourcing', tagline: 'Master corporate recruitment techniques.', description: 'Learn job portal sourcing (Naukri, LinkedIn), candidate screening, salary negotiations, and offer releases.' }
    ],
    coreEmpowermentStatement: 'SCN HR Training Institute equips HR professionals with real portal experience, labor law mastery, and practical payroll processing skills.',
    workplaceEvolutionTitle: 'Specialized HR Modules',
    workplaceEvolutionServices: [
      { icon: '📊', title: 'HR Generalist Operations', tagline: 'Manage day-to-day employee lifecycles.', description: 'Onboarding, appraisal systems, exit management, and policy documentation.' },
      { icon: '📜', title: 'Labor Laws & Audits', tagline: 'Ensure zero legal non-compliance.', description: 'Factories Act, Industrial Disputes Act, Shops & Est Act, and statutory audit compliance.' },
      { icon: '💼', title: 'HR Analytics & Excel', tagline: 'Data-driven HR reporting.', description: 'VLOOKUP, Pivot Tables, HR dashboards, and workforce planning analytics.' }
    ],
    differentiators: [
      { icon: '🌐', title: 'Live Portal Access', desc: 'Practice directly on active PF, ESI, and Payroll software portals.' },
      { icon: '🤝', title: '100% Placement Support', desc: 'Direct corporate referrals to leading SCN client partners.' },
      { icon: '📜', title: 'Certified HR Generalist', desc: 'Earn recognized credentials validating your HR generalist capabilities.' }
    ]
  },

  'us-staffing': {
    title: 'SCN Global U. S. Staffing',
    subtitle: 'Offshore Talent Acquisition & Staffing for North American Clients',
    heroImage: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-1024248-1024248-1024x683.jpg',
    heroHeadline: 'Offshore & Cross-Border US Recruitment',
    heroIntro: 'SCN Global U.S. Staffing specializes in delivering high-caliber offshore recruitment services to US IT consulting firms, MSPs, and enterprise clients. We bridge US talent demand with dedicated offshore recruiters, bench sales experts, and technical recruiters working in night shifts.',
    numberedServices: [
      { num: '01', title: 'US Technical Recruitment', tagline: 'W2, C2C, and 1099 talent acquisition.', description: 'End-to-end recruitment covering Software Engineers, Cloud Architects, Data Engineers, and Project Managers.' },
      { num: '02', title: 'Dedicated Recruiter Pods', tagline: 'Full-time offshore recruiter teams.', description: 'Hire full-time offshore recruiters operating in EST/PST time zones, reducing your cost per hire by over 60%.' },
      { num: '03', title: 'Bench Sales Marketing', tagline: 'Consultant placement across US vendors.', description: 'Marketing bench consultants to Prime Vendors and Tier-1 Implementation Partners across North America.' }
    ],
    coreEmpowermentStatement: 'SCN U.S. Staffing offers seamless night-shift recruiter deployment, deep US visa knowledge, and agile talent sourcing for US IT clients.',
    workplaceEvolutionTitle: 'US Staffing Capabilities',
    workplaceEvolutionServices: [
      { icon: '🇺🇸', title: 'Tax Terms & Visas (W2, C2C, H1B)', tagline: 'Complete compliance handling.', description: 'Verification of US work authorizations (H1B, OPT/CPT, Green Card, US Citizen).' },
      { icon: '🔍', title: 'US Portal Sourcing', tagline: 'Dice, Monster, LinkedIn Recruiter mastery.', description: 'Advanced Boolean search strings, candidate phone vetting, and rate negotiation.' },
      { icon: '📞', title: 'Night Shift Synchronization', tagline: '100% EST / PST overlap.', description: 'Real-time client communication, submission handling, and candidate scheduling.' }
    ],
    differentiators: [
      { icon: '🕒', title: 'EST/PST Night Shift Overlap', desc: 'Seamless synchronization with US client business hours.' },
      { icon: '💰', title: '60% Cost Reduction', desc: 'High-performing offshore staffing at a fraction of US onshore recruiter costs.' },
      { icon: '⚡', title: 'Fast Placement Cycles', desc: 'Pre-vetted talent pool ready for quick candidate submissions.' }
    ]
  },

  'payroll-management': {
    title: 'SCN Global Payroll & Corporate Solutions',
    subtitle: 'One Stop Corporate Solutions, Facility Management & Automated Payroll Outsourcing',
    heroImage: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-6694543-6694543-1024x683.jpg',
    heroHeadline: 'One Stop Corporate Solutions & Payroll Management',
    heroIntro: 'One Stop Corporate Solutions is a comprehensive Corporate Facility Management and Business Support Services company, providing integrated solutions that help organizations manage workplace operations efficiently, professionally and cost-effectively.',
    corporateOverviewParagraphs: [
      "One Stop Corporate Solutions is a comprehensive Corporate Facility Management and Business Support Services company, providing integrated solutions that help organizations manage workplace operations efficiently, professionally and cost-effectively.",
      "We bring manpower, facility management, workplace support, procurement, maintenance, safety, technology and corporate services together under one roof. This enables clients to reduce fragmented vendor coordination and manage multiple operational requirements through a single accountable partner.",
      "Our services are shaped around each site's specific requirements, including operating hours, manpower strength, recurring supply needs, maintenance priorities, workplace safety and reporting expectations.",
      "Our objective is to deliver dependable services, quality products, trained manpower and customized solutions with timely execution and clear coordination."
    ],
    numberedServices: [
      { num: '01', title: 'Monthly Salary & Payroll Processing', tagline: 'Accurate salary calculation & disbursal.', description: 'Computation of gross-to-net pay, CTC breakdowns, overtime, bonus, incentives, and automated bank transfer files.' },
      { num: '02', title: 'Corporate Facility & Workplace Management', tagline: 'Integrated manpower, maintenance & safety.', description: 'Facility support, workplace procurement, site maintenance, safety standards, and single-window vendor coordination.' },
      { num: '03', title: 'Statutory Filings (PF/ESI/PT) & Tax', tagline: 'Zero non-compliance & audit-ready TDS.', description: 'Timely generation of ECR challans, ESI returns, Professional Tax, Form 16 issuance, and statutory compliance audits.' }
    ],
    coreEmpowermentStatement: 'Our objective is to deliver dependable services, quality products, trained manpower and customized solutions with timely execution and clear coordination.',
    workplaceEvolutionTitle: 'One Stop Corporate Solutions Overview',
    workplaceEvolutionServices: [
      { icon: '🏢', title: 'Workplace Operations & Support', tagline: 'Customized site solutions.', description: 'Services shaped around operating hours, manpower strength, recurring supply needs, and workplace reporting expectations.' },
      { icon: '📱', title: 'Employee Self-Service (ESS)', tagline: 'Digital payslips & leave management.', description: 'Mobile app and web portal for downloading payslips, applying for leave, and viewing Form 16.' },
      { icon: '🛡️', title: 'Single Accountable Partner', tagline: 'Zero fragmented vendor coordination.', description: 'Integrated management bringing manpower, facility management, procurement, maintenance, and safety under one roof.' }
    ],
    differentiators: [
      { icon: '✅', title: 'Integrated Solutions', desc: 'Bringing manpower, facility management, safety, and tech under one single accountable partner.' },
      { icon: '🔒', title: 'Tailored Site Execution', desc: 'Customized around site operating hours, manpower strength, and maintenance priorities.' },
      { icon: '🧑‍💼', title: 'Dependable Coordination', desc: 'Quality products, trained manpower, and timely execution with clear coordination.' }
    ]
  },

  'general-staffing': {
    title: 'SCN Global General Staffing',
    subtitle: 'Temporary, Flexible & Permanent Workforce Deployment Nationwide',
    heroImage: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-5990042-5990042-1024x683.jpg',
    heroHeadline: 'Agile Pan-India Staffing Solutions',
    heroIntro: 'SCN Global General Staffing provides agile workforce solutions tailored for industrial, retail, administrative, logistics, and commercial operations across India. We manage recruitment, employment contracts, payroll, and compliance so you can focus on core business growth.',
    numberedServices: [
      { num: '01', title: 'Flexi-Staffing & Temp Contracts', tagline: 'Adapt workforce size to market demands.', description: 'Scale your team up or down seamlessly during peak seasons, product launches, or project deadlines.' },
      { num: '02', title: 'Industrial & Blue-Collar Staffing', tagline: 'Reliable plant and warehouse workforce.', description: 'Deployment of machine operators, warehouse associates, assembly technicians, and logistics personnel.' },
      { num: '03', title: 'White-Collar Support Staffing', tagline: 'Trained office and admin personnel.', description: 'Administrative assistants, data entry operators, accountants, front-office executives, and customer service staff.' }
    ],
    coreEmpowermentStatement: 'SCN General Staffing ensures rapid turnaround time, 100% statutory compliance, and zero co-employment risk for commercial clients.',
    workplaceEvolutionTitle: 'Staffing Models',
    workplaceEvolutionServices: [
      { icon: '⚡', title: 'Rapid Turnaround Sourcing', tagline: 'Quick candidate onboarding.', description: 'Large candidate database ensuring quick deployment for bulk hiring requirements.' },
      { icon: '📋', title: 'Compliant Off-Roll Placement', tagline: 'Third-party contract management.', description: 'We handle employee contracts, PF/ESI registration, monthly salaries, and statutory registers.' },
      { icon: '🎯', title: 'Permanent Executive Hiring', tagline: 'Senior level permanent recruitment.', description: 'Targeted headhunting for permanent managerial and leadership roles.' }
    ],
    differentiators: [
      { icon: '🗺️', title: 'Pan-India Footprint', desc: 'Ability to source and deploy candidates across tier-1, tier-2, and tier-3 cities.' },
      { icon: '⚖️', title: 'Co-Employment Shield', desc: 'Complete legal compliance shielding client organizations from workforce liabilities.' },
      { icon: '📈', title: 'Transparent SLA Metrics', desc: 'Clear SLAs for fulfillment rates, attendance, and candidate retention.' }
    ]
  },

  'bpo-services': {
    title: 'SCN Global BPO Services',
    subtitle: '24/7 Inbound, Outbound & Non-Voice Customer Support Center',
    heroImage: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-7709224-7709224-1024x683.jpg',
    heroHeadline: 'Omnichannel BPO & Customer Experience Support',
    heroIntro: 'SCN Global BPO Services provides multi-channel customer relationship management and business process outsourcing solutions. We operate 24/7 contact centers equipped with trained agents and modern IVR infrastructure to deliver exceptional customer experiences.',
    numberedServices: [
      { num: '01', title: 'Inbound Customer Care (Voice)', tagline: '24/7 multi-lingual query resolution.', description: '24/7 customer query resolution, technical support, order management, and helpline services.' },
      { num: '02', title: 'Outbound Tele-Sales & Lead Gen', tagline: 'Targeted tele-calling and sales drives.', description: 'Targeted tele-calling campaigns, customer feedback collection, survey conducting, and sales appointment setting.' },
      { num: '03', title: 'Non-Voice Live Chat & Email', tagline: 'Digital customer support channels.', description: 'Real-time live chat assistance, email ticket management, and social media customer query resolution.' }
    ],
    coreEmpowermentStatement: 'SCN BPO Services elevates your brand image through 24/7 multi-channel agent support, high First Call Resolution (FCR), and robust quality audits.',
    workplaceEvolutionTitle: 'BPO Operational Capabilities',
    workplaceEvolutionServices: [
      { icon: '🗣️', title: 'Multilingual Voice Operations', tagline: 'English, Hindi, and Regional support.', description: 'Fluent agents trained in clear communication and customer empathy.' },
      { icon: '🗄️', title: 'Back-Office & Data Entry', tagline: 'Document digitization and processing.', description: 'Catalog management, data verification, and workflow administration.' },
      { icon: '📊', title: 'Quality Assurance & Audits', tagline: 'Strict call quality monitoring.', description: '100% call recording, SLA tracking, CSAT measurement, and continuous coaching.' }
    ],
    differentiators: [
      { icon: '⏰', title: '24/7 Uninterrupted Operation', desc: 'Round-the-clock shift support guaranteeing continuous customer availability.' },
      { icon: '📞', title: 'Advanced IVR & Dialers', desc: 'Modern predictive dialers, call recording, and CRM integrations.' },
      { icon: '📈', title: 'High CSAT & FCR Metrics', desc: 'Focus on resolving customer issues on the very first interaction.' }
    ]
  },

  'real-estate': {
    title: 'SCN Global Real Estate',
    subtitle: 'Commercial Property Advisory & Corporate Office Space Leasing',
    heroImage: 'https://scnbusinessgroup.com/wp-content/uploads/2025/08/pexels-photo-101808-101808-1024x683.jpg',
    heroHeadline: 'Commercial Property & Workspace Advisory',
    heroIntro: 'SCN Global Real Estate provides end-to-end commercial property advisory, office space leasing, and real estate investment management. We assist growing companies, tech firms, and enterprises in securing prime commercial spaces tailored for modern work cultures.',
    numberedServices: [
      { num: '01', title: 'Commercial Office Space Leasing', tagline: 'Site selection & lease negotiations.', description: 'Site selection, lease negotiations, and space acquisition for IT parks, commercial towers, and corporate hubs.' },
      { num: '02', title: 'Plug-and-Play Coworking Setup', tagline: 'Managed & flexible workspaces.', description: 'Flexible managed office space setup, customized corporate interiors, and shared workspace solutions.' },
      { num: '03', title: 'Real Estate Investment Advisory', tagline: 'Yield-focused commercial asset portfolio.', description: 'Strategic commercial real estate portfolio investments, land acquisition, and yield-focused asset management.' }
    ],
    coreEmpowermentStatement: 'SCN Real Estate simplifies corporate property leasing, offering access to prime commercial locations across Noida, Delhi NCR, and major metro cities.',
    workplaceEvolutionTitle: 'Real Estate Services Overview',
    workplaceEvolutionServices: [
      { icon: '🏢', title: 'IT Park & Tech Space Leasing', tagline: 'Prime commercial office spaces.', description: 'Grade-A commercial spaces with 100% power backup, high-speed connectivity, and ample parking.' },
      { icon: '⚖️', title: 'Legal & Lease Diligence', tagline: 'Transparent contract terms.', description: 'Market valuation, legal due diligence, lease renewal restructuring, and facility advisory.' },
      { icon: '🛠️', title: 'Corporate Fit-Out Advisory', tagline: 'Interior setup & workspace planning.', description: 'Guidance on modern office layouts, ergonomic furniture, and tech infrastructure.' }
    ],
    differentiators: [
      { icon: '📍', title: 'Prime Location Access', desc: 'Direct listings across Noida Sector 63, Cyber City, and Delhi NCR commercial hubs.' },
      { icon: '🤝', title: 'Expert Commercial Negotiation', desc: 'Securing the best rent rates, lock-in periods, and fit-out rent-free periods.' },
      { icon: '📜', title: '100% Clear Title Verification', desc: 'Rigorous legal check ensuring dispute-free commercial properties.' }
    ]
  }
};

function BusinessDetail({ onEnquireClick }) {
  const { slug } = useParams();
  const data = verticalsData[slug];

  if (!data) {
    return <Navigate to="/our-business" replace />;
  }

  return (
    <div className="business-detail-page animate-fade-in bg-black text-white min-vh-100">
      {/* Top Banner */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">{data.title}</h2>
                <ul className="breadcrumb mb-0">
                  <li><Link to="/" className="text-white opacity-75">Home</Link></li>
                  <li><Link to="/our-business" className="text-white opacity-75">Our Business</Link></li>
                  <li className="text-white fw-bold">{data.title}</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <button 
                type="button" 
                className="btn btn-solid px-4 py-2 fw-bold"
                onClick={() => onEnquireClick && onEnquireClick(`Consultation for ${data.title}`)}
              >
                <i className="fa fa-phone me-2"></i> Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Overview Section */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge bg-primary px-3 py-2 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
              Innovative Solutions
            </span>
            <h1 className="display-6 fw-bold text-white mb-3">{data.heroHeadline || data.title}</h1>
            {data.corporateOverviewParagraphs ? (
              <div className="d-flex flex-column gap-3 mt-3">
                {data.corporateOverviewParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-light opacity-75 mb-0" style={{ lineHeight: '1.75', fontSize: '15px' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-light opacity-75" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                {data.heroIntro || data.overview}
              </p>
            )}

            <div className="p-4 rounded-4 bg-dark border-start border-4 border-primary mt-4 border border-secondary border-opacity-25">
              <p className="text-white fw-semibold mb-0" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                "{data.coreEmpowermentStatement}"
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="attractive-card overflow-hidden p-0 shadow-lg border border-secondary border-opacity-25 bg-dark">
              <img 
                src={data.heroImage} 
                alt={data.title} 
                className="w-100 object-fit-cover"
                style={{ maxHeight: '420px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Numbered Core Services Section (01, 02, 03) */}
      {data.numberedServices && (
        <div className="py-5 border-top border-bottom border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}>
          <div className="container py-2">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="badge bg-primary px-3 py-2 text-uppercase mb-2" style={{ letterSpacing: '1px' }}>Core Services</span>
              <h2 className="display-6 fw-bold text-white">Targeted Solutions for Growth</h2>
            </div>

            <div className="row g-4">
              {data.numberedServices.map((service, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="attractive-card p-4 d-flex flex-column h-100 position-relative bg-dark text-white border border-secondary border-opacity-25">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="display-6 fw-bold text-primary font-monospace">{service.num}</span>
                      <span className="badge bg-primary text-white px-2 py-1 small rounded-pill">Vertical Focus</span>
                    </div>
                    <h3 className="h5 fw-bold text-white mb-2">{service.title}</h3>
                    <p className="text-primary fw-semibold small mb-3">{service.tagline}</p>
                    <p className="text-light opacity-75 small mb-4 flex-grow-1" style={{ lineHeight: '1.65' }}>
                      {service.description}
                    </p>
                    <button 
                      type="button" 
                      className="btn btn-ghost btn-sm rounded-2 fw-semibold mt-auto align-self-start"
                      onClick={() => onEnquireClick && onEnquireClick(`Inquiry for ${service.title}`)}
                    >
                      Enquire for Details <i className="fa fa-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Workplace Evolution & Technical Solutions Section */}
      {data.workplaceEvolutionServices && (
        <div className="py-5 bg-black">
          <div className="container py-2">
            <div className="text-center max-w-3xl mx-auto mb-5">
              <span className="badge bg-primary px-3 py-2 text-uppercase mb-2" style={{ letterSpacing: '1px' }}>Workplace Evolution</span>
              <h2 className="display-6 fw-bold text-white">{data.workplaceEvolutionTitle}</h2>
            </div>

            <div className="row g-4">
              {data.workplaceEvolutionServices.map((item, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="attractive-card p-4 d-flex flex-column h-100 bg-dark text-white border border-secondary border-opacity-25">
                    <div className="card-icon-badge mb-3">
                      <span>{item.icon}</span>
                    </div>
                    <h3 className="h5 fw-bold text-white mb-2">{item.title}</h3>
                    <p className="text-primary fw-semibold small mb-2">{item.tagline}</p>
                    <p className="text-light opacity-75 small mb-4 flex-grow-1" style={{ lineHeight: '1.65' }}>
                      {item.description}
                    </p>
                    <button 
                      type="button" 
                      className="btn btn-solid btn-sm rounded-2 fw-semibold mt-auto align-self-start"
                      onClick={() => onEnquireClick && onEnquireClick(`Consultation for ${item.title}`)}
                    >
                      Learn More <i className="fa fa-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Differentiators & Support Pillars Section */}
      {data.differentiators && (
        <div className="py-5 border-top border-bottom border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}>
          <div className="container py-2">
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="badge bg-primary px-3 py-2 text-uppercase mb-2" style={{ letterSpacing: '1px' }}>Why Choose SCN</span>
              <h2 className="display-6 fw-bold text-white">Proven Support & Industry Leadership</h2>
            </div>

            <div className="row g-4 justify-content-center">
              {data.differentiators.map((diff, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="attractive-card p-4 text-center d-flex flex-column h-100 bg-dark text-white border border-secondary border-opacity-25">
                    <div className="card-icon-badge mx-auto mb-3">
                      <span>{diff.icon}</span>
                    </div>
                    <h4 className="h5 fw-bold text-white mb-2">{diff.title}</h4>
                    <p className="text-light opacity-75 small mb-0" style={{ lineHeight: '1.65' }}>
                      {diff.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="py-5 bg-black">
        <div className="container text-center py-3">
          <h3 className="fw-bold text-white mb-3">Ready to Transform Your Business with {data.title}?</h3>
          <p className="text-light opacity-75 max-w-2xl mx-auto mb-4" style={{ maxWidth: '650px' }}>
            Contact our Client Account Managers or visit our Head Office in Noida Sector 63 to discuss tailored enterprise solutions.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button 
              type="button" 
              className="btn btn-solid px-4 py-3 rounded-3 fw-bold"
              onClick={() => onEnquireClick && onEnquireClick(`Get Consultation for ${data.title}`)}
            >
              Get Instant Consultation
            </button>
            <Link to="/our-business" className="btn btn-ghost px-4 py-3 rounded-3 fw-bold">
              Explore All Business Verticals
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetail;
