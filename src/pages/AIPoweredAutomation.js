import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa6';

const AIPoweredAutomation = () => {
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
      const response = await fetch('http://localhost:3003/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'AI-Powered Automation'
        }),
      });

      if (!response.ok) throw new Error();

      setSubmitMessage("Thank you! We've sent you a confirmation email.");
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= SERVICE OVERVIEW ================= */}
      <Section
        eyebrow="AI-Powered Automation"
        title="Intelligent automation of repetitive tasks."
        subtitle="AI automation for classification, routing, summarization, and quality checks."
      >
        <div className="service-layout">

          {/* LEFT CONTENT */}
          <div className="service-text">
            <h3 className="service-heading">Intelligent Process Automation</h3>
            <p>
              Leverage AI to automate complex decision-making tasks and streamline
              your business processes.
            </p>

            <div className="service-block">
              <h4>Automation Use Cases</h4>
              <ul>
                <li>Document classification and categorization</li>
                <li>Email and ticket routing</li>
                <li>Content summarization and analysis</li>
                <li>Quality control and validation</li>
                <li>Data extraction and processing</li>
                <li>Customer feedback analysis</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>AI Technologies</h4>
              <ul>
                <li>Machine Learning classification models</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Computer Vision for document processing</li>
                <li>Predictive analytics and decision trees</li>
                <li>Rule-based systems with AI enhancement</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Integration Options</h4>
              <ul>
                <li>Existing workflow systems</li>
                <li>Business process management tools</li>
                <li>ERP and CRM systems</li>
                <li>Document management systems</li>
                <li>Communication platforms</li>
              </ul>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="service-visual">
            <img
              src="https://blog.auditoria.ai/hubfs/HighTech%2011.png#keepProtocol"
              alt="AI automation workflows"
              className="service-image"
            />
          </div>

        </div>
      </Section>

      {/* ================= SERVICE ENQUIRY (TEMPLATE) ================= */}
      <Section
        eyebrow="Service enquiry"
        title="Let’s design something impactful."
        subtitle="Share your requirements and our team will reach out within 24 hours."
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
            <label>Message *</label>
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
                    <div className="split-right card-grid animate-stagger">

            <div className="card glow-card">
              <h3 className="card-title">Connect With Us</h3>
              <p className="card-body">
                Follow us for updates, insights, and announcements.
              </p>

<div className="social-icons">
  <a
    href="https://www.linkedin.com/company/tempesthub/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://x.com/Tempest_hub"
    target="_blank"
    rel="noreferrer"
    aria-label="X (Twitter)"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://www.facebook.comD"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/tempest.hub?igsh=MXd2dDI5ZDZhNDVlZw=="
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
</div>
            </div>

            <div className="card glow-card">
              <h3 className="card-title">Email Us</h3>
              <p className="card-body">
                Reach out directly for partnerships, training, or project discussions.
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

export default AIPoweredAutomation;
