import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import './ServicePage.css';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa6';

const ThreeDPrinting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://mokesh.pythonanywhere.com/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: '3D Printing'
        }),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! We've sent you a confirmation email.");
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        throw new Error();
      }
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= OVERVIEW ================= */}
      <Section
        eyebrow="3D Printing"
        title="From concept to physical reality."
        subtitle="Precision 3D printing services for rapid prototyping, custom parts, and product development."
      >
        <div className="service-layout">

          {/* LEFT */}
          <div className="service-text">
            <h3 className="service-heading">What We Offer</h3>
            <p>
              We deliver high-quality additive manufacturing solutions to help
              innovators, startups, and institutions bring ideas to life with
              speed and accuracy.
            </p>

            <div className="service-block">
              <h4>Services</h4>
              <ul>
                <li>Rapid prototyping & concept models</li>
                <li>Custom 3D printed parts</li>
                <li>Product design validation</li>
                <li>Functional & mechanical components</li>
                <li>Small-batch production</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Materials & Technology</h4>
              <p>
                PLA, ABS, PETG, resin-based printing, FDM technology,
                precision finishing, and design optimization.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="3D Printing Service"
              className="service-image"
            />
          </div>

        </div>
      </Section>

      {/* ================= CONTACT ================= */}
      <Section
        eyebrow="Service enquiry"
        title="Let’s build your next idea."
        subtitle="Tell us your requirements and our team will get back within 24 hours."
        align="left"
      >
        <div className="split-section">
          <div className="split-left slide-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Project Details *</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </PrimaryButton>

              {submitMessage && (
                <p
                  className={`submit-message ${
                    submitMessage.includes('Thank you') ? 'success' : 'error'
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="split-right card-grid animate-stagger">
            <div className="card glow-card">
              <h3 className="card-title">Connect With Us</h3>
              <p className="card-body">
                Follow us for updates, insights, and announcements.
              </p>

              <div className="social-icons">
                <a href="https://www.linkedin.com/company/tempesthub/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="https://x.com/Tempest_hub" target="_blank" rel="noreferrer">
                  <FaXTwitter />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/tempest.hub" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="card glow-card">
              <h3 className="card-title">Email Us</h3>
              <p className="card-body">
                Reach out directly for partnerships or project discussions.
              </p>
              <a href="mailto:tempesthub01@gmail.com" className="email-link">
                tempesthub01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ThreeDPrinting;
