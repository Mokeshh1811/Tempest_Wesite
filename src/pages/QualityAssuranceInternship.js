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

const QualityAssuranceInternship = () => {
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
          service: 'Quality Assurance Internship'
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
      <Section
        eyebrow="Quality Assurance Internship"
        title="Software testing and quality assurance fundamentals."
        subtitle="Learn how to ensure software reliability through structured testing and real-world QA workflows."
      >
        <div className="service-layout">
          <div className="service-text">
            <h3 className="service-heading">
              Internship Program: Quality Assurance
            </h3>

            <p>
              Gain hands-on experience in software testing, quality assurance
              methodologies, and industry-standard QA processes.
            </p>

            <div className="service-block">
              <h4>Skills Covered</h4>
              <ul>
                <li>Manual testing fundamentals</li>
                <li>Test case design & execution</li>
                <li>Bug tracking & reporting</li>
                <li>Functional & regression testing</li>
                <li>Basic automation concepts</li>
              </ul>
            </div>

            <div className="service-block">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>JIRA / Bugzilla</li>
                <li>Selenium basics</li>
                <li>Postman (API testing)</li>
                <li>Test documentation tools</li>
                <li>Agile & SDLC concepts</li>
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

          <div className="service-visual">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2070&q=80"
              alt="Quality assurance internship"
              className="service-image"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Application form"
        title="Apply for Tempest training."
        subtitle="Fill in the details below to apply for upcoming internship batches."
      >
        <div className="split-section">
          <div className="split-left slide-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Institution / College *</label>
                <input type="text" name="organization" value={formData.organization} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Why are you interested in this internship? *</label>
                <textarea rows="4" name="message" value={formData.message} onChange={handleChange} required />
              </div>

              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Apply Now'}
              </PrimaryButton>

              {submitMessage && (
                <p className={`submit-message ${submitMessage.includes('Thank') ? 'success' : 'error'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT INFO (UNCHANGED TEMPLATE) */}
          <div className="split-right card-grid animate-stagger">
            <div className="card glow-card">
              <h3 className="card-title">Connect With Us</h3>
              <p className="card-body">Follow us for updates, insights, and announcements.</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/tempesthub/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                <a href="https://x.com/Tempest_hub" target="_blank" rel="noreferrer"><FaXTwitter /></a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/tempest.hub" target="_blank" rel="noreferrer"><FaInstagram /></a>
              </div>
            </div>

            <div className="card glow-card">
              <h3 className="card-title">Email Us</h3>
              <p className="card-body">Reach out directly for partnerships or training.</p>
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

export default QualityAssuranceInternship;
