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

const UIUXInternship = () => {
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
          service: 'UI & UX Internship'
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
      {/* ================= INTERNSHIP OVERVIEW ================= */}
      <Section
        eyebrow="UI & UX Internship"
        title="User interface and experience design principles."
        subtitle="Learn design thinking, prototyping, and user-centered design through practical projects."
      >
        <div className="service-layout">

          {/* LEFT CONTENT */}
          <div className="service-text">
            <h3 className="service-heading">
              Internship Program: UI / UX Design
            </h3>

            <p>
              Comprehensive training in user interface and user experience
              design methodologies with real-world product design exposure.
            </p>

            <div className="service-block">
              <h4>Skills Covered</h4>
              <ul>
                <li>User research and analysis</li>
                <li>Wireframing and prototyping</li>
                <li>Visual design principles</li>
                <li>Usability testing</li>
                <li>Design systems and guidelines</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Figma, Adobe XD, Sketch</li>
                <li>Interactive prototyping tools</li>
                <li>User testing platforms</li>
                <li>Design collaboration tools</li>
                <li>Accessibility standards</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Program Details</h4>
              <p>
                <strong>Duration:</strong> 3–6 months <br />
                <strong>Format:</strong> Remote / On-site <br />
                <strong>Eligibility:</strong> Students & Graduates
              </p>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=2070&q=80"
              alt="UI UX design internship"
              className="service-image"
            />
          </div>

        </div>
      </Section>

      {/* ================= APPLICATION FORM ================= */}
      <Section
        eyebrow="Application form"
        title="Apply for Tempest bootcamps."
        subtitle="Fill in the details below to apply for upcoming bootcamp batches."
      >
        <div className="split-section">

          {/* LEFT FORM */}
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
                <label>Institution / College *</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Why are you interested in this internship? *</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Apply Now'}
              </PrimaryButton>

              {submitMessage && (
                <p
                  className={`submit-message ${
                    submitMessage.includes('Thank') ? 'success' : 'error'
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

export default UIUXInternship;
