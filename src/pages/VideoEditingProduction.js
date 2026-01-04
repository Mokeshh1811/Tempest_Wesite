import React, { useState } from 'react';
import Section from '../components/Section';
import PrimaryButton from '../components/PrimaryButton';
import '../components/CardGrid.css';
import '../components/Forms.css';
import './ServicePage.css';

const VideoEditingProduction = () => {
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
          service: 'Video Editing & Production'
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
        eyebrow="Video Editing & Production"
        title="Visual stories that engage, inform, and convert."
        subtitle="High-quality video editing and motion design services crafted for marketing, education, and digital platforms."
      >
        <div className="service-layout">

          {/* LEFT */}
          <div className="service-text">
            <h3 className="service-heading">What We Offer</h3>
            <p>
              We help brands and institutions communicate clearly through
              polished visuals, cinematic edits, and compelling storytelling.
            </p>

            <div className="service-block">
              <h4>Services</h4>
              <ul>
                <li>Professional video editing & color grading</li>
                <li>Motion graphics & animated explainers</li>
                <li>Promotional & brand videos</li>
                <li>Educational & training videos</li>
                <li>Reels, shorts & social media content</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Tools & Workflow</h4>
              <p>
                Adobe Premiere Pro, After Effects, DaVinci Resolve,
                Final Cut Pro, audio mastering & motion pipelines.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2070&q=80"
              alt="Video Editing"
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
                <a href="https://www.linkedin.com/company/tempesthub/" target="_blank" rel="noreferrer">in</a>
                <a href="https://x.com/Tempest_hub" target="_blank" rel="noreferrer">x</a>
                <a href="https://www.facebook.com/profile.php?id=61585734515727" target="_blank" rel="noreferrer">fb</a>
                <a href="https://www.instagram.com/tempest.hub?igsh=MXd2dDI5ZDZhNDVlZw==" target="_blank" rel="noreferrer">ig</a>
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

export default VideoEditingProduction;
