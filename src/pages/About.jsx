import React from 'react';

function About() {
  return (
    <div className="about-page container py-5 animate-fade-in text-white">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3"><span className="text-gradient">About</span> This Application</h1>
            <p className="lead text-muted-custom">Discover how this boilerplate stack empowers developers to deliver beautiful, responsive websites quickly.</p>
          </div>

          <div className="row g-4 align-items-center mb-5">
            <div className="col-md-6">
              <div className="bg-glass p-4 rounded-4 border border-light-custom">
                <h3 className="h4 text-white mb-3">Included Technologies</h3>
                <ul className="list-group list-group-flush bg-transparent">
                  <li className="list-group-item bg-transparent text-white border-light-custom d-flex justify-content-between align-items-center">
                    <span>🚀 Vite + React</span>
                    <span className="badge bg-primary rounded-pill">JavaScript</span>
                  </li>
                  <li className="list-group-item bg-transparent text-white border-light-custom d-flex justify-content-between align-items-center">
                    <span>🛣️ React Router DOM</span>
                    <span className="badge bg-success rounded-pill">v6+</span>
                  </li>
                  <li className="list-group-item bg-transparent text-white border-light-custom d-flex justify-content-between align-items-center">
                    <span>💅 Bootstrap CSS</span>
                    <span className="badge bg-info rounded-pill">v5.3+</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="h4 mb-3">Client-Side Routing</h3>
              <p className="text-muted-custom">
                By leveraging <strong>React Router DOM</strong>, page transitions are handled entirely in the browser. This eliminates the full-page reload delay, keeping state intact and providing a fluid, desktop-like app experience.
              </p>
              <p className="text-muted-custom">
                Bootstrap provides the foundational grid and responsiveness, while our custom CSS layer gives it a premium glassmorphic dark look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
