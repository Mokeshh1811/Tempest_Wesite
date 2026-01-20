import React from 'react';
import Navbar from './Navbar';
import Chatbot from './Chatbot';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="page-wrapper">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner footer-grid">

          {/* LEFT: BRAND / ABOUT */}
<div className="footer-brand-section">
  <img
    src="/tempest-logo.png"
    alt="Tempest logo"
    className="footer-logo-image"
  />
  <p className="footer-description">
    Building real-world engineering, AI solutions, and industry-ready talent.
  </p>
</div>


          {/* CENTER: CONTACT */}
          <div className="footer-contact-section">
            <h4 className="footer-heading">Contact</h4>

            <p>
              Email<br />
              <a href="mailto:tempesthub01@gmail.com">
                tempesthub01@gmail.com
              </a>
            </p>

            <p style={{ marginTop: '0.75rem' }}>
              Careers<br />
              <a href="mailto:careers.tempesthub@gmail.com">
                careers.tempesthub@gmail.com
              </a>
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-link-list">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/training/bootcamps">Training</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-links-section">
            <h4 className="footer-heading">Services</h4>
            <div className="footer-link-list">
              <a href="/services/cloud">Web & Cloud Solutions</a>
              <a href="/services/ai">AI & Automation</a>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Tempest. All rights reserved.
        </div>
      </footer>

      <Chatbot />
    </>
  );
};

export default Layout;
