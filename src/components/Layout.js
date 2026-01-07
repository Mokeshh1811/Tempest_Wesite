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
        <div className="footer-inner">

          {/* BRAND / ABOUT */}
          {/* <div className="footer-col">
            <h4 className="footer-brand">Tempest</h4>
            <p>
              Tempest is a technology and education studio delivering
              real-world engineering solutions, AI-first services, and
              industry-ready training.
            </p>
          </div> */}

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/training/bootcamps">Training</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/services/cloud">Web & Cloud Solutions</a></li>
              <li><a href="/services/ai">AI & Automation</a></li>
              <li><a href="/services/content-writing">Content Writing</a></li>
              <li><a href="/services/video-editing-production">Video Editing</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              Email: <br />
              <a href="mailto:tempesthub01@gmail.com">
                tempesthub01@gmail.com
              </a>
            </p>

            <p style={{ marginTop: '0.75rem' }}>
              Careers: <br />
              <a href="mailto:careers.tempesthub@gmail.com">
                careers.tempesthub@gmail.com
              </a>
            </p>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Tempest. All rights reserved.
          </span>
        </div>
      </footer>

      {/* <Chatbot /> */}
    </>
  );
};

export default Layout;
