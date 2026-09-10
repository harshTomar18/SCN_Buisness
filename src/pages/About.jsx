import React from 'react';
import { Link } from 'react-router-dom';

const payrollServices = [
  { icon: '⚡', title: 'End-to-End Payroll Processing', desc: 'Complete lifecycle management from attendance capture to salary disbursal.' },
  { icon: '💰', title: 'Salary Calculation & Processing', desc: 'Accurate computation of gross pay, net pay, allowances, and deductions.' },
  { icon: '📅', title: 'Attendance & Leave Management', desc: 'Seamless tracking of employee shifts, leaves, overtime, and time-off policies.' },
  { icon: '📄', title: 'Payslip Generation', desc: 'Automated generation and secure delivery of monthly digital payslips.' },
  { icon: '⚖️', title: 'Statutory Compliance Support', desc: 'Full compliance with PF, ESI, Professional Tax, LWF, and statutory filings.' },
  { icon: '📊', title: 'Payroll MIS & Reports', desc: 'Detailed analytics, variance reports, and audit-ready management summaries.' },
  { icon: '🗂️', title: 'Employee Data Management', desc: 'Centralized and secure management of complete employee master records.' },
  { icon: '🤝', title: 'Full & Final Settlement', desc: 'Hassle-free exit management, leave encashment, and final dues settlement.' },
  { icon: '🔄', title: 'Payroll Reconciliation', desc: 'Comprehensive audit trails and reconciliation prior to salary disbursal.' },
  { icon: '👔', title: 'HR & Workforce Administration', desc: 'Integrated administrative support for ongoing HR & workforce operations.' }
];

const missionPoints = [
  'Delivering accurate and timely payroll services.',
  'Helping businesses reduce the complexity and cost of HR administration.',
  'Maintaining the highest standards of confidentiality and data security.',
  'Supporting clients with efficient and scalable workforce solutions.',
  'Using technology and process-driven practices to improve HR efficiency.',
  'Building long-term relationships based on trust, transparency, and professional service.',
  'Enabling our clients to focus on their core business and growth while we manage their HR and payroll requirements.'
];

function About({ onEnquireClick }) {
  return (
    <div className="about-page animate-fade-in bg-black text-white min-vh-100">
      {/* Top Banner / Breadcrumb */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">About Us</h2>
                <ul className="breadcrumb mb-0">
                  <li><Link to="/" className="text-white opacity-75">Home</Link></li>
                  <li className="text-white fw-bold">About Us</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <button
                type="button"
                className="btn btn-solid px-4 py-2 fw-bold"
                onClick={() => onEnquireClick && onEnquireClick('Corporate Consultation')}
              >
                <i className="fa fa-phone me-2"></i> Contact Corporate HQ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Overview Section */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="badge bg-primary px-3 py-2 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
              Payroll Outsourcing & HR Solutions
            </span>
            <h1 className="display-6 fw-bold text-white mb-4">
              Simplifying Payroll. Supporting People. Enabling Business Growth.
            </h1>
            <p className="text-light opacity-85" style={{ lineHeight: '1.75', fontSize: '16px' }}>
              <strong>SCN Global Pvt. Ltd.</strong> is a professional <strong>Payroll Outsourcing and HR Solutions company</strong> committed to helping businesses simplify workforce management and streamline their HR operations.
            </p>
            <p className="text-light opacity-75" style={{ lineHeight: '1.75', fontSize: '15px' }}>
              We provide reliable and efficient payroll solutions covering the complete payroll lifecycle, including <strong>salary processing, attendance and leave management, payroll calculations, payslip generation, statutory deductions, payroll reports, and compliance support</strong>.
            </p>
            <p className="text-light opacity-75" style={{ lineHeight: '1.75', fontSize: '15px' }}>
              At SCN Global Pvt. Ltd., we understand that payroll requires <strong>accuracy, confidentiality, timeliness, and compliance</strong>. Our experienced team works closely with organizations to reduce administrative workload, minimize payroll errors, and ensure smooth and timely payroll processing.
            </p>
            <p className="text-light opacity-75 mb-0" style={{ lineHeight: '1.75', fontSize: '15px' }}>
              Our solutions are designed to support <strong>startups, SMEs, and established organizations</strong> with flexible and scalable payroll services tailored to their workforce requirements. By managing critical payroll activities, we enable our clients to focus on their core business while we take care of their payroll and HR administration.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="p-4 p-md-5 rounded-4 bg-dark border border-secondary border-opacity-25 shadow-lg position-relative overflow-hidden">
              <div className="position-absolute top-0 end-0 p-3 opacity-10">
                <i className="fa fa-briefcase display-1 text-primary"></i>
              </div>
              <h3 className="fw-bold text-white mb-3" style={{ fontSize: '22px' }}>Why Choose SCN Global?</h3>
              <p className="text-light opacity-80 small mb-4" style={{ lineHeight: '1.7' }}>
                We combine <strong>professional expertise, technology, accuracy, and client-focused service</strong> to deliver dependable payroll solutions. Our goal is to build long-term partnerships by providing transparent, secure, and hassle-free payroll management.
              </p>
              <div className="p-3 bg-black rounded-3 border-start border-4 border-primary mb-4 border border-secondary border-opacity-25">
                <p className="text-primary fw-semibold mb-0 small" style={{ fontStyle: 'italic' }}>
                  "SCN Global Pvt. Ltd. — Simplifying Payroll. Supporting People. Enabling Business Growth."
                </p>
              </div>
              <div className="p-3 bg-primary bg-opacity-10 rounded-3 border border-primary border-opacity-25 text-center">
                <span className="d-block small text-primary fw-bold text-uppercase mb-1">Our Promise</span>
                <p className="text-white fw-bold mb-0" style={{ fontSize: '15px' }}>
                  "We don't just process payroll — we help businesses manage their people better."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* One Stop Corporate Solutions & Payroll Management Section */}
      <div className="py-5 border-top border-bottom border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}>
        <div className="container py-2">
          <div className="row align-items-center g-4">
            <div className="col-lg-12">
              <div className="p-4 p-md-5 bg-dark text-white rounded-4 border border-secondary border-opacity-25 shadow-sm">
                <span className="badge bg-primary px-3 py-2 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
                  Integrated Corporate Support
                </span>
                <h2 className="display-6 fw-bold text-white mb-4">
                  One Stop Corporate Solutions & Payroll Management
                </h2>
                <div className="row g-4 text-light opacity-80" style={{ lineHeight: '1.75', fontSize: '15px' }}>
                  <div className="col-md-6">
                    <p className="mb-3">
                      <strong>One Stop Corporate Solutions</strong> is a comprehensive Corporate Facility Management and Business Support Services company, providing integrated solutions that help organizations manage workplace operations efficiently, professionally and cost-effectively.
                    </p>
                    <p className="mb-0">
                      We bring manpower, facility management, workplace support, procurement, maintenance, safety, technology and corporate services together under one roof. This enables clients to reduce fragmented vendor coordination and manage multiple operational requirements through a single accountable partner.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-3">
                      Our services are shaped around each site's specific requirements, including operating hours, manpower strength, recurring supply needs, maintenance priorities, workplace safety and reporting expectations.
                    </p>
                    <p className="mb-0">
                      Our objective is to deliver dependable services, quality products, trained manpower and customized solutions with timely execution and clear coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Payroll Services Section */}
      <div className="container py-5">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="badge bg-primary px-3 py-2 text-uppercase mb-2" style={{ letterSpacing: '1px' }}>Comprehensive Lifecycle</span>
          <h2 className="display-6 fw-bold text-white">Our Payroll Services</h2>
          <p className="text-light opacity-75">End-to-end payroll administration designed for precision, speed, and 100% compliance.</p>
        </div>

        <div className="row g-4">
          {payrollServices.map((service, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="attractive-card p-4 h-100 bg-dark text-white border border-secondary border-opacity-25 shadow-sm d-flex flex-column">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-primary bg-opacity-25 text-primary p-2 rounded-3 fs-4 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <span>{service.icon}</span>
                  </div>
                  <h3 className="h6 fw-bold text-white mb-0 flex-grow-1" style={{ fontSize: '16px' }}>{service.title}</h3>
                </div>
                <p className="text-light opacity-75 small mb-0" style={{ lineHeight: '1.65' }}>
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-5 border-top border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}>
        <div className="container py-2">
          <div className="row g-4">
            {/* Vision */}
            <div className="col-md-5">
              <div className="attractive-card p-4 p-md-5 bg-dark text-white border border-secondary border-opacity-25 h-100 d-flex flex-column">
                <div className="card-icon-badge mb-3">
                  <i className="fa fa-eye text-primary fs-3"></i>
                </div>
                <h3 className="fw-bold text-white mb-3" style={{ fontSize: '24px' }}>Our Vision</h3>
                <p className="text-light opacity-85 flex-grow-1" style={{ lineHeight: '1.75', fontSize: '15px' }}>
                  To become a <strong>trusted and leading HR and Payroll Outsourcing partner</strong>, recognized for delivering accurate, technology-driven, and people-focused workforce solutions that help businesses grow with confidence.
                </p>
                <div className="p-3 bg-black rounded-3 border-start border-4 border-primary mt-3">
                  <p className="text-white-50 small mb-0">
                    Empowering organizations nationwide through technology-driven HR leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="col-md-7">
              <div className="attractive-card p-4 p-md-5 bg-dark text-white border border-secondary border-opacity-25 h-100">
                <div className="card-icon-badge mb-3">
                  <i className="fa fa-bullseye text-primary fs-3"></i>
                </div>
                <h3 className="fw-bold text-white mb-3" style={{ fontSize: '24px' }}>Our Mission</h3>
                <p className="text-light opacity-85 mb-3" style={{ lineHeight: '1.7', fontSize: '15px' }}>
                  At <strong>SCN Global Pvt. Ltd.</strong>, our mission is to simplify HR and payroll management for organizations through <strong>reliable, accurate, transparent, and cost-effective solutions</strong>.
                </p>
                <p className="text-primary fw-semibold small mb-3">We are committed to:</p>
                <ul className="list-unstyled text-light opacity-85 small d-flex flex-column gap-2 mb-0" style={{ fontSize: '14px' }}>
                  {missionPoints.map((pt, index) => (
                    <li key={index} className="d-flex align-items-start gap-2">
                      <i className="fa fa-check-circle text-primary mt-1"></i>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
