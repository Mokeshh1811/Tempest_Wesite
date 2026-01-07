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

const AIAgentsDevelopment = () => {
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
        body: JSON.stringify({ ...formData, service: 'AI Agents Development' }),
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
      {/* ================= HERO / OVERVIEW ================= */}
      <Section
        eyebrow="AI Agents Development"
        title="Intelligent agents that work alongside your teams."
        subtitle="We design and deploy task-oriented AI agents that automate operations, coordinate workflows, and make real-time decisions."
      >
        <div className="service-layout">

          {/* LEFT */}
          <div className="service-text">
            <h3 className="service-heading">Agent Capabilities</h3>
            <p>
              Our AI agents are built to operate reliably within real production
              environments—integrating tools, data, and workflows to reduce
              manual effort and accelerate outcomes.
            </p>

            <div className="service-block">
              <h4>Agent Types</h4>
              <ul>
                <li>Customer support & ticket triage agents</li>
                <li>System monitoring & alerting agents</li>
                <li>Workflow orchestration agents</li>
                <li>Data analysis & reporting agents</li>
                <li>Collaborative team assistant agents</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Technical Implementation</h4>
              <ul>
                <li>LLMs (GPT, Claude, open-source models)</li>
                <li>Function calling & tool integration</li>
                <li>Memory, context & state management</li>
                <li>Multi-agent coordination patterns</li>
                <li>Real-time reasoning & execution</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Integrations</h4>
              <p>Slack, Microsoft Teams, Discord, internal tools, custom APIs</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2070&q=80"
              alt="AI Agents"
              className="service-image"
            />
          </div>

        </div>
      </Section>

      {/* ================= CONTACT ================= */}
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

export default AIAgentsDevelopment;
