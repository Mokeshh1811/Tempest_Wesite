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

const ConsultingMentoring = () => {
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
        body: JSON.stringify({ ...formData, service: 'Consulting & Mentoring' }),
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
        eyebrow="Consulting & Mentoring"
        title="Technology roadmapping, architecture reviews."
        subtitle="On-the-job mentoring for internal teams building their own products or academic initiatives."
      >
        <div className="service-layout">

          {/* LEFT */}
          <div className="service-text">
            <h3 className="service-heading">Consulting Services</h3>
            <p>
              Strategic technology guidance to help your organization make
              informed decisions and achieve long-term success.
            </p>

            <div className="service-block">
              <h4>Technology Strategy</h4>
              <ul>
                <li>Digital transformation roadmaps</li>
                <li>Technology stack evaluation and recommendations</li>
                <li>Architecture design and review</li>
                <li>Scalability and performance optimization</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Team Development</h4>
              <ul>
                <li>Technical leadership mentoring</li>
                <li>Code review and best practices</li>
                <li>Agile development coaching</li>
                <li>Knowledge transfer sessions</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Project Guidance</h4>
              <ul>
                <li>Project planning and estimation</li>
                <li>Risk assessment and mitigation</li>
                <li>Quality assurance processes</li>
                <li>DevOps implementation</li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80"
              alt="Consulting and mentoring"
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
    href="https://www.facebook.com/profile.php?id=61586259132683"
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

export default ConsultingMentoring;
