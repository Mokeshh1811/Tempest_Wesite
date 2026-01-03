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
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <h4>Who we are</h4>
            <p>Tempest is a technology studio led by Akshay, focused on turning ideas into impactful digital experiences with clear vision and mission.</p>
          </div>
          <div>
            <h4>What we do</h4>
            <p>We design, develop and educate through product engineering, AI-first services and industry-ready training programs.</p>
          </div>
          <div>
            <h4>Career</h4>
            <p>Write to careers@tempeststudio.com with your portfolio to explore roles in design, engineering and training.</p>
          </div>
          <div className="connect-section">
            <h4 className="connect-text">Let&apos;s connect</h4>
            <p>Email: hello@tempeststudio.com<br />Phone: +91-98765-43210</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tempest. All rights reserved.</span>
        </div>
      </footer>
      <Chatbot />
    </>
  );
};

export default Layout;
